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
import { Equals, IsEmail, IsOptional, IsString, Length } from 'class-validator';
export class UpdateProfileDto {
    firstName;
    lastName;
    email;
    consent;
}
__decorate([
    ApiProperty({ example: 'Chidi' }),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "firstName", void 0);
__decorate([
    ApiProperty({ example: 'Eze' }),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "lastName", void 0);
__decorate([
    ApiPropertyOptional({ example: 'chidi@example.com' }),
    IsOptional(),
    IsEmail(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "email", void 0);
__decorate([
    ApiProperty({ description: 'Consent to process health information to fulfil orders', example: true }),
    Equals(true, { message: 'Consent is required to use Pilbridge' }),
    __metadata("design:type", Boolean)
], UpdateProfileDto.prototype, "consent", void 0);
//# sourceMappingURL=dto.js.map