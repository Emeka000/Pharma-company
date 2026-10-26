import type { AuthUser } from '../common/auth-user.js';
import { Role } from '../generated/prisma/client.js';
import { ActivityQueryDto, BankDetailsDto, UpdateSettingsDto } from './dto.js';
import { PortalService } from './portal.service.js';
export declare class PortalController {
    private readonly portal;
    constructor(portal: PortalService);
    settings(user: AuthUser): Promise<{
        profile: {
            name: string;
            area: string;
            address: string;
            premisesLicenceNo: string;
            licenceExpiresAt: Date;
            superintendentName: string | null;
            status: import("../generated/prisma/enums.js").PharmacyStatus;
            coldChain: boolean;
        };
        contact: {
            phone: string | null;
            email: string | null;
        };
        hours: {
            openDays: number[];
            opensAt: string | null;
            lastOrderAt: string | null;
        };
        coverageAreas: string[];
        areas: {
            key: string;
            name: string;
        }[];
        bank: {
            bankName: string | null;
            accountName: string | null;
            accountNumber: string | null;
            verified: boolean;
            updatedAt: Date | null;
            holdUntil: Date | null;
        };
    }>;
    update(user: AuthUser, dto: UpdateSettingsDto): Promise<{
        profile: {
            name: string;
            area: string;
            address: string;
            premisesLicenceNo: string;
            licenceExpiresAt: Date;
            superintendentName: string | null;
            status: import("../generated/prisma/enums.js").PharmacyStatus;
            coldChain: boolean;
        };
        contact: {
            phone: string | null;
            email: string | null;
        };
        hours: {
            openDays: number[];
            opensAt: string | null;
            lastOrderAt: string | null;
        };
        coverageAreas: string[];
        areas: {
            key: string;
            name: string;
        }[];
        bank: {
            bankName: string | null;
            accountName: string | null;
            accountNumber: string | null;
            verified: boolean;
            updatedAt: Date | null;
            holdUntil: Date | null;
        };
    }>;
    bank(user: AuthUser, dto: BankDetailsDto): Promise<{
        profile: {
            name: string;
            area: string;
            address: string;
            premisesLicenceNo: string;
            licenceExpiresAt: Date;
            superintendentName: string | null;
            status: import("../generated/prisma/enums.js").PharmacyStatus;
            coldChain: boolean;
        };
        contact: {
            phone: string | null;
            email: string | null;
        };
        hours: {
            openDays: number[];
            opensAt: string | null;
            lastOrderAt: string | null;
        };
        coverageAreas: string[];
        areas: {
            key: string;
            name: string;
        }[];
        bank: {
            bankName: string | null;
            accountName: string | null;
            accountNumber: string | null;
            verified: boolean;
            updatedAt: Date | null;
            holdUntil: Date | null;
        };
    }>;
    team(user: AuthUser): Promise<{
        phone: string | null;
        id: string;
        firstName: string | null;
        lastName: string | null;
        role: Role;
        pcnRegNo: string | null;
        createdAt: Date;
    }[]>;
    activity(user: AuthUser, q: ActivityQueryDto): Promise<{
        id: string;
        at: Date;
        who: string;
        action: string;
        text: string;
    }[]>;
    notifications(user: AuthUser): Promise<{
        unread: number;
        items: {
            unread: boolean;
            id: string;
            kind: string;
            title: string;
            body: string;
            href: string;
            at: Date;
        }[];
    }>;
    read(user: AuthUser): Promise<{
        unread: number;
    }>;
}
