var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var StaffTextsService_1;
import { Injectable, Logger } from '@nestjs/common';
import { Role } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { SmsService } from './sms.service.js';
let StaffTextsService = StaffTextsService_1 = class StaffTextsService {
    prisma;
    sms;
    log = new Logger(StaffTextsService_1.name);
    constructor(prisma, sms) {
        this.prisma = prisma;
        this.sms = sms;
    }
    async pharmacists(pharmacyId, text) {
        const users = await this.prisma.user.findMany({ where: { pharmacyId, role: Role.PHARMACIST, phone: { not: null }, disabledAt: null }, select: { phone: true } });
        await this.send(users, text);
    }
    async admins(text) {
        const users = await this.prisma.user.findMany({ where: { role: Role.PLATFORM_ADMIN, phone: { not: null }, disabledAt: null }, select: { phone: true } });
        await this.send(users, text);
    }
    background(fn) {
        void fn().catch((e) => this.log.error(`Staff text failed: ${e instanceof Error ? e.message : String(e)}`));
    }
    async send(users, text) {
        for (const { phone } of users) {
            if (!phone)
                continue;
            try {
                await this.sms.sendText(phone, text);
            }
            catch (e) {
                this.log.warn(`Staff text to ${phone.slice(0, 7)}•••${phone.slice(-2)} not sent: ${e instanceof Error ? e.message : String(e)}`);
            }
        }
    }
};
StaffTextsService = StaffTextsService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        SmsService])
], StaffTextsService);
export { StaffTextsService };
//# sourceMappingURL=staff-texts.service.js.map