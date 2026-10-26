import { ConfigService } from '@nestjs/config';
export declare class SmsService {
    private readonly config;
    private readonly log;
    constructor(config: ConfigService);
    get devEcho(): boolean;
    sendOtp(phone: string, code: string): Promise<void>;
    sendText(phone: string, text: string): Promise<void>;
    private send;
}
