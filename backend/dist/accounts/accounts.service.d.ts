import { AuditService } from '../audit/audit.service.js';
import { MfaService } from '../auth/mfa.service.js';
import { SessionsService } from '../auth/sessions.service.js';
import type { AuthUser } from '../common/auth-user.js';
import { Role } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { SmsService } from '../sms/sms.service.js';
import { StaffTextsService } from '../sms/staff-texts.service.js';
import type { FindUsersDto } from './dto.js';
export declare class AccountsService {
    private readonly prisma;
    private readonly sessions;
    private readonly mfa;
    private readonly audit;
    private readonly sms;
    private readonly texts;
    constructor(prisma: PrismaService, sessions: SessionsService, mfa: MfaService, audit: AuditService, sms: SmsService, texts: StaffTextsService);
    private view;
    find(dto: FindUsersDto): Promise<{
        mfaEnabled: boolean;
        mfaRequired: boolean;
        activeSessions: number;
        id: string;
        phone: string | null;
        email: string | null;
        firstName: string | null;
        lastName: string | null;
        role: Role;
        disabledAt: Date | null;
        disabledReason: string | null;
        totpEnabledAt: Date | null;
        mfaLockedUntil: Date | null;
        createdAt: Date;
        pharmacy: {
            id: string;
            name: string;
        } | null;
    }[]>;
    private notSelf;
    disable(admin: AuthUser, id: string, reason: string): Promise<{
        mfaEnabled: boolean;
        mfaRequired: boolean;
        activeSessions: number;
        id: string;
        phone: string | null;
        email: string | null;
        firstName: string | null;
        lastName: string | null;
        role: Role;
        disabledAt: Date | null;
        disabledReason: string | null;
        totpEnabledAt: Date | null;
        mfaLockedUntil: Date | null;
        createdAt: Date;
        pharmacy: {
            id: string;
            name: string;
        } | null;
    }>;
    enable(admin: AuthUser, id: string): Promise<{
        mfaEnabled: boolean;
        mfaRequired: boolean;
        activeSessions: number;
        id: string;
        phone: string | null;
        email: string | null;
        firstName: string | null;
        lastName: string | null;
        role: Role;
        disabledAt: Date | null;
        disabledReason: string | null;
        totpEnabledAt: Date | null;
        mfaLockedUntil: Date | null;
        createdAt: Date;
        pharmacy: {
            id: string;
            name: string;
        } | null;
    }>;
    signOutEverywhere(admin: AuthUser, id: string, reason: string): Promise<{
        signedOut: number;
        mfaEnabled: boolean;
        mfaRequired: boolean;
        activeSessions: number;
        id: string;
        phone: string | null;
        email: string | null;
        firstName: string | null;
        lastName: string | null;
        role: Role;
        disabledAt: Date | null;
        disabledReason: string | null;
        totpEnabledAt: Date | null;
        mfaLockedUntil: Date | null;
        createdAt: Date;
        pharmacy: {
            id: string;
            name: string;
        } | null;
    }>;
    resetMfa(admin: AuthUser, id: string, reason: string): Promise<{
        mfaEnabled: boolean;
        mfaRequired: boolean;
        activeSessions: number;
        id: string;
        phone: string | null;
        email: string | null;
        firstName: string | null;
        lastName: string | null;
        role: Role;
        disabledAt: Date | null;
        disabledReason: string | null;
        totpEnabledAt: Date | null;
        mfaLockedUntil: Date | null;
        createdAt: Date;
        pharmacy: {
            id: string;
            name: string;
        } | null;
    }>;
    changePhone(admin: AuthUser, id: string, raw: string, reason: string): Promise<{
        mfaEnabled: boolean;
        mfaRequired: boolean;
        activeSessions: number;
        id: string;
        phone: string | null;
        email: string | null;
        firstName: string | null;
        lastName: string | null;
        role: Role;
        disabledAt: Date | null;
        disabledReason: string | null;
        totpEnabledAt: Date | null;
        mfaLockedUntil: Date | null;
        createdAt: Date;
        pharmacy: {
            id: string;
            name: string;
        } | null;
    }>;
}
