import { AuditService } from '../audit/audit.service.js';
import type { AuthUser } from '../common/auth-user.js';
import { BatchStatus, ProductClass } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import type { AdjustBatchDto, ReceiveBatchDto, ReleaseDto } from './dto.js';
export declare class InventoryService {
    private readonly prisma;
    private readonly audit;
    constructor(prisma: PrismaService, audit: AuditService);
    list(user: AuthUser, status?: BatchStatus): Promise<{
        expired: boolean;
        shortDated: boolean;
        product: {
            name: string;
            coldChain: boolean;
            strength: string | null;
            classification: ProductClass;
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
    private own;
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
    quarantine(user: AuthUser, id: string, reason: string): Promise<{
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
