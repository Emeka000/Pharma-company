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
import { IsBoolean, IsEnum, IsIn, IsInt, IsLatitude, IsLongitude, IsOptional, IsString, IsUrl, Length, Matches, Max, Min, ValidateIf } from 'class-validator';
import { FailureCause } from '../generated/prisma/client.js';
import { AREA_KEYS } from './areas.js';
export class RiderStatusDto {
    online;
    area;
}
__decorate([
    ApiProperty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], RiderStatusDto.prototype, "online", void 0);
__decorate([
    ApiPropertyOptional({ enum: AREA_KEYS, description: 'Where the rider is, when going online' }),
    ValidateIf((o) => o.online),
    IsIn(AREA_KEYS, { message: 'Choose the area you’re in' }),
    __metadata("design:type", String)
], RiderStatusDto.prototype, "area", void 0);
export class DropoffDto {
    code;
}
__decorate([
    ApiProperty({ example: '4821', description: 'The 4-digit code the recipient reads out' }),
    Matches(/^\d{4}$/, { message: 'Enter the 4-digit code from the customer' }),
    __metadata("design:type", String)
], DropoffDto.prototype, "code", void 0);
export class FailDto {
    reason;
    cause;
}
__decorate([
    ApiProperty({ example: 'Customer not reachable after 3 calls' }),
    IsString(),
    Length(3, 200),
    __metadata("design:type", String)
], FailDto.prototype, "reason", void 0);
__decorate([
    ApiPropertyOptional({ enum: FailureCause, description: 'Decides who bears the cost; inferred from the reason if left out' }),
    IsOptional(),
    IsEnum(FailureCause),
    __metadata("design:type", String)
], FailDto.prototype, "cause", void 0);
export class HandoverDto {
    sealCode;
}
__decorate([
    ApiProperty({ example: 'DL-9F2C41AA', description: 'The seal code the rider or courier shows; must match the parcel' }),
    IsString(),
    Length(4, 20),
    __metadata("design:type", String)
], HandoverDto.prototype, "sealCode", void 0);
export class BookCourierDto {
    courierId;
    providerRef;
    feeKobo;
    trackingUrl;
}
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], BookCourierDto.prototype, "courierId", void 0);
__decorate([
    ApiProperty({ example: 'RLY-88213', description: 'The courier’s own booking reference' }),
    IsString(),
    Length(2, 80),
    __metadata("design:type", String)
], BookCourierDto.prototype, "providerRef", void 0);
__decorate([
    ApiPropertyOptional({ example: 250000, description: 'What the courier charges us, in kobo' }),
    IsOptional(),
    IsInt(),
    Min(0),
    Max(10_000_000),
    __metadata("design:type", Number)
], BookCourierDto.prototype, "feeKobo", void 0);
__decorate([
    ApiPropertyOptional({ example: 'https://track.example.com/RLY-88213' }),
    IsOptional(),
    IsUrl({ require_protocol: true }),
    __metadata("design:type", String)
], BookCourierDto.prototype, "trackingUrl", void 0);
export class CourierDeliveredDto {
    customerCode;
    courierProof;
}
__decorate([
    ApiPropertyOptional({ example: '4821', description: 'The customer’s 4-digit code, read back by the courier' }),
    IsOptional(),
    Matches(/^\d{4}$/, { message: 'The customer’s code is 4 digits' }),
    __metadata("design:type", String)
], CourierDeliveredDto.prototype, "customerCode", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Relay POD PIN confirmed 14:32', description: 'The courier’s proof-of-delivery reference, when there’s no customer code' }),
    IsOptional(),
    IsString(),
    Length(3, 120),
    __metadata("design:type", String)
], CourierDeliveredDto.prototype, "courierProof", void 0);
export class CheckoutQuoteDto {
    pharmacyId;
    lat;
    lng;
    prescription;
    coldChain;
    address;
}
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CheckoutQuoteDto.prototype, "pharmacyId", void 0);
__decorate([
    ApiProperty({ example: 6.6018 }),
    IsLatitude(),
    Min(6.3),
    Max(6.8),
    __metadata("design:type", Number)
], CheckoutQuoteDto.prototype, "lat", void 0);
__decorate([
    ApiProperty({ example: 3.3515 }),
    IsLongitude(),
    Min(2.7),
    Max(4.4),
    __metadata("design:type", Number)
], CheckoutQuoteDto.prototype, "lng", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Basket has prescription-only items' }),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CheckoutQuoteDto.prototype, "prescription", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Basket has 2–8 °C items' }),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CheckoutQuoteDto.prototype, "coldChain", void 0);
__decorate([
    ApiPropertyOptional({ example: '5 Allen Avenue, Ikeja' }),
    IsOptional(),
    IsString(),
    Length(3, 200),
    __metadata("design:type", String)
], CheckoutQuoteDto.prototype, "address", void 0);
//# sourceMappingURL=dto.js.map