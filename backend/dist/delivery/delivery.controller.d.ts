import { type RawBodyRequest } from '@nestjs/common';
import type { Request } from 'express';
import type { AuthUser } from '../common/auth-user.js';
import { CourierDispatchService } from './courier-dispatch.service.js';
import { DeliveryService } from './delivery.service.js';
import { BookCourierDto, CheckoutQuoteDto, CourierDeliveredDto, DropoffDto, FailDto, HandoverDto, RiderStatusDto } from './dto.js';
export declare class DeliveryAreasController {
    private readonly couriers;
    constructor(couriers: CourierDispatchService);
    areas(): import("./areas.js").Area[];
    quote(dto: CheckoutQuoteDto): Promise<{
        deliveryKobo: 150000 | 250000;
        quoteId: null;
        source: "standard";
    } | {
        deliveryKobo: number;
        quoteId: string;
        source: "courier";
    }>;
}
export declare class CourierWebhookController {
    private readonly couriers;
    constructor(couriers: CourierDispatchService);
    chowdeck(req: RawBodyRequest<Request>, signature: string | undefined, body: unknown): Promise<{
        received: boolean;
    }>;
}
export declare class RiderController {
    private readonly delivery;
    constructor(delivery: DeliveryService);
    status(user: AuthUser, dto: RiderStatusDto): Promise<{
        rider: {
            partner: string;
            coldChain: boolean;
            online: boolean;
            area: string | null;
        };
        mine: {
            code: string;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
            coldChain: boolean;
            order: string;
            orderStatus: import("../generated/prisma/enums.js").OrderStatus;
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
            status: import("../generated/prisma/enums.js").DeliveryStatus;
            coldChain: boolean;
            order: string;
            orderStatus: import("../generated/prisma/enums.js").OrderStatus;
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
            status: import("../generated/prisma/enums.js").DeliveryStatus;
            coldChain: boolean;
            order: string;
            orderStatus: import("../generated/prisma/enums.js").OrderStatus;
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
            status: import("../generated/prisma/enums.js").DeliveryStatus;
            coldChain: boolean;
            order: string;
            orderStatus: import("../generated/prisma/enums.js").OrderStatus;
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
        status: import("../generated/prisma/enums.js").DeliveryStatus;
        coldChain: boolean;
        order: string;
        orderStatus: import("../generated/prisma/enums.js").OrderStatus;
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
    delivered(user: AuthUser, code: string, dto: DropoffDto): Promise<{
        code: string;
        status: import("../generated/prisma/enums.js").DeliveryStatus;
        coldChain: boolean;
        order: string;
        orderStatus: import("../generated/prisma/enums.js").OrderStatus;
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
    failed(user: AuthUser, code: string, dto: FailDto): Promise<{
        failed: boolean;
    }>;
}
export declare class PharmacyDeliveryController {
    private readonly delivery;
    constructor(delivery: DeliveryService);
    handover(user: AuthUser, code: string, dto: HandoverDto): Promise<{
        handedOver: string;
    }>;
    rebook(user: AuthUser, code: string): Promise<{
        id: string;
        createdAt: Date;
        provider: import("../generated/prisma/enums.js").DeliveryProvider;
        status: import("../generated/prisma/enums.js").DeliveryStatus;
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
        failureCause: import("../generated/prisma/enums.js").FailureCause | null;
        costBearer: import("../generated/prisma/enums.js").CostBearer | null;
        staleAlertAt: Date | null;
    }>;
}
export declare class CourierBookingController {
    private readonly delivery;
    private readonly couriers;
    constructor(delivery: DeliveryService, couriers: CourierDispatchService);
    bookViaApi(user: AuthUser, code: string): Promise<{
        booked: string;
    } | {
        failed: string;
    }>;
    book(user: AuthUser, code: string, dto: BookCourierDto): Promise<{
        id: string;
        createdAt: Date;
        provider: import("../generated/prisma/enums.js").DeliveryProvider;
        status: import("../generated/prisma/enums.js").DeliveryStatus;
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
        failureCause: import("../generated/prisma/enums.js").FailureCause | null;
        costBearer: import("../generated/prisma/enums.js").CostBearer | null;
        staleAlertAt: Date | null;
    }>;
    cancel(user: AuthUser, code: string): Promise<{
        cancelled: boolean;
    }>;
    delivered(user: AuthUser, code: string, dto: CourierDeliveredDto): Promise<{
        id: string;
        createdAt: Date;
        provider: import("../generated/prisma/enums.js").DeliveryProvider;
        status: import("../generated/prisma/enums.js").DeliveryStatus;
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
        failureCause: import("../generated/prisma/enums.js").FailureCause | null;
        costBearer: import("../generated/prisma/enums.js").CostBearer | null;
        staleAlertAt: Date | null;
    }>;
    failed(user: AuthUser, code: string, dto: FailDto): Promise<{
        failed: boolean;
    }>;
}
