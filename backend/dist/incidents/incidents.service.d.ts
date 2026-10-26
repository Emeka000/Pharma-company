import { ConfigService } from '@nestjs/config';
import { AuditService } from '../audit/audit.service.js';
import type { AuthUser } from '../common/auth-user.js';
import { IncidentStatus, IncidentType, Role } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { SmsService } from '../sms/sms.service.js';
import type { ReportIncidentDto } from './dto.js';
export declare const CRITICAL: IncidentType[];
export declare class IncidentsService {
    private readonly prisma;
    private readonly audit;
    private readonly sms;
    private readonly config;
    private readonly log;
    constructor(prisma: PrismaService, audit: AuditService, sms: SmsService, config: ConfigService);
    report(user: AuthUser, orderCode: string, dto: ReportIncidentDto): Promise<{
        code: string;
        type: IncidentType;
        status: IncidentStatus;
        critical: boolean;
    }>;
    list(status?: IncidentStatus): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        order: {
            status: import("../generated/prisma/enums.js").OrderStatus;
            code: string;
            pharmacy: {
                name: string;
            };
        };
        delivery: {
            provider: import("../generated/prisma/enums.js").DeliveryProvider;
            code: string;
            courier: {
                name: string;
            } | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        status: IncidentStatus;
        code: string;
        orderId: string;
        deliveryId: string | null;
        type: IncidentType;
        description: string;
        reportedById: string;
        reporterRole: Role;
        resolution: string | null;
        resolvedById: string | null;
        resolvedAt: Date | null;
    })[]>;
    resolve(admin: AuthUser, id: string, resolution: string): Promise<{
        id: string;
        createdAt: Date;
        status: IncidentStatus;
        code: string;
        orderId: string;
        deliveryId: string | null;
        type: IncidentType;
        description: string;
        reportedById: string;
        reporterRole: Role;
        resolution: string | null;
        resolvedById: string | null;
        resolvedAt: Date | null;
    }>;
    private escalate;
}
