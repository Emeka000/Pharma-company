import type { AuthUser } from '../common/auth-user.js';
import { BatchStatus } from '../generated/prisma/client.js';
import { AdjustBatchDto, QuarantineDto, ReceiveBatchDto, ReleaseDto } from './dto.js';
import { InventoryService } from './inventory.service.js';
export declare class InventoryController {
    private readonly inventory;
    constructor(inventory: InventoryService);
    list(user: AuthUser, status?: BatchStatus): Promise<{
        expired: boolean;
        shortDated: boolean;
        product: {
            name: string;
            coldChain: boolean;
            strength: string | null;
            classification: import("../generated/prisma/enums.js").ProductClass;
        };
        id: string;
        pharmacyId: string;
        expiresAt: Date;
        status: BatchStatus;
        productId: string;
        batchNumber: string;
        quantity: number;
        priceKobo: number;
        location: string | null;
        quarantineReason: string | null;
        receivedAt: Date;
    }[]>;
    receive(user: AuthUser, dto: ReceiveBatchDto): Promise<{
        id: string;
        pharmacyId: string;
        expiresAt: Date;
        status: BatchStatus;
        productId: string;
        batchNumber: string;
        quantity: number;
        priceKobo: number;
        location: string | null;
        quarantineReason: string | null;
        receivedAt: Date;
    }>;
    adjust(user: AuthUser, id: string, dto: AdjustBatchDto): Promise<{
        id: string;
        pharmacyId: string;
        expiresAt: Date;
        status: BatchStatus;
        productId: string;
        batchNumber: string;
        quantity: number;
        priceKobo: number;
        location: string | null;
        quarantineReason: string | null;
        receivedAt: Date;
    }>;
    quarantine(user: AuthUser, id: string, dto: QuarantineDto): Promise<{
        id: string;
        pharmacyId: string;
        expiresAt: Date;
        status: BatchStatus;
        productId: string;
        batchNumber: string;
        quantity: number;
        priceKobo: number;
        location: string | null;
        quarantineReason: string | null;
        receivedAt: Date;
    }>;
    release(user: AuthUser, id: string, dto: ReleaseDto): Promise<{
        id: string;
        pharmacyId: string;
        expiresAt: Date;
        status: BatchStatus;
        productId: string;
        batchNumber: string;
        quantity: number;
        priceKobo: number;
        location: string | null;
        quarantineReason: string | null;
        receivedAt: Date;
    }>;
}
