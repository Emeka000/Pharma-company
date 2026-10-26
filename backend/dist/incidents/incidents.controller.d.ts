import type { AuthUser } from '../common/auth-user.js';
import { IncidentStatus, Role } from '../generated/prisma/client.js';
import { ReportIncidentDto, ResolveIncidentDto } from './dto.js';
import { IncidentsService } from './incidents.service.js';
export declare class PatientIncidentsController {
    private readonly incidents;
    constructor(incidents: IncidentsService);
    report(user: AuthUser, code: string, dto: ReportIncidentDto): Promise<{
        code: string;
        type: import("../generated/prisma/enums.js").IncidentType;
        status: IncidentStatus;
        critical: boolean;
    }>;
}
export declare class PharmacyIncidentsController {
    private readonly incidents;
    constructor(incidents: IncidentsService);
    report(user: AuthUser, code: string, dto: ReportIncidentDto): Promise<{
        code: string;
        type: import("../generated/prisma/enums.js").IncidentType;
        status: IncidentStatus;
        critical: boolean;
    }>;
}
export declare class RiderIncidentsController {
    private readonly incidents;
    constructor(incidents: IncidentsService);
    report(user: AuthUser, code: string, dto: ReportIncidentDto): Promise<{
        code: string;
        type: import("../generated/prisma/enums.js").IncidentType;
        status: IncidentStatus;
        critical: boolean;
    }>;
}
export declare class AdminIncidentsController {
    private readonly incidents;
    constructor(incidents: IncidentsService);
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
        type: import("../generated/prisma/enums.js").IncidentType;
        description: string;
        reportedById: string;
        reporterRole: Role;
        resolution: string | null;
        resolvedById: string | null;
        resolvedAt: Date | null;
    })[]>;
    resolve(user: AuthUser, id: string, dto: ResolveIncidentDto): Promise<{
        id: string;
        createdAt: Date;
        status: IncidentStatus;
        code: string;
        orderId: string;
        deliveryId: string | null;
        type: import("../generated/prisma/enums.js").IncidentType;
        description: string;
        reportedById: string;
        reporterRole: Role;
        resolution: string | null;
        resolvedById: string | null;
        resolvedAt: Date | null;
    }>;
    report(user: AuthUser, code: string, dto: ReportIncidentDto): Promise<{
        code: string;
        type: import("../generated/prisma/enums.js").IncidentType;
        status: IncidentStatus;
        critical: boolean;
    }>;
}
