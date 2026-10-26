import type { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
type Db = Pick<PrismaService, 'auditLog'> | Prisma.TransactionClient;
export declare class AuditService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    record(entry: {
        actorId: string | null;
        action: string;
        entityType: string;
        entityId: string;
        metadata?: Prisma.InputJsonValue;
    }, tx?: Db): Prisma.Prisma__AuditLogClient<{
        id: string;
        createdAt: Date;
        actorId: string | null;
        action: string;
        entityType: string;
        entityId: string;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
}
export {};
