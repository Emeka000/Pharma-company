var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsInt, IsOptional, IsPositive } from 'class-validator';
export class StartPaymentDto {
    email;
}
__decorate([
    ApiPropertyOptional({ description: 'For the payment receipt, when the account has no email yet', example: 'ada@example.com' }),
    IsOptional(),
    IsEmail(),
    __metadata("design:type", String)
], StartPaymentDto.prototype, "email", void 0);
export class ConfirmPaymentDto {
    transactionId;
}
__decorate([
    ApiProperty({ description: '`transaction_id` from the Flutterwave checkout callback', example: 285959875 }),
    IsInt(),
    IsPositive(),
    __metadata("design:type", Number)
], ConfirmPaymentDto.prototype, "transactionId", void 0);
//# sourceMappingURL=dto.js.map