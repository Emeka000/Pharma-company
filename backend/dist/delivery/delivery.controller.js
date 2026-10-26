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
import { Body, Controller, Get, Headers, HttpCode, Param, Post, Put, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import { CurrentUser, PharmacyStaff, Public, Roles } from '../common/decorators.js';
import { Role } from '../generated/prisma/client.js';
import { AREAS } from './areas.js';
import { CourierDispatchService } from './courier-dispatch.service.js';
import { DeliveryService } from './delivery.service.js';
import { BookCourierDto, CheckoutQuoteDto, CourierDeliveredDto, DropoffDto, FailDto, HandoverDto, RiderStatusDto } from './dto.js';
let DeliveryAreasController = class DeliveryAreasController {
    couriers;
    constructor(couriers) {
        this.couriers = couriers;
    }
    areas() {
        return AREAS;
    }
    quote(dto) {
        return this.couriers.checkoutQuote({ pharmacyId: dto.pharmacyId, lat: dto.lat, lng: dto.lng, address: dto.address, prescription: !!dto.prescription, coldChain: !!dto.coldChain });
    }
};
__decorate([
    Get('areas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeliveryAreasController.prototype, "areas", null);
__decorate([
    Post('quote'),
    HttpCode(200),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CheckoutQuoteDto]),
    __metadata("design:returntype", void 0)
], DeliveryAreasController.prototype, "quote", null);
DeliveryAreasController = __decorate([
    ApiTags('delivery'),
    Public(),
    Controller('delivery'),
    __metadata("design:paramtypes", [CourierDispatchService])
], DeliveryAreasController);
export { DeliveryAreasController };
let CourierWebhookController = class CourierWebhookController {
    couriers;
    constructor(couriers) {
        this.couriers = couriers;
    }
    chowdeck(req, signature, body) {
        return this.couriers.chowdeckWebhook(req.rawBody, signature, body);
    }
};
__decorate([
    Post('chowdeck'),
    HttpCode(200),
    SkipThrottle({ default: true, phone: true }),
    ApiExcludeEndpoint(),
    __param(0, Req()),
    __param(1, Headers('x-chowdeck-signature')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], CourierWebhookController.prototype, "chowdeck", null);
CourierWebhookController = __decorate([
    ApiTags('delivery'),
    Public(),
    Controller('webhooks'),
    __metadata("design:paramtypes", [CourierDispatchService])
], CourierWebhookController);
export { CourierWebhookController };
let RiderController = class RiderController {
    delivery;
    constructor(delivery) {
        this.delivery = delivery;
    }
    status(user, dto) {
        return this.delivery.setStatus(user, dto.online, dto.area);
    }
    jobs(user) {
        return this.delivery.jobs(user);
    }
    accept(user, code) {
        return this.delivery.accept(user, code);
    }
    release(user, code) {
        return this.delivery.release(user, code);
    }
    delivered(user, code, dto) {
        return this.delivery.delivered(user, code, dto.code);
    }
    failed(user, code, dto) {
        return this.delivery.failed(user, code, dto.reason, dto.cause);
    }
};
__decorate([
    Put('status'),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, RiderStatusDto]),
    __metadata("design:returntype", void 0)
], RiderController.prototype, "status", null);
__decorate([
    Get('jobs'),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RiderController.prototype, "jobs", null);
__decorate([
    Post('jobs/:code/accept'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], RiderController.prototype, "accept", null);
__decorate([
    Post('jobs/:code/release'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], RiderController.prototype, "release", null);
__decorate([
    Post('jobs/:code/delivered'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, DropoffDto]),
    __metadata("design:returntype", void 0)
], RiderController.prototype, "delivered", null);
__decorate([
    Post('jobs/:code/failed'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, FailDto]),
    __metadata("design:returntype", void 0)
], RiderController.prototype, "failed", null);
RiderController = __decorate([
    ApiTags('rider'),
    ApiBearerAuth(),
    Roles(Role.RIDER),
    Controller('rider'),
    __metadata("design:paramtypes", [DeliveryService])
], RiderController);
export { RiderController };
let PharmacyDeliveryController = class PharmacyDeliveryController {
    delivery;
    constructor(delivery) {
        this.delivery = delivery;
    }
    handover(user, code, dto) {
        return this.delivery.handover(user, code, dto.sealCode);
    }
    rebook(user, code) {
        return this.delivery.rebook(user, code);
    }
};
__decorate([
    Post(':code/handover'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, HandoverDto]),
    __metadata("design:returntype", void 0)
], PharmacyDeliveryController.prototype, "handover", null);
__decorate([
    Post(':code/delivery'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PharmacyDeliveryController.prototype, "rebook", null);
PharmacyDeliveryController = __decorate([
    ApiTags('pharmacy · orders'),
    ApiBearerAuth(),
    PharmacyStaff(),
    Controller('pharmacy/orders'),
    __metadata("design:paramtypes", [DeliveryService])
], PharmacyDeliveryController);
export { PharmacyDeliveryController };
let CourierBookingController = class CourierBookingController {
    delivery;
    couriers;
    constructor(delivery, couriers) {
        this.delivery = delivery;
        this.couriers = couriers;
    }
    bookViaApi(user, code) {
        return this.couriers.bookNow(user, code);
    }
    book(user, code, dto) {
        return this.delivery.bookCourier(user, code, dto);
    }
    cancel(user, code) {
        return this.couriers.cancelBooking(user, code);
    }
    delivered(user, code, dto) {
        return this.delivery.courierDelivered(user, code, dto);
    }
    failed(user, code, dto) {
        return this.delivery.courierFailed(user, code, dto.reason, dto.cause);
    }
};
__decorate([
    Post(':code/courier/api'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CourierBookingController.prototype, "bookViaApi", null);
__decorate([
    Post(':code/courier'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, BookCourierDto]),
    __metadata("design:returntype", void 0)
], CourierBookingController.prototype, "book", null);
__decorate([
    Post(':code/courier/cancel'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CourierBookingController.prototype, "cancel", null);
__decorate([
    Post(':code/courier/delivered'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, CourierDeliveredDto]),
    __metadata("design:returntype", void 0)
], CourierBookingController.prototype, "delivered", null);
__decorate([
    Post(':code/courier/failed'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, FailDto]),
    __metadata("design:returntype", void 0)
], CourierBookingController.prototype, "failed", null);
CourierBookingController = __decorate([
    ApiTags('admin'),
    ApiBearerAuth(),
    Roles(Role.PLATFORM_ADMIN),
    Controller('admin/deliveries'),
    __metadata("design:paramtypes", [DeliveryService,
        CourierDispatchService])
], CourierBookingController);
export { CourierBookingController };
//# sourceMappingURL=delivery.controller.js.map