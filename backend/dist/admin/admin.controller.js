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
import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser, Roles } from '../common/decorators.js';
import { Role } from '../generated/prisma/client.js';
import { CourierDispatchService } from '../delivery/courier-dispatch.service.js';
import { DeliveryWatchService } from '../delivery/delivery-watch.service.js';
import { AdminService } from './admin.service.js';
import { CourierDto, CreateRiderDto, PharmacyLocationDto, PharmacyPhoneDto, ProductEligibilityDto, UpdateCourierDto, UpdateRiderDto } from './dto.js';
let AdminController = class AdminController {
    admin;
    watch;
    dispatch;
    constructor(admin, watch, dispatch) {
        this.admin = admin;
        this.watch = watch;
        this.dispatch = dispatch;
    }
    courierApis() {
        return this.dispatch.available();
    }
    setPhone(user, id, dto) {
        return this.admin.setPharmacyPhone(user, id, dto.phone);
    }
    attention() {
        return this.watch.snapshot();
    }
    riders() {
        return this.admin.riders();
    }
    createRider(user, dto) {
        return this.admin.createRider(user, dto);
    }
    updateRider(user, id, dto) {
        return this.admin.updateRider(user, id, dto);
    }
    pharmacies() {
        return this.admin.pharmacies();
    }
    setLocation(user, id, dto) {
        return this.admin.setPharmacyLocation(user, id, dto);
    }
    couriers() {
        return this.admin.couriers();
    }
    createCourier(user, dto) {
        return this.admin.createCourier(user, dto);
    }
    updateCourier(user, id, dto) {
        return this.admin.updateCourier(user, id, dto);
    }
    products() {
        return this.admin.products();
    }
    setDeliveryAllowed(user, id, dto) {
        return this.admin.setDeliveryAllowed(user, id, dto.deliveryAllowed);
    }
};
__decorate([
    Get('couriers/apis'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "courierApis", null);
__decorate([
    Put('pharmacies/:id/phone'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, PharmacyPhoneDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "setPhone", null);
__decorate([
    Get('deliveries/attention'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "attention", null);
__decorate([
    Get('riders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "riders", null);
__decorate([
    Post('riders'),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateRiderDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createRider", null);
__decorate([
    Patch('riders/:id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpdateRiderDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateRider", null);
__decorate([
    Get('pharmacies'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "pharmacies", null);
__decorate([
    Put('pharmacies/:id/location'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, PharmacyLocationDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "setLocation", null);
__decorate([
    Get('couriers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "couriers", null);
__decorate([
    Post('couriers'),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CourierDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createCourier", null);
__decorate([
    Patch('couriers/:id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpdateCourierDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateCourier", null);
__decorate([
    Get('products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "products", null);
__decorate([
    Patch('products/:id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ProductEligibilityDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "setDeliveryAllowed", null);
AdminController = __decorate([
    ApiTags('admin'),
    ApiBearerAuth(),
    Roles(Role.PLATFORM_ADMIN),
    Controller('admin'),
    __metadata("design:paramtypes", [AdminService,
        DeliveryWatchService,
        CourierDispatchService])
], AdminController);
export { AdminController };
//# sourceMappingURL=admin.controller.js.map