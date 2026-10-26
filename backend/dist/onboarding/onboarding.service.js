var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { AuditService } from '../audit/audit.service.js';
import { SessionsService } from '../auth/sessions.service.js';
import { normalisePhone } from '../auth/phone.js';
import { applicationCode, isUniqueViolation, withUniqueCode } from '../common/codes.js';
import { ApplicationStatus, OrderStatus, PharmacyStatus, Role } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { StaffTextsService } from '../sms/staff-texts.service.js';
import { DETAIL_KEY } from './dto.js';
import { pharmacyAdminSelect } from './pharmacy-view.js';
const OPEN_ORDERS = [OrderStatus.PHARMACIST_REVIEW, OrderStatus.ACCEPTED, OrderStatus.PREPARING, OrderStatus.READY];
const staffSelect = { id: true, firstName: true, lastName: true, phone: true, role: true, pcnRegNo: true, createdAt: true };
const BAD_PHONE = 'Enter a Nigerian mobile number, e.g. 0803 123 4567';
const slugify = (s) => s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50) || 'pharmacy';
let OnboardingService = class OnboardingService {
    prisma;
    audit;
    texts;
    sessions;
    constructor(prisma, audit, texts, sessions) {
        this.prisma = prisma;
        this.audit = audit;
        this.texts = texts;
        this.sessions = sessions;
    }
    async pharmacy(id) {
        const ph = await this.prisma.pharmacy.findUnique({ where: { id }, select: { ...pharmacyAdminSelect, staff: { select: staffSelect, orderBy: [{ role: 'asc' }, { firstName: 'asc' }] } } });
        if (!ph)
            throw new NotFoundException('Pharmacy not found');
        return ph;
    }
    async createPharmacy(admin, dto) {
        const licenceExpiresAt = new Date(dto.licenceExpiresAt);
        if (licenceExpiresAt.getTime() <= Date.now())
            throw new UnprocessableEntityException('The premises licence has expired — a pharmacy needs a current licence');
        const phone = dto.phone ? normalisePhone(dto.phone) : null;
        if (dto.phone && !phone)
            throw new BadRequestException(BAD_PHONE);
        const base = slugify(`${dto.name}-${dto.area}`);
        let id = null;
        for (let i = 0; i < 5 && !id; i++) {
            const slug = i === 0 ? base : `${base}-${i + 1}`;
            try {
                id = await this.prisma.$transaction(async (tx) => {
                    const ph = await tx.pharmacy.create({
                        data: {
                            slug,
                            name: dto.name.trim(),
                            area: dto.area.trim(),
                            address: dto.address.trim(),
                            premisesLicenceNo: dto.premisesLicenceNo.trim(),
                            licenceExpiresAt,
                            superintendentName: dto.superintendentName?.trim() || null,
                            email: dto.email?.toLowerCase() ?? null,
                            phone,
                            coldChain: dto.coldChain ?? false,
                            lat: dto.lat ?? null,
                            lng: dto.lng ?? null,
                            status: PharmacyStatus.PENDING_VERIFICATION,
                        },
                    });
                    if (dto.applicationId) {
                        const linked = await tx.partnerApplication.updateMany({
                            where: { id: dto.applicationId, kind: 'PHARMACY', pharmacyId: null },
                            data: { pharmacyId: ph.id, status: ApplicationStatus.APPROVED, reviewedById: admin.id, reviewedAt: new Date() },
                        });
                        if (linked.count === 0)
                            throw new ConflictException('That application isn’t a pharmacy application, or already has a pharmacy');
                    }
                    await this.audit.record({ actorId: admin.id, action: 'pharmacy.created', entityType: 'Pharmacy', entityId: ph.id, metadata: { name: ph.name, applicationId: dto.applicationId ?? null } }, tx);
                    return ph.id;
                });
            }
            catch (e) {
                if (!isUniqueViolation(e))
                    throw e;
            }
        }
        if (!id)
            throw new ConflictException('A pharmacy with this name and area already exists');
        return this.pharmacy(id);
    }
    async updatePharmacy(admin, id, dto) {
        const current = await this.prisma.pharmacy.findUnique({ where: { id }, select: { licenceExpiresAt: true, status: true } });
        if (!current)
            throw new NotFoundException('Pharmacy not found');
        const licenceExpiresAt = dto.licenceExpiresAt ? new Date(dto.licenceExpiresAt) : undefined;
        const expiryChanged = licenceExpiresAt && licenceExpiresAt.getTime() !== current.licenceExpiresAt.getTime();
        const lapsed = expiryChanged && current.status === PharmacyStatus.VERIFIED && licenceExpiresAt.getTime() <= Date.now();
        await this.prisma.$transaction(async (tx) => {
            await tx.pharmacy.update({
                where: { id },
                data: {
                    name: dto.name?.trim(),
                    area: dto.area?.trim(),
                    address: dto.address?.trim(),
                    premisesLicenceNo: dto.premisesLicenceNo?.trim(),
                    superintendentName: dto.superintendentName?.trim(),
                    email: dto.email?.toLowerCase(),
                    coldChain: dto.coldChain,
                    ...(expiryChanged ? { licenceExpiresAt, licenceReminderDays: null } : {}),
                    ...(lapsed ? { status: PharmacyStatus.SUSPENDED, suspendedAt: new Date(), suspendedReason: 'Premises licence expired' } : {}),
                },
            });
            await this.audit.record({ actorId: admin.id, action: 'pharmacy.updated', entityType: 'Pharmacy', entityId: id, metadata: { ...Object.fromEntries(Object.entries(dto)), ...(lapsed ? { suspended: 'licence expired' } : {}) } }, tx);
        });
        return this.pharmacy(id);
    }
    async verifyPharmacy(admin, id, note) {
        const ph = await this.prisma.pharmacy.findUnique({ where: { id }, select: { status: true, licenceExpiresAt: true, name: true } });
        if (!ph)
            throw new NotFoundException('Pharmacy not found');
        if (ph.status === PharmacyStatus.VERIFIED)
            throw new ConflictException('This pharmacy is already verified');
        if (ph.licenceExpiresAt.getTime() <= Date.now())
            throw new UnprocessableEntityException('The premises licence has expired — record the renewed licence first');
        const pharmacists = await this.prisma.user.count({ where: { pharmacyId: id, role: Role.PHARMACIST } });
        if (!pharmacists)
            throw new UnprocessableEntityException('Add the superintendent pharmacist’s account before verifying — prescriptions need a pharmacist');
        await this.prisma.$transaction(async (tx) => {
            const moved = await tx.pharmacy.updateMany({
                where: { id, status: ph.status },
                data: { status: PharmacyStatus.VERIFIED, verifiedAt: new Date(), suspendedAt: null, suspendedReason: null },
            });
            if (moved.count === 0)
                throw new ConflictException('This pharmacy was just updated by someone else — refresh and try again');
            await this.audit.record({ actorId: admin.id, action: 'pharmacy.verified', entityType: 'Pharmacy', entityId: id, metadata: { from: ph.status, note } }, tx);
        });
        this.texts.background(() => this.texts.pharmacists(id, `${ph.name.slice(0, 40)} is now live on Pilbridge. Sign in to the pharmacy portal to see orders.`));
        return this.pharmacy(id);
    }
    async suspendPharmacy(admin, id, reason) {
        const ph = await this.prisma.pharmacy.findUnique({ where: { id }, select: { status: true, name: true } });
        if (!ph)
            throw new NotFoundException('Pharmacy not found');
        if (ph.status === PharmacyStatus.SUSPENDED)
            throw new ConflictException('This pharmacy is already suspended');
        await this.prisma.$transaction(async (tx) => {
            const moved = await tx.pharmacy.updateMany({ where: { id, status: ph.status }, data: { status: PharmacyStatus.SUSPENDED, suspendedAt: new Date(), suspendedReason: reason.trim() } });
            if (moved.count === 0)
                throw new ConflictException('This pharmacy was just updated by someone else — refresh and try again');
            await this.audit.record({ actorId: admin.id, action: 'pharmacy.suspended', entityType: 'Pharmacy', entityId: id, metadata: { from: ph.status, reason } }, tx);
        });
        const openOrders = await this.prisma.order.count({ where: { pharmacyId: id, status: { in: OPEN_ORDERS } } });
        this.texts.background(() => this.texts.pharmacists(id, `${ph.name.slice(0, 40)} has been paused on Pilbridge and won't receive new orders. Pilbridge will contact you.`));
        return { ...(await this.pharmacy(id)), openOrders };
    }
    async verifyBank(admin, id, note) {
        const ph = await this.prisma.pharmacy.findUnique({ where: { id }, select: { bankAccountNumber: true, bankUpdatedAt: true, bankVerifiedAt: true } });
        if (!ph)
            throw new NotFoundException('Pharmacy not found');
        if (!ph.bankAccountNumber || !ph.bankUpdatedAt)
            throw new UnprocessableEntityException('This pharmacy hasn’t added a settlement account');
        if (ph.bankVerifiedAt)
            throw new ConflictException('This account is already verified');
        await this.prisma.$transaction(async (tx) => {
            const ok = await tx.pharmacy.updateMany({ where: { id, bankUpdatedAt: ph.bankUpdatedAt, bankVerifiedAt: null }, data: { bankVerifiedAt: new Date(), bankVerifiedById: admin.id } });
            if (ok.count === 0)
                throw new ConflictException('The bank details changed while you were checking them — check the new details');
            await this.audit.record({ actorId: admin.id, action: 'pharmacy.bank_verified', entityType: 'Pharmacy', entityId: id, metadata: { last4: ph.bankAccountNumber.slice(-4), note } }, tx);
        });
        return this.pharmacy(id);
    }
    async staff(pharmacyId) {
        return (await this.pharmacy(pharmacyId)).staff;
    }
    async addStaff(admin, pharmacyId, dto) {
        if (!(await this.prisma.pharmacy.findUnique({ where: { id: pharmacyId }, select: { id: true } })))
            throw new NotFoundException('Pharmacy not found');
        const phone = normalisePhone(dto.phone);
        if (!phone)
            throw new BadRequestException(BAD_PHONE);
        const data = { firstName: dto.firstName.trim(), lastName: dto.lastName.trim(), role: dto.role, pharmacyId, pcnRegNo: dto.role === Role.PHARMACIST ? dto.pcnRegNo.trim() : null };
        const existing = await this.prisma.user.findUnique({ where: { phone }, select: { id: true, role: true, _count: { select: { orders: true, prescriptions: true } } } });
        if (existing && (existing.role !== Role.PATIENT || existing._count.orders || existing._count.prescriptions)) {
            throw new ConflictException('This number already has a Pilbridge account — staff need a number not used for anything else');
        }
        try {
            const user = await this.prisma.$transaction(async (tx) => {
                const u = existing
                    ? await tx.user.update({ where: { id: existing.id, role: Role.PATIENT }, data, select: staffSelect })
                    : await tx.user.create({ data: { phone, ...data }, select: staffSelect });
                await this.audit.record({ actorId: admin.id, action: 'staff.added', entityType: 'User', entityId: u.id, metadata: { pharmacyId, role: dto.role, pcnRegNo: data.pcnRegNo, existingAccount: !!existing } }, tx);
                return u;
            });
            if (existing)
                await this.sessions.revokeAll(user.id, 'became pharmacy staff');
            return user;
        }
        catch (e) {
            if (isUniqueViolation(e))
                throw new ConflictException('This number already has a Pilbridge account');
            throw e;
        }
    }
    async removeStaff(admin, pharmacyId, userId) {
        const user = await this.prisma.user.findFirst({ where: { id: userId, pharmacyId }, select: { role: true } });
        if (!user)
            throw new NotFoundException('Staff member not found');
        await this.prisma.$transaction(async (tx) => {
            await tx.$queryRaw `SELECT 1 FROM "Pharmacy" WHERE id = ${pharmacyId} FOR UPDATE`;
            await tx.user.update({ where: { id: userId }, data: { role: Role.PATIENT, pharmacyId: null, pcnRegNo: null } });
            const ph = await tx.pharmacy.findUniqueOrThrow({ where: { id: pharmacyId }, select: { status: true } });
            const pharmacists = await tx.user.count({ where: { pharmacyId, role: Role.PHARMACIST } });
            if (ph.status === PharmacyStatus.VERIFIED && pharmacists === 0) {
                throw new ConflictException('This is the pharmacy’s only pharmacist — add another pharmacist or suspend the pharmacy first');
            }
            await this.audit.record({ actorId: admin.id, action: 'staff.removed', entityType: 'User', entityId: userId, metadata: { pharmacyId, role: user.role } }, tx);
        });
        await this.sessions.revokeAll(userId, 'removed from pharmacy');
        return this.staff(pharmacyId);
    }
    async apply(dto) {
        const phone = normalisePhone(dto.phone);
        if (!phone)
            throw new BadRequestException(BAD_PHONE);
        const details = cleanDetails(dto.details);
        const email = dto.email.toLowerCase();
        const recent = await this.prisma.partnerApplication.findFirst({
            where: { kind: dto.kind, email, status: ApplicationStatus.NEW, createdAt: { gte: new Date(Date.now() - 24 * 60 * 60_000) } },
            select: { code: true, status: true },
        });
        if (recent)
            return recent;
        const app = await withUniqueCode(applicationCode, (code) => this.prisma.partnerApplication.create({
            data: { code, kind: dto.kind, organisation: dto.organisation.trim(), contactName: dto.contactName?.trim() || '', email, phone, details },
            select: { code: true, status: true },
        }));
        this.texts.background(() => this.texts.admins(`New ${dto.kind.toLowerCase()} partner application ${app.code}: ${dto.organisation.trim().slice(0, 40)}. Review it on the admin page.`));
        return app;
    }
    applications(status) {
        return this.prisma.partnerApplication.findMany({ where: status ? { status } : {}, orderBy: { createdAt: 'desc' }, take: 500 });
    }
    async reviewApplication(admin, id, dto) {
        const app = await this.prisma.partnerApplication.findUnique({ where: { id }, select: { status: true } });
        if (!app)
            throw new NotFoundException('Application not found');
        if (app.status === ApplicationStatus.APPROVED || app.status === ApplicationStatus.DECLINED)
            throw new ConflictException('This application has already been decided');
        return this.prisma.$transaction(async (tx) => {
            const updated = await tx.partnerApplication.update({ where: { id }, data: { status: dto.status, note: dto.note?.trim() ?? null, reviewedById: admin.id, reviewedAt: new Date() } });
            await this.audit.record({ actorId: admin.id, action: `application.${dto.status.toLowerCase()}`, entityType: 'PartnerApplication', entityId: id, metadata: { note: dto.note ?? null } }, tx);
            return updated;
        });
    }
};
OnboardingService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        AuditService,
        StaffTextsService,
        SessionsService])
], OnboardingService);
export { OnboardingService };
export function cleanDetails(raw) {
    const entries = Object.entries(raw ?? {});
    if (entries.length > 20)
        throw new BadRequestException('Too many form fields');
    const out = {};
    for (const [k, v] of entries) {
        if (!DETAIL_KEY.test(k))
            throw new BadRequestException(`Unexpected form field “${k.slice(0, 30)}”`);
        if (typeof v !== 'string' && typeof v !== 'number' && typeof v !== 'boolean')
            throw new BadRequestException(`“${k}” should be text`);
        const text = String(v).trim();
        if (text.length > 500)
            throw new BadRequestException(`“${k}” is too long (500 characters at most)`);
        if (text)
            out[k] = text;
    }
    return out;
}
//# sourceMappingURL=onboarding.service.js.map