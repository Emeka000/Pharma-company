import { ConfigService } from '@nestjs/config';
import { type CourierApi, type CourierBooking, type CourierBookingInput, type CourierQuote, type CourierStatus, type Point } from './courier-api.js';
export declare function relayStatus(raw: string | undefined): CourierStatus;
export declare class ChowdeckRelayAdapter implements CourierApi {
    private readonly config;
    readonly key = "CHOWDECK_RELAY";
    readonly label = "Chowdeck Relay";
    private readonly log;
    constructor(config: ConfigService);
    configured(): boolean;
    private get base();
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
    private call;
}
