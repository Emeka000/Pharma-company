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
import { IsOptional, IsString, Length, Matches } from 'class-validator';
export class CreatePayoutsDto {
    before;
}
__decorate([
    ApiPropertyOptional({ example: '2026-10-19', description: 'Settle deliveries made before this Lagos day (default: today)' }),
    IsOptional(),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Dates look like 2026-10-19' }),
    __metadata("design:type", String)
], CreatePayoutsDto.prototype, "before", void 0);
export class MarkPaidDto {
    reference;
}
__decorate([
    ApiProperty({ example: 'GTB-TRF-0098812', description: 'Bank transfer reference' }),
    IsString(),
    Length(3, 80),
    __metadata("design:type", String)
], MarkPaidDto.prototype, "reference", void 0);
export class VoidPayoutDto {
    reason;
}
__decorate([
    ApiProperty({ example: 'Created before a disputed order was resolved' }),
    IsString(),
    Length(5, 300),
    __metadata("design:type", String)
], VoidPayoutDto.prototype, "reason", void 0);
//# sourceMappingURL=dto.js.map