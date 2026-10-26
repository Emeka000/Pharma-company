var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { AuthService } from '../auth/auth.service.js';
import { MfaService } from '../auth/mfa.service.js';
import { SessionsService } from '../auth/sessions.service.js';
import { AddPhoneDto } from '../auth/dto.js';
import { isUniqueViolation } from '../common/codes.js';
import { Client, CurrentUser } from '../common/decorators.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { UpdateProfileDto } from './dto.js';
import { profileOf } from './profile.js';
let UsersController = class UsersController {
    prisma;
    auth;
    sessions;
    mfa;
    constructor(prisma, auth, sessions, mfa) {
        this.prisma = prisma;
        this.auth = auth;
        this.sessions = sessions;
        this.mfa = mfa;
    }
    async me(user) {
        return profileOf(await this.prisma.user.findUniqueOrThrow({ where: { id: user.id }, include: { pharmacy: true, socialIdentities: true } }));
    }
    async update(user, dto) {
        const { consentAt } = await this.prisma.user.findUniqueOrThrow({ where: { id: user.id }, select: { consentAt: true } });
        try {
            const updated = await this.prisma.user.update({
                where: { id: user.id },
                data: { firstName: dto.firstName.trim(), lastName: dto.lastName.trim(), email: dto.email?.toLowerCase(), consentAt: consentAt ?? new Date() },
                include: { pharmacy: true, socialIdentities: true },
            });
            return profileOf(updated);
        }
        catch (e) {
            if (isUniqueViolation(e))
                throw new ConflictException('That email is already linked to another account');
            throw e;
        }
    }
    addPhone(user, dto, client) {
        return this.auth.addPhone(user, dto, client);
    }
    sessionsList(user) {
        return this.sessions.list(user.id, user.sessionId);
    }
    async endSession(user, id) {
        const mine = await this.prisma.session.findFirst({ where: { id, userId: user.id }, select: { id: true } });
        if (!mine)
            throw new NotFoundException('Session not found');
        await this.sessions.revoke(id, 'signed out from another device');
        return this.sessions.list(user.id, user.sessionId);
    }
    async recoveryCodes(user) {
        if (!user.mfa)
            throw new NotFoundException('Your account doesn’t use an authenticator app');
        return { recoveryCodes: await this.mfa.newRecoveryCodes(user.id) };
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "me", null);
__decorate([
    Patch(),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateProfileDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    Post('phone'),
    HttpCode(200),
    Throttle({ default: { limit: 60, ttl: 60_000 }, phone: { limit: 10, ttl: 60_000 } }),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __param(2, Client()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AddPhoneDto, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addPhone", null);
__decorate([
    Get('sessions'),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "sessionsList", null);
__decorate([
    Delete('sessions/:id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "endSession", null);
__decorate([
    Post('mfa/recovery-codes'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "recoveryCodes", null);
UsersController = __decorate([
    ApiTags('me'),
    ApiBearerAuth(),
    Controller('me'),
    __metadata("design:paramtypes", [PrismaService,
        AuthService,
        SessionsService,
        MfaService])
], UsersController);
export { UsersController };
//# sourceMappingURL=users.controller.js.map