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
import { Body, Controller, Headers, HttpCode, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import { CurrentUser, Public, Roles } from '../common/decorators.js';
import { Role } from '../generated/prisma/client.js';
import { ConfirmPaymentDto, StartPaymentDto } from './dto.js';
import { PaymentsService } from './payments.service.js';
let OrderPaymentsController = class OrderPaymentsController {
    payments;
    constructor(payments) {
        this.payments = payments;
    }
    start(user, code, dto) {
        return this.payments.start(user, code, dto);
    }
    confirm(user, code, dto) {
        return this.payments.confirm(user, code, dto.transactionId);
    }
    demo(user, code) {
        return this.payments.confirmDemo(user, code);
    }
};
__decorate([
    Post(),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, StartPaymentDto]),
    __metadata("design:returntype", void 0)
], OrderPaymentsController.prototype, "start", null);
__decorate([
    Post('confirm'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ConfirmPaymentDto]),
    __metadata("design:returntype", void 0)
], OrderPaymentsController.prototype, "confirm", null);
__decorate([
    Post('demo'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OrderPaymentsController.prototype, "demo", null);
OrderPaymentsController = __decorate([
    ApiTags('orders · payment'),
    ApiBearerAuth(),
    Roles(Role.PATIENT),
    Controller('orders/:code/payment'),
    __metadata("design:paramtypes", [PaymentsService])
], OrderPaymentsController);
export { OrderPaymentsController };
let FlutterwaveWebhookController = class FlutterwaveWebhookController {
    payments;
    constructor(payments) {
        this.payments = payments;
    }
    webhook(hash, body) {
        return this.payments.webhook(hash, body);
    }
};
__decorate([
    Post('webhook'),
    HttpCode(200),
    SkipThrottle({ default: true, phone: true }),
    ApiExcludeEndpoint(),
    __param(0, Headers('verif-hash')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FlutterwaveWebhookController.prototype, "webhook", null);
FlutterwaveWebhookController = __decorate([
    ApiTags('payments'),
    Public(),
    Controller('payments/flutterwave'),
    __metadata("design:paramtypes", [PaymentsService])
], FlutterwaveWebhookController);
export { FlutterwaveWebhookController };
//# sourceMappingURL=payments.controller.js.map