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
import { Equals, IsInt, IsOptional, IsString, Length, Max, Min } from 'class-validator';
export class CreateTransferDto {
    batchId;
    quantity;
    toPharmacyId;
    note;
}
__decorate([
    ApiProperty({ description: 'A batch at your pharmacy' }),
    IsString(),
    __metadata("design:type", String)
], CreateTransferDto.prototype, "batchId", void 0);
__decorate([
    ApiProperty({ example: 20, description: 'Packs' }),
    IsInt(),
    Min(1),
    Max(100_000),
    __metadata("design:type", Number)
], CreateTransferDto.prototype, "quantity", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Offer to one pharmacy. Leave out to offer to every verified pharmacy' }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateTransferDto.prototype, "toPharmacyId", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Surplus after a cancelled clinic order' }),
    IsOptional(),
    IsString(),
    Length(2, 300),
    __metadata("design:type", String)
], CreateTransferDto.prototype, "note", void 0);
export class TransferReasonDto {
    reason;
}
__decorate([
    ApiProperty({ example: 'We have enough stock of this' }),
    IsString(),
    Length(2, 300),
    __metadata("design:type", String)
], TransferReasonDto.prototype, "reason", void 0);
export class ReceiveTransferDto {
    conditionConfirmed;
    priceKobo;
    location;
}
__decorate([
    ApiProperty({ description: 'Pharmacist confirms seal, packaging, batch number and expiry match, and nothing is damaged' }),
    Equals(true, { message: 'Check the stock’s condition before receiving it' }),
    __metadata("design:type", Boolean)
], ReceiveTransferDto.prototype, "conditionConfirmed", void 0);
__decorate([
    ApiProperty({ example: 120000, description: 'Your selling price per pack, in kobo (used for a new batch; an existing batch keeps its price)' }),
    IsInt(),
    Min(1),
    Max(100_000_000),
    __metadata("design:type", Number)
], ReceiveTransferDto.prototype, "priceKobo", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Shelf B3' }),
    IsOptional(),
    IsString(),
    Length(1, 40),
    __metadata("design:type", String)
], ReceiveTransferDto.prototype, "location", void 0);
//# sourceMappingURL=dto.js.map