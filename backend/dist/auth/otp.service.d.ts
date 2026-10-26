import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
export declare const OTP_TTL_SECONDS = 300;
export declare const OTP_MAX_ATTEMPTS = 5;
export declare const OTP_MAX_PER_HOUR = 5;
export declare class OtpService {
    private readonly prisma;
    private readonly key;
    constructor(prisma: PrismaService, config: ConfigService);
    private hash;
    issue(phone: string): Promise<string>;
    check(phone: string, code: string): Promise<boolean>;
}
