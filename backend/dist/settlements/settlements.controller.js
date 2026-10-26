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
import { Body, Controller, Get, HttpCode, Param, ParseEnumPipe, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CurrentUser, Roles } from '../common/decorators.js';
import { PayoutStatus, Role } from '../generated/prisma/client.js';
import { CreatePayoutsDto, MarkPaidDto, VoidPayoutDto } from './dto.js';
import { SettlementsService } from './settlements.service.js';
let PharmacySettlementsController = class PharmacySettlementsController {
    settlements;
    constructor(settlements) {
        this.settlements = settlements;
    }
    overview(user) {
        return this.settlements.overview(user);
    }
    payout(user, code) {
        return this.settlements.payoutForPharmacy(user, code);
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PharmacySettlementsController.prototype, "overview", null);
__decorate([
    Get(':code'),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PharmacySettlementsController.prototype, "payout", null);
PharmacySettlementsController = __decorate([
    ApiTags('pharmacy · settlements'),
    ApiBearerAuth(),
    Roles(Role.PHARMACIST),
    Controller('pharmacy/settlements'),
    __metadata("design:paramtypes", [SettlementsService])
], PharmacySettlementsController);
export { PharmacySettlementsController };
let AdminPayoutsController = class AdminPayoutsController {
    settlements;
    constructor(settlements) {
        this.settlements = settlements;
    }
    list(status) {
        return this.settlements.list(status);
    }
    preview(dto) {
        return this.settlements.preview(dto.before);
    }
    create(user, dto) {
        return this.settlements.create(user, dto.before);
    }
    get(id) {
        return this.settlements.payout(id);
    }
    paid(user, id, dto) {
        return this.settlements.markPaid(user, id, dto.reference);
    }
    void(user, id, dto) {
        return this.settlements.void(user, id, dto.reason);
    }
};
__decorate([
    Get(),
    ApiQuery({ name: 'status', enum: PayoutStatus, required: false }),
    __param(0, Query('status', new ParseEnumPipe(PayoutStatus, { optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminPayoutsController.prototype, "list", null);
__decorate([
    Get('preview'),
    ApiQuery({ name: 'before', required: false, example: '2026-10-19' }),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePayoutsDto]),
    __metadata("design:returntype", void 0)
], AdminPayoutsController.prototype, "preview", null);
__decorate([
    Post(),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreatePayoutsDto]),
    __metadata("design:returntype", void 0)
], AdminPayoutsController.prototype, "create", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminPayoutsController.prototype, "get", null);
__decorate([
    Post(':id/paid'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, MarkPaidDto]),
    __metadata("design:returntype", void 0)
], AdminPayoutsController.prototype, "paid", null);
__decorate([
    Post(':id/void'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, VoidPayoutDto]),
    __metadata("design:returntype", void 0)
], AdminPayoutsController.prototype, "void", null);
AdminPayoutsController = __decorate([
    ApiTags('admin · settlements'),
    ApiBearerAuth(),
    Roles(Role.PLATFORM_ADMIN),
    Controller('admin/payouts'),
    __metadata("design:paramtypes", [SettlementsService])
], AdminPayoutsController);
export { AdminPayoutsController };
//# sourceMappingURL=settlements.controller.js.map