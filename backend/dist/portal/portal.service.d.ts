import { AuditService } from '../audit/audit.service.js';
import type { AuthUser } from '../common/auth-user.js';
import { PharmacyStatus, Role } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { StaffTextsService } from '../sms/staff-texts.service.js';
import type { BankDetailsDto, UpdateSettingsDto } from './dto.js';
export type PortalNotification = {
    id: string;
    kind: string;
    title: string;
    body: string;
    href: string;
    at: Date;
};
export declare class PortalService {
    private readonly prisma;
    private readonly audit;
    private readonly texts;
    constructor(prisma: PrismaService, audit: AuditService, texts: StaffTextsService);
    settings(user: AuthUser): Promise<{
        profile: {
            name: string;
            area: string;
            address: string;
            premisesLicenceNo: string;
            licenceExpiresAt: Date;
            superintendentName: string | null;
            status: PharmacyStatus;
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
    updateSettings(user: AuthUser, dto: UpdateSettingsDto): Promise<{
        profile: {
            name: string;
            area: string;
            address: string;
            premisesLicenceNo: string;
            licenceExpiresAt: Date;
            superintendentName: string | null;
            status: PharmacyStatus;
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
    setBank(user: AuthUser, dto: BankDetailsDto): Promise<{
        profile: {
            name: string;
            area: string;
            address: string;
            premisesLicenceNo: string;
            licenceExpiresAt: Date;
            superintendentName: string | null;
            status: PharmacyStatus;
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
    activity(user: AuthUser, limit?: number, before?: string): Promise<{
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
    markNotificationsRead(user: AuthUser): Promise<{
        unread: number;
    }>;
}
