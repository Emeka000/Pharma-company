import type { AuthUser } from '../common/auth-user.js';
import { type ClientInfo } from '../common/decorators.js';
import { AuthService } from './auth.service.js';
import { DemoSocialSignInDto, MfaSetupDto, MfaVerifyDto, RequestOtpDto, SocialSignInDto, VerifyOtpDto } from './dto.js';
import { MfaService } from './mfa.service.js';
import { SessionsService } from './sessions.service.js';
export declare class AuthController {
    private readonly auth;
    private readonly mfa;
    constructor(auth: AuthService, mfa: MfaService);
    request(dto: RequestOtpDto): Promise<{
        devCode?: string | undefined;
        phone: string;
        expiresInSeconds: number;
    }>;
    verify(dto: VerifyOtpDto, client: ClientInfo): Promise<{
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
            role: import("../generated/prisma/enums.js").Role;
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
    social(dto: SocialSignInDto, client: ClientInfo): Promise<{
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
            role: import("../generated/prisma/enums.js").Role;
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
    demoSocial(dto: DemoSocialSignInDto, client: ClientInfo): Promise<{
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
            role: import("../generated/prisma/enums.js").Role;
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
    mfaSetup(dto: MfaSetupDto): Promise<{
        secret: string;
        otpauthUrl: string;
    }>;
    mfaVerify(dto: MfaVerifyDto, client: ClientInfo): Promise<{
        recoveryCodes?: string[] | undefined;
        status: "signed_in";
        accessToken: string;
        user: {
            id: string;
            phone: string | null;
            email: string | null;
            firstName: string | null;
            lastName: string | null;
            role: import("../generated/prisma/enums.js").Role;
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
}
export declare class SessionController {
    private readonly sessions;
    constructor(sessions: SessionsService);
    logout(user: AuthUser): Promise<void>;
    logoutAll(user: AuthUser): Promise<{
        signedOut: number;
    }>;
}
