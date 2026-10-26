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
import { Equals, IsEmail, IsEnum, IsIn, IsJWT, IsOptional, IsString, Length, Matches, ValidateIf } from 'class-validator';
import { SocialProvider } from '../generated/prisma/client.js';
export const AUTH_INTENTS = ['signin', 'signup', 'auto'];
export class RequestOtpDto {
    phone;
    intent;
}
__decorate([
    ApiProperty({ example: '0803 123 4567' }),
    IsString(),
    Length(10, 20),
    __metadata("design:type", String)
], RequestOtpDto.prototype, "phone", void 0);
__decorate([
    ApiPropertyOptional({ enum: AUTH_INTENTS, default: 'auto' }),
    IsOptional(),
    IsIn(AUTH_INTENTS),
    __metadata("design:type", String)
], RequestOtpDto.prototype, "intent", void 0);
export class VerifyOtpDto {
    phone;
    code;
    intent;
    firstName;
    lastName;
    email;
    consent;
}
__decorate([
    ApiProperty({ example: '0803 123 4567' }),
    IsString(),
    Length(10, 20),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "phone", void 0);
__decorate([
    ApiProperty({ example: '123456' }),
    Matches(/^\d{6}$/, { message: 'Enter the 6-digit code' }),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "code", void 0);
__decorate([
    ApiPropertyOptional({ enum: AUTH_INTENTS, default: 'auto' }),
    IsOptional(),
    IsIn(AUTH_INTENTS),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "intent", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Chidi' }),
    ValidateIf((o) => o.intent === 'signup'),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "firstName", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Eze' }),
    ValidateIf((o) => o.intent === 'signup'),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "lastName", void 0);
__decorate([
    ApiPropertyOptional({ example: 'chidi@example.com' }),
    IsOptional(),
    IsEmail(),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "email", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Consent to process health information to fulfil orders' }),
    ValidateIf((o) => o.intent === 'signup'),
    Equals(true, { message: 'Consent is required to create an account' }),
    __metadata("design:type", Boolean)
], VerifyOtpDto.prototype, "consent", void 0);
export class SocialSignInDto {
    provider;
    idToken;
    firstName;
    lastName;
}
__decorate([
    ApiProperty({ enum: SocialProvider }),
    IsEnum(SocialProvider),
    __metadata("design:type", String)
], SocialSignInDto.prototype, "provider", void 0);
__decorate([
    ApiProperty({ description: 'The OpenID Connect ID token issued by Google or Apple' }),
    IsJWT(),
    __metadata("design:type", String)
], SocialSignInDto.prototype, "idToken", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Ada' }),
    IsOptional(),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], SocialSignInDto.prototype, "firstName", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Obi' }),
    IsOptional(),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], SocialSignInDto.prototype, "lastName", void 0);
export class DemoSocialSignInDto {
    provider;
    email;
    firstName;
    lastName;
}
__decorate([
    ApiProperty({ enum: SocialProvider }),
    IsEnum(SocialProvider),
    __metadata("design:type", String)
], DemoSocialSignInDto.prototype, "provider", void 0);
__decorate([
    ApiProperty({ example: 'ada.obi@gmail.com' }),
    IsEmail(),
    __metadata("design:type", String)
], DemoSocialSignInDto.prototype, "email", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Ada' }),
    IsOptional(),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], DemoSocialSignInDto.prototype, "firstName", void 0);
__decorate([
    ApiPropertyOptional({ example: 'Obi' }),
    IsOptional(),
    IsString(),
    Length(1, 60),
    __metadata("design:type", String)
], DemoSocialSignInDto.prototype, "lastName", void 0);
export class AddPhoneDto {
    phone;
    code;
}
__decorate([
    ApiProperty({ example: '0803 123 4567' }),
    IsString(),
    Length(10, 20),
    __metadata("design:type", String)
], AddPhoneDto.prototype, "phone", void 0);
__decorate([
    ApiProperty({ example: '123456', description: 'From POST /auth/otp/request' }),
    Matches(/^\d{6}$/, { message: 'Enter the 6-digit code' }),
    __metadata("design:type", String)
], AddPhoneDto.prototype, "code", void 0);
export class MfaSetupDto {
    mfaToken;
}
__decorate([
    ApiProperty({ description: 'The mfaToken from the sign-in response' }),
    IsJWT(),
    __metadata("design:type", String)
], MfaSetupDto.prototype, "mfaToken", void 0);
export class MfaVerifyDto {
    mfaToken;
    code;
}
__decorate([
    ApiProperty({ description: 'The mfaToken from the sign-in response' }),
    IsJWT(),
    __metadata("design:type", String)
], MfaVerifyDto.prototype, "mfaToken", void 0);
__decorate([
    ApiProperty({ example: '123456', description: 'The 6-digit code from the authenticator app, or a recovery code like abcd-2345' }),
    IsString(),
    Length(6, 20),
    __metadata("design:type", String)
], MfaVerifyDto.prototype, "code", void 0);
//# sourceMappingURL=dto.js.map