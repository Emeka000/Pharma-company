import { type OnApplicationBootstrap, type OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DeliveryStatus, OrderStatus } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { SmsService } from '../sms/sms.service.js';
import { CourierDispatchService } from './courier-dispatch.service.js';
import { CustomerAlertsService } from './customer-alerts.service.js';
export declare const STALE_JOB_MINUTES = 10;
export declare class DeliveryWatchService implements OnApplicationBootstrap, OnModuleDestroy {
    private readonly prisma;
    private readonly sms;
    private readonly customers;
    private readonly config;
    private readonly couriers;
    private readonly log;
    private timer?;
    constructor(prisma: PrismaService, sms: SmsService, customers: CustomerAlertsService, config: ConfigService, couriers: CourierDispatchService);
    onApplicationBootstrap(): void;
    onModuleDestroy(): void;
    check(now?: Date): Promise<{
        late: string[];
        unassigned: string[];
    }>;
    snapshot(now?: Date): Promise<{
        late: {
            order: string;
            status: OrderStatus;
            dueAt: Date;
            minutesLate: number;
            pharmacy: string;
            dropoffArea: string | null;
            delivery: {
                code: string;
                status: DeliveryStatus;
            } | null;
            rider: {
                name: string;
                phone: string | null;
                partner: string | null;
            } | null;
        }[];
        unassigned: {
            order: string;
            orderStatus: OrderStatus;
            delivery: string;
            waitingMinutes: number;
            coldChain: boolean;
            prescription: boolean;
            bookingError: string | null;
            pharmacy: string;
            dropoffArea: string | null;
        }[];
        queue: {
            order: string;
            orderStatus: OrderStatus;
            delivery: string;
            waitingMinutes: number;
            coldChain: boolean;
            prescription: boolean;
            bookingError: string | null;
            pharmacy: string;
            dropoffArea: string | null;
        }[];
        courierJobs: {
            delivery: string;
            status: DeliveryStatus;
            order: string;
            orderStatus: OrderStatus;
            courier: string | null;
            courierContact: string | null;
            providerRef: string | null;
            feeKobo: number | null;
            trackingUrl: string | null;
            connected: boolean;
            providerStatus: string | null;
            warning: string | null;
            pharmacy: string;
            dropoffArea: string | null;
        }[];
    }>;
    private textOps;
}
