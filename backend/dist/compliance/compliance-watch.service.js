var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ComplianceWatchService_1;
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuditService } from '../audit/audit.service.js';
import { DocumentKind, DocumentStatus, PharmacyStatus } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { StaffTextsService } from '../sms/staff-texts.service.js';
import { DOCUMENT_LABELS } from './dto.js';
import { dueReminder } from './expiry.js';
const lagosDate = (d) => d.toLocaleDateString('en-GB', { timeZone: 'Africa/Lagos', day: 'numeric', month: 'short', year: 'numeric' });
let ComplianceWatchService = ComplianceWatchService_1 = class ComplianceWatchService {
    prisma;
    audit;
    texts;
    config;
    log = new Logger(ComplianceWatchService_1.name);
    timer;
    constructor(prisma, audit, texts, config) {
        this.prisma = prisma;
        this.audit = audit;
        this.texts = texts;
        this.config = config;
    }
    onApplicationBootstrap() {
        const every = Number(this.config.get('COMPLIANCE_CHECK_MS') ?? 3_600_000);
        if (every > 0) {
            this.timer = setInterval(() => void this.check().catch((e) => this.log.error(`Compliance check failed: ${String(e)}`)), every);
            this.timer.unref();
        }
    }
    onModuleDestroy() {
        clearInterval(this.timer);
    }
    async check(now = new Date()) {
        const suspended = await this.suspendExpired(now);
        const reminded = [...(await this.licenceReminders(now)), ...(await this.documentReminders(now))];
        if (suspended.length)
            this.log.warn(`Suspended for an expired licence: ${suspended.join(', ')}`);
        return { suspended, reminded };
    }
    async suspendExpired(now) {
        const expired = await this.prisma.pharmacy.findMany({ where: { status: PharmacyStatus.VERIFIED, licenceExpiresAt: { lte: now } }, select: { id: true, name: true, licenceExpiresAt: true } });
        const done = [];
        for (const ph of expired) {
            const reason = `Premises licence expired ${lagosDate(ph.licenceExpiresAt)}`;
            const claimed = await this.prisma.$transaction(async (tx) => {
                const r = await tx.pharmacy.updateMany({ where: { id: ph.id, status: PharmacyStatus.VERIFIED, licenceExpiresAt: { lte: now } }, data: { status: PharmacyStatus.SUSPENDED, suspendedAt: now, suspendedReason: reason } });
                if (r.count)
                    await this.audit.record({ actorId: null, action: 'pharmacy.suspended', entityType: 'Pharmacy', entityId: ph.id, metadata: { reason, automatic: true } }, tx);
                return r.count > 0;
            });
            if (!claimed)
                continue;
            done.push(ph.name);
            await this.texts.pharmacists(ph.id, `${ph.name.slice(0, 40)} is paused on Pilbridge: the premises licence expired. Upload the renewal under Compliance in the portal.`);
            await this.texts.admins(`${ph.name.slice(0, 40)} was suspended automatically: premises licence expired.`);
        }
        return done;
    }
    async licenceReminders(now) {
        const soon = new Date(now.getTime() + 61 * 24 * 60 * 60_000);
        const pharmacies = await this.prisma.pharmacy.findMany({ where: { status: PharmacyStatus.VERIFIED, licenceExpiresAt: { gt: now, lte: soon } }, select: { id: true, name: true, licenceExpiresAt: true, licenceReminderDays: true } });
        const sent = [];
        for (const ph of pharmacies) {
            const due = dueReminder(ph.licenceExpiresAt, ph.licenceReminderDays, now);
            if (due === null)
                continue;
            const claimed = await this.prisma.pharmacy.updateMany({ where: { id: ph.id, licenceExpiresAt: ph.licenceExpiresAt, licenceReminderDays: ph.licenceReminderDays }, data: { licenceReminderDays: due } });
            if (!claimed.count)
                continue;
            sent.push(`${ph.name}: licence ${due}d`);
            await this.texts.pharmacists(ph.id, `Your premises licence expires ${lagosDate(ph.licenceExpiresAt)}. Upload the renewal under Compliance in the Pilbridge portal to stay listed.`);
        }
        return sent;
    }
    async documentReminders(now) {
        const soon = new Date(now.getTime() + 61 * 24 * 60 * 60_000);
        const docs = await this.prisma.complianceDocument.findMany({
            where: { status: DocumentStatus.VERIFIED, kind: { not: DocumentKind.PREMISES_LICENCE }, expiresAt: { gt: now, lte: soon }, pharmacy: { status: PharmacyStatus.VERIFIED } },
            select: { id: true, pharmacyId: true, kind: true, expiresAt: true, reminderDays: true, createdAt: true },
        });
        const sent = [];
        for (const d of docs) {
            const newer = await this.prisma.complianceDocument.count({ where: { pharmacyId: d.pharmacyId, kind: d.kind, status: DocumentStatus.VERIFIED, createdAt: { gt: d.createdAt } } });
            if (newer)
                continue;
            const due = dueReminder(d.expiresAt, d.reminderDays, now);
            if (due === null)
                continue;
            const claimed = await this.prisma.complianceDocument.updateMany({ where: { id: d.id, reminderDays: d.reminderDays }, data: { reminderDays: due } });
            if (!claimed.count)
                continue;
            sent.push(`${d.id}: ${d.kind} ${due}d`);
            await this.texts.pharmacists(d.pharmacyId, `Your ${DOCUMENT_LABELS[d.kind].name.toLowerCase()} expires ${lagosDate(d.expiresAt)}. Upload the renewal under Compliance in the Pilbridge portal.`);
        }
        return sent;
    }
};
ComplianceWatchService = ComplianceWatchService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        AuditService,
        StaffTextsService,
        ConfigService])
], ComplianceWatchService);
export { ComplianceWatchService };
//# sourceMappingURL=compliance-watch.service.js.map