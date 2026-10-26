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
import { Body, Controller, Delete, Get, HttpCode, Param, ParseEnumPipe, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { CurrentUser, Public, Roles } from '../common/decorators.js';
import { ApplicationStatus, Role } from '../generated/prisma/client.js';
import { AddStaffDto, CreatePharmacyDto, PartnerApplicationDto, ReviewApplicationDto, SuspendPharmacyDto, UpdatePharmacyDto, VerifyBankDto, VerifyPharmacyDto } from './dto.js';
import { OnboardingService } from './onboarding.service.js';
let AdminOnboardingController = class AdminOnboardingController {
    onboarding;
    constructor(onboarding) {
        this.onboarding = onboarding;
    }
    create(user, dto) {
        return this.onboarding.createPharmacy(user, dto);
    }
    get(id) {
        return this.onboarding.pharmacy(id);
    }
    update(user, id, dto) {
        return this.onboarding.updatePharmacy(user, id, dto);
    }
    verify(user, id, dto) {
        return this.onboarding.verifyPharmacy(user, id, dto.note.trim());
    }
    suspend(user, id, dto) {
        return this.onboarding.suspendPharmacy(user, id, dto.reason);
    }
    verifyBank(user, id, dto) {
        return this.onboarding.verifyBank(user, id, dto.note.trim());
    }
    staff(id) {
        return this.onboarding.staff(id);
    }
    addStaff(user, id, dto) {
        return this.onboarding.addStaff(user, id, dto);
    }
    removeStaff(user, id, userId) {
        return this.onboarding.removeStaff(user, id, userId);
    }
    applications(status) {
        return this.onboarding.applications(status);
    }
    review(user, id, dto) {
        return this.onboarding.reviewApplication(user, id, dto);
    }
};
__decorate([
    Post('pharmacies'),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreatePharmacyDto]),
    __metadata("design:returntype", void 0)
], AdminOnboardingController.prototype, "create", null);
__decorate([
    Get('pharmacies/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminOnboardingController.prototype, "get", null);
__decorate([
    Patch('pharmacies/:id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpdatePharmacyDto]),
    __metadata("design:returntype", void 0)
], AdminOnboardingController.prototype, "update", null);
__decorate([
    Post('pharmacies/:id/verify'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, VerifyPharmacyDto]),
    __metadata("design:returntype", void 0)
], AdminOnboardingController.prototype, "verify", null);
__decorate([
    Post('pharmacies/:id/suspend'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, SuspendPharmacyDto]),
    __metadata("design:returntype", void 0)
], AdminOnboardingController.prototype, "suspend", null);
__decorate([
    Post('pharmacies/:id/bank/verify'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, VerifyBankDto]),
    __metadata("design:returntype", void 0)
], AdminOnboardingController.prototype, "verifyBank", null);
__decorate([
    Get('pharmacies/:id/staff'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminOnboardingController.prototype, "staff", null);
__decorate([
    Post('pharmacies/:id/staff'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, AddStaffDto]),
    __metadata("design:returntype", void 0)
], AdminOnboardingController.prototype, "addStaff", null);
__decorate([
    Delete('pharmacies/:id/staff/:userId'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], AdminOnboardingController.prototype, "removeStaff", null);
__decorate([
    Get('applications'),
    ApiQuery({ name: 'status', enum: ApplicationStatus, required: false }),
    __param(0, Query('status', new ParseEnumPipe(ApplicationStatus, { optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminOnboardingController.prototype, "applications", null);
__decorate([
    Post('applications/:id/review'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReviewApplicationDto]),
    __metadata("design:returntype", void 0)
], AdminOnboardingController.prototype, "review", null);
AdminOnboardingController = __decorate([
    ApiTags('admin · onboarding'),
    ApiBearerAuth(),
    Roles(Role.PLATFORM_ADMIN),
    Controller('admin'),
    __metadata("design:paramtypes", [OnboardingService])
], AdminOnboardingController);
export { AdminOnboardingController };
let PartnersController = class PartnersController {
    onboarding;
    constructor(onboarding) {
        this.onboarding = onboarding;
    }
    apply(dto) {
        return this.onboarding.apply(dto);
    }
};
__decorate([
    Post('applications'),
    Throttle({ default: { limit: 5, ttl: 60_000 }, phone: { limit: 3, ttl: 60_000 } }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PartnerApplicationDto]),
    __metadata("design:returntype", void 0)
], PartnersController.prototype, "apply", null);
PartnersController = __decorate([
    ApiTags('partners'),
    Public(),
    Controller('partners'),
    __metadata("design:paramtypes", [OnboardingService])
], PartnersController);
export { PartnersController };
//# sourceMappingURL=onboarding.controller.js.map