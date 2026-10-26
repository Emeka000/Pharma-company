import type { AuthUser } from '../common/auth-user.js';
import { ConfirmPaymentDto, StartPaymentDto } from './dto.js';
import { PaymentsService } from './payments.service.js';
export declare class OrderPaymentsController {
    private readonly payments;
    constructor(payments: PaymentsService);
    start(user: AuthUser, code: string, dto: StartPaymentDto): Promise<{
        provider: "demo";
        code: string;
        amount: number;
        currency: string;
        publicKey?: undefined;
        txRef?: undefined;
        paymentOptions?: undefined;
        customer?: undefined;
    } | {
        provider: "flutterwave";
        code: string;
        publicKey: string;
        txRef: string;
        amount: number;
        currency: string;
        paymentOptions: string;
        customer: {
            phone_number?: string | undefined;
            email: string;
            name: string;
        };
    }>;
    confirm(user: AuthUser, code: string, dto: ConfirmPaymentDto): Promise<Omit<{
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
        status: import("../generated/prisma/enums.js").OrderStatus;
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
    demo(user: AuthUser, code: string): Promise<Omit<{
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
        status: import("../generated/prisma/enums.js").OrderStatus;
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
export declare class FlutterwaveWebhookController {
    private readonly payments;
    constructor(payments: PaymentsService);
    webhook(hash: string | undefined, body: unknown): Promise<{
        received: boolean;
    }>;
}
