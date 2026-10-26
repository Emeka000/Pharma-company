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
import { IsBoolean, IsIn, IsInt, IsLatitude, IsLongitude, IsOptional, IsString, Length, Max, Min, ValidateIf } from 'class-validator';
export class CreateRiderDto {
    firstName;
    lastName;
    phone;
    partner;
    coldChain;
}
__decorate([
    ApiProperty({ example: 'Bisi' }),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], CreateRiderDto.prototype, "firstName", void 0);
__decorate([
    ApiProperty({ example: 'Kalu' }),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], CreateRiderDto.prototype, "lastName", void 0);
__decorate([
    ApiProperty({ example: '0803 123 4567' }),
    IsString(),
    Length(10, 20),
    __metadata("design:type", String)
], CreateRiderDto.prototype, "phone", void 0);
__decorate([
    ApiProperty({ example: 'Swift Courier', description: 'Logistics company the rider works for' }),
    IsString(),
    Length(2, 80),
    __metadata("design:type", String)
], CreateRiderDto.prototype, "partner", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Carries a validated cold box' }),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CreateRiderDto.prototype, "coldChain", void 0);
export class UpdateRiderDto {
    active;
    coldChain;
    partner;
}
__decorate([
    ApiPropertyOptional({ description: 'Paused riders can’t go online or take jobs' }),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateRiderDto.prototype, "active", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateRiderDto.prototype, "coldChain", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Length(2, 80),
    __metadata("design:type", String)
], UpdateRiderDto.prototype, "partner", void 0);
export const COURIER_APIS = ['CHOWDECK_RELAY'];
export class PharmacyLocationDto {
    lat;
    lng;
}
__decorate([
    ApiProperty({ example: 6.5095 }),
    IsLatitude(),
    Min(6.3),
    Max(6.8),
    __metadata("design:type", Number)
], PharmacyLocationDto.prototype, "lat", void 0);
__decorate([
    ApiProperty({ example: 3.3711 }),
    IsLongitude(),
    Min(2.7),
    Max(4.4),
    __metadata("design:type", Number)
], PharmacyLocationDto.prototype, "lng", void 0);
export class CourierDto {
    name;
    contact;
    acceptsPrescription;
    acceptsColdChain;
    approvalNote;
    active;
    api;
    priority;
}
__decorate([
    ApiProperty({ example: 'Chowdeck Relay' }),
    IsString(),
    Length(2, 80),
    __metadata("design:type", String)
], CourierDto.prototype, "name", void 0);
__decorate([
    ApiPropertyOptional({ example: 'dispatch@example.com / 0803 000 0000' }),
    IsOptional(),
    IsString(),
    Length(2, 120),
    __metadata("design:type", String)
], CourierDto.prototype, "contact", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Has accepted prescription-only parcels in writing' }),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CourierDto.prototype, "acceptsPrescription", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Has shown validated 2–8 °C capability' }),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CourierDto.prototype, "acceptsColdChain", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Written acceptance: email from Relay ops, 12 Oct 2026' }),
    IsOptional(),
    IsString(),
    Length(2, 300),
    __metadata("design:type", String)
], CourierDto.prototype, "approvalNote", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CourierDto.prototype, "active", void 0);
__decorate([
    ApiPropertyOptional({ enum: COURIER_APIS, nullable: true, description: 'Connected API; null = booked by hand on their dashboard' }),
    ValidateIf((o) => o.api !== null && o.api !== undefined),
    IsIn(COURIER_APIS),
    __metadata("design:type", Object)
], CourierDto.prototype, "api", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Lower is tried first' }),
    IsOptional(),
    IsInt(),
    Min(1),
    Max(1000),
    __metadata("design:type", Number)
], CourierDto.prototype, "priority", void 0);
export class UpdateCourierDto {
    contact;
    acceptsPrescription;
    acceptsColdChain;
    approvalNote;
    active;
    api;
    priority;
}
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Length(2, 120),
    __metadata("design:type", String)
], UpdateCourierDto.prototype, "contact", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateCourierDto.prototype, "acceptsPrescription", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateCourierDto.prototype, "acceptsColdChain", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Length(2, 300),
    __metadata("design:type", String)
], UpdateCourierDto.prototype, "approvalNote", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateCourierDto.prototype, "active", void 0);
__decorate([
    ApiPropertyOptional({ enum: COURIER_APIS, nullable: true, description: 'Connected API; null = booked by hand on their dashboard' }),
    ValidateIf((o) => o.api !== null && o.api !== undefined),
    IsIn(COURIER_APIS),
    __metadata("design:type", Object)
], UpdateCourierDto.prototype, "api", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Lower is tried first' }),
    IsOptional(),
    IsInt(),
    Min(1),
    Max(1000),
    __metadata("design:type", Number)
], UpdateCourierDto.prototype, "priority", void 0);
export class ProductEligibilityDto {
    deliveryAllowed;
}
__decorate([
    ApiProperty({ description: 'false: pharmacy pickup only — never delivered' }),
    IsBoolean(),
    __metadata("design:type", Boolean)
], ProductEligibilityDto.prototype, "deliveryAllowed", void 0);
export class PharmacyPhoneDto {
    phone;
}
__decorate([
    ApiProperty({ example: '0803 000 0100', description: 'Counter phone couriers call at pickup' }),
    IsString(),
    Length(10, 20),
    __metadata("design:type", String)
], PharmacyPhoneDto.prototype, "phone", void 0);
//# sourceMappingURL=dto.js.map