import type { AuthUser } from '../common/auth-user.js';
import { Role } from '../generated/prisma/client.js';
import { AccountsService } from './accounts.service.js';
import { ChangePhoneDto, FindUsersDto, ReasonDto } from './dto.js';
export declare class AccountsController {
    private readonly accounts;
    constructor(accounts: AccountsService);
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
    disable(user: AuthUser, id: string, dto: ReasonDto): Promise<{
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
    enable(user: AuthUser, id: string): Promise<{
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
    signOut(user: AuthUser, id: string, dto: ReasonDto): Promise<{
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
    resetMfa(user: AuthUser, id: string, dto: ReasonDto): Promise<{
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
    changePhone(user: AuthUser, id: string, dto: ChangePhoneDto): Promise<{
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
