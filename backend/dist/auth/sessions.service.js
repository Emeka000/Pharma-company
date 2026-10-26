var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { parseDuration, SHORT_SESSION_ROLES } from '../common/env.js';
import { PrismaService } from '../prisma/prisma.service.js';
let SessionsService = class SessionsService {
    prisma;
    jwt;
    config;
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    ttlSeconds(role) {
        return SHORT_SESSION_ROLES.includes(role)
            ? (parseDuration(this.config.get('STAFF_SESSION_TTL')) ?? 12 * 3600)
            : (parseDuration(this.config.get('JWT_TTL')) ?? 7 * 86_400);
    }
    async create(user, opts) {
        const ttl = this.ttlSeconds(user.role);
        const expiresAt = new Date(Date.now() + ttl * 1000);
        const s = await this.prisma.session.create({
            data: { userId: user.id, mfa: opts.mfa, expiresAt, ip: opts.client?.ip?.slice(0, 64) ?? null, userAgent: opts.client?.userAgent ?? null },
        });
        const accessToken = await this.jwt.signAsync({ sub: user.id, sid: s.id }, { expiresIn: ttl });
        return { accessToken, sessionId: s.id, expiresAt };
    }
    async revoke(sessionId, reason) {
        await this.prisma.session.updateMany({ where: { id: sessionId, revokedAt: null }, data: { revokedAt: new Date(), revokedReason: reason } });
    }
    async revokeAll(userId, reason, keep) {
        const r = await this.prisma.session.updateMany({
            where: { userId, revokedAt: null, ...(keep ? { id: { not: keep } } : {}) },
            data: { revokedAt: new Date(), revokedReason: reason },
        });
        return r.count;
    }
    async list(userId, current) {
        const rows = await this.prisma.session.findMany({
            where: { userId, revokedAt: null, expiresAt: { gt: new Date() } },
            select: { id: true, createdAt: true, expiresAt: true, userAgent: true, ip: true, mfa: true },
            orderBy: { createdAt: 'desc' },
            take: 50,
        });
        return rows.map((r) => ({ ...r, current: r.id === current }));
    }
};
SessionsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService,
        ConfigService])
], SessionsService);
export { SessionsService };
//# sourceMappingURL=sessions.service.js.map