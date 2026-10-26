import { ConfigService } from '@nestjs/config';
import { AuditService } from '../audit/audit.service.js';
import type { AuthUser } from '../common/auth-user.js';
import { type Courier } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { SmsService } from '../sms/sms.service.js';
import { ChowdeckRelayAdapter } from './couriers/chowdeck-relay.adapter.js';
import { type CourierApi, type CourierStatus } from './couriers/courier-api.js';
import { DeliveryService } from './delivery.service.js';
import { RiderAlertsService } from './rider-alerts.service.js';
export declare class CourierDispatchService {
    private readonly prisma;
    private readonly audit;
    private readonly config;
    private readonly sms;
    private readonly delivery;
    private readonly riders;
    private readonly log;
    private readonly apis;
    constructor(prisma: PrismaService, audit: AuditService, config: ConfigService, sms: SmsService, delivery: DeliveryService, riders: RiderAlertsService, relay: ChowdeckRelayAdapter);
    available(): {
        key: string;
        label: string;
        configured: boolean;
    }[];
    apiFor(courier: Pick<Courier, 'api'>): CourierApi | undefined;
    private eligible;
    checkoutQuote(dto: {
        pharmacyId: string;
        lat: number;
        lng: number;
        prescription: boolean;
        coldChain: boolean;
        address?: string;
    }): Promise<{
        deliveryKobo: 150000 | 250000;
        quoteId: null;
        source: "standard";
    } | {
        deliveryKobo: number;
        quoteId: string;
        source: "courier";
    }>;
    book(orderId: string, actorId: string | null): Promise<{
        booked: string;
    } | {
        failed: string;
    }>;
    autoBook(orderId: string): void;
    bookNow(admin: AuthUser, deliveryCode: string): Promise<{
        booked: string;
    } | {
        failed: string;
    }>;
    cancelBooking(admin: AuthUser, deliveryCode: string): Promise<{
        cancelled: boolean;
    }>;
    cancelAtProvider(jobs: {
        code: string;
        provider: string;
        providerRef: string | null;
        courier: {
            api: string | null;
        } | null;
    }[]): void;
    sync(): Promise<void>;
    chowdeckWebhook(rawBody: Buffer | undefined, signature: string | undefined, body: unknown): Promise<{
        received: boolean;
    }>;
    apply(deliveryId: string, status: CourierStatus, rawStatus: string, trackingUrl: string | null): Promise<void>;
    private textOps;
}
