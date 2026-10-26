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
import { Equals, IsDateString, IsInt, IsOptional, IsString, Length, Max, Min, NotEquals } from 'class-validator';
export class ReceiveBatchDto {
    productId;
    batchNumber;
    expiresAt;
    quantity;
    priceKobo;
    location;
}
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], ReceiveBatchDto.prototype, "productId", void 0);
__decorate([
    ApiProperty({ example: 'AMX-2309-114' }),
    IsString(),
    Length(2, 40),
    __metadata("design:type", String)
], ReceiveBatchDto.prototype, "batchNumber", void 0);
__decorate([
    ApiProperty({ example: '2027-03-31' }),
    IsDateString(),
    __metadata("design:type", String)
], ReceiveBatchDto.prototype, "expiresAt", void 0);
__decorate([
    ApiProperty({ description: 'Packs received' }),
    IsInt(),
    Min(1),
    Max(100_000),
    __metadata("design:type", Number)
], ReceiveBatchDto.prototype, "quantity", void 0);
__decorate([
    ApiProperty({ description: 'Selling price per pack, in kobo' }),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], ReceiveBatchDto.prototype, "priceKobo", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Shelf B3' }),
    IsOptional(),
    IsString(),
    Length(1, 40),
    __metadata("design:type", String)
], ReceiveBatchDto.prototype, "location", void 0);
export class AdjustBatchDto {
    delta;
    reason;
}
__decorate([
    ApiProperty({ example: -2 }),
    IsInt(),
    NotEquals(0),
    Min(-100_000),
    Max(100_000),
    __metadata("design:type", Number)
], AdjustBatchDto.prototype, "delta", void 0);
__decorate([
    ApiProperty({ example: 'Damaged' }),
    IsString(),
    Length(2, 120),
    __metadata("design:type", String)
], AdjustBatchDto.prototype, "reason", void 0);
export class QuarantineDto {
    reason;
}
__decorate([
    ApiProperty({ example: 'Fridge 2 excursion' }),
    IsString(),
    Length(2, 200),
    __metadata("design:type", String)
], QuarantineDto.prototype, "reason", void 0);
export class ReleaseDto {
    qualityAssessmentConfirmed;
    note;
}
__decorate([
    ApiProperty({ description: 'Pharmacist confirms the batch was assessed and is fit for sale' }),
    Equals(true, { message: 'Confirm the quality assessment before releasing stock' }),
    __metadata("design:type", Boolean)
], ReleaseDto.prototype, "qualityAssessmentConfirmed", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Length(2, 300),
    __metadata("design:type", String)
], ReleaseDto.prototype, "note", void 0);
//# sourceMappingURL=dto.js.map