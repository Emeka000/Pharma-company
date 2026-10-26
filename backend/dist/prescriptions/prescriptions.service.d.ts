import { AuditService } from '../audit/audit.service.js';
import type { AuthUser } from '../common/auth-user.js';
import { OrderStatus, PrescriptionStatus } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { type ReviewPrescriptionDto } from './dto.js';
import { StorageService } from './storage.service.js';
export declare class PrescriptionsService {
    private readonly prisma;
    private readonly storage;
    private readonly audit;
    constructor(prisma: PrismaService, storage: StorageService, audit: AuditService);
    upload(user: AuthUser, file: Express.Multer.File | undefined, prescriberName?: string): Promise<{
        id: string;
        code: string;
        status: PrescriptionStatus;
        createdAt: Date;
    }>;
    listMine(user: AuthUser): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        status: PrescriptionStatus;
        code: string;
        decisionNote: string | null;
        order: {
            code: string;
        } | null;
    }[]>;
    listForPharmacy(user: AuthUser, status?: PrescriptionStatus): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        status: PrescriptionStatus;
        code: string;
        prescriberName: string | null;
        reviewedAt: Date | null;
        decisionNote: string | null;
        order: {
            code: string;
            items: {
                quantity: number;
                product: {
                    name: string;
                    strength: string | null;
                };
            }[];
        } | null;
        patient: {
            firstName: string | null;
            lastName: string | null;
        };
    }[]>;
    private ownForPharmacy;
    image(user: AuthUser, code: string): Promise<{
        buf: Buffer<ArrayBufferLike>;
        type: string;
    }>;
    review(user: AuthUser, code: string, dto: ReviewPrescriptionDto): Promise<{
        status: PrescriptionStatus;
        code: string;
        reviewedAt: Date | null;
        decisionNote: string | null;
        order: {
            status: OrderStatus;
            code: string;
        } | null;
    }>;
}
