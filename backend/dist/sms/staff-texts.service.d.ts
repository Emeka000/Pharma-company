import { PrismaService } from '../prisma/prisma.service.js';
import { SmsService } from './sms.service.js';
export declare class StaffTextsService {
    private readonly prisma;
    private readonly sms;
    private readonly log;
    constructor(prisma: PrismaService, sms: SmsService);
    pharmacists(pharmacyId: string, text: string): Promise<void>;
    admins(text: string): Promise<void>;
    background(fn: () => Promise<void>): void;
    private send;
}
