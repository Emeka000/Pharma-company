import type { AuthUser } from '../common/auth-user.js';
import { OrderStatus } from '../generated/prisma/client.js';
import { CreateOrderDto, UpdateOrderStatusDto } from './dto.js';
import { OrdersService } from './orders.service.js';
export declare class OrdersController {
    private readonly orders;
    constructor(orders: OrdersService);
    create(user: AuthUser, dto: CreateOrderDto): Promise<Omit<{
        pharmacy: {
            name: string;
            area: string;
        };
        prescription: {
            status: import("../generated/prisma/enums.js").PrescriptionStatus;
            code: string;
        } | null;
        items: ({
            product: {
                name: string;
                coldChain: boolean;
                strength: string | null;
                classification: import("../generated/prisma/enums.js").ProductClass;
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
        paymentStatus: import("../generated/prisma/enums.js").PaymentStatus;
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
    list(user: AuthUser): Promise<(Omit<{
        pharmacy: {
            name: string;
            area: string;
        };
        prescription: {
            status: import("../generated/prisma/enums.js").PrescriptionStatus;
            code: string;
        } | null;
        items: ({
            product: {
                name: string;
                coldChain: boolean;
                strength: string | null;
                classification: import("../generated/prisma/enums.js").ProductClass;
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
        paymentStatus: import("../generated/prisma/enums.js").PaymentStatus;
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
    get(user: AuthUser, code: string): Promise<Omit<{
        pharmacy: {
            name: string;
            area: string;
        };
        prescription: {
            status: import("../generated/prisma/enums.js").PrescriptionStatus;
            code: string;
        } | null;
        items: ({
            product: {
                name: string;
                coldChain: boolean;
                strength: string | null;
                classification: import("../generated/prisma/enums.js").ProductClass;
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
        paymentStatus: import("../generated/prisma/enums.js").PaymentStatus;
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
    cancel(user: AuthUser, code: string): Promise<Omit<{
        pharmacy: {
            name: string;
            area: string;
        };
        prescription: {
            status: import("../generated/prisma/enums.js").PrescriptionStatus;
            code: string;
        } | null;
        items: ({
            product: {
                name: string;
                coldChain: boolean;
                strength: string | null;
                classification: import("../generated/prisma/enums.js").ProductClass;
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
        paymentStatus: import("../generated/prisma/enums.js").PaymentStatus;
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
}
export declare class PharmacyOrdersController {
    private readonly orders;
    constructor(orders: OrdersService);
    list(user: AuthUser, status?: OrderStatus): Promise<(Omit<{
        pharmacy: {
            name: string;
            area: string;
        };
        prescription: {
            status: import("../generated/prisma/enums.js").PrescriptionStatus;
            code: string;
        } | null;
        items: ({
            product: {
                name: string;
                coldChain: boolean;
                strength: string | null;
                classification: import("../generated/prisma/enums.js").ProductClass;
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
        paymentStatus: import("../generated/prisma/enums.js").PaymentStatus;
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
    move(user: AuthUser, code: string, dto: UpdateOrderStatusDto): Promise<Omit<{
        pharmacy: {
            name: string;
            area: string;
        };
        prescription: {
            status: import("../generated/prisma/enums.js").PrescriptionStatus;
            code: string;
        } | null;
        items: ({
            product: {
                name: string;
                coldChain: boolean;
                strength: string | null;
                classification: import("../generated/prisma/enums.js").ProductClass;
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
        paymentStatus: import("../generated/prisma/enums.js").PaymentStatus;
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
}
