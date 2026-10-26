var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AuditService } from '../audit/audit.service.js';
import { isUniqueViolation } from '../common/codes.js';
import { Role } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { profileOf } from '../users/profile.js';
import { MfaService } from './mfa.service.js';
import { OTP_TTL_SECONDS, OtpService } from './otp.service.js';
import { normalisePhone } from './phone.js';
import { SessionsService } from './sessions.service.js';
import { SmsService } from '../sms/sms.service.js';
import { StaffTextsService } from '../sms/staff-texts.service.js';
import { SocialVerifier } from './social-verifier.service.js';
export const RECENT_SIGN_IN_MINUTES = 10;
const DISABLED = 'This account has been disabled — contact Pilbridge support';
const mask = (p) => `${p.slice(0, 7)}•••${p.slice(-2)}`;
let AuthService = class AuthService {
    prisma;
    otp;
    sms;
    audit;
    social;
    sessions;
    mfa;
    texts;
    constructor(prisma, otp, sms, audit, social, sessions, mfa, texts) {
        this.prisma = prisma;
        this.otp = otp;
        this.sms = sms;
        this.audit = audit;
        this.social = social;
        this.sessions = sessions;
        this.mfa = mfa;
        this.texts = texts;
    }
    phoneOrThrow(raw) {
        const phone = normalisePhone(raw);
        if (!phone)
            throw new BadRequestException('Enter a Nigerian mobile number, e.g. 0803 123 4567');
        return phone;
    }
    async completeSignIn(userId, client, opts = {}) {
        const user = await this.prisma.user.findUniqueOrThrow({ where: { id: userId }, include: { pharmacy: true, socialIdentities: true } });
        if (user.disabledAt)
            throw new ForbiddenException(DISABLED);
        if (this.mfa.required(user.role) && !opts.mfa)
            return this.mfa.challenge(user);
        const { accessToken } = await this.sessions.create(user, { mfa: !!opts.mfa, client });
        return { status: 'signed_in', accessToken, user: profileOf(user) };
    }
    async assertIntent(phone, intent) {
        const existing = await this.prisma.user.findUnique({ where: { phone }, select: { id: true, disabledAt: true } });
        if (existing?.disabledAt)
            throw new ForbiddenException(DISABLED);
        if (intent === 'auto')
            return;
        if (intent === 'signin' && !existing)
            throw new NotFoundException('There’s no account with this number yet — create one instead');
        if (intent === 'signup' && existing)
            throw new ConflictException('This number already has an account — sign in instead');
    }
    async requestCode(rawPhone, intent = 'auto') {
        const phone = this.phoneOrThrow(rawPhone);
        await this.assertIntent(phone, intent);
        const code = await this.otp.issue(phone);
        await this.sms.sendOtp(phone, code);
        return { phone, expiresInSeconds: OTP_TTL_SECONDS, ...(this.sms.devEcho ? { devCode: code } : {}) };
    }
    async verifyCode(dto, client = {}) {
        const phone = this.phoneOrThrow(dto.phone);
        const intent = dto.intent ?? 'auto';
        await this.assertIntent(phone, intent);
        if (!(await this.otp.check(phone, dto.code)))
            throw new UnauthorizedException('That code isn’t right — check the SMS and try again');
        const existing = await this.prisma.user.findUnique({ where: { phone } });
        const user = existing ?? (await this.createUser(phone, intent === 'signup' ? dto : null));
        const result = await this.completeSignIn(user.id, client);
        if (result.status === 'signed_in') {
            await this.audit.record({ actorId: user.id, action: existing ? 'auth.signed_in' : 'auth.signed_up', entityType: 'User', entityId: user.id });
        }
        return { ...result, isNewUser: !existing };
    }
    async createUser(phone, profile) {
        const email = profile?.email?.toLowerCase();
        if (email && (await this.prisma.user.findUnique({ where: { email }, select: { id: true } }))) {
            throw new ConflictException('That email is already linked to another account');
        }
        try {
            return await this.prisma.user.create({
                data: profile
                    ? { phone, firstName: profile.firstName.trim(), lastName: profile.lastName.trim(), email, consentAt: new Date() }
                    : { phone },
            });
        }
        catch (e) {
            if (isUniqueViolation(e))
                throw new ConflictException('This number already has an account — sign in instead');
            throw e;
        }
    }
    async socialSignIn(dto, client = {}) {
        const identity = await this.social.verify(dto.provider, dto.idToken);
        return this.signInWithIdentity({
            ...identity,
            firstName: identity.firstName ?? dto.firstName?.trim() ?? null,
            lastName: identity.lastName ?? dto.lastName?.trim() ?? null,
        }, client);
    }
    async demoSocialSignIn(dto, client = {}) {
        if (!this.sms.devEcho)
            throw new NotFoundException();
        const email = dto.email.toLowerCase();
        return this.signInWithIdentity({ provider: dto.provider, subject: `demo:${email}`, email, firstName: dto.firstName ?? null, lastName: dto.lastName ?? null }, client);
    }
    async signInWithIdentity(identity, client) {
        const { provider } = identity;
        const findLinked = () => this.prisma.socialIdentity.findUnique({ where: { provider_subject: { provider, subject: identity.subject } } });
        const linked = await findLinked();
        if (linked) {
            const result = await this.completeSignIn(linked.userId, client);
            if (result.status === 'signed_in')
                await this.audit.record({ actorId: linked.userId, action: 'auth.social_signed_in', entityType: 'User', entityId: linked.userId, metadata: { provider } });
            return { ...result, isNewUser: false };
        }
        let userId;
        try {
            userId = (await this.createSocialUser(identity)).id;
        }
        catch (e) {
            if (!isUniqueViolation(e))
                throw e;
            const raced = await findLinked();
            if (!raced)
                throw new ConflictException('Sign-in clashed with another request — please try again');
            return { ...(await this.completeSignIn(raced.userId, client)), isNewUser: false };
        }
        await this.audit.record({ actorId: userId, action: 'auth.signed_up', entityType: 'User', entityId: userId, metadata: { provider } });
        return { ...(await this.completeSignIn(userId, client)), isNewUser: true };
    }
    async createSocialUser(identity) {
        const emailTaken = identity.email && (await this.prisma.user.findUnique({ where: { email: identity.email }, select: { id: true } }));
        return this.prisma.user.create({
            data: {
                email: emailTaken ? null : identity.email,
                firstName: identity.firstName,
                lastName: identity.lastName,
                socialIdentities: { create: { provider: identity.provider, subject: identity.subject, email: identity.email } },
            },
        });
    }
    async addPhone(caller, dto, client = {}) {
        const phone = this.phoneOrThrow(dto.phone);
        const me = await this.prisma.user.findUniqueOrThrow({ where: { id: caller.id }, include: { _count: { select: { orders: true, prescriptions: true } } } });
        if (me.phone && me.role !== Role.PATIENT)
            throw new ForbiddenException('Staff, rider and admin numbers are changed by Pilbridge — contact support');
        if (me.phone && caller.sessionCreatedAt.getTime() < Date.now() - RECENT_SIGN_IN_MINUTES * 60_000) {
            throw new ForbiddenException('For your security, sign in again before changing your number');
        }
        if (!(await this.otp.check(phone, dto.code)))
            throw new UnauthorizedException('That code isn’t right — check the SMS and try again');
        if (me.phone === phone)
            return this.completeSignIn(me.id, client, { mfa: caller.mfa });
        const owner = await this.prisma.user.findUnique({ where: { phone } });
        if (!owner) {
            try {
                await this.prisma.user.update({ where: { id: me.id }, data: { phone } });
            }
            catch (e) {
                if (isUniqueViolation(e))
                    throw new ConflictException('This number was just added to another account');
                throw e;
            }
            await this.audit.record({ actorId: me.id, action: me.phone ? 'auth.phone_changed' : 'auth.phone_added', entityType: 'User', entityId: me.id, metadata: { last4: phone.slice(-4), previousLast4: me.phone?.slice(-4) ?? null } });
            if (me.phone) {
                const old = me.phone;
                this.texts.background(() => this.sms.sendText(old, `Your Pilbridge number was changed to ${mask(phone)}. If this wasn't you, call Pilbridge support now.`));
            }
            await this.sessions.revokeAll(me.id, me.phone ? 'phone changed' : 'phone added');
            return this.completeSignIn(me.id, client, { mfa: caller.mfa });
        }
        const empty = !me.phone && me.role === Role.PATIENT && me._count.orders === 0 && me._count.prescriptions === 0;
        if (!empty || owner.role !== Role.PATIENT)
            throw new ConflictException('This number already belongs to another Pilbridge account');
        if (owner.disabledAt)
            throw new ForbiddenException(DISABLED);
        await this.prisma.$transaction(async (tx) => {
            const moved = await tx.socialIdentity.findMany({ where: { userId: me.id }, select: { provider: true } });
            await tx.socialIdentity.updateMany({ where: { userId: me.id }, data: { userId: owner.id } });
            await tx.user.update({ where: { id: me.id }, data: { email: null } });
            const data = {};
            if (!owner.email && me.email && !(await tx.user.findUnique({ where: { email: me.email }, select: { id: true } })))
                data.email = me.email;
            if (!owner.firstName && me.firstName)
                data.firstName = me.firstName;
            if (!owner.lastName && me.lastName)
                data.lastName = me.lastName;
            if (Object.keys(data).length)
                await tx.user.update({ where: { id: owner.id }, data });
            const metadata = { from: me.id, providers: moved.map((m) => m.provider) };
            await this.audit.record({ actorId: owner.id, action: 'auth.social_merged', entityType: 'User', entityId: owner.id, metadata }, tx);
        });
        await this.sessions.revokeAll(me.id, 'merged into the phone account');
        return this.completeSignIn(owner.id, client);
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        OtpService,
        SmsService,
        AuditService,
        SocialVerifier,
        SessionsService,
        MfaService,
        StaffTextsService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map