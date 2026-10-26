import type { AuthUser } from '../common/auth-user.js';
import { CreateTransferDto, ReceiveTransferDto, TransferReasonDto } from './dto.js';
import { TransfersService } from './transfers.service.js';
export declare class TransfersController {
    private readonly transfers;
    constructor(transfers: TransfersService);
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
            status: import("../generated/prisma/enums.js").BatchStatus;
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
        status: import("../generated/prisma/enums.js").TransferStatus;
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
            status: import("../generated/prisma/enums.js").BatchStatus;
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
        status: import("../generated/prisma/enums.js").TransferStatus;
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
            status: import("../generated/prisma/enums.js").BatchStatus;
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
        status: import("../generated/prisma/enums.js").TransferStatus;
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
            status: import("../generated/prisma/enums.js").BatchStatus;
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
        status: import("../generated/prisma/enums.js").TransferStatus;
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
    decline(user: AuthUser, code: string, dto: TransferReasonDto): Promise<{
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
            status: import("../generated/prisma/enums.js").BatchStatus;
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
        status: import("../generated/prisma/enums.js").TransferStatus;
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
            status: import("../generated/prisma/enums.js").BatchStatus;
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
        status: import("../generated/prisma/enums.js").TransferStatus;
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
            status: import("../generated/prisma/enums.js").BatchStatus;
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
        status: import("../generated/prisma/enums.js").TransferStatus;
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
    cancel(user: AuthUser, code: string, dto: TransferReasonDto): Promise<{
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
            status: import("../generated/prisma/enums.js").BatchStatus;
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
        status: import("../generated/prisma/enums.js").TransferStatus;
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
}
export declare class AdminTransfersController {
    private readonly transfers;
    constructor(transfers: TransfersService);
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
            status: import("../generated/prisma/enums.js").BatchStatus;
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
        status: import("../generated/prisma/enums.js").TransferStatus;
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
