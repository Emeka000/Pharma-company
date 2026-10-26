import { FailureCause } from '../generated/prisma/client.js';
export declare class RiderStatusDto {
    online: boolean;
    area?: string;
}
export declare class DropoffDto {
    code: string;
}
export declare class FailDto {
    reason: string;
    cause?: FailureCause;
}
export declare class HandoverDto {
    sealCode: string;
}
export declare class BookCourierDto {
    courierId: string;
    providerRef: string;
    feeKobo?: number;
    trackingUrl?: string;
}
export declare class CourierDeliveredDto {
    customerCode?: string;
    courierProof?: string;
}
export declare class CheckoutQuoteDto {
    pharmacyId: string;
    lat: number;
    lng: number;
    prescription?: boolean;
    coldChain?: boolean;
    address?: string;
}
