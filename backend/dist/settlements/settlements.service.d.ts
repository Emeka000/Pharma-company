import { AuditService } from '../audit/audit.service.js';
import type { AuthUser } from '../common/auth-user.js';
import { PayoutStatus } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { StaffTextsService } from '../sms/staff-texts.service.js';
export declare class SettlementsService {
    private readonly prisma;
    private readonly audit;
    private readonly texts;
    constructor(prisma: PrismaService, audit: AuditService, texts: StaffTextsService);
    private bankState;
    overview(user: AuthUser): Promise<{
        unsettled: {
            orderCount: number;
            grossKobo: number;
            feesKobo: number;
            netKobo: number;
        };
        payouts: {
            bankAccountNumber: string | null;
            id: string;
            pharmacyId: string;
            createdAt: Date;
            status: PayoutStatus;
            bankName: string | null;
            bankAccountName: string | null;
            code: string;
            paidAt: Date | null;
            periodStart: Date;
            periodEnd: Date;
            createdById: string;
            orderCount: number;
            grossKobo: number;
            feesKobo: number;
            netKobo: number;
            reference: string | null;
            paidById: string | null;
        }[];
        bank: {
            payable: boolean;
            reason: string;
            holdUntil: null;
            bankName: string | null;
            accountName: string | null;
            accountNumber: string | null;
            verified: boolean;
        } | {
            payable: boolean;
            reason: string;
            holdUntil: Date;
            bankName: string | null;
            accountName: string | null;
            accountNumber: string | null;
            verified: boolean;
        } | {
            payable: boolean;
            reason: null;
            holdUntil: null;
            bankName: string | null;
            accountName: string | null;
            accountNumber: string | null;
            verified: boolean;
        };
    }>;
    payoutForPharmacy(user: AuthUser, code: string): Promise<{
        orders: {
            code: string;
            deliveredAt: Date | null;
            subtotalKobo: number;
            feesKobo: number;
            netKobo: number;
        }[];
        orderCount: number;
        grossKobo: number;
        feesKobo: number;
        netKobo: number;
        code: string;
        status: null;
    } | {
        bankAccountNumber: string | null;
        orders: {
            code: string;
            deliveredAt: Date | null;
            subtotalKobo: number;
            feesKobo: number;
            netKobo: number;
        }[];
        id: string;
        pharmacyId: string;
        createdAt: Date;
        status: PayoutStatus;
        bankName: string | null;
        bankAccountName: string | null;
        code: string;
        paidAt: Date | null;
        periodStart: Date;
        periodEnd: Date;
        createdById: string;
        orderCount: number;
        grossKobo: number;
        feesKobo: number;
        netKobo: number;
        reference: string | null;
        paidById: string | null;
    }>;
    private cutoff;
    preview(before?: string): Promise<{
        before: Date;
        pharmacies: {
            bank: {
                payable: boolean;
                reason: string;
                holdUntil: null;
            } | {
                payable: boolean;
                reason: string;
                holdUntil: Date;
            } | {
                payable: boolean;
                reason: null;
                holdUntil: null;
            };
            orderCount: number;
            grossKobo: number;
            feesKobo: number;
            netKobo: number;
            pharmacy: {
                id: string;
                name: string;
            };
        }[];
    }>;
    create(admin: AuthUser, before?: string): Promise<{
        pharmacy: {
            id: string;
            name: string;
            bankName: string | null;
            bankAccountName: string | null;
            bankAccountNumber: string | null;
        };
        bank: {
            payable: boolean;
            reason: string;
            holdUntil: null;
        } | {
            payable: boolean;
            reason: string;
            holdUntil: Date;
        } | {
            payable: boolean;
            reason: null;
            holdUntil: null;
        };
        id: string;
        pharmacyId: string;
        createdAt: Date;
        status: PayoutStatus;
        bankName: string | null;
        bankAccountName: string | null;
        bankAccountNumber: string | null;
        code: string;
        paidAt: Date | null;
        periodStart: Date;
        periodEnd: Date;
        createdById: string;
        orderCount: number;
        grossKobo: number;
        feesKobo: number;
        netKobo: number;
        reference: string | null;
        paidById: string | null;
    }[]>;
    list(status?: PayoutStatus, ids?: string[]): Promise<{
        pharmacy: {
            id: string;
            name: string;
            bankName: string | null;
            bankAccountName: string | null;
            bankAccountNumber: string | null;
        };
        bank: {
            payable: boolean;
            reason: string;
            holdUntil: null;
        } | {
            payable: boolean;
            reason: string;
            holdUntil: Date;
        } | {
            payable: boolean;
            reason: null;
            holdUntil: null;
        };
        id: string;
        pharmacyId: string;
        createdAt: Date;
        status: PayoutStatus;
        bankName: string | null;
        bankAccountName: string | null;
        bankAccountNumber: string | null;
        code: string;
        paidAt: Date | null;
        periodStart: Date;
        periodEnd: Date;
        createdById: string;
        orderCount: number;
        grossKobo: number;
        feesKobo: number;
        netKobo: number;
        reference: string | null;
        paidById: string | null;
    }[]>;
    payout(id: string): Promise<{
        orders: {
            code: string;
            deliveredAt: Date | null;
            subtotalKobo: number;
            feesKobo: number;
            netKobo: number;
        }[];
        pharmacy: {
            id: string;
            name: string;
        };
        id: string;
        pharmacyId: string;
        createdAt: Date;
        status: PayoutStatus;
        bankName: string | null;
        bankAccountName: string | null;
        bankAccountNumber: string | null;
        code: string;
        paidAt: Date | null;
        periodStart: Date;
        periodEnd: Date;
        createdById: string;
        orderCount: number;
        grossKobo: number;
        feesKobo: number;
        netKobo: number;
        reference: string | null;
        paidById: string | null;
    }>;
    markPaid(admin: AuthUser, id: string, reference: string): Promise<{
        orders: {
            code: string;
            deliveredAt: Date | null;
            subtotalKobo: number;
            feesKobo: number;
            netKobo: number;
        }[];
        pharmacy: {
            id: string;
            name: string;
        };
        id: string;
        pharmacyId: string;
        createdAt: Date;
        status: PayoutStatus;
        bankName: string | null;
        bankAccountName: string | null;
        bankAccountNumber: string | null;
        code: string;
        paidAt: Date | null;
        periodStart: Date;
        periodEnd: Date;
        createdById: string;
        orderCount: number;
        grossKobo: number;
        feesKobo: number;
        netKobo: number;
        reference: string | null;
        paidById: string | null;
    }>;
    void(admin: AuthUser, id: string, reason: string): Promise<{
        orders: {
            code: string;
            deliveredAt: Date | null;
            subtotalKobo: number;
            feesKobo: number;
            netKobo: number;
        }[];
        pharmacy: {
            id: string;
            name: string;
        };
        id: string;
        pharmacyId: string;
        createdAt: Date;
        status: PayoutStatus;
        bankName: string | null;
        bankAccountName: string | null;
        bankAccountNumber: string | null;
        code: string;
        paidAt: Date | null;
        periodStart: Date;
        periodEnd: Date;
        createdById: string;
        orderCount: number;
        grossKobo: number;
        feesKobo: number;
        netKobo: number;
        reference: string | null;
        paidById: string | null;
    }>;
}
