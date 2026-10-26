var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac, randomInt, timingSafeEqual } from 'node:crypto';
import { PrismaService } from '../prisma/prisma.service.js';
export const OTP_TTL_SECONDS = 300;
export const OTP_MAX_ATTEMPTS = 5;
export const OTP_MAX_PER_HOUR = 5;
let OtpService = class OtpService {
    prisma;
    key;
    constructor(prisma, config) {
        this.prisma = prisma;
        this.key = createHmac('sha256', config.getOrThrow('JWT_SECRET')).update('otp-v1').digest();
    }
    hash(phone, code) {
        return createHmac('sha256', this.key).update(`${phone}:${code}`).digest('hex');
    }
    async issue(phone) {
        const since = new Date(Date.now() - 60 * 60 * 1000);
        const recent = await this.prisma.otpChallenge.count({ where: { phone, createdAt: { gte: since } } });
        if (recent >= OTP_MAX_PER_HOUR) {
            throw new HttpException('Too many codes requested — try again in an hour', HttpStatus.TOO_MANY_REQUESTS);
        }
        const code = String(randomInt(0, 1_000_000)).padStart(6, '0');
        await this.prisma.$transaction([
            this.prisma.otpChallenge.updateMany({ where: { phone, consumedAt: null }, data: { consumedAt: new Date() } }),
            this.prisma.otpChallenge.create({
                data: { phone, codeHash: this.hash(phone, code), expiresAt: new Date(Date.now() + OTP_TTL_SECONDS * 1000) },
            }),
        ]);
        return code;
    }
    async check(phone, code) {
        const challenge = await this.prisma.otpChallenge.findFirst({
            where: { phone, consumedAt: null, expiresAt: { gt: new Date() } },
            orderBy: { createdAt: 'desc' },
        });
        if (!challenge)
            throw new HttpException('That code has expired — request a new one', HttpStatus.BAD_REQUEST);
        if (challenge.attempts >= OTP_MAX_ATTEMPTS) {
            throw new HttpException('Too many incorrect attempts — request a new code', HttpStatus.TOO_MANY_REQUESTS);
        }
        const expected = Buffer.from(challenge.codeHash, 'hex');
        const actual = Buffer.from(this.hash(phone, code), 'hex');
        const ok = expected.length === actual.length && timingSafeEqual(expected, actual);
        const updated = await this.prisma.otpChallenge.updateMany({
            where: { id: challenge.id, consumedAt: null },
            data: ok ? { consumedAt: new Date() } : { attempts: { increment: 1 } },
        });
        return ok && updated.count === 1;
    }
};
OtpService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        ConfigService])
], OtpService);
export { OtpService };
//# sourceMappingURL=otp.service.js.map