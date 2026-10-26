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
import { normalisePhone } from '../auth/phone.js';
import { RiderAlertsService } from '../delivery/rider-alerts.service.js';
import { isUniqueViolation } from '../common/codes.js';
import { DeliveryStatus, ProductClass, Role } from '../generated/prisma/client.js';
import { pharmacyAdminSelect } from '../onboarding/pharmacy-view.js';
import { PrismaService } from '../prisma/prisma.service.js';
let AdminService = class AdminService {
    prisma;
    audit;
    alerts;
    constructor(prisma, audit, alerts) {
        this.prisma = prisma;
        this.audit = audit;
        this.alerts = alerts;
    }
    async riders() {
        const riders = await this.prisma.user.findMany({
            where: { role: Role.RIDER },
            include: { riderProfile: true },
            orderBy: [{ firstName: 'asc' }, { lastName: 'asc' }],
        });
        const counts = await this.prisma.delivery.groupBy({ by: ['riderId', 'status'], where: { riderId: { in: riders.map((r) => r.id) } }, _count: true });
        const count = (id, statuses) => counts.filter((c) => c.riderId === id && statuses.includes(c.status)).reduce((s, c) => s + c._count, 0);
        return riders.map((r) => ({
            id: r.id,
            firstName: r.firstName,
            lastName: r.lastName,
            phone: r.phone,
            partner: r.riderProfile?.partner ?? null,
            coldChain: r.riderProfile?.coldChain ?? false,
            active: r.riderProfile?.active ?? false,
            online: !!r.riderProfile?.onlineSince,
            area: r.riderProfile?.area ?? null,
            activeJobs: count(r.id, [DeliveryStatus.ASSIGNED, DeliveryStatus.PICKED_UP]),
            delivered: count(r.id, [DeliveryStatus.DELIVERED]),
            failed: count(r.id, [DeliveryStatus.FAILED]),
        }));
    }
    async createRider(admin, dto) {
        const phone = normalisePhone(dto.phone);
        if (!phone)
            throw new BadRequestException('Enter a Nigerian mobile number, e.g. 0803 123 4567');
        if (await this.prisma.user.findUnique({ where: { phone }, select: { id: true } })) {
            throw new ConflictException('This number already has a Pilbridge account — riders need their own number');
        }
        try {
            const user = await this.prisma.$transaction(async (tx) => {
                const u = await tx.user.create({
                    data: {
                        phone,
                        firstName: dto.firstName.trim(),
                        lastName: dto.lastName.trim(),
                        role: Role.RIDER,
                        riderProfile: { create: { partner: dto.partner.trim(), coldChain: dto.coldChain ?? false } },
                    },
                });
                await this.audit.record({ actorId: admin.id, action: 'rider.created', entityType: 'User', entityId: u.id, metadata: { partner: dto.partner.trim() } }, tx);
                return u;
            });
            return (await this.riders()).find((r) => r.id === user.id);
        }
        catch (e) {
            if (isUniqueViolation(e))
                throw new ConflictException('This number already has a Pilbridge account');
            throw e;
        }
    }
    async updateRider(admin, id, dto) {
        const profile = await this.prisma.riderProfile.findUnique({ where: { userId: id } });
        if (!profile)
            throw new NotFoundException('Rider not found');
        const pausing = dto.active === false && profile.active;
        let handedBack = [];
        await this.prisma.$transaction(async (tx) => {
            if (pausing) {
                const carrying = await tx.delivery.count({ where: { riderId: id, status: DeliveryStatus.PICKED_UP } });
                if (carrying)
                    throw new ConflictException('This rider is carrying a parcel — pause them once it’s delivered or returned');
                handedBack = (await tx.delivery.findMany({ where: { riderId: id, status: DeliveryStatus.ASSIGNED }, select: { id: true } })).map((d) => d.id);
                await tx.delivery.updateMany({ where: { riderId: id, status: DeliveryStatus.ASSIGNED }, data: { status: DeliveryStatus.AWAITING_RIDER, riderId: null, assignedAt: null } });
            }
            await tx.riderProfile.update({
                where: { userId: id },
                data: {
                    ...(dto.active !== undefined ? { active: dto.active } : {}),
                    ...(dto.coldChain !== undefined ? { coldChain: dto.coldChain } : {}),
                    ...(dto.partner ? { partner: dto.partner.trim() } : {}),
                    ...(pausing ? { onlineSince: null, area: null } : {}),
                },
            });
            await this.audit.record({ actorId: admin.id, action: 'rider.updated', entityType: 'User', entityId: id, metadata: { active: dto.active ?? null, coldChain: dto.coldChain ?? null, partner: dto.partner ?? null } }, tx);
        });
        for (const jobId of handedBack)
            this.alerts.newJob(jobId, id);
        return (await this.riders()).find((r) => r.id === id);
    }
    pharmacies() {
        return this.prisma.pharmacy.findMany({
            select: pharmacyAdminSelect,
            orderBy: { name: 'asc' },
        });
    }
    async setPharmacyLocation(admin, id, dto) {
        const found = await this.prisma.pharmacy.findUnique({ where: { id }, select: { id: true } });
        if (!found)
            throw new NotFoundException('Pharmacy not found');
        return this.prisma.$transaction(async (tx) => {
            const ph = await tx.pharmacy.update({
                where: { id },
                data: { lat: dto.lat, lng: dto.lng },
                select: pharmacyAdminSelect,
            });
            await this.audit.record({ actorId: admin.id, action: 'pharmacy.location_set', entityType: 'Pharmacy', entityId: id, metadata: { lat: dto.lat, lng: dto.lng } }, tx);
            return ph;
        });
    }
    couriers() {
        return this.prisma.courier.findMany({ orderBy: [{ active: 'desc' }, { name: 'asc' }], include: { _count: { select: { deliveries: true } } } });
    }
    async createCourier(admin, dto) {
        try {
            const c = await this.prisma.courier.create({
                data: {
                    name: dto.name.trim(),
                    contact: dto.contact?.trim() || null,
                    acceptsPrescription: dto.acceptsPrescription ?? false,
                    acceptsColdChain: dto.acceptsColdChain ?? false,
                    approvalNote: dto.approvalNote?.trim() || null,
                    active: dto.active ?? true,
                    api: dto.api ?? null,
                    priority: dto.priority ?? 100,
                },
            });
            await this.audit.record({ actorId: admin.id, action: 'courier.created', entityType: 'Courier', entityId: c.id, metadata: { name: c.name, acceptsPrescription: c.acceptsPrescription, acceptsColdChain: c.acceptsColdChain } });
            return c;
        }
        catch (e) {
            if (isUniqueViolation(e))
                throw new ConflictException('A courier with this name already exists');
            throw e;
        }
    }
    async updateCourier(admin, id, dto) {
        if (!(await this.prisma.courier.findUnique({ where: { id }, select: { id: true } })))
            throw new NotFoundException('Courier not found');
        const { contact, acceptsPrescription, acceptsColdChain, approvalNote, active, api, priority } = dto;
        const c = await this.prisma.courier.update({ where: { id }, data: { contact, acceptsPrescription, acceptsColdChain, approvalNote, active, api, priority } });
        await this.audit.record({ actorId: admin.id, action: 'courier.updated', entityType: 'Courier', entityId: id, metadata: { acceptsPrescription: c.acceptsPrescription, acceptsColdChain: c.acceptsColdChain, active: c.active, approvalNote: c.approvalNote } });
        return c;
    }
    products() {
        return this.prisma.product.findMany({
            where: { classification: { not: ProductClass.CONTROLLED } },
            select: { id: true, name: true, strength: true, category: true, classification: true, coldChain: true, deliveryAllowed: true },
            orderBy: [{ category: 'asc' }, { name: 'asc' }],
        });
    }
    async setDeliveryAllowed(admin, id, deliveryAllowed) {
        const p = await this.prisma.product.findUnique({ where: { id }, select: { classification: true } });
        if (!p || p.classification === ProductClass.CONTROLLED)
            throw new NotFoundException('Product not found');
        const updated = await this.prisma.product.update({
            where: { id },
            data: { deliveryAllowed },
            select: { id: true, name: true, strength: true, category: true, classification: true, coldChain: true, deliveryAllowed: true },
        });
        await this.audit.record({ actorId: admin.id, action: 'product.delivery_eligibility', entityType: 'Product', entityId: id, metadata: { deliveryAllowed } });
        return updated;
    }
    async setPharmacyPhone(admin, id, raw) {
        const phone = normalisePhone(raw);
        if (!phone)
            throw new BadRequestException('Enter a Nigerian mobile number, e.g. 0803 123 4567');
        if (!(await this.prisma.pharmacy.findUnique({ where: { id }, select: { id: true } })))
            throw new NotFoundException('Pharmacy not found');
        const ph = await this.prisma.pharmacy.update({
            where: { id },
            data: { phone },
            select: pharmacyAdminSelect,
        });
        await this.audit.record({ actorId: admin.id, action: 'pharmacy.phone_set', entityType: 'Pharmacy', entityId: id });
        return ph;
    }
};
AdminService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        AuditService,
        RiderAlertsService])
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map