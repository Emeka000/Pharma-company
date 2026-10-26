var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DeliveryWatchService_1;
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { appUrl } from '../common/app-url.js';
import { DeliveryStatus, OrderStatus, Role } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { SmsService } from '../sms/sms.service.js';
import { areaByKey } from './areas.js';
import { CourierDispatchService } from './courier-dispatch.service.js';
import { CustomerAlertsService } from './customer-alerts.service.js';
import { arriveBy } from './eta.js';
export const STALE_JOB_MINUTES = 10;
const IN_FLIGHT = [OrderStatus.PREPARING, OrderStatus.READY, OrderStatus.PICKED_UP];
const minutesSince = (d, now) => Math.max(0, Math.round((now.getTime() - d.getTime()) / 60_000));
let DeliveryWatchService = DeliveryWatchService_1 = class DeliveryWatchService {
    prisma;
    sms;
    customers;
    config;
    couriers;
    log = new Logger(DeliveryWatchService_1.name);
    timer;
    constructor(prisma, sms, customers, config, couriers) {
        this.prisma = prisma;
        this.sms = sms;
        this.customers = customers;
        this.config = config;
        this.couriers = couriers;
    }
    onApplicationBootstrap() {
        const every = Number(this.config.get('LATE_CHECK_MS') ?? 60_000);
        if (every > 0) {
            this.timer = setInterval(() => void this.check().catch((e) => this.log.error(`Delivery check failed: ${String(e)}`)), every);
            this.timer.unref();
        }
    }
    onModuleDestroy() {
        clearInterval(this.timer);
    }
    async check(now = new Date()) {
        await this.couriers.sync().catch((e) => this.log.warn(`Courier status sync failed: ${String(e)}`));
        const late = await this.customers.checkLate(now);
        const cutoff = new Date(now.getTime() - STALE_JOB_MINUTES * 60_000);
        const stale = await this.prisma.delivery.findMany({
            where: { status: DeliveryStatus.AWAITING_RIDER, staleAlertAt: null, createdAt: { lte: cutoff } },
            select: { id: true, order: { select: { code: true } } },
            take: 200,
        });
        const unassigned = [];
        for (const d of stale) {
            const claimed = await this.prisma.delivery.updateMany({ where: { id: d.id, staleAlertAt: null }, data: { staleAlertAt: now } });
            if (claimed.count)
                unassigned.push(d.order.code);
        }
        if (late.length || unassigned.length)
            await this.textOps(late, unassigned);
        return { late, unassigned };
    }
    async snapshot(now = new Date()) {
        const [inFlight, open, courierJobs] = await Promise.all([
            this.prisma.order.findMany({
                where: { status: { in: IN_FLIGHT }, paidAt: { not: null }, etaMinutes: { not: null } },
                select: {
                    code: true, status: true, paidAt: true, etaMinutes: true, deliveryArea: true,
                    pharmacy: { select: { name: true, area: true } },
                    deliveries: {
                        orderBy: { createdAt: 'desc' }, take: 1,
                        select: { code: true, status: true, rider: { select: { firstName: true, lastName: true, phone: true, riderProfile: { select: { partner: true } } } } },
                    },
                },
                orderBy: { paidAt: 'asc' },
                take: 500,
            }),
            this.prisma.delivery.findMany({
                where: { status: DeliveryStatus.AWAITING_RIDER },
                select: {
                    code: true, createdAt: true, coldChain: true, bookingError: true,
                    order: { select: { code: true, status: true, deliveryArea: true, pharmacy: { select: { name: true, area: true } }, items: { select: { product: { select: { classification: true } } } } } },
                },
                orderBy: { createdAt: 'asc' },
                take: 300,
            }),
            this.prisma.delivery.findMany({
                where: { provider: 'COURIER', status: { in: [DeliveryStatus.ASSIGNED, DeliveryStatus.PICKED_UP] } },
                select: {
                    code: true, status: true, providerRef: true, feeKobo: true, trackingUrl: true, assignedAt: true, pickedUpAt: true, providerStatus: true, bookingError: true,
                    courier: { select: { name: true, contact: true, api: true } },
                    order: { select: { code: true, status: true, deliveryArea: true, pharmacy: { select: { name: true, area: true } } } },
                },
                orderBy: { assignedAt: 'asc' },
            }),
        ]);
        const late = inFlight.flatMap((o) => {
            const due = arriveBy(o);
            if (!due || due > now)
                return [];
            const d = o.deliveries[0];
            const r = d?.rider;
            return [{
                    order: o.code,
                    status: o.status,
                    dueAt: due,
                    minutesLate: minutesSince(due, now),
                    pharmacy: `${o.pharmacy.name}, ${o.pharmacy.area}`,
                    dropoffArea: areaByKey(o.deliveryArea)?.name ?? null,
                    delivery: d ? { code: d.code, status: d.status } : null,
                    rider: r ? { name: [r.firstName, r.lastName].filter(Boolean).join(' '), phone: r.phone, partner: r.riderProfile?.partner ?? null } : null,
                }];
        });
        const queue = open.map((d) => ({
            order: d.order.code,
            orderStatus: d.order.status,
            delivery: d.code,
            waitingMinutes: minutesSince(d.createdAt, now),
            coldChain: d.coldChain,
            prescription: d.order.items.some((i) => i.product.classification === 'POM'),
            bookingError: d.bookingError,
            pharmacy: `${d.order.pharmacy.name}, ${d.order.pharmacy.area}`,
            dropoffArea: areaByKey(d.order.deliveryArea)?.name ?? null,
        }));
        return {
            late: late.sort((a, b) => b.minutesLate - a.minutesLate),
            unassigned: queue.filter((q) => q.waitingMinutes >= STALE_JOB_MINUTES),
            queue: queue.sort((a, b) => Number(b.orderStatus === 'READY') - Number(a.orderStatus === 'READY') || b.waitingMinutes - a.waitingMinutes),
            courierJobs: courierJobs.map((d) => ({
                delivery: d.code,
                status: d.status,
                order: d.order.code,
                orderStatus: d.order.status,
                courier: d.courier?.name ?? null,
                courierContact: d.courier?.contact ?? null,
                providerRef: d.providerRef,
                feeKobo: d.feeKobo,
                trackingUrl: d.trackingUrl,
                connected: !!d.courier?.api,
                providerStatus: d.providerStatus,
                warning: d.bookingError === 'delivered-without-handover' ? 'Courier reports delivered, but the pharmacy never recorded the handover' : null,
                pharmacy: `${d.order.pharmacy.name}, ${d.order.pharmacy.area}`,
                dropoffArea: areaByKey(d.order.deliveryArea)?.name ?? null,
            })),
        };
    }
    async textOps(late, unassigned) {
        const admins = await this.prisma.user.findMany({ where: { role: Role.PLATFORM_ADMIN, phone: { not: null }, disabledAt: null }, select: { phone: true } });
        if (!admins.length)
            return;
        const list = (codes) => (codes.length > 3 ? `${codes.slice(0, 3).join(', ')} +${codes.length - 3} more` : codes.join(', '));
        const parts = [
            ...(late.length ? [`${late.length} late (${list(late)})`] : []),
            ...(unassigned.length ? [`${unassigned.length} with no rider ${STALE_JOB_MINUTES}+ min (${list(unassigned)})`] : []),
        ];
        const text = `Pilbridge ops: ${parts.join(', ')}. ${appUrl(this.config)}/admin`;
        for (const a of admins) {
            try {
                await this.sms.sendText(a.phone, text);
            }
            catch (e) {
                this.log.warn(`Ops text not sent: ${e instanceof Error ? e.message : String(e)}`);
            }
        }
    }
};
DeliveryWatchService = DeliveryWatchService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        SmsService,
        CustomerAlertsService,
        ConfigService,
        CourierDispatchService])
], DeliveryWatchService);
export { DeliveryWatchService };
//# sourceMappingURL=delivery-watch.service.js.map