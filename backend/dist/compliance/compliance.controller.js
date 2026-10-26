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
import { DocumentKind, DocumentStatus, Role } from '../generated/prisma/client.js';
import { ComplianceWatchService } from './compliance-watch.service.js';
import { ComplianceService } from './compliance.service.js';
import { ReviewDocumentDto, UploadDocumentDto } from './dto.js';
const MAX_UPLOAD = 10 * 1024 * 1024;
const sendFile = (res, { buf, type }) => res.set({ 'Content-Type': type, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Content-Disposition': 'inline' }).send(buf);
let PharmacyComplianceController = class PharmacyComplianceController {
    compliance;
    constructor(compliance) {
        this.compliance = compliance;
    }
    overview(user) {
        return this.compliance.overview(user);
    }
    upload(user, file, dto) {
        return this.compliance.upload(user, file, dto);
    }
    async file(user, id, res) {
        sendFile(res, await this.compliance.file(user, id));
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PharmacyComplianceController.prototype, "overview", null);
__decorate([
    Post('documents'),
    ApiConsumes('multipart/form-data'),
    ApiBody({
        schema: {
            type: 'object',
            required: ['file', 'kind', 'reference'],
            properties: { file: { type: 'string', format: 'binary' }, kind: { type: 'string', enum: Object.values(DocumentKind) }, reference: { type: 'string' }, issuer: { type: 'string' }, expiresAt: { type: 'string', example: '2027-11-12' } },
        },
    }),
    UseInterceptors(FileInterceptor('file', { limits: { fileSize: MAX_UPLOAD, files: 1 } })),
    __param(0, CurrentUser()),
    __param(1, UploadedFile(new ParseFilePipe({ validators: [new MaxFileSizeValidator({ maxSize: MAX_UPLOAD })], fileIsRequired: true }))),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UploadDocumentDto]),
    __metadata("design:returntype", void 0)
], PharmacyComplianceController.prototype, "upload", null);
__decorate([
    Get('documents/:id/file'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], PharmacyComplianceController.prototype, "file", null);
PharmacyComplianceController = __decorate([
    ApiTags('pharmacy · compliance'),
    ApiBearerAuth(),
    PharmacyStaff(),
    Controller('pharmacy/compliance'),
    __metadata("design:paramtypes", [ComplianceService])
], PharmacyComplianceController);
export { PharmacyComplianceController };
let AdminComplianceController = class AdminComplianceController {
    compliance;
    watch;
    constructor(compliance, watch) {
        this.compliance = compliance;
        this.watch = watch;
    }
    documents(status) {
        return this.compliance.forReview(status);
    }
    async file(user, id, res) {
        sendFile(res, await this.compliance.file(user, id));
    }
    review(user, id, dto) {
        return this.compliance.review(user, id, dto);
    }
    check() {
        return this.watch.check();
    }
};
__decorate([
    Get('documents'),
    ApiQuery({ name: 'status', enum: DocumentStatus, required: false }),
    __param(0, Query('status', new ParseEnumPipe(DocumentStatus, { optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminComplianceController.prototype, "documents", null);
__decorate([
    Get('documents/:id/file'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], AdminComplianceController.prototype, "file", null);
__decorate([
    Post('documents/:id/review'),
    HttpCode(200),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReviewDocumentDto]),
    __metadata("design:returntype", void 0)
], AdminComplianceController.prototype, "review", null);
__decorate([
    Post('check'),
    HttpCode(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminComplianceController.prototype, "check", null);
AdminComplianceController = __decorate([
    ApiTags('admin · compliance'),
    ApiBearerAuth(),
    Roles(Role.PLATFORM_ADMIN),
    Controller('admin/compliance'),
    __metadata("design:paramtypes", [ComplianceService,
        ComplianceWatchService])
], AdminComplianceController);
export { AdminComplianceController };
//# sourceMappingURL=compliance.controller.js.map