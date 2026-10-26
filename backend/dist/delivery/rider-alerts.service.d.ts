import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
import { SmsService } from '../sms/sms.service.js';
export declare const MAX_ALERTED_RIDERS = 10;
export declare const NEW_JOB_COOLDOWN_MS: number;
export declare class RiderAlertsService {
    private readonly prisma;
    private readonly sms;
    private readonly config;
    private readonly log;
    private readonly lastNewJobText;
    constructor(prisma: PrismaService, sms: SmsService, config: ConfigService);
    private get riderAppUrl();
    newJob(deliveryId: string, exceptRiderId?: string): void;
    ready(orderId: string): void;
    cancelled(jobs: {
        code: string;
        riderId: string | null;
    }[]): void;
    private sendNewJob;
    private text;
    private background;
}
