import { AuditService } from '../audit/audit.service.js';
import type { AuthUser } from '../common/auth-user.js';
import { BatchStatus, TransferStatus } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { StaffTextsService } from '../sms/staff-texts.service.js';
import type { CreateTransferDto, ReceiveTransferDto } from './dto.js';
export declare class TransfersService {
    private readonly prisma;
    private readonly audit;
    private readonly texts;
    constructor(prisma: PrismaService, audit: AuditService, texts: StaffTextsService);
    private present;
    list(user: AuthUser): Promise<{
        direction: "OUTGOING" | "INCOMING";
        product: {
            id: string;
            name: string;
            coldChain: boolean;
            strength: string | null;
            classification: import("../generated/prisma/enums.js").ProductClass;
        };
        batch: {
            batchNumber: string;
            expiresAt: Date;
            status: BatchStatus;
        };
        blocked: string | null;
        fromPharmacy: {
            id: string;
            name: string;
            area: string;
        };
        toPharmacy: {
            id: string;
            name: string;
            area: string;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransferStatus;
        quantity: number;
        receivedAt: Date | null;
        code: string;
        batchId: string;
        note: string | null;
        createdById: string;
        fromPharmacyId: string;
        toPharmacyId: string | null;
        publishedById: string | null;
        publishedAt: Date | null;
        acceptedById: string | null;
        acceptedAt: Date | null;
        dispatchedById: string | null;
        dispatchedAt: Date | null;
        receivedById: string | null;
        receivedBatchId: string | null;
        closedById: string | null;
        closedAt: Date | null;
        closeReason: string | null;
    }[]>;
    private find;
    private outgoing;
    private incoming;
    private requireVerified;
    private view;
    create(user: AuthUser, dto: CreateTransferDto): Promise<{
        direction: "OUTGOING" | "INCOMING";
        product: {
            id: string;
            name: string;
            coldChain: boolean;
            strength: string | null;
            classification: import("../generated/prisma/enums.js").ProductClass;
        };
        batch: {
            batchNumber: string;
            expiresAt: Date;
            status: BatchStatus;
        };
        blocked: string | null;
        fromPharmacy: {
            id: string;
            name: string;
            area: string;
        };
        toPharmacy: {
            id: string;
            name: string;
            area: string;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransferStatus;
        quantity: number;
        receivedAt: Date | null;
        code: string;
        batchId: string;
        note: string | null;
        createdById: string;
        fromPharmacyId: string;
        toPharmacyId: string | null;
        publishedById: string | null;
        publishedAt: Date | null;
        acceptedById: string | null;
        acceptedAt: Date | null;
        dispatchedById: string | null;
        dispatchedAt: Date | null;
        receivedById: string | null;
        receivedBatchId: string | null;
        closedById: string | null;
        closedAt: Date | null;
        closeReason: string | null;
    }>;
    publish(user: AuthUser, code: string): Promise<{
        direction: "OUTGOING" | "INCOMING";
        product: {
            id: string;
            name: string;
            coldChain: boolean;
            strength: string | null;
            classification: import("../generated/prisma/enums.js").ProductClass;
        };
        batch: {
            batchNumber: string;
            expiresAt: Date;
            status: BatchStatus;
        };
        blocked: string | null;
        fromPharmacy: {
            id: string;
            name: string;
            area: string;
        };
        toPharmacy: {
            id: string;
            name: string;
            area: string;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransferStatus;
        quantity: number;
        receivedAt: Date | null;
        code: string;
        batchId: string;
        note: string | null;
        createdById: string;
        fromPharmacyId: string;
        toPharmacyId: string | null;
        publishedById: string | null;
        publishedAt: Date | null;
        acceptedById: string | null;
        acceptedAt: Date | null;
        dispatchedById: string | null;
        dispatchedAt: Date | null;
        receivedById: string | null;
        receivedBatchId: string | null;
        closedById: string | null;
        closedAt: Date | null;
        closeReason: string | null;
    }>;
    accept(user: AuthUser, code: string): Promise<{
        direction: "OUTGOING" | "INCOMING";
        product: {
            id: string;
            name: string;
            coldChain: boolean;
            strength: string | null;
            classification: import("../generated/prisma/enums.js").ProductClass;
        };
        batch: {
            batchNumber: string;
            expiresAt: Date;
            status: BatchStatus;
        };
        blocked: string | null;
        fromPharmacy: {
            id: string;
            name: string;
            area: string;
        };
        toPharmacy: {
            id: string;
            name: string;
            area: string;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransferStatus;
        quantity: number;
        receivedAt: Date | null;
        code: string;
        batchId: string;
        note: string | null;
        createdById: string;
        fromPharmacyId: string;
        toPharmacyId: string | null;
        publishedById: string | null;
        publishedAt: Date | null;
        acceptedById: string | null;
        acceptedAt: Date | null;
        dispatchedById: string | null;
        dispatchedAt: Date | null;
        receivedById: string | null;
        receivedBatchId: string | null;
        closedById: string | null;
        closedAt: Date | null;
        closeReason: string | null;
    }>;
    decline(user: AuthUser, code: string, reason: string): Promise<{
        direction: "OUTGOING" | "INCOMING";
        product: {
            id: string;
            name: string;
            coldChain: boolean;
            strength: string | null;
            classification: import("../generated/prisma/enums.js").ProductClass;
        };
        batch: {
            batchNumber: string;
            expiresAt: Date;
            status: BatchStatus;
        };
        blocked: string | null;
        fromPharmacy: {
            id: string;
            name: string;
            area: string;
        };
        toPharmacy: {
            id: string;
            name: string;
            area: string;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransferStatus;
        quantity: number;
        receivedAt: Date | null;
        code: string;
        batchId: string;
        note: string | null;
        createdById: string;
        fromPharmacyId: string;
        toPharmacyId: string | null;
        publishedById: string | null;
        publishedAt: Date | null;
        acceptedById: string | null;
        acceptedAt: Date | null;
        dispatchedById: string | null;
        dispatchedAt: Date | null;
        receivedById: string | null;
        receivedBatchId: string | null;
        closedById: string | null;
        closedAt: Date | null;
        closeReason: string | null;
    }>;
    dispatch(user: AuthUser, code: string): Promise<{
        direction: "OUTGOING" | "INCOMING";
        product: {
            id: string;
            name: string;
            coldChain: boolean;
            strength: string | null;
            classification: import("../generated/prisma/enums.js").ProductClass;
        };
        batch: {
            batchNumber: string;
            expiresAt: Date;
            status: BatchStatus;
        };
        blocked: string | null;
        fromPharmacy: {
            id: string;
            name: string;
            area: string;
        };
        toPharmacy: {
            id: string;
            name: string;
            area: string;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransferStatus;
        quantity: number;
        receivedAt: Date | null;
        code: string;
        batchId: string;
        note: string | null;
        createdById: string;
        fromPharmacyId: string;
        toPharmacyId: string | null;
        publishedById: string | null;
        publishedAt: Date | null;
        acceptedById: string | null;
        acceptedAt: Date | null;
        dispatchedById: string | null;
        dispatchedAt: Date | null;
        receivedById: string | null;
        receivedBatchId: string | null;
        closedById: string | null;
        closedAt: Date | null;
        closeReason: string | null;
    }>;
    receive(user: AuthUser, code: string, dto: ReceiveTransferDto): Promise<{
        receivedBatchId: string;
        quarantined: boolean;
        direction: "OUTGOING" | "INCOMING";
        product: {
            id: string;
            name: string;
            coldChain: boolean;
            strength: string | null;
            classification: import("../generated/prisma/enums.js").ProductClass;
        };
        batch: {
            batchNumber: string;
            expiresAt: Date;
            status: BatchStatus;
        };
        blocked: string | null;
        fromPharmacy: {
            id: string;
            name: string;
            area: string;
        };
        toPharmacy: {
            id: string;
            name: string;
            area: string;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransferStatus;
        quantity: number;
        receivedAt: Date | null;
        code: string;
        batchId: string;
        note: string | null;
        createdById: string;
        fromPharmacyId: string;
        toPharmacyId: string | null;
        publishedById: string | null;
        publishedAt: Date | null;
        acceptedById: string | null;
        acceptedAt: Date | null;
        dispatchedById: string | null;
        dispatchedAt: Date | null;
        receivedById: string | null;
        closedById: string | null;
        closedAt: Date | null;
        closeReason: string | null;
    }>;
    cancel(user: AuthUser, code: string, reason: string): Promise<{
        direction: "OUTGOING" | "INCOMING";
        product: {
            id: string;
            name: string;
            coldChain: boolean;
            strength: string | null;
            classification: import("../generated/prisma/enums.js").ProductClass;
        };
        batch: {
            batchNumber: string;
            expiresAt: Date;
            status: BatchStatus;
        };
        blocked: string | null;
        fromPharmacy: {
            id: string;
            name: string;
            area: string;
        };
        toPharmacy: {
            id: string;
            name: string;
            area: string;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransferStatus;
        quantity: number;
        receivedAt: Date | null;
        code: string;
        batchId: string;
        note: string | null;
        createdById: string;
        fromPharmacyId: string;
        toPharmacyId: string | null;
        publishedById: string | null;
        publishedAt: Date | null;
        acceptedById: string | null;
        acceptedAt: Date | null;
        dispatchedById: string | null;
        dispatchedAt: Date | null;
        receivedById: string | null;
        receivedBatchId: string | null;
        closedById: string | null;
        closedAt: Date | null;
        closeReason: string | null;
    }>;
    all(): Promise<{
        product: {
            id: string;
            name: string;
            coldChain: boolean;
            strength: string | null;
            classification: import("../generated/prisma/enums.js").ProductClass;
        };
        batch: {
            batchNumber: string;
            expiresAt: Date;
            status: BatchStatus;
        };
        fromPharmacy: {
            id: string;
            name: string;
            area: string;
        };
        toPharmacy: {
            id: string;
            name: string;
            area: string;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransferStatus;
        quantity: number;
        receivedAt: Date | null;
        code: string;
        batchId: string;
        note: string | null;
        createdById: string;
        fromPharmacyId: string;
        toPharmacyId: string | null;
        publishedById: string | null;
        publishedAt: Date | null;
        acceptedById: string | null;
        acceptedAt: Date | null;
        dispatchedById: string | null;
        dispatchedAt: Date | null;
        receivedById: string | null;
        receivedBatchId: string | null;
        closedById: string | null;
        closedAt: Date | null;
        closeReason: string | null;
    }[]>;
}
