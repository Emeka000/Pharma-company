import { AuditService } from '../audit/audit.service.js';
import type { AuthUser } from '../common/auth-user.js';
import type { ClientInfo } from '../common/decorators.js';
import { Role } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import type { AddPhoneDto, AuthIntent, DemoSocialSignInDto, SocialSignInDto, VerifyOtpDto } from './dto.js';
import { MfaService } from './mfa.service.js';
import { OtpService } from './otp.service.js';
import { SessionsService } from './sessions.service.js';
import { SmsService } from '../sms/sms.service.js';
import { StaffTextsService } from '../sms/staff-texts.service.js';
import { SocialVerifier } from './social-verifier.service.js';
export declare const RECENT_SIGN_IN_MINUTES = 10;
export declare class AuthService {
    private readonly prisma;
    private readonly otp;
    private readonly sms;
    private readonly audit;
    private readonly social;
    private readonly sessions;
    private readonly mfa;
    private readonly texts;
    constructor(prisma: PrismaService, otp: OtpService, sms: SmsService, audit: AuditService, social: SocialVerifier, sessions: SessionsService, mfa: MfaService, texts: StaffTextsService);
    private phoneOrThrow;
    private completeSignIn;
    private assertIntent;
    requestCode(rawPhone: string, intent?: AuthIntent): Promise<{
        devCode?: string | undefined;
        phone: string;
        expiresInSeconds: number;
    }>;
    verifyCode(dto: VerifyOtpDto, client?: ClientInfo): Promise<{
        isNewUser: boolean;
        status: "mfa_required" | "mfa_setup_required";
        mfaToken: string;
    } | {
        isNewUser: boolean;
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
    }>;
    private createUser;
    socialSignIn(dto: SocialSignInDto, client?: ClientInfo): Promise<{
        isNewUser: boolean;
        status: "mfa_required" | "mfa_setup_required";
        mfaToken: string;
    } | {
        isNewUser: boolean;
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
    }>;
    demoSocialSignIn(dto: DemoSocialSignInDto, client?: ClientInfo): Promise<{
        isNewUser: boolean;
        status: "mfa_required" | "mfa_setup_required";
        mfaToken: string;
    } | {
        isNewUser: boolean;
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
    }>;
    private signInWithIdentity;
    private createSocialUser;
    addPhone(caller: AuthUser, dto: AddPhoneDto, client?: ClientInfo): Promise<import("./mfa.service.js").MfaChallenge | {
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
    }>;
}
