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
import { IsBoolean, IsDateString, IsEmail, IsEnum, IsIn, IsLatitude, IsLongitude, IsObject, IsOptional, IsString, Length, Max, Min, ValidateIf } from 'class-validator';
import { ApplicationStatus, PartnerKind, Role } from '../generated/prisma/client.js';
export class CreatePharmacyDto {
    name;
    area;
    address;
    premisesLicenceNo;
    licenceExpiresAt;
    superintendentName;
    email;
    phone;
    coldChain;
    lat;
    lng;
    applicationId;
}
__decorate([
    ApiProperty({ example: 'Grace Pharmacy' }),
    IsString(),
    Length(2, 80),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "name", void 0);
__decorate([
    ApiProperty({ example: 'Ikorodu', description: 'Shown to customers next to the name' }),
    IsString(),
    Length(2, 60),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "area", void 0);
__decorate([
    ApiProperty({ example: '5 Lagos Road, Ikorodu, Lagos' }),
    IsString(),
    Length(5, 200),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "address", void 0);
__decorate([
    ApiProperty({ example: 'PCN/PR/LA/0123' }),
    IsString(),
    Length(3, 60),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "premisesLicenceNo", void 0);
__decorate([
    ApiProperty({ example: '2027-06-30' }),
    IsDateString(),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "licenceExpiresAt", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Pharm. Ngozi Eze' }),
    IsOptional(),
    IsString(),
    Length(2, 80),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "superintendentName", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsEmail(),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "email", void 0);
__decorate([
    ApiPropertyOptional({ example: '0803 000 0100', description: 'Counter phone couriers call at pickup' }),
    IsOptional(),
    IsString(),
    Length(10, 20),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "phone", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Has validated 2–8 °C storage' }),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CreatePharmacyDto.prototype, "coldChain", void 0);
__decorate([
    ApiPropertyOptional({ example: 6.6194 }),
    ValidateIf((o) => o.lng !== undefined),
    IsLatitude(),
    Min(6.3),
    Max(6.8),
    __metadata("design:type", Number)
], CreatePharmacyDto.prototype, "lat", void 0);
__decorate([
    ApiPropertyOptional({ example: 3.5105 }),
    ValidateIf((o) => o.lat !== undefined),
    IsLongitude(),
    Min(2.7),
    Max(4.4),
    __metadata("design:type", Number)
], CreatePharmacyDto.prototype, "lng", void 0);
__decorate([
    ApiPropertyOptional({ description: 'The partner application this pharmacy came from; it is marked approved' }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "applicationId", void 0);
export class UpdatePharmacyDto {
    name;
    area;
    address;
    premisesLicenceNo;
    licenceExpiresAt;
    superintendentName;
    email;
    coldChain;
}
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Length(2, 80),
    __metadata("design:type", String)
], UpdatePharmacyDto.prototype, "name", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Length(2, 60),
    __metadata("design:type", String)
], UpdatePharmacyDto.prototype, "area", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Length(5, 200),
    __metadata("design:type", String)
], UpdatePharmacyDto.prototype, "address", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Length(3, 60),
    __metadata("design:type", String)
], UpdatePharmacyDto.prototype, "premisesLicenceNo", void 0);
__decorate([
    ApiPropertyOptional({ example: '2027-06-30' }),
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], UpdatePharmacyDto.prototype, "licenceExpiresAt", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Length(2, 80),
    __metadata("design:type", String)
], UpdatePharmacyDto.prototype, "superintendentName", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsEmail(),
    __metadata("design:type", String)
], UpdatePharmacyDto.prototype, "email", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdatePharmacyDto.prototype, "coldChain", void 0);
export class VerifyPharmacyDto {
    note;
}
__decorate([
    ApiProperty({ example: 'PCN premises licence checked on the PCN portal, 23 Oct 2026; CAC certificate seen' }),
    IsString(),
    Length(10, 500),
    __metadata("design:type", String)
], VerifyPharmacyDto.prototype, "note", void 0);
export class SuspendPharmacyDto {
    reason;
}
__decorate([
    ApiProperty({ example: 'Premises licence under review by PCN' }),
    IsString(),
    Length(5, 300),
    __metadata("design:type", String)
], SuspendPharmacyDto.prototype, "reason", void 0);
export const STAFF_ROLES = [Role.PHARMACIST, Role.PHARMACY_STAFF];
export class AddStaffDto {
    firstName;
    lastName;
    phone;
    role;
    pcnRegNo;
}
__decorate([
    ApiProperty({ example: 'Ngozi' }),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], AddStaffDto.prototype, "firstName", void 0);
__decorate([
    ApiProperty({ example: 'Eze' }),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], AddStaffDto.prototype, "lastName", void 0);
__decorate([
    ApiProperty({ example: '0803 123 4567' }),
    IsString(),
    Length(10, 20),
    __metadata("design:type", String)
], AddStaffDto.prototype, "phone", void 0);
__decorate([
    ApiProperty({ enum: STAFF_ROLES, description: 'PHARMACIST: may approve prescriptions, release stock and approve transfers' }),
    IsIn(STAFF_ROLES),
    __metadata("design:type", Object)
], AddStaffDto.prototype, "role", void 0);
__decorate([
    ApiPropertyOptional({ example: 'PCN/RP/12345', description: 'Required for pharmacists' }),
    ValidateIf((o) => o.role === Role.PHARMACIST || o.pcnRegNo !== undefined),
    IsString(),
    Length(3, 40),
    __metadata("design:type", String)
], AddStaffDto.prototype, "pcnRegNo", void 0);
export class VerifyBankDto {
    note;
}
__decorate([
    ApiProperty({ example: 'Account name matches CAC certificate; confirmed by phone with the superintendent' }),
    IsString(),
    Length(10, 300),
    __metadata("design:type", String)
], VerifyBankDto.prototype, "note", void 0);
export class PartnerApplicationDto {
    kind;
    organisation;
    contactName;
    email;
    phone;
    details;
}
__decorate([
    ApiProperty({ enum: PartnerKind }),
    IsEnum(PartnerKind),
    __metadata("design:type", String)
], PartnerApplicationDto.prototype, "kind", void 0);
__decorate([
    ApiProperty({ example: 'Grace Pharmacy Ltd' }),
    IsString(),
    Length(2, 120),
    __metadata("design:type", String)
], PartnerApplicationDto.prototype, "organisation", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Ngozi Eze' }),
    IsOptional(),
    IsString(),
    Length(2, 80),
    __metadata("design:type", String)
], PartnerApplicationDto.prototype, "contactName", void 0);
__decorate([
    ApiProperty(),
    IsEmail(),
    Length(3, 120),
    __metadata("design:type", String)
], PartnerApplicationDto.prototype, "email", void 0);
__decorate([
    ApiProperty({ example: '0803 123 4567' }),
    IsString(),
    Length(10, 20),
    __metadata("design:type", String)
], PartnerApplicationDto.prototype, "phone", void 0);
__decorate([
    ApiProperty({ description: 'The rest of the form: up to 20 short text answers', example: { cac: 'RC 123456', premises: 'PCN/PR/LA/0123' } }),
    IsObject(),
    __metadata("design:type", Object)
], PartnerApplicationDto.prototype, "details", void 0);
export const REVIEW_STATUSES = [ApplicationStatus.CONTACTED, ApplicationStatus.APPROVED, ApplicationStatus.DECLINED];
export class ReviewApplicationDto {
    status;
    note;
}
__decorate([
    ApiProperty({ enum: REVIEW_STATUSES }),
    IsIn(REVIEW_STATUSES),
    __metadata("design:type", Object)
], ReviewApplicationDto.prototype, "status", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Called 23 Oct; documents requested' }),
    IsOptional(),
    IsString(),
    Length(2, 500),
    __metadata("design:type", String)
], ReviewApplicationDto.prototype, "note", void 0);
export const DETAIL_KEY = /^[a-zA-Z][a-zA-Z0-9]{0,29}$/;
//# sourceMappingURL=dto.js.map