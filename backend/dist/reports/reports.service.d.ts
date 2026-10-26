import { AuditService } from '../audit/audit.service.js';
import type { AuthUser } from '../common/auth-user.js';
import { InvoiceStatus } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import type { CreateInvoiceDto } from './dto.js';
import { type DeliveryRow } from './summarise.js';
export declare class ReportsService {
    private readonly prisma;
    private readonly audit;
    constructor(prisma: PrismaService, audit: AuditService);
    period(from?: string, to?: string): {
        from: string;
        to: string;
        gte: Date;
        lt: Date;
    };
    rows(gte: Date, lt: Date): Promise<DeliveryRow[]>;
    delivery(from?: string, to?: string): Promise<{
        period: {
            from: string;
            to: string;
        };
        targets: {
            pickupWithinMinutes: number;
            pickupPunctuality: number;
            completion: number;
            proofOfDelivery: number;
        };
        overall: {
            jobs: number;
            delivered: number;
            failed: number;
            cancelled: number;
            inProgress: number;
            completionRate: number | null;
            onTimeRate: number | null;
            pickupPunctuality: number | null;
            proofCoverage: number | null;
            avgMinutes: {
                packing: number | null;
                toAssignRider: number | null;
                pickupWait: number | null;
                ride: number | null;
                paymentToDoor: number | null;
            };
            money: {
                deliveryRevenueKobo: number;
                courierCostKobo: number;
                courierCostPerDeliveryKobo: number | null;
                failedCostByBearer: {
                    bearer: string;
                    kobo: number;
                }[];
            };
            failureCauses: {
                key: string;
                count: number;
            }[];
        };
        byProvider: {
            jobs: number;
            delivered: number;
            failed: number;
            cancelled: number;
            inProgress: number;
            completionRate: number | null;
            onTimeRate: number | null;
            pickupPunctuality: number | null;
            proofCoverage: number | null;
            avgMinutes: {
                packing: number | null;
                toAssignRider: number | null;
                pickupWait: number | null;
                ride: number | null;
                paymentToDoor: number | null;
            };
            money: {
                deliveryRevenueKobo: number;
                courierCostKobo: number;
                courierCostPerDeliveryKobo: number | null;
                failedCostByBearer: {
                    bearer: string;
                    kobo: number;
                }[];
            };
            failureCauses: {
                key: string;
                count: number;
            }[];
            name: string;
        }[];
        byPharmacy: {
            jobs: number;
            delivered: number;
            failed: number;
            cancelled: number;
            inProgress: number;
            completionRate: number | null;
            onTimeRate: number | null;
            pickupPunctuality: number | null;
            proofCoverage: number | null;
            avgMinutes: {
                packing: number | null;
                toAssignRider: number | null;
                pickupWait: number | null;
                ride: number | null;
                paymentToDoor: number | null;
            };
            money: {
                deliveryRevenueKobo: number;
                courierCostKobo: number;
                courierCostPerDeliveryKobo: number | null;
                failedCostByBearer: {
                    bearer: string;
                    kobo: number;
                }[];
            };
            failureCauses: {
                key: string;
                count: number;
            }[];
            name: string;
        }[];
        incidents: {
            type: import("../generated/prisma/enums.js").IncidentType;
            count: number;
        }[];
    }>;
    csv(from?: string, to?: string): Promise<{
        filename: string;
        body: string;
    }>;
    createInvoice(admin: AuthUser, courierId: string, dto: CreateInvoiceDto): Promise<{
        lines: import("./reconcile.js").LineResult[];
        notInvoiced: {
            delivery: string;
            order: string;
            providerRef: string | null;
            status: "PICKED_UP" | "DELIVERED" | "CANCELLED" | "AWAITING_RIDER" | "ASSIGNED" | "FAILED";
            feeKobo: number | null;
        }[];
        totals: {
            invoicedKobo: number;
            disputedKobo: number;
            payableKobo: number;
            lines: number;
            matched: number;
            disputed: number;
        };
        courier: {
            id: string;
            name: string;
        };
        number: string;
        id: string;
        createdAt: Date;
        status: InvoiceStatus;
        totalKobo: number;
        courierId: string;
        periodStart: Date;
        periodEnd: Date;
        note: string | null;
        createdById: string;
        reconciledAt: Date | null;
        reconciledById: string | null;
    }>;
    invoices(): Promise<{
        lines: number;
        courier: {
            name: string;
        };
        number: string;
        id: string;
        createdAt: Date;
        status: InvoiceStatus;
        totalKobo: number;
        courierId: string;
        periodStart: Date;
        periodEnd: Date;
        note: string | null;
        createdById: string;
        reconciledAt: Date | null;
        reconciledById: string | null;
    }[]>;
    invoice(id: string): Promise<{
        lines: import("./reconcile.js").LineResult[];
        notInvoiced: {
            delivery: string;
            order: string;
            providerRef: string | null;
            status: "PICKED_UP" | "DELIVERED" | "CANCELLED" | "AWAITING_RIDER" | "ASSIGNED" | "FAILED";
            feeKobo: number | null;
        }[];
        totals: {
            invoicedKobo: number;
            disputedKobo: number;
            payableKobo: number;
            lines: number;
            matched: number;
            disputed: number;
        };
        courier: {
            id: string;
            name: string;
        };
        number: string;
        id: string;
        createdAt: Date;
        status: InvoiceStatus;
        totalKobo: number;
        courierId: string;
        periodStart: Date;
        periodEnd: Date;
        note: string | null;
        createdById: string;
        reconciledAt: Date | null;
        reconciledById: string | null;
    }>;
    markReconciled(admin: AuthUser, id: string, note?: string): Promise<{
        lines: import("./reconcile.js").LineResult[];
        notInvoiced: {
            delivery: string;
            order: string;
            providerRef: string | null;
            status: "PICKED_UP" | "DELIVERED" | "CANCELLED" | "AWAITING_RIDER" | "ASSIGNED" | "FAILED";
            feeKobo: number | null;
        }[];
        totals: {
            invoicedKobo: number;
            disputedKobo: number;
            payableKobo: number;
            lines: number;
            matched: number;
            disputed: number;
        };
        courier: {
            id: string;
            name: string;
        };
        number: string;
        id: string;
        createdAt: Date;
        status: InvoiceStatus;
        totalKobo: number;
        courierId: string;
        periodStart: Date;
        periodEnd: Date;
        note: string | null;
        createdById: string;
        reconciledAt: Date | null;
        reconciledById: string | null;
    }>;
}
