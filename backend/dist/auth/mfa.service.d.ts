import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuditService } from '../audit/audit.service.js';
import type { ClientInfo } from '../common/decorators.js';
import type { Role, User } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { StaffTextsService } from '../sms/staff-texts.service.js';
import { SmsService } from '../sms/sms.service.js';
import { SessionsService } from './sessions.service.js';
export type MfaChallenge = {
    status: 'mfa_required' | 'mfa_setup_required';
    mfaToken: string;
};
export declare class MfaService {
    private readonly prisma;
    private readonly jwt;
    private readonly sessions;
    private readonly audit;
    private readonly sms;
    private readonly texts;
    private readonly roles;
    private readonly key;
    private readonly recoveryKey;
    constructor(prisma: PrismaService, jwt: JwtService, sessions: SessionsService, audit: AuditService, sms: SmsService, texts: StaffTextsService, config: ConfigService);
    required(role: Role): boolean;
    private encrypt;
    private decrypt;
    private hashRecovery;
    challenge(user: Pick<User, 'id' | 'totpEnabledAt'>): Promise<MfaChallenge>;
    private fromChallenge;
    setup(mfaToken: string): Promise<{
        secret: string;
        otpauthUrl: string;
    }>;
    verify(mfaToken: string, code: string, client: ClientInfo): Promise<{
        recoveryCodes?: string[] | undefined;
        status: "signed_in";
        accessToken: string;
        user: {
            id: string;
            phone: string | null;
            email: string | null;
            firstName: string | null;
            lastName: string | null;
            role: Role;
            pharmacyId: string | null;
            profileComplete: boolean;
            linkedAccounts: import("../generated/prisma/enums.js").SocialProvider[];
            pharmacy: {
                id: string;
                name: string;
                area: string;
                status: import("../generated/prisma/enums.js").PharmacyStatus;
                licenceExpiresAt: Date;
            } | null;
        };
        isNewUser: boolean;
    }>;
    newRecoveryCodes(userId: string): Promise<string[]>;
    reset(actorId: string | null, userId: string, reason: string, via?: Record<string, string>): Promise<{
        reset: boolean;
        phone: string | null;
    }>;
}
