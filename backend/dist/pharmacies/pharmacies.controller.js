var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../common/decorators.js';
import { PharmacyStatus } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
let PharmaciesController = class PharmaciesController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list() {
        return this.prisma.pharmacy.findMany({
            where: { status: PharmacyStatus.VERIFIED },
            select: { id: true, slug: true, name: true, area: true, coldChain: true, coverageAreas: true, openDays: true, opensAt: true, lastOrderAt: true },
            orderBy: { name: 'asc' },
        });
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PharmaciesController.prototype, "list", null);
PharmaciesController = __decorate([
    ApiTags('pharmacies'),
    Public(),
    Controller('pharmacies'),
    __metadata("design:paramtypes", [PrismaService])
], PharmaciesController);
export { PharmaciesController };
//# sourceMappingURL=pharmacies.controller.js.map