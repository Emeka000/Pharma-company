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
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { Role } from '../generated/prisma/client.js';
export class FindUsersDto {
    q;
    role;
}
__decorate([
    ApiPropertyOptional({ description: 'Phone, name or email', example: '0803 000 0001' }),
    IsOptional(),
    IsString(),
    Length(2, 80),
    __metadata("design:type", String)
], FindUsersDto.prototype, "q", void 0);
__decorate([
    ApiPropertyOptional({ enum: Role }),
    IsOptional(),
    IsEnum(Role),
    __metadata("design:type", String)
], FindUsersDto.prototype, "role", void 0);
export class ReasonDto {
    reason;
}
__decorate([
    ApiProperty({ example: 'Phone reported stolen' }),
    IsString(),
    Length(5, 300),
    __metadata("design:type", String)
], ReasonDto.prototype, "reason", void 0);
export class ChangePhoneDto {
    phone;
    reason;
}
__decorate([
    ApiProperty({ example: '0803 123 4567', description: 'Their new number — not used by any account' }),
    IsString(),
    Length(10, 20),
    __metadata("design:type", String)
], ChangePhoneDto.prototype, "phone", void 0);
__decorate([
    ApiProperty({ example: 'New work SIM, confirmed by the superintendent on a call' }),
    IsString(),
    Length(5, 300),
    __metadata("design:type", String)
], ChangePhoneDto.prototype, "reason", void 0);
//# sourceMappingURL=dto.js.map