var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var IncidentsService_1;
import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomBytes } from 'node:crypto';
import { AuditService } from '../audit/audit.service.js';
import { appUrl } from '../common/app-url.js';
import { IncidentStatus, IncidentType, Role } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { SmsService } from '../sms/sms.service.js';
export const CRITICAL = [IncidentType.TAMPERED, IncidentType.LOST, IncidentType.TEMPERATURE_EXCURSION];
const label = {
    DAMAGED: 'damaged parcel',
    TAMPERED: 'seal broken or tampered',
    LOST: 'parcel lost',
    TEMPERATURE_EXCURSION: 'temperature excursion',
    WRONG_ITEM: 'wrong item',
    OTHER: 'other problem',
};
let IncidentsService = IncidentsService_1 = class IncidentsService {
    prisma;
    audit;
    sms;
    config;
    log = new Logger(IncidentsService_1.name);
    constructor(prisma, audit, sms, config) {
        this.prisma = prisma;
        this.audit = audit;
        this.sms = sms;
        this.config = config;
    }
    async report(user, orderCode, dto) {
        const order = await this.prisma.order.findUnique({
            where: { code: orderCode },
            include: { deliveries: { orderBy: { createdAt: 'desc' }, take: 1 } },
        });
        const latest = order?.deliveries[0];
        const allowed = !!order &&
            (user.role === Role.PLATFORM_ADMIN ||
                (user.role === Role.PATIENT && order.patientId === user.id) ||
                ((user.role === Role.PHARMACIST || user.role === Role.PHARMACY_STAFF) && order.pharmacyId === user.pharmacyId) ||
                (user.role === Role.RIDER && latest?.riderId === user.id));
        if (!order || !allowed)
            throw new NotFoundException('Order not found');
        const incident = await this.prisma.$transaction(async (tx) => {
            const created = await tx.incident.create({
                data: {
                    code: `INC-${randomBytes(3).toString('hex').toUpperCase()}`,
                    orderId: order.id,
                    deliveryId: latest?.id ?? null,
                    type: dto.type,
                    description: dto.description.trim(),
                    reportedById: user.id,
                    reporterRole: user.role,
                },
            });
            await this.audit.record({ actorId: user.id, action: 'incident.reported', entityType: 'Incident', entityId: created.id, metadata: { type: dto.type, order: order.code } }, tx);
            return created;
        });
        if (CRITICAL.includes(dto.type))
            void this.escalate(incident.code, order.code, order.pharmacyId, dto.type);
        return { code: incident.code, type: incident.type, status: incident.status, critical: CRITICAL.includes(dto.type) };
    }
    list(status) {
        return this.prisma.incident.findMany({
            where: status ? { status } : {},
            include: { order: { select: { code: true, status: true, pharmacy: { select: { name: true } } } }, delivery: { select: { code: true, provider: true, courier: { select: { name: true } } } } },
            orderBy: [{ status: 'asc' }, { createdAt: 'desc' }],
            take: 200,
        });
    }
    async resolve(admin, id, resolution) {
        const found = await this.prisma.incident.findUnique({ where: { id } });
        if (!found)
            throw new NotFoundException('Incident not found');
        return this.prisma.$transaction(async (tx) => {
            const r = await tx.incident.updateMany({
                where: { id, status: IncidentStatus.OPEN },
                data: { status: IncidentStatus.RESOLVED, resolution: resolution.trim(), resolvedById: admin.id, resolvedAt: new Date() },
            });
            if (r.count === 0)
                throw new ConflictException('This incident is already resolved');
            await this.audit.record({ actorId: admin.id, action: 'incident.resolved', entityType: 'Incident', entityId: id, metadata: { resolution: resolution.trim() } }, tx);
            return tx.incident.findUniqueOrThrow({ where: { id } });
        });
    }
    async escalate(incidentCode, orderCode, pharmacyId, type) {
        try {
            const people = await this.prisma.user.findMany({
                where: { phone: { not: null }, OR: [{ role: Role.PLATFORM_ADMIN }, { role: Role.PHARMACIST, pharmacyId }] },
                select: { phone: true },
            });
            const text = `Pilbridge URGENT: ${incidentCode} on order ${orderCode} - ${label[type]}. Check it now: ${appUrl(this.config)}/admin`;
            for (const p of people) {
                await this.sms.sendText(p.phone, text).catch((e) => this.log.warn(`Incident text not sent: ${String(e)}`));
            }
        }
        catch (e) {
            this.log.error(`Incident escalation failed for ${incidentCode}: ${String(e)}`);
        }
    }
};
IncidentsService = IncidentsService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        AuditService,
        SmsService,
        ConfigService])
], IncidentsService);
export { IncidentsService };
//# sourceMappingURL=incidents.service.js.map