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
import { OrderStatus, Role } from '../generated/prisma/client.js';
import { CreateOrderDto, UpdateOrderStatusDto } from './dto.js';
import { OrdersService } from './orders.service.js';
let OrdersController = class OrdersController {
    orders;
    constructor(orders) {
        this.orders = orders;
    }
    create(user, dto) {
        return this.orders.create(user, dto);
    }
    list(user) {
        return this.orders.listMine(user);
    }
    get(user, code) {
        return this.orders.getMine(user, code);
    }
    cancel(user, code) {
        return this.orders.cancelMine(user, code);
    }
};
__decorate([
    Post(),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateOrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "create", null);
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "list", null);
__decorate([
    Get(':code'),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "get", null);
__decorate([
    Post(':code/cancel'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "cancel", null);
OrdersController = __decorate([
    ApiTags('orders'),
    ApiBearerAuth(),
    Roles(Role.PATIENT),
    Controller('orders'),
    __metadata("design:paramtypes", [OrdersService])
], OrdersController);
export { OrdersController };
let PharmacyOrdersController = class PharmacyOrdersController {
    orders;
    constructor(orders) {
        this.orders = orders;
    }
    list(user, status) {
        return this.orders.listForPharmacy(user, status);
    }
    move(user, code, dto) {
        return this.orders.move(user, code, dto.status, dto.note);
    }
};
__decorate([
    Get(),
    ApiQuery({ name: 'status', enum: OrderStatus, required: false }),
    __param(0, CurrentUser()),
    __param(1, Query('status', new ParseEnumPipe(OrderStatus, { optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PharmacyOrdersController.prototype, "list", null);
__decorate([
    Post(':code/status'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpdateOrderStatusDto]),
    __metadata("design:returntype", void 0)
], PharmacyOrdersController.prototype, "move", null);
PharmacyOrdersController = __decorate([
    ApiTags('pharmacy · orders'),
    ApiBearerAuth(),
    PharmacyStaff(),
    Controller('pharmacy/orders'),
    __metadata("design:paramtypes", [OrdersService])
], PharmacyOrdersController);
export { PharmacyOrdersController };
//# sourceMappingURL=orders.controller.js.map