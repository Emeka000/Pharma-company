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
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { Client, CurrentUser, Public } from '../common/decorators.js';
import { AuthService } from './auth.service.js';
import { DemoSocialSignInDto, MfaSetupDto, MfaVerifyDto, RequestOtpDto, SocialSignInDto, VerifyOtpDto } from './dto.js';
import { MfaService } from './mfa.service.js';
import { SessionsService } from './sessions.service.js';
let AuthController = class AuthController {
    auth;
    mfa;
    constructor(auth, mfa) {
        this.auth = auth;
        this.mfa = mfa;
    }
    request(dto) {
        return this.auth.requestCode(dto.phone, dto.intent);
    }
    verify(dto, client) {
        return this.auth.verifyCode(dto, client);
    }
    social(dto, client) {
        return this.auth.socialSignIn(dto, client);
    }
    demoSocial(dto, client) {
        return this.auth.demoSocialSignIn(dto, client);
    }
    mfaSetup(dto) {
        return this.mfa.setup(dto.mfaToken);
    }
    mfaVerify(dto, client) {
        return this.mfa.verify(dto.mfaToken, dto.code, client);
    }
};
__decorate([
    Post('otp/request'),
    HttpCode(200),
    Throttle({ default: { limit: 30, ttl: 60_000 }, phone: { limit: 3, ttl: 60_000 } }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestOtpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "request", null);
__decorate([
    Post('otp/verify'),
    HttpCode(200),
    Throttle({ default: { limit: 60, ttl: 60_000 }, phone: { limit: 10, ttl: 60_000 } }),
    __param(0, Body()),
    __param(1, Client()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VerifyOtpDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verify", null);
__decorate([
    Post('social'),
    HttpCode(200),
    Throttle({ default: { limit: 30, ttl: 60_000 } }),
    __param(0, Body()),
    __param(1, Client()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SocialSignInDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "social", null);
__decorate([
    Post('social/demo'),
    HttpCode(200),
    Throttle({ default: { limit: 30, ttl: 60_000 } }),
    __param(0, Body()),
    __param(1, Client()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DemoSocialSignInDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "demoSocial", null);
__decorate([
    Post('mfa/setup'),
    HttpCode(200),
    Throttle({ default: { limit: 10, ttl: 60_000 } }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MfaSetupDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "mfaSetup", null);
__decorate([
    Post('mfa/verify'),
    HttpCode(200),
    Throttle({ default: { limit: 20, ttl: 60_000 } }),
    __param(0, Body()),
    __param(1, Client()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MfaVerifyDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "mfaVerify", null);
AuthController = __decorate([
    ApiTags('auth'),
    Public(),
    Controller('auth'),
    __metadata("design:paramtypes", [AuthService,
        MfaService])
], AuthController);
export { AuthController };
let SessionController = class SessionController {
    sessions;
    constructor(sessions) {
        this.sessions = sessions;
    }
    async logout(user) {
        await this.sessions.revoke(user.sessionId, 'signed out');
    }
    async logoutAll(user) {
        return { signedOut: await this.sessions.revokeAll(user.id, 'signed out everywhere') };
    }
};
__decorate([
    Post('logout'),
    HttpCode(204),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "logout", null);
__decorate([
    Post('logout-all'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "logoutAll", null);
SessionController = __decorate([
    ApiTags('auth'),
    ApiBearerAuth(),
    Controller('auth'),
    __metadata("design:paramtypes", [SessionsService])
], SessionController);
export { SessionController };
//# sourceMappingURL=auth.controller.js.map