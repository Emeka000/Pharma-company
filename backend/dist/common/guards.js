var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Role } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { IS_PUBLIC, ROLES } from './decorators.js';
import { parseMfaRoles } from './env.js';
let JwtAuthGuard = class JwtAuthGuard {
    reflector;
    jwt;
    prisma;
    mfaRoles;
    constructor(reflector, jwt, prisma, config) {
        this.reflector = reflector;
        this.jwt = jwt;
        this.prisma = prisma;
        this.mfaRoles = parseMfaRoles(config.get('MFA_REQUIRED_ROLES'));
    }
    async canActivate(ctx) {
        const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC, [ctx.getHandler(), ctx.getClass()]);
        if (isPublic)
            return true;
        const req = ctx.switchToHttp().getRequest();
        const [scheme, token] = req.headers.authorization?.split(' ') ?? [];
        if (scheme !== 'Bearer' || !token)
            throw new UnauthorizedException('Sign in to continue');
        let payload;
        try {
            payload = await this.jwt.verifyAsync(token);
        }
        catch {
            throw new UnauthorizedException('Your session has expired — please sign in again');
        }
        if (typeof payload.sub !== 'string' || !payload.sub || typeof payload.sid !== 'string' || payload.purpose)
            throw new UnauthorizedException('Sign in to continue');
        const session = await this.prisma.session.findUnique({
            where: { id: payload.sid },
            select: { id: true, userId: true, mfa: true, createdAt: true, expiresAt: true, revokedAt: true, user: { select: { id: true, role: true, pharmacyId: true, disabledAt: true } } },
        });
        if (!session || session.userId !== payload.sub || session.revokedAt || session.expiresAt <= new Date()) {
            throw new UnauthorizedException('You’ve been signed out — please sign in again');
        }
        const { user } = session;
        if (user.disabledAt)
            throw new UnauthorizedException('This account has been disabled — contact Pilbridge support');
        if (this.mfaRoles.includes(user.role) && !session.mfa)
            throw new UnauthorizedException('Sign in again and confirm with your authenticator app');
        req.user = { id: user.id, role: user.role, pharmacyId: user.pharmacyId, sessionId: session.id, sessionCreatedAt: session.createdAt, mfa: session.mfa };
        return true;
    }
};
JwtAuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Reflector,
        JwtService,
        PrismaService,
        ConfigService])
], JwtAuthGuard);
export { JwtAuthGuard };
let RolesGuard = class RolesGuard {
    reflector;
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(ctx) {
        const roles = this.reflector.getAllAndOverride(ROLES, [ctx.getHandler(), ctx.getClass()]);
        if (!roles?.length)
            return true;
        const user = ctx.switchToHttp().getRequest().user;
        if (!user || !roles.includes(user.role))
            throw new ForbiddenException('You don’t have access to this');
        const pharmacyRole = user.role === Role.PHARMACIST || user.role === Role.PHARMACY_STAFF;
        if (pharmacyRole && !user.pharmacyId)
            throw new ForbiddenException('Your account isn’t linked to a pharmacy');
        return true;
    }
};
RolesGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Reflector])
], RolesGuard);
export { RolesGuard };
//# sourceMappingURL=guards.js.map