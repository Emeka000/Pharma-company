import type { AuthUser } from '../common/auth-user.js';
import { PayoutStatus } from '../generated/prisma/client.js';
import { CreatePayoutsDto, MarkPaidDto, VoidPayoutDto } from './dto.js';
import { SettlementsService } from './settlements.service.js';
export declare class PharmacySettlementsController {
    private readonly settlements;
    constructor(settlements: SettlementsService);
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
    payout(user: AuthUser, code: string): Promise<{
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
}
export declare class AdminPayoutsController {
    private readonly settlements;
    constructor(settlements: SettlementsService);
    list(status?: PayoutStatus): Promise<{
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
    preview(dto: CreatePayoutsDto): Promise<{
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
    create(user: AuthUser, dto: CreatePayoutsDto): Promise<{
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
    get(id: string): Promise<{
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
    paid(user: AuthUser, id: string, dto: MarkPaidDto): Promise<{
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
    void(user: AuthUser, id: string, dto: VoidPayoutDto): Promise<{
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
