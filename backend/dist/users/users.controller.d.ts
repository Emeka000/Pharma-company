import { AuthService } from '../auth/auth.service.js';
import { MfaService } from '../auth/mfa.service.js';
import { SessionsService } from '../auth/sessions.service.js';
import { AddPhoneDto } from '../auth/dto.js';
import type { AuthUser } from '../common/auth-user.js';
import { type ClientInfo } from '../common/decorators.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { UpdateProfileDto } from './dto.js';
export declare class UsersController {
    private readonly prisma;
    private readonly auth;
    private readonly sessions;
    private readonly mfa;
    constructor(prisma: PrismaService, auth: AuthService, sessions: SessionsService, mfa: MfaService);
    me(user: AuthUser): Promise<{
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
    }>;
    update(user: AuthUser, dto: UpdateProfileDto): Promise<{
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
    }>;
    addPhone(user: AuthUser, dto: AddPhoneDto, client: ClientInfo): Promise<import("../auth/mfa.service.js").MfaChallenge | {
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
    sessionsList(user: AuthUser): Promise<{
        current: boolean;
        id: string;
        createdAt: Date;
        expiresAt: Date;
        mfa: boolean;
        userAgent: string | null;
        ip: string | null;
    }[]>;
    endSession(user: AuthUser, id: string): Promise<{
        current: boolean;
        id: string;
        createdAt: Date;
        expiresAt: Date;
        mfa: boolean;
        userAgent: string | null;
        ip: string | null;
    }[]>;
    recoveryCodes(user: AuthUser): Promise<{
        recoveryCodes: string[];
    }>;
}
