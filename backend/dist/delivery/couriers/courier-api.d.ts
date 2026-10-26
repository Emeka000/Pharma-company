export type Point = {
    lat: number;
    lng: number;
};
export type CourierStatus = 'pending' | 'rider_assigned' | 'in_transit' | 'delivered' | 'cancelled' | 'unknown';
export type CourierQuote = {
    feeId: string;
    amountKobo: number;
};
export type CourierBookingInput = {
    feeId: string;
    reference: string;
    pickup: {
        name: string;
        phone: string;
    };
    dropoff: {
        name: string;
        phone: string;
    };
    note: string;
};
export type CourierBooking = {
    reference: string;
    priceKobo: number | null;
    trackingUrl: string | null;
    status: CourierStatus;
    rawStatus: string;
};
export interface CourierApi {
    readonly key: string;
    readonly label: string;
    configured(): boolean;
    quote(pickup: Point, dropoff: Point, opts: {
        pickupAddress?: string;
        dropoffAddress?: string;
    }): Promise<CourierQuote>;
    book(input: CourierBookingInput): Promise<CourierBooking>;
    status(reference: string): Promise<{
        status: CourierStatus;
        rawStatus: string;
        trackingUrl: string | null;
    }>;
    cancel(reference: string, reason: string): Promise<void>;
}
export declare class CourierApiError extends Error {
}
export declare function localPhone(e164: string): string;
