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
import { Type } from 'class-transformer';
import { ArrayMaxSize, ArrayUnique, IsDateString, IsEmail, IsIn, IsInt, IsOptional, IsString, Length, Matches, Max, Min } from 'class-validator';
import { AREA_KEYS } from '../delivery/areas.js';
const HHMM = /^([01]\d|2[0-3]):[0-5]\d$/;
export class UpdateSettingsDto {
    phone;
    email;
    openDays;
    opensAt;
    lastOrderAt;
    coverageAreas;
}
__decorate([
    ApiPropertyOptional({ example: '0803 000 0100', description: 'Counter phone couriers call at pickup' }),
    IsOptional(),
    IsString(),
    Length(10, 20),
    __metadata("design:type", String)
], UpdateSettingsDto.prototype, "phone", void 0);
__decorate([
    ApiPropertyOptional({ example: 'orders@oakfieldpharmacy.ng' }),
    IsOptional(),
    IsEmail(),
    __metadata("design:type", String)
], UpdateSettingsDto.prototype, "email", void 0);
__decorate([
    ApiPropertyOptional({ example: [1, 2, 3, 4, 5, 6], description: 'ISO weekdays open for delivery orders, 1 = Monday' }),
    IsOptional(),
    IsInt({ each: true }),
    Min(1, { each: true }),
    Max(7, { each: true }),
    ArrayUnique(),
    ArrayMaxSize(7),
    __metadata("design:type", Array)
], UpdateSettingsDto.prototype, "openDays", void 0);
__decorate([
    ApiPropertyOptional({ example: '08:00' }),
    IsOptional(),
    Matches(HHMM, { message: 'Times look like 08:00' }),
    __metadata("design:type", String)
], UpdateSettingsDto.prototype, "opensAt", void 0);
__decorate([
    ApiPropertyOptional({ example: '19:30' }),
    IsOptional(),
    Matches(HHMM, { message: 'Times look like 19:30' }),
    __metadata("design:type", String)
], UpdateSettingsDto.prototype, "lastOrderAt", void 0);
__decorate([
    ApiPropertyOptional({ enum: AREA_KEYS, isArray: true, description: 'Delivery areas served; empty = every area' }),
    IsOptional(),
    IsIn(AREA_KEYS, { each: true }),
    ArrayUnique(),
    ArrayMaxSize(AREA_KEYS.length),
    __metadata("design:type", Array)
], UpdateSettingsDto.prototype, "coverageAreas", void 0);
export class BankDetailsDto {
    bankName;
    accountName;
    accountNumber;
}
__decorate([
    ApiProperty({ example: 'GTBank' }),
    IsString(),
    Length(2, 60),
    __metadata("design:type", String)
], BankDetailsDto.prototype, "bankName", void 0);
__decorate([
    ApiProperty({ example: 'Oakfield Pharmacy Ltd', description: 'As registered with the bank' }),
    IsString(),
    Length(2, 100),
    __metadata("design:type", String)
], BankDetailsDto.prototype, "accountName", void 0);
__decorate([
    ApiProperty({ example: '0123454821', description: '10-digit NUBAN' }),
    Matches(/^\d{10}$/, { message: 'Enter the 10-digit account number' }),
    __metadata("design:type", String)
], BankDetailsDto.prototype, "accountNumber", void 0);
export class ActivityQueryDto {
    limit;
    before;
}
__decorate([
    ApiPropertyOptional({ example: 50 }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    Max(200),
    __metadata("design:type", Number)
], ActivityQueryDto.prototype, "limit", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Entries before this time, for the next page' }),
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], ActivityQueryDto.prototype, "before", void 0);
//# sourceMappingURL=dto.js.map