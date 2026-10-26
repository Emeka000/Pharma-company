var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, HttpCode, MaxFileSizeValidator, Param, ParseEnumPipe, ParseFilePipe, Post, Query, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CurrentUser, PharmacyStaff, Roles } from '../common/decorators.js';
import { PrescriptionStatus, Role } from '../generated/prisma/client.js';
import { ReviewPrescriptionDto, UploadPrescriptionDto } from './dto.js';
import { PrescriptionsService } from './prescriptions.service.js';
const MAX_UPLOAD = 10 * 1024 * 1024;
let PrescriptionsController = class PrescriptionsController {
    rx;
    constructor(rx) {
        this.rx = rx;
    }
    upload(user, file, dto) {
        return this.rx.upload(user, file, dto.prescriberName);
    }
    list(user) {
        return this.rx.listMine(user);
    }
};
__decorate([
    Post(),
    ApiConsumes('multipart/form-data'),
    ApiBody({ schema: { type: 'object', properties: { image: { type: 'string', format: 'binary' }, prescriberName: { type: 'string' } }, required: ['image'] } }),
    UseInterceptors(FileInterceptor('image', { limits: { fileSize: MAX_UPLOAD, files: 1 } })),
    __param(0, CurrentUser()),
    __param(1, UploadedFile(new ParseFilePipe({ validators: [new MaxFileSizeValidator({ maxSize: MAX_UPLOAD })], fileIsRequired: true }))),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UploadPrescriptionDto]),
    __metadata("design:returntype", void 0)
], PrescriptionsController.prototype, "upload", null);
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PrescriptionsController.prototype, "list", null);
PrescriptionsController = __decorate([
    ApiTags('prescriptions'),
    ApiBearerAuth(),
    Roles(Role.PATIENT),
    Controller('prescriptions'),
    __metadata("design:paramtypes", [PrescriptionsService])
], PrescriptionsController);
export { PrescriptionsController };
let PharmacyPrescriptionsController = class PharmacyPrescriptionsController {
    rx;
    constructor(rx) {
        this.rx = rx;
    }
    list(user, status) {
        return this.rx.listForPharmacy(user, status);
    }
    async image(user, code, res) {
        const { buf, type } = await this.rx.image(user, code);
        res.set({ 'Content-Type': type, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Content-Disposition': 'inline' }).send(buf);
    }
    review(user, code, dto) {
        return this.rx.review(user, code, dto);
    }
};
__decorate([
    Get(),
    ApiQuery({ name: 'status', enum: PrescriptionStatus, required: false }),
    __param(0, CurrentUser()),
    __param(1, Query('status', new ParseEnumPipe(PrescriptionStatus, { optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PharmacyPrescriptionsController.prototype, "list", null);
__decorate([
    Get(':code/image'),
    Roles(Role.PHARMACIST),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], PharmacyPrescriptionsController.prototype, "image", null);
__decorate([
    Post(':code/review'),
    HttpCode(200),
    Roles(Role.PHARMACIST),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReviewPrescriptionDto]),
    __metadata("design:returntype", void 0)
], PharmacyPrescriptionsController.prototype, "review", null);
PharmacyPrescriptionsController = __decorate([
    ApiTags('pharmacy · prescriptions'),
    ApiBearerAuth(),
    PharmacyStaff(),
    Controller('pharmacy/prescriptions'),
    __metadata("design:paramtypes", [PrescriptionsService])
], PharmacyPrescriptionsController);
export { PharmacyPrescriptionsController };
//# sourceMappingURL=prescriptions.controller.js.map