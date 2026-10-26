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
import { IsBoolean, IsEnum, IsOptional, IsString, Length, ValidateNested } from 'class-validator';
export var ReviewDecision;
(function (ReviewDecision) {
    ReviewDecision["APPROVE"] = "APPROVE";
    ReviewDecision["REJECT"] = "REJECT";
    ReviewDecision["CLARIFY"] = "CLARIFY";
})(ReviewDecision || (ReviewDecision = {}));
export class UploadPrescriptionDto {
    prescriberName;
}
__decorate([
    ApiPropertyOptional({ example: 'Dr. K. Bello, Harbour Clinic' }),
    IsOptional(),
    IsString(),
    Length(2, 120),
    __metadata("design:type", String)
], UploadPrescriptionDto.prototype, "prescriberName", void 0);
export class ProfessionalChecksDto {
    prescriberAndDateVerified;
    doseAndQuantityAppropriate;
    noInteractionOrAllergyConcerns;
}
__decorate([
    ApiProperty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], ProfessionalChecksDto.prototype, "prescriberAndDateVerified", void 0);
__decorate([
    ApiProperty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], ProfessionalChecksDto.prototype, "doseAndQuantityAppropriate", void 0);
__decorate([
    ApiProperty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], ProfessionalChecksDto.prototype, "noInteractionOrAllergyConcerns", void 0);
export class ReviewPrescriptionDto {
    decision;
    note;
    checks;
}
__decorate([
    ApiProperty({ enum: ReviewDecision }),
    IsEnum(ReviewDecision),
    __metadata("design:type", String)
], ReviewPrescriptionDto.prototype, "decision", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Required to reject or request clarification' }),
    IsOptional(),
    IsString(),
    Length(2, 500),
    __metadata("design:type", String)
], ReviewPrescriptionDto.prototype, "note", void 0);
__decorate([
    ApiPropertyOptional({ type: ProfessionalChecksDto, description: 'Required to approve' }),
    IsOptional(),
    ValidateNested(),
    Type(() => ProfessionalChecksDto),
    __metadata("design:type", ProfessionalChecksDto)
], ReviewPrescriptionDto.prototype, "checks", void 0);
//# sourceMappingURL=dto.js.map