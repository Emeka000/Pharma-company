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
import { Body, Controller, Get, Param, ParseEnumPipe, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CurrentUser, PharmacyStaff, Roles } from '../common/decorators.js';
import { IncidentStatus, Role } from '../generated/prisma/client.js';
import { ReportIncidentDto, ResolveIncidentDto } from './dto.js';
import { IncidentsService } from './incidents.service.js';
let PatientIncidentsController = class PatientIncidentsController {
    incidents;
    constructor(incidents) {
        this.incidents = incidents;
    }
    report(user, code, dto) {
        return this.incidents.report(user, code, dto);
    }
};
__decorate([
    Post(':code/incidents'),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReportIncidentDto]),
    __metadata("design:returntype", void 0)
], PatientIncidentsController.prototype, "report", null);
PatientIncidentsController = __decorate([
    ApiTags('incidents'),
    ApiBearerAuth(),
    Roles(Role.PATIENT),
    Controller('orders'),
    __metadata("design:paramtypes", [IncidentsService])
], PatientIncidentsController);
export { PatientIncidentsController };
let PharmacyIncidentsController = class PharmacyIncidentsController {
    incidents;
    constructor(incidents) {
        this.incidents = incidents;
    }
    report(user, code, dto) {
        return this.incidents.report(user, code, dto);
    }
};
__decorate([
    Post(':code/incidents'),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReportIncidentDto]),
    __metadata("design:returntype", void 0)
], PharmacyIncidentsController.prototype, "report", null);
PharmacyIncidentsController = __decorate([
    ApiTags('incidents'),
    ApiBearerAuth(),
    PharmacyStaff(),
    Controller('pharmacy/orders'),
    __metadata("design:paramtypes", [IncidentsService])
], PharmacyIncidentsController);
export { PharmacyIncidentsController };
let RiderIncidentsController = class RiderIncidentsController {
    incidents;
    constructor(incidents) {
        this.incidents = incidents;
    }
    report(user, code, dto) {
        return this.incidents.report(user, code, dto);
    }
};
__decorate([
    Post(':code/incidents'),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReportIncidentDto]),
    __metadata("design:returntype", void 0)
], RiderIncidentsController.prototype, "report", null);
RiderIncidentsController = __decorate([
    ApiTags('incidents'),
    ApiBearerAuth(),
    Roles(Role.RIDER),
    Controller('rider/orders'),
    __metadata("design:paramtypes", [IncidentsService])
], RiderIncidentsController);
export { RiderIncidentsController };
let AdminIncidentsController = class AdminIncidentsController {
    incidents;
    constructor(incidents) {
        this.incidents = incidents;
    }
    list(status) {
        return this.incidents.list(status);
    }
    resolve(user, id, dto) {
        return this.incidents.resolve(user, id, dto.resolution);
    }
    report(user, code, dto) {
        return this.incidents.report(user, code, dto);
    }
};
__decorate([
    Get(),
    ApiQuery({ name: 'status', enum: IncidentStatus, required: false }),
    __param(0, Query('status', new ParseEnumPipe(IncidentStatus, { optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminIncidentsController.prototype, "list", null);
__decorate([
    Post(':id/resolve'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ResolveIncidentDto]),
    __metadata("design:returntype", void 0)
], AdminIncidentsController.prototype, "resolve", null);
__decorate([
    Post('orders/:code'),
    __param(0, CurrentUser()),
    __param(1, Param('code')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ReportIncidentDto]),
    __metadata("design:returntype", void 0)
], AdminIncidentsController.prototype, "report", null);
AdminIncidentsController = __decorate([
    ApiTags('admin'),
    ApiBearerAuth(),
    Roles(Role.PLATFORM_ADMIN),
    Controller('admin/incidents'),
    __metadata("design:paramtypes", [IncidentsService])
], AdminIncidentsController);
export { AdminIncidentsController };
//# sourceMappingURL=incidents.controller.js.map