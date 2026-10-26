import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
import { SmsService } from '../sms/sms.service.js';
export declare class CustomerAlertsService {
    private readonly prisma;
    private readonly sms;
    private readonly config;
    private readonly log;
    constructor(prisma: PrismaService, sms: SmsService, config: ConfigService);
    private track;
    onTheWay(orderId: string): void;
    failed(orderId: string, reason: string): void;
    checkLate(now?: Date): Promise<string[]>;
    private text;
    private background;
}
