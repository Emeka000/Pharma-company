var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CustomerAlertsService_1;
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { appUrl } from '../common/app-url.js';
import { OrderStatus } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { SmsService } from '../sms/sms.service.js';
import { arriveBy } from './eta.js';
const lagosTime = (d) => d.toLocaleTimeString('en-NG', { timeZone: 'Africa/Lagos', hour: 'numeric', minute: '2-digit' }).replace(/\s/g, ' ');
const IN_FLIGHT = [OrderStatus.PREPARING, OrderStatus.READY, OrderStatus.PICKED_UP];
let CustomerAlertsService = CustomerAlertsService_1 = class CustomerAlertsService {
    prisma;
    sms;
    config;
    log = new Logger(CustomerAlertsService_1.name);
    constructor(prisma, sms, config) {
        this.prisma = prisma;
        this.sms = sms;
        this.config = config;
    }
    track(code) {
        return `${appUrl(this.config)}/track?code=${code}`;
    }
    onTheWay(orderId) {
        this.background('on-the-way', async () => {
            const o = await this.prisma.order.findUnique({
                where: { id: orderId },
                select: {
                    code: true, paidAt: true, etaMinutes: true, patient: { select: { phone: true } },
                    deliveries: { orderBy: { createdAt: 'desc' }, take: 1, select: { dropoffCode: true, rider: { select: { firstName: true } } } },
                },
            });
            const d = o?.deliveries[0];
            if (!o?.patient.phone || !d)
                return;
            const due = arriveBy(o);
            const rider = d.rider?.firstName && d.rider.firstName.length <= 14 ? d.rider.firstName : 'Your rider';
            await this.text(o.patient.phone, `${rider} is bringing your order ${o.code}${due ? `, due ${lagosTime(due)}` : ''}. Code ${d.dropoffCode}: give it only once you have the parcel. ${this.track(o.code)}`);
        });
    }
    failed(orderId, reason) {
        this.background('failed', async () => {
            const o = await this.prisma.order.findUnique({ where: { id: orderId }, select: { code: true, patient: { select: { phone: true } } } });
            if (!o?.patient.phone)
                return;
            await this.text(o.patient.phone, `Order ${o.code} wasn't delivered (${reason.slice(0, 24)}). It's back at the pharmacy, sealed, and will be resent. ${this.track(o.code)}`);
        });
    }
    async checkLate(now = new Date()) {
        const candidates = await this.prisma.order.findMany({
            where: { status: { in: IN_FLIGHT }, lateTextAt: null, paidAt: { not: null }, etaMinutes: { not: null } },
            select: { id: true, code: true, paidAt: true, etaMinutes: true, patient: { select: { phone: true } } },
            orderBy: { paidAt: 'asc' },
            take: 200,
        });
        const late = [];
        for (const o of candidates) {
            const due = arriveBy(o);
            if (!due || due > now)
                continue;
            const claimed = await this.prisma.order.updateMany({ where: { id: o.id, lateTextAt: null }, data: { lateTextAt: now } });
            if (claimed.count === 0)
                continue;
            late.push(o.code);
            if (o.patient.phone) {
                await this.text(o.patient.phone, `Sorry, Pilbridge order ${o.code} is running late. It was due by ${lagosTime(due)} and is still on its way. Follow it: ${this.track(o.code)}`);
            }
        }
        return late;
    }
    async text(phone, message) {
        try {
            await this.sms.sendText(phone, message);
        }
        catch (e) {
            this.log.warn(`Customer text to ${phone.slice(0, 7)}•••${phone.slice(-2)} not sent: ${e instanceof Error ? e.message : String(e)}`);
        }
    }
    background(kind, fn) {
        void fn().catch((e) => this.log.error(`Customer ${kind} text failed: ${e instanceof Error ? e.message : String(e)}`));
    }
};
CustomerAlertsService = CustomerAlertsService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        SmsService,
        ConfigService])
], CustomerAlertsService);
export { CustomerAlertsService };
//# sourceMappingURL=customer-alerts.service.js.map