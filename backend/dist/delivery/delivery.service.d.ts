import { AuditService } from '../audit/audit.service.js';
import type { AuthUser } from '../common/auth-user.js';
import { DeliveryStatus, FailureCause, OrderStatus, type Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CustomerAlertsService } from './customer-alerts.service.js';
import { RiderAlertsService } from './rider-alerts.service.js';
export declare class DeliveryService {
    private readonly prisma;
    private readonly audit;
    private readonly alerts;
    private readonly customers;
    constructor(prisma: PrismaService, audit: AuditService, alerts: RiderAlertsService, customers: CustomerAlertsService);
    dispatch(tx: Prisma.TransactionClient, orderId: string, actorId: string): Promise<{
        id: string;
        createdAt: Date;
        provider: import("../generated/prisma/enums.js").DeliveryProvider;
        status: DeliveryStatus;
        coldChain: boolean;
        code: string;
        orderId: string;
        riderId: string | null;
        courierId: string | null;
        providerRef: string | null;
        feeKobo: number | null;
        trackingUrl: string | null;
        handedOverById: string | null;
        proof: string | null;
        providerStatus: string | null;
        providerStatusAt: Date | null;
        bookingError: string | null;
        dropoffCode: string;
        codeAttempts: number;
        assignedAt: Date | null;
        pickedUpAt: Date | null;
        deliveredAt: Date | null;
        failedAt: Date | null;
        failReason: string | null;
        failureCause: FailureCause | null;
        costBearer: import("../generated/prisma/enums.js").CostBearer | null;
        staleAlertAt: Date | null;
    }>;
    cancelActive(tx: Prisma.TransactionClient, orderId: string): Promise<{
        provider: import("../generated/prisma/enums.js").DeliveryProvider;
        code: string;
        riderId: string | null;
        providerRef: string | null;
        courier: {
            api: string | null;
        } | null;
    }[]>;
    rebook(user: AuthUser, orderCode: string): Promise<{
        id: string;
        createdAt: Date;
        provider: import("../generated/prisma/enums.js").DeliveryProvider;
        status: DeliveryStatus;
        coldChain: boolean;
        code: string;
        orderId: string;
        riderId: string | null;
        courierId: string | null;
        providerRef: string | null;
        feeKobo: number | null;
        trackingUrl: string | null;
        handedOverById: string | null;
        proof: string | null;
        providerStatus: string | null;
        providerStatusAt: Date | null;
        bookingError: string | null;
        dropoffCode: string;
        codeAttempts: number;
        assignedAt: Date | null;
        pickedUpAt: Date | null;
        deliveredAt: Date | null;
        failedAt: Date | null;
        failReason: string | null;
        failureCause: FailureCause | null;
        costBearer: import("../generated/prisma/enums.js").CostBearer | null;
        staleAlertAt: Date | null;
    }>;
    setStatus(user: AuthUser, online: boolean, area?: string): Promise<{
        rider: {
            partner: string;
            coldChain: boolean;
            online: boolean;
            area: string | null;
        };
        mine: {
            code: string;
            status: DeliveryStatus;
            coldChain: boolean;
            order: string;
            orderStatus: OrderStatus;
            createdAt: Date;
            arriveBy: Date | null;
            pickup: {
                name: string;
                area: string;
                address: string;
            };
            dropoff: {
                address?: string | undefined;
                recipient?: string | null | undefined;
                phone?: string | null | undefined;
                area: string | null;
                tripKm: number | null;
            };
        }[];
        open: ({
            code: string;
            status: DeliveryStatus;
            coldChain: boolean;
            order: string;
            orderStatus: OrderStatus;
            createdAt: Date;
            arriveBy: Date | null;
            pickup: {
                name: string;
                area: string;
                address: string;
            };
            dropoff: {
                address?: string | undefined;
                recipient?: string | null | undefined;
                phone?: string | null | undefined;
                area: string | null;
                tripKm: number | null;
            };
        } & {
            toPickupKm: number;
        })[];
    }>;
    jobs(user: AuthUser): Promise<{
        rider: {
            partner: string;
            coldChain: boolean;
            online: boolean;
            area: string | null;
        };
        mine: {
            code: string;
            status: DeliveryStatus;
            coldChain: boolean;
            order: string;
            orderStatus: OrderStatus;
            createdAt: Date;
            arriveBy: Date | null;
            pickup: {
                name: string;
                area: string;
                address: string;
            };
            dropoff: {
                address?: string | undefined;
                recipient?: string | null | undefined;
                phone?: string | null | undefined;
                area: string | null;
                tripKm: number | null;
            };
        }[];
        open: ({
            code: string;
            status: DeliveryStatus;
            coldChain: boolean;
            order: string;
            orderStatus: OrderStatus;
            createdAt: Date;
            arriveBy: Date | null;
            pickup: {
                name: string;
                area: string;
                address: string;
            };
            dropoff: {
                address?: string | undefined;
                recipient?: string | null | undefined;
                phone?: string | null | undefined;
                area: string | null;
                tripKm: number | null;
            };
        } & {
            toPickupKm: number;
        })[];
    }>;
    accept(user: AuthUser, code: string): Promise<{
        code: string;
        status: DeliveryStatus;
        coldChain: boolean;
        order: string;
        orderStatus: OrderStatus;
        createdAt: Date;
        arriveBy: Date | null;
        pickup: {
            name: string;
            area: string;
            address: string;
        };
        dropoff: {
            address?: string | undefined;
            recipient?: string | null | undefined;
            phone?: string | null | undefined;
            area: string | null;
            tripKm: number | null;
        };
    }>;
    release(user: AuthUser, code: string): Promise<{
        released: boolean;
    }>;
    handover(user: AuthUser, orderCode: string, sealCode: string): Promise<{
        handedOver: string;
    }>;
    delivered(user: AuthUser, code: string, dropoffCode: string): Promise<{
        code: string;
        status: DeliveryStatus;
        coldChain: boolean;
        order: string;
        orderStatus: OrderStatus;
        createdAt: Date;
        arriveBy: Date | null;
        pickup: {
            name: string;
            area: string;
            address: string;
        };
        dropoff: {
            address?: string | undefined;
            recipient?: string | null | undefined;
            phone?: string | null | undefined;
            area: string | null;
            tripKm: number | null;
        };
    }>;
    failed(user: AuthUser, code: string, reason: string, cause?: FailureCause): Promise<{
        failed: boolean;
    }>;
    bookCourier(admin: AuthUser, code: string, dto: {
        courierId: string;
        providerRef: string;
        feeKobo?: number;
        trackingUrl?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        provider: import("../generated/prisma/enums.js").DeliveryProvider;
        status: DeliveryStatus;
        coldChain: boolean;
        code: string;
        orderId: string;
        riderId: string | null;
        courierId: string | null;
        providerRef: string | null;
        feeKobo: number | null;
        trackingUrl: string | null;
        handedOverById: string | null;
        proof: string | null;
        providerStatus: string | null;
        providerStatusAt: Date | null;
        bookingError: string | null;
        dropoffCode: string;
        codeAttempts: number;
        assignedAt: Date | null;
        pickedUpAt: Date | null;
        deliveredAt: Date | null;
        failedAt: Date | null;
        failReason: string | null;
        failureCause: FailureCause | null;
        costBearer: import("../generated/prisma/enums.js").CostBearer | null;
        staleAlertAt: Date | null;
    }>;
    cancelCourier(admin: AuthUser | null, code: string): Promise<{
        cancelled: boolean;
    }>;
    courierDelivered(admin: AuthUser, code: string, dto: {
        customerCode?: string;
        courierProof?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        provider: import("../generated/prisma/enums.js").DeliveryProvider;
        status: DeliveryStatus;
        coldChain: boolean;
        code: string;
        orderId: string;
        riderId: string | null;
        courierId: string | null;
        providerRef: string | null;
        feeKobo: number | null;
        trackingUrl: string | null;
        handedOverById: string | null;
        proof: string | null;
        providerStatus: string | null;
        providerStatusAt: Date | null;
        bookingError: string | null;
        dropoffCode: string;
        codeAttempts: number;
        assignedAt: Date | null;
        pickedUpAt: Date | null;
        deliveredAt: Date | null;
        failedAt: Date | null;
        failReason: string | null;
        failureCause: FailureCause | null;
        costBearer: import("../generated/prisma/enums.js").CostBearer | null;
        staleAlertAt: Date | null;
    }>;
    courierFailed(admin: AuthUser, code: string, reason: string, cause?: FailureCause): Promise<{
        failed: boolean;
    }>;
    courierConfirmedDelivered(job: {
        id: string;
        orderId: string;
    }, proof: string): Promise<void>;
    courierAbandoned(job: {
        id: string;
        orderId: string;
    }, reason: string): Promise<void>;
    private courierJob;
    private checkDropoffCode;
    private finishDelivered;
    private finishFailed;
    private profile;
    private mine;
    private view;
}
