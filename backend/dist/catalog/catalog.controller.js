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
import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Public } from '../common/decorators.js';
import { BatchStatus, PharmacyStatus, ProductClass } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
export const sellableBatch = () => ({
    status: BatchStatus.SALEABLE,
    quantity: { gt: 0 },
    expiresAt: { gt: new Date() },
    pharmacy: { status: PharmacyStatus.VERIFIED },
});
let CatalogController = class CatalogController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(q, category) {
        const term = q?.trim();
        const products = await this.prisma.product.findMany({
            where: {
                classification: { not: ProductClass.CONTROLLED },
                ...(category ? { category } : {}),
                ...(term
                    ? {
                        OR: [
                            { name: { contains: term, mode: 'insensitive' } },
                            { genericName: { contains: term, mode: 'insensitive' } },
                            { uses: { contains: term, mode: 'insensitive' } },
                        ],
                    }
                    : {}),
            },
            include: { batches: { where: sellableBatch(), select: { pharmacyId: true, priceKobo: true } } },
            orderBy: { name: 'asc' },
        });
        return products.map(({ batches, ...p }) => ({
            ...p,
            pharmaciesInStock: new Set(batches.map((b) => b.pharmacyId)).size,
            fromPriceKobo: batches.length ? Math.min(...batches.map((b) => b.priceKobo)) : null,
        }));
    }
    async get(slug) {
        const product = await this.prisma.product.findUnique({ where: { slug } });
        if (!product || product.classification === ProductClass.CONTROLLED)
            throw new NotFoundException('Product not found');
        return product;
    }
};
__decorate([
    Get(),
    ApiQuery({ name: 'q', required: false }),
    ApiQuery({ name: 'category', required: false }),
    __param(0, Query('q')),
    __param(1, Query('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "list", null);
__decorate([
    Get(':slug'),
    __param(0, Param('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "get", null);
CatalogController = __decorate([
    ApiTags('catalog'),
    Public(),
    Controller('products'),
    __metadata("design:paramtypes", [PrismaService])
], CatalogController);
export { CatalogController };
//# sourceMappingURL=catalog.controller.js.map