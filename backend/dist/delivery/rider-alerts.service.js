var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RiderAlertsService_1;
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { appUrl } from '../common/app-url.js';
import { DeliveryStatus } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { SmsService } from '../sms/sms.service.js';
import { areaByKey } from './areas.js';
import { distanceKm, MAX_ACTIVE_JOBS, RIDER_RADIUS_KM } from './eta.js';
export const MAX_ALERTED_RIDERS = 10;
export const NEW_JOB_COOLDOWN_MS = 3 * 60_000;
const ONLINE_FRESH_MS = 12 * 60 * 60_000;
let RiderAlertsService = RiderAlertsService_1 = class RiderAlertsService {
    prisma;
    sms;
    config;
    log = new Logger(RiderAlertsService_1.name);
    lastNewJobText = new Map();
    constructor(prisma, sms, config) {
        this.prisma = prisma;
        this.sms = sms;
        this.config = config;
    }
    get riderAppUrl() {
        return `${appUrl(this.config)}/rider`;
    }
    newJob(deliveryId, exceptRiderId) {
        this.background('new-job', () => this.sendNewJob(deliveryId, exceptRiderId));
    }
    ready(orderId) {
        this.background('ready', async () => {
            const job = await this.prisma.delivery.findFirst({
                where: { orderId, status: DeliveryStatus.ASSIGNED, riderId: { not: null } },
                include: { rider: { select: { phone: true } }, order: { select: { pharmacy: { select: { name: true, area: true } } } } },
            });
            if (!job?.rider?.phone)
                return;
            const ph = job.order.pharmacy;
            await this.text(job.rider.phone, `Pilbridge: parcel ${job.code} is ready for collection at ${ph.name}, ${ph.area}. Show the seal number at the counter.`);
        });
    }
    cancelled(jobs) {
        const withRider = jobs.filter((j) => j.riderId);
        if (!withRider.length)
            return;
        this.background('cancelled', async () => {
            const riders = await this.prisma.user.findMany({ where: { id: { in: withRider.map((j) => j.riderId) } }, select: { id: true, phone: true } });
            for (const j of withRider) {
                const phone = riders.find((r) => r.id === j.riderId)?.phone;
                if (phone)
                    await this.text(phone, `Pilbridge: job ${j.code} has been cancelled. Do not collect it. Check the app for other jobs: ${this.riderAppUrl}`);
            }
        });
    }
    async sendNewJob(deliveryId, exceptRiderId) {
        const job = await this.prisma.delivery.findUnique({
            where: { id: deliveryId },
            include: { order: { select: { deliveryArea: true, pharmacy: { select: { name: true, area: true, lat: true, lng: true } } } } },
        });
        if (!job || job.status !== DeliveryStatus.AWAITING_RIDER)
            return;
        const ph = job.order.pharmacy;
        if (ph.lat == null || ph.lng == null)
            return;
        const pickup = { lat: ph.lat, lng: ph.lng };
        const riders = await this.prisma.riderProfile.findMany({
            where: {
                active: true,
                onlineSince: { gte: new Date(Date.now() - ONLINE_FRESH_MS) },
                area: { not: null },
                ...(job.coldChain ? { coldChain: true } : {}),
                ...(exceptRiderId ? { userId: { not: exceptRiderId } } : {}),
                user: { phone: { not: null }, disabledAt: null },
            },
            include: { user: { select: { phone: true, _count: { select: { riderDeliveries: { where: { status: { in: [DeliveryStatus.ASSIGNED, DeliveryStatus.PICKED_UP] } } } } } } } },
        });
        const now = Date.now();
        const nearby = riders
            .flatMap((r) => {
            const here = areaByKey(r.area);
            if (!here || r.user._count.riderDeliveries >= MAX_ACTIVE_JOBS)
                return [];
            const km = distanceKm(here, pickup);
            return km <= RIDER_RADIUS_KM ? [{ id: r.userId, phone: r.user.phone, km }] : [];
        })
            .sort((a, b) => a.km - b.km)
            .filter((r) => now - (this.lastNewJobText.get(r.id) ?? 0) >= NEW_JOB_COOLDOWN_MS)
            .slice(0, MAX_ALERTED_RIDERS);
        const to = areaByKey(job.order.deliveryArea)?.name.split(' (')[0];
        for (const r of nearby) {
            this.lastNewJobText.set(r.id, now);
            const km = r.km < 1 ? 'under 1 km' : `${r.km.toFixed(1)} km`;
            await this.text(r.phone, `Pilbridge: new delivery job ${km} from you. Pickup ${ph.name}, ${ph.area}${to ? ` to ${to}` : ''}.${job.coldChain ? ' Cold box needed.' : ''} Accept: ${this.riderAppUrl}`);
        }
    }
    async text(phone, message) {
        try {
            await this.sms.sendText(phone, message);
        }
        catch (e) {
            this.log.warn(`Rider alert to ${phone.slice(0, 7)}•••${phone.slice(-2)} not sent: ${e instanceof Error ? e.message : String(e)}`);
        }
    }
    background(kind, fn) {
        void fn().catch((e) => this.log.error(`Rider ${kind} alert failed: ${e instanceof Error ? e.message : String(e)}`));
    }
};
RiderAlertsService = RiderAlertsService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        SmsService,
        ConfigService])
], RiderAlertsService);
export { RiderAlertsService };
//# sourceMappingURL=rider-alerts.service.js.map