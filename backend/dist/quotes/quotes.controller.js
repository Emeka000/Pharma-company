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
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsIn, IsInt, IsOptional, IsString, Max, Min, ValidateNested } from 'class-validator';
import { sellableBatch } from '../catalog/catalog.controller.js';
import { Public } from '../common/decorators.js';
import { AREA_KEYS, areaByKey } from '../delivery/areas.js';
import { distanceKm, etaMinutes } from '../delivery/eta.js';
import { FEES } from '../common/fees.js';
import { PharmacyStatus, ProductClass } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
class QuoteItemDto {
    productId;
    quantity;
}
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], QuoteItemDto.prototype, "productId", void 0);
__decorate([
    ApiProperty({ example: 1 }),
    IsInt(),
    Min(1),
    Max(20),
    __metadata("design:type", Number)
], QuoteItemDto.prototype, "quantity", void 0);
class QuoteDto {
    items;
    area;
}
__decorate([
    ApiProperty({ type: [QuoteItemDto] }),
    ValidateNested({ each: true }),
    Type(() => QuoteItemDto),
    ArrayMinSize(1),
    ArrayMaxSize(20),
    __metadata("design:type", Array)
], QuoteDto.prototype, "items", void 0);
__decorate([
    ApiProperty({ enum: AREA_KEYS, required: false, description: 'Delivery area: adds estimated delivery times and ranks the fastest first' }),
    IsOptional(),
    IsIn(AREA_KEYS),
    __metadata("design:type", String)
], QuoteDto.prototype, "area", void 0);
let QuotesController = class QuotesController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async quote(dto) {
        const ids = [...new Set(dto.items.map((i) => i.productId))];
        const [pharmacies, products] = await Promise.all([
            this.prisma.pharmacy.findMany({ where: { status: PharmacyStatus.VERIFIED }, orderBy: { name: 'asc' } }),
            this.prisma.product.findMany({
                where: { id: { in: ids }, classification: { not: ProductClass.CONTROLLED } },
                include: { batches: { where: sellableBatch(), orderBy: { expiresAt: 'asc' }, select: { pharmacyId: true, quantity: true, priceKobo: true } } },
            }),
        ]);
        const area = areaByKey(dto.area);
        const serving = area ? pharmacies.filter((ph) => !ph.coverageAreas.length || ph.coverageAreas.includes(area.key)) : pharmacies;
        const quotes = serving.map((ph) => {
            const lines = dto.items.map((item) => {
                const p = products.find((x) => x.id === item.productId);
                const batches = p?.batches.filter((b) => b.pharmacyId === ph.id) ?? [];
                const stock = batches.reduce((s, b) => s + b.quantity, 0);
                const available = !!p && stock >= item.quantity && (!p.coldChain || ph.coldChain);
                return { productId: item.productId, quantity: item.quantity, available, unitPriceKobo: available ? batches[0].priceKobo : null, coldChain: !!p?.coldChain };
            });
            const priced = lines.filter((l) => l.available);
            const subtotalKobo = priced.reduce((s, l) => s + l.unitPriceKobo * l.quantity, 0);
            const deliveryKobo = !priced.length ? 0 : priced.some((l) => l.coldChain) ? FEES.coldChainDeliveryKobo : FEES.deliveryKobo;
            const serviceKobo = priced.length ? FEES.serviceKobo : 0;
            const eta = area ? etaMinutes(ph, area) : null;
            return {
                pharmacy: { id: ph.id, name: ph.name, area: ph.area, coldChain: ph.coldChain },
                etaMinutes: eta,
                distanceKm: area && ph.lat != null && ph.lng != null ? Math.round(distanceKm({ lat: ph.lat, lng: ph.lng }, area) * 10) / 10 : null,
                lines,
                unavailable: lines.length - priced.length,
                subtotalKobo,
                deliveryKobo,
                serviceKobo,
                totalKobo: subtotalKobo + deliveryKobo + serviceKobo,
            };
        });
        if (!area)
            return quotes;
        const rank = (q) => [q.unavailable > 0 ? 1 : 0, q.etaMinutes ?? Infinity];
        return quotes.sort((a, b) => {
            const [ua, ea] = rank(a);
            const [ub, eb] = rank(b);
            return ua - ub || ea - eb;
        });
    }
};
__decorate([
    Post(),
    HttpCode(200),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuoteDto]),
    __metadata("design:returntype", Promise)
], QuotesController.prototype, "quote", null);
QuotesController = __decorate([
    ApiTags('catalog'),
    Public(),
    Controller('quotes'),
    __metadata("design:paramtypes", [PrismaService])
], QuotesController);
export { QuotesController };
//# sourceMappingURL=quotes.controller.js.map