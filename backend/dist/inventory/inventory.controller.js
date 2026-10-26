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
import { CurrentUser, PharmacyStaff, Roles } from '../common/decorators.js';
import { BatchStatus, Role } from '../generated/prisma/client.js';
import { AdjustBatchDto, QuarantineDto, ReceiveBatchDto, ReleaseDto } from './dto.js';
import { InventoryService } from './inventory.service.js';
let InventoryController = class InventoryController {
    inventory;
    constructor(inventory) {
        this.inventory = inventory;
    }
    list(user, status) {
        return this.inventory.list(user, status);
    }
    receive(user, dto) {
        return this.inventory.receive(user, dto);
    }
    adjust(user, id, dto) {
        return this.inventory.adjust(user, id, dto);
    }
    quarantine(user, id, dto) {
        return this.inventory.quarantine(user, id, dto.reason);
    }
    release(user, id, dto) {
        return this.inventory.release(user, id, dto);
    }
};
__decorate([
    Get(),
    ApiQuery({ name: 'status', enum: BatchStatus, required: false }),
    __param(0, CurrentUser()),
    __param(1, Query('status', new ParseEnumPipe(BatchStatus, { optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "list", null);
__decorate([
    Post('batches'),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ReceiveBatchDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "receive", null);
__decorate([
    Post('batches/:id/adjust'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, AdjustBatchDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "adjust", null);
__decorate([
    Post('batches/:id/quarantine'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, QuarantineDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "quarantine", null);
__decorate([
    Post('batches/:id/release'),
    HttpCode(200),
    Roles(Role.PHARMACIST),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReleaseDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "release", null);
InventoryController = __decorate([
    ApiTags('pharmacy · inventory'),
    ApiBearerAuth(),
    PharmacyStaff(),
    Controller('pharmacy/inventory'),
    __metadata("design:paramtypes", [InventoryService])
], InventoryController);
export { InventoryController };
//# sourceMappingURL=inventory.controller.js.map