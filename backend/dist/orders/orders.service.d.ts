import { AuditService } from '../audit/audit.service.js';
import type { AuthUser } from '../common/auth-user.js';
import { OrderStatus, PaymentStatus, PrescriptionStatus, ProductClass } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { DeliveryService } from '../delivery/delivery.service.js';
import { CourierDispatchService } from '../delivery/courier-dispatch.service.js';
import { RiderAlertsService } from '../delivery/rider-alerts.service.js';
import type { CreateOrderDto } from './dto.js';
export declare class OrdersService {
    private readonly prisma;
    private readonly audit;
    private readonly delivery;
    private readonly alerts;
    private readonly couriers;
    constructor(prisma: PrismaService, audit: AuditService, delivery: DeliveryService, alerts: RiderAlertsService, couriers: CourierDispatchService);
    create(user: AuthUser, dto: CreateOrderDto): Promise<Omit<{
        pharmacy: {
            name: string;
            area: string;
        };
        prescription: {
            status: PrescriptionStatus;
            code: string;
        } | null;
        items: ({
            product: {
                name: string;
                coldChain: boolean;
                strength: string | null;
                classification: ProductClass;
            };
            batch: {
                expiresAt: Date;
                batchNumber: string;
            } | null;
        } & {
            id: string;
            productId: string;
            quantity: number;
            orderId: string;
            unitPriceKobo: number;
            batchId: string | null;
        })[];
        deliveries: {
            provider: import("../generated/prisma/enums.js").DeliveryProvider;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
            code: string;
            trackingUrl: string | null;
            dropoffCode: string;
            assignedAt: Date | null;
            pickedUpAt: Date | null;
            deliveredAt: Date | null;
            failReason: string | null;
            courier: {
                name: string;
            } | null;
            rider: {
                firstName: string | null;
                riderProfile: {
                    partner: string;
                } | null;
            } | null;
        }[];
    } & {
        id: string;
        pharmacyId: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        code: string;
        patientId: string;
        deliveryAddress: string;
        deliveryArea: string | null;
        dropoffLat: number | null;
        dropoffLng: number | null;
        etaMinutes: number | null;
        lateTextAt: Date | null;
        subtotalKobo: number;
        deliveryKobo: number;
        serviceKobo: number;
        totalKobo: number;
        statusNote: string | null;
        paymentStatus: PaymentStatus;
        paidAt: Date | null;
        paymentTxId: string | null;
        preparingAt: Date | null;
        readyAt: Date | null;
        payoutId: string | null;
    }, "deliveries"> & {
        arriveBy: Date | null;
        delivery: {
            dropoffCode?: string | null | undefined;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
        };
    }>;
    listMine(user: AuthUser): Promise<(Omit<{
        pharmacy: {
            name: string;
            area: string;
        };
        prescription: {
            status: PrescriptionStatus;
            code: string;
        } | null;
        items: ({
            product: {
                name: string;
                coldChain: boolean;
                strength: string | null;
                classification: ProductClass;
            };
            batch: {
                expiresAt: Date;
                batchNumber: string;
            } | null;
        } & {
            id: string;
            productId: string;
            quantity: number;
            orderId: string;
            unitPriceKobo: number;
            batchId: string | null;
        })[];
        deliveries: {
            provider: import("../generated/prisma/enums.js").DeliveryProvider;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
            code: string;
            trackingUrl: string | null;
            dropoffCode: string;
            assignedAt: Date | null;
            pickedUpAt: Date | null;
            deliveredAt: Date | null;
            failReason: string | null;
            courier: {
                name: string;
            } | null;
            rider: {
                firstName: string | null;
                riderProfile: {
                    partner: string;
                } | null;
            } | null;
        }[];
    } & {
        id: string;
        pharmacyId: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        code: string;
        patientId: string;
        deliveryAddress: string;
        deliveryArea: string | null;
        dropoffLat: number | null;
        dropoffLng: number | null;
        etaMinutes: number | null;
        lateTextAt: Date | null;
        subtotalKobo: number;
        deliveryKobo: number;
        serviceKobo: number;
        totalKobo: number;
        statusNote: string | null;
        paymentStatus: PaymentStatus;
        paidAt: Date | null;
        paymentTxId: string | null;
        preparingAt: Date | null;
        readyAt: Date | null;
        payoutId: string | null;
    }, "deliveries"> & {
        arriveBy: Date | null;
        delivery: {
            dropoffCode?: string | null | undefined;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
        };
    })[]>;
    getMine(user: AuthUser, code: string): Promise<Omit<{
        pharmacy: {
            name: string;
            area: string;
        };
        prescription: {
            status: PrescriptionStatus;
            code: string;
        } | null;
        items: ({
            product: {
                name: string;
                coldChain: boolean;
                strength: string | null;
                classification: ProductClass;
            };
            batch: {
                expiresAt: Date;
                batchNumber: string;
            } | null;
        } & {
            id: string;
            productId: string;
            quantity: number;
            orderId: string;
            unitPriceKobo: number;
            batchId: string | null;
        })[];
        deliveries: {
            provider: import("../generated/prisma/enums.js").DeliveryProvider;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
            code: string;
            trackingUrl: string | null;
            dropoffCode: string;
            assignedAt: Date | null;
            pickedUpAt: Date | null;
            deliveredAt: Date | null;
            failReason: string | null;
            courier: {
                name: string;
            } | null;
            rider: {
                firstName: string | null;
                riderProfile: {
                    partner: string;
                } | null;
            } | null;
        }[];
    } & {
        id: string;
        pharmacyId: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        code: string;
        patientId: string;
        deliveryAddress: string;
        deliveryArea: string | null;
        dropoffLat: number | null;
        dropoffLng: number | null;
        etaMinutes: number | null;
        lateTextAt: Date | null;
        subtotalKobo: number;
        deliveryKobo: number;
        serviceKobo: number;
        totalKobo: number;
        statusNote: string | null;
        paymentStatus: PaymentStatus;
        paidAt: Date | null;
        paymentTxId: string | null;
        preparingAt: Date | null;
        readyAt: Date | null;
        payoutId: string | null;
    }, "deliveries"> & {
        arriveBy: Date | null;
        delivery: {
            dropoffCode?: string | null | undefined;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
        };
    }>;
    cancelMine(user: AuthUser, code: string): Promise<Omit<{
        pharmacy: {
            name: string;
            area: string;
        };
        prescription: {
            status: PrescriptionStatus;
            code: string;
        } | null;
        items: ({
            product: {
                name: string;
                coldChain: boolean;
                strength: string | null;
                classification: ProductClass;
            };
            batch: {
                expiresAt: Date;
                batchNumber: string;
            } | null;
        } & {
            id: string;
            productId: string;
            quantity: number;
            orderId: string;
            unitPriceKobo: number;
            batchId: string | null;
        })[];
        deliveries: {
            provider: import("../generated/prisma/enums.js").DeliveryProvider;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
            code: string;
            trackingUrl: string | null;
            dropoffCode: string;
            assignedAt: Date | null;
            pickedUpAt: Date | null;
            deliveredAt: Date | null;
            failReason: string | null;
            courier: {
                name: string;
            } | null;
            rider: {
                firstName: string | null;
                riderProfile: {
                    partner: string;
                } | null;
            } | null;
        }[];
    } & {
        id: string;
        pharmacyId: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        code: string;
        patientId: string;
        deliveryAddress: string;
        deliveryArea: string | null;
        dropoffLat: number | null;
        dropoffLng: number | null;
        etaMinutes: number | null;
        lateTextAt: Date | null;
        subtotalKobo: number;
        deliveryKobo: number;
        serviceKobo: number;
        totalKobo: number;
        statusNote: string | null;
        paymentStatus: PaymentStatus;
        paidAt: Date | null;
        paymentTxId: string | null;
        preparingAt: Date | null;
        readyAt: Date | null;
        payoutId: string | null;
    }, "deliveries"> & {
        arriveBy: Date | null;
        delivery: {
            dropoffCode?: string | null | undefined;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
        };
    }>;
    listForPharmacy(user: AuthUser, status?: OrderStatus): Promise<(Omit<{
        pharmacy: {
            name: string;
            area: string;
        };
        prescription: {
            status: PrescriptionStatus;
            code: string;
        } | null;
        items: ({
            product: {
                name: string;
                coldChain: boolean;
                strength: string | null;
                classification: ProductClass;
            };
            batch: {
                expiresAt: Date;
                batchNumber: string;
            } | null;
        } & {
            id: string;
            productId: string;
            quantity: number;
            orderId: string;
            unitPriceKobo: number;
            batchId: string | null;
        })[];
        patient: {
            firstName: string | null;
            lastName: string | null;
        };
        deliveries: {
            provider: import("../generated/prisma/enums.js").DeliveryProvider;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
            code: string;
            trackingUrl: string | null;
            assignedAt: Date | null;
            pickedUpAt: Date | null;
            deliveredAt: Date | null;
            failReason: string | null;
            courier: {
                name: string;
            } | null;
            rider: {
                firstName: string | null;
                riderProfile: {
                    partner: string;
                } | null;
            } | null;
        }[];
    } & {
        id: string;
        pharmacyId: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        code: string;
        patientId: string;
        deliveryAddress: string;
        deliveryArea: string | null;
        dropoffLat: number | null;
        dropoffLng: number | null;
        etaMinutes: number | null;
        lateTextAt: Date | null;
        subtotalKobo: number;
        deliveryKobo: number;
        serviceKobo: number;
        totalKobo: number;
        statusNote: string | null;
        paymentStatus: PaymentStatus;
        paidAt: Date | null;
        paymentTxId: string | null;
        preparingAt: Date | null;
        readyAt: Date | null;
        payoutId: string | null;
    }, "deliveries"> & {
        arriveBy: Date | null;
        delivery: {
            dropoffCode?: string | null | undefined;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
        };
    })[]>;
    move(user: AuthUser, code: string, to: OrderStatus, note?: string): Promise<Omit<{
        pharmacy: {
            name: string;
            area: string;
        };
        prescription: {
            status: PrescriptionStatus;
            code: string;
        } | null;
        items: ({
            product: {
                name: string;
                coldChain: boolean;
                strength: string | null;
                classification: ProductClass;
            };
            batch: {
                expiresAt: Date;
                batchNumber: string;
            } | null;
        } & {
            id: string;
            productId: string;
            quantity: number;
            orderId: string;
            unitPriceKobo: number;
            batchId: string | null;
        })[];
        patient: {
            firstName: string | null;
            lastName: string | null;
        };
        deliveries: {
            provider: import("../generated/prisma/enums.js").DeliveryProvider;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
            code: string;
            trackingUrl: string | null;
            assignedAt: Date | null;
            pickedUpAt: Date | null;
            deliveredAt: Date | null;
            failReason: string | null;
            courier: {
                name: string;
            } | null;
            rider: {
                firstName: string | null;
                riderProfile: {
                    partner: string;
                } | null;
            } | null;
        }[];
    } & {
        id: string;
        pharmacyId: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        code: string;
        patientId: string;
        deliveryAddress: string;
        deliveryArea: string | null;
        dropoffLat: number | null;
        dropoffLng: number | null;
        etaMinutes: number | null;
        lateTextAt: Date | null;
        subtotalKobo: number;
        deliveryKobo: number;
        serviceKobo: number;
        totalKobo: number;
        statusNote: string | null;
        paymentStatus: PaymentStatus;
        paidAt: Date | null;
        paymentTxId: string | null;
        preparingAt: Date | null;
        readyAt: Date | null;
        payoutId: string | null;
    }, "deliveries"> & {
        arriveBy: Date | null;
        delivery: {
            dropoffCode?: string | null | undefined;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
        };
    }>;
    private allocate;
    private restock;
    private quarantineReturned;
    private refundIfPaid;
}
