var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { AuditService } from '../audit/audit.service.js';
import { isUniqueViolation } from '../common/codes.js';
import { SHORT_DATED_DAYS } from '../common/fees.js';
import { BatchStatus, ProductClass } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
const DAY = 24 * 60 * 60 * 1000;
let InventoryService = class InventoryService {
    prisma;
    audit;
    constructor(prisma, audit) {
        this.prisma = prisma;
        this.audit = audit;
    }
    async list(user, status) {
        const batches = await this.prisma.batch.findMany({
            where: { pharmacyId: user.pharmacyId, ...(status ? { status } : {}) },
            include: { product: { select: { name: true, strength: true, classification: true, coldChain: true } } },
            orderBy: [{ expiresAt: 'asc' }, { batchNumber: 'asc' }],
        });
        const now = Date.now();
        return batches.map((b) => ({
            ...b,
            expired: b.expiresAt.getTime() <= now,
            shortDated: b.expiresAt.getTime() - now <= SHORT_DATED_DAYS * DAY,
        }));
    }
    async own(user, id) {
        const batch = await this.prisma.batch.findFirst({ where: { id, pharmacyId: user.pharmacyId } });
        if (!batch)
            throw new NotFoundException('Batch not found');
        return batch;
    }
    async receive(user, dto) {
        const product = await this.prisma.product.findUnique({ where: { id: dto.productId } });
        if (!product)
            throw new NotFoundException('Product not found');
        if (product.classification === ProductClass.CONTROLLED)
            throw new BadRequestException('Controlled medicines can’t be stocked on Pilbridge');
        const expiresAt = new Date(dto.expiresAt);
        if (expiresAt.getTime() <= Date.now())
            throw new BadRequestException('This batch has already expired');
        try {
            return await this.prisma.$transaction(async (tx) => {
                const batch = await tx.batch.create({
                    data: { pharmacyId: user.pharmacyId, productId: dto.productId, batchNumber: dto.batchNumber.trim(), expiresAt, quantity: dto.quantity, priceKobo: dto.priceKobo, location: dto.location },
                });
                await this.audit.record({ actorId: user.id, action: 'batch.received', entityType: 'Batch', entityId: batch.id, metadata: { quantity: dto.quantity } }, tx);
                return batch;
            });
        }
        catch (e) {
            if (isUniqueViolation(e))
                throw new ConflictException('This batch number is already recorded for this product');
            throw e;
        }
    }
    async adjust(user, id, dto) {
        const batch = await this.own(user, id);
        return this.prisma.$transaction(async (tx) => {
            const res = await tx.batch.updateMany({
                where: { id: batch.id, quantity: { gte: -Math.min(dto.delta, 0) } },
                data: { quantity: { increment: dto.delta } },
            });
            if (res.count === 0)
                throw new BadRequestException('Not enough stock to remove that many');
            await this.audit.record({ actorId: user.id, action: 'batch.adjusted', entityType: 'Batch', entityId: batch.id, metadata: { delta: dto.delta, reason: dto.reason } }, tx);
            return tx.batch.findUniqueOrThrow({ where: { id: batch.id } });
        });
    }
    async quarantine(user, id, reason) {
        const batch = await this.own(user, id);
        if (batch.status !== BatchStatus.SALEABLE)
            throw new BadRequestException('Only saleable stock can be quarantined');
        return this.prisma.$transaction(async (tx) => {
            const updated = await tx.batch.update({ where: { id: batch.id }, data: { status: BatchStatus.QUARANTINED, quarantineReason: reason } });
            await this.audit.record({ actorId: user.id, action: 'batch.quarantined', entityType: 'Batch', entityId: batch.id, metadata: { reason } }, tx);
            return updated;
        });
    }
    async release(user, id, dto) {
        const batch = await this.own(user, id);
        if (batch.status !== BatchStatus.QUARANTINED)
            throw new BadRequestException('Only quarantined stock can be released');
        if (batch.expiresAt.getTime() <= Date.now())
            throw new BadRequestException('Expired stock can’t be released');
        return this.prisma.$transaction(async (tx) => {
            const updated = await tx.batch.update({ where: { id: batch.id }, data: { status: BatchStatus.SALEABLE, quarantineReason: null } });
            await this.audit.record({ actorId: user.id, action: 'batch.released', entityType: 'Batch', entityId: batch.id, metadata: { note: dto.note ?? null, previousReason: batch.quarantineReason } }, tx);
            return updated;
        });
    }
};
InventoryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        AuditService])
], InventoryService);
export { InventoryService };
//# sourceMappingURL=inventory.service.js.map