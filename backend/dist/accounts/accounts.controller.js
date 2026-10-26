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
import { Body, Controller, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser, Roles } from '../common/decorators.js';
import { Role } from '../generated/prisma/client.js';
import { AccountsService } from './accounts.service.js';
import { ChangePhoneDto, FindUsersDto, ReasonDto } from './dto.js';
let AccountsController = class AccountsController {
    accounts;
    constructor(accounts) {
        this.accounts = accounts;
    }
    find(dto) {
        return this.accounts.find(dto);
    }
    disable(user, id, dto) {
        return this.accounts.disable(user, id, dto.reason);
    }
    enable(user, id) {
        return this.accounts.enable(user, id);
    }
    signOut(user, id, dto) {
        return this.accounts.signOutEverywhere(user, id, dto.reason);
    }
    resetMfa(user, id, dto) {
        return this.accounts.resetMfa(user, id, dto.reason);
    }
    changePhone(user, id, dto) {
        return this.accounts.changePhone(user, id, dto.phone, dto.reason);
    }
};
__decorate([
    Get(),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FindUsersDto]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "find", null);
__decorate([
    Post(':id/disable'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReasonDto]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "disable", null);
__decorate([
    Post(':id/enable'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "enable", null);
__decorate([
    Post(':id/sessions/revoke'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReasonDto]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "signOut", null);
__decorate([
    Post(':id/mfa/reset'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReasonDto]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "resetMfa", null);
__decorate([
    Put(':id/phone'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ChangePhoneDto]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "changePhone", null);
AccountsController = __decorate([
    ApiTags('admin · accounts'),
    ApiBearerAuth(),
    Roles(Role.PLATFORM_ADMIN),
    Controller('admin/users'),
    __metadata("design:paramtypes", [AccountsService])
], AccountsController);
export { AccountsController };
//# sourceMappingURL=accounts.controller.js.map