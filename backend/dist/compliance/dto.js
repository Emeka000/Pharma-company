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
import { IsDateString, IsEnum, IsIn, IsOptional, IsString, Length } from 'class-validator';
import { DocumentKind } from '../generated/prisma/client.js';
export const DOCUMENT_LABELS = {
    PREMISES_LICENCE: { name: 'Pharmacy premises licence', issuer: 'Pharmacists Council of Nigeria', expires: true },
    SUPERINTENDENT_LICENCE: { name: 'Superintendent pharmacist licence', issuer: 'Pharmacists Council of Nigeria', expires: true },
    CAC_CERTIFICATE: { name: 'Certificate of incorporation', issuer: 'Corporate Affairs Commission', expires: false },
    COLD_CHAIN_CALIBRATION: { name: 'Cold-chain fridge calibration', issuer: 'Accredited calibration provider', expires: true },
    INSURANCE: { name: 'Goods-in-transit insurance', issuer: 'Insurer', expires: true },
    OTHER: { name: 'Other document', issuer: '', expires: false },
};
export class UploadDocumentDto {
    kind;
    reference;
    issuer;
    expiresAt;
}
__decorate([
    ApiProperty({ enum: DocumentKind }),
    IsEnum(DocumentKind),
    __metadata("design:type", String)
], UploadDocumentDto.prototype, "kind", void 0);
__decorate([
    ApiProperty({ example: 'PCN/PR/LA/0123', description: 'Licence or certificate number' }),
    IsString(),
    Length(2, 80),
    __metadata("design:type", String)
], UploadDocumentDto.prototype, "reference", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Pharmacists Council of Nigeria' }),
    IsOptional(),
    IsString(),
    Length(2, 120),
    __metadata("design:type", String)
], UploadDocumentDto.prototype, "issuer", void 0);
__decorate([
    ApiPropertyOptional({ example: '2027-11-12', description: 'Required for documents that expire' }),
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], UploadDocumentDto.prototype, "expiresAt", void 0);
export const DOCUMENT_DECISIONS = ['VERIFY', 'REJECT'];
export class ReviewDocumentDto {
    decision;
    note;
    expiresAt;
}
__decorate([
    ApiProperty({ enum: DOCUMENT_DECISIONS }),
    IsIn(DOCUMENT_DECISIONS),
    __metadata("design:type", Object)
], ReviewDocumentDto.prototype, "decision", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Checked on the PCN register', description: 'Required when rejecting' }),
    IsOptional(),
    IsString(),
    Length(2, 500),
    __metadata("design:type", String)
], ReviewDocumentDto.prototype, "note", void 0);
__decorate([
    ApiPropertyOptional({ example: '2027-11-12', description: 'The expiry date as checked, if it differs from what was entered' }),
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], ReviewDocumentDto.prototype, "expiresAt", void 0);
//# sourceMappingURL=dto.js.map