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
import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser, PharmacyStaff, Roles } from '../common/decorators.js';
import { Role } from '../generated/prisma/client.js';
import { CreateTransferDto, ReceiveTransferDto, TransferReasonDto } from './dto.js';
import { TransfersService } from './transfers.service.js';
let TransfersController = class TransfersController {
    transfers;
    constructor(transfers) {
        this.transfers = transfers;
    }
    list(user) {
        return this.transfers.list(user);
    }
    create(user, dto) {
        return this.transfers.create(user, dto);
    }
    publish(user, code) {
        return this.transfers.publish(user, code);
    }
    accept(user, code) {
        return this.transfers.accept(user, code);
    }
    decline(user, code, dto) {
        return this.transfers.decline(user, code, dto.reason);
    }
    dispatch(user, code) {
        return this.transfers.dispatch(user, code);
    }
    receive(user, code, dto) {
        return this.transfers.receive(user, code, dto);
    }
    cancel(user, code, dto) {
        return this.transfers.cancel(user, code, dto.reason);
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransfersController.prototype, "list", null);
__decorate([
    Post(),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateTransferDto]),
    __metadata("design:returntype", void 0)
], TransfersController.prototype, "create", null);
__decorate([
    Post(':code/publish'),
    HttpCode(200),
    Roles(Role.PHARMACIST),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TransfersController.prototype, "publish", null);
__decorate([
    Post(':code/accept'),
    HttpCode(200),
    Roles(Role.PHARMACIST),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TransfersController.prototype, "accept", null);
__decorate([
    Post(':code/decline'),
    HttpCode(200),
    Roles(Role.PHARMACIST),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, TransferReasonDto]),
    __metadata("design:returntype", void 0)
], TransfersController.prototype, "decline", null);
__decorate([
    Post(':code/dispatch'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TransfersController.prototype, "dispatch", null);
__decorate([
    Post(':code/receive'),
    HttpCode(200),
    Roles(Role.PHARMACIST),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReceiveTransferDto]),
    __metadata("design:returntype", void 0)
], TransfersController.prototype, "receive", null);
__decorate([
    Post(':code/cancel'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, TransferReasonDto]),
    __metadata("design:returntype", void 0)
], TransfersController.prototype, "cancel", null);
TransfersController = __decorate([
    ApiTags('pharmacy · transfers'),
    ApiBearerAuth(),
    PharmacyStaff(),
    Controller('pharmacy/transfers'),
    __metadata("design:paramtypes", [TransfersService])
], TransfersController);
export { TransfersController };
let AdminTransfersController = class AdminTransfersController {
    transfers;
    constructor(transfers) {
        this.transfers = transfers;
    }
    all() {
        return this.transfers.all();
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminTransfersController.prototype, "all", null);
AdminTransfersController = __decorate([
    ApiTags('admin · transfers'),
    ApiBearerAuth(),
    Roles(Role.PLATFORM_ADMIN),
    Controller('admin/transfers'),
    __metadata("design:paramtypes", [TransfersService])
], AdminTransfersController);
export { AdminTransfersController };
//# sourceMappingURL=transfers.controller.js.map