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
import { ArrayMaxSize, ArrayMinSize, IsDateString, IsInt, IsOptional, IsString, Length, Max, Min, ValidateNested } from 'class-validator';
export class InvoiceLineDto {
    providerRef;
    amountKobo;
}
__decorate([
    ApiProperty({ example: 'RLY-88213' }),
    IsString(),
    Length(1, 80),
    __metadata("design:type", String)
], InvoiceLineDto.prototype, "providerRef", void 0);
__decorate([
    ApiProperty({ example: 180000, description: 'Kobo' }),
    IsInt(),
    Min(0),
    Max(100_000_000),
    __metadata("design:type", Number)
], InvoiceLineDto.prototype, "amountKobo", void 0);
export class CreateInvoiceDto {
    number;
    periodStart;
    periodEnd;
    lines;
}
__decorate([
    ApiProperty({ example: 'INV-2026-10-02' }),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "number", void 0);
__decorate([
    ApiProperty({ example: '2026-10-01' }),
    IsDateString(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "periodStart", void 0);
__decorate([
    ApiProperty({ example: '2026-10-07' }),
    IsDateString(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "periodEnd", void 0);
__decorate([
    ApiProperty({ type: [InvoiceLineDto] }),
    ValidateNested({ each: true }),
    Type(() => InvoiceLineDto),
    ArrayMinSize(1),
    ArrayMaxSize(5000),
    __metadata("design:type", Array)
], CreateInvoiceDto.prototype, "lines", void 0);
export class ReconcileInvoiceDto {
    note;
}
__decorate([
    ApiPropertyOptional({ example: 'Disputed 3 lines by email; paid the rest on 14 Oct' }),
    IsOptional(),
    IsString(),
    Length(2, 500),
    __metadata("design:type", String)
], ReconcileInvoiceDto.prototype, "note", void 0);
//# sourceMappingURL=dto.js.map