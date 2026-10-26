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
import { Body, Controller, Get, Header, Param, Post, Query, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CurrentUser, Roles } from '../common/decorators.js';
import { Role } from '../generated/prisma/client.js';
import { CreateInvoiceDto, ReconcileInvoiceDto } from './dto.js';
import { ReportsService } from './reports.service.js';
let ReportsController = class ReportsController {
    reports;
    constructor(reports) {
        this.reports = reports;
    }
    delivery(from, to) {
        return this.reports.delivery(from, to);
    }
    async csv(res, from, to) {
        const { filename, body } = await this.reports.csv(from, to);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        return body;
    }
    invoices() {
        return this.reports.invoices();
    }
    createInvoice(user, id, dto) {
        return this.reports.createInvoice(user, id, dto);
    }
    invoice(id) {
        return this.reports.invoice(id);
    }
    reconcile(user, id, dto) {
        return this.reports.markReconciled(user, id, dto.note);
    }
};
__decorate([
    Get('reports/delivery'),
    ApiQuery({ name: 'from', required: false, example: '2026-10-05' }),
    ApiQuery({ name: 'to', required: false, example: '2026-10-11' }),
    __param(0, Query('from')),
    __param(1, Query('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "delivery", null);
__decorate([
    Get('reports/deliveries.csv'),
    Header('Content-Type', 'text/csv; charset=utf-8'),
    __param(0, Res({ passthrough: true })),
    __param(1, Query('from')),
    __param(2, Query('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "csv", null);
__decorate([
    Get('invoices'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "invoices", null);
__decorate([
    Post('couriers/:id/invoices'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, CreateInvoiceDto]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "createInvoice", null);
__decorate([
    Get('invoices/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "invoice", null);
__decorate([
    Post('invoices/:id/reconcile'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReconcileInvoiceDto]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "reconcile", null);
ReportsController = __decorate([
    ApiTags('admin · reports'),
    ApiBearerAuth(),
    Roles(Role.PLATFORM_ADMIN),
    Controller('admin'),
    __metadata("design:paramtypes", [ReportsService])
], ReportsController);
export { ReportsController };
//# sourceMappingURL=reports.controller.js.map