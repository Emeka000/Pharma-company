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
import { Body, Controller, Get, HttpCode, Patch, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser, PharmacyStaff, Roles } from '../common/decorators.js';
import { Role } from '../generated/prisma/client.js';
import { ActivityQueryDto, BankDetailsDto, UpdateSettingsDto } from './dto.js';
import { PortalService } from './portal.service.js';
let PortalController = class PortalController {
    portal;
    constructor(portal) {
        this.portal = portal;
    }
    settings(user) {
        return this.portal.settings(user);
    }
    update(user, dto) {
        return this.portal.updateSettings(user, dto);
    }
    bank(user, dto) {
        return this.portal.setBank(user, dto);
    }
    team(user) {
        return this.portal.team(user);
    }
    activity(user, q) {
        return this.portal.activity(user, q.limit, q.before);
    }
    notifications(user) {
        return this.portal.notifications(user);
    }
    read(user) {
        return this.portal.markNotificationsRead(user);
    }
};
__decorate([
    Get('settings'),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PortalController.prototype, "settings", null);
__decorate([
    Patch('settings'),
    Roles(Role.PHARMACIST),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateSettingsDto]),
    __metadata("design:returntype", void 0)
], PortalController.prototype, "update", null);
__decorate([
    Put('settings/bank'),
    Roles(Role.PHARMACIST),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, BankDetailsDto]),
    __metadata("design:returntype", void 0)
], PortalController.prototype, "bank", null);
__decorate([
    Get('team'),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PortalController.prototype, "team", null);
__decorate([
    Get('activity'),
    __param(0, CurrentUser()),
    __param(1, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ActivityQueryDto]),
    __metadata("design:returntype", void 0)
], PortalController.prototype, "activity", null);
__decorate([
    Get('notifications'),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PortalController.prototype, "notifications", null);
__decorate([
    Post('notifications/read'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PortalController.prototype, "read", null);
PortalController = __decorate([
    ApiTags('pharmacy · portal'),
    ApiBearerAuth(),
    PharmacyStaff(),
    Controller('pharmacy'),
    __metadata("design:paramtypes", [PortalService])
], PortalController);
export { PortalController };
//# sourceMappingURL=portal.controller.js.map