import { ConfigService } from '@nestjs/config';
import type { FlutterwaveTransaction } from './charge.js';
export declare class FlutterwaveService {
    private readonly config;
    private readonly log;
    constructor(config: ConfigService);
    get publicKey(): string;
    get configured(): boolean;
    webhookAuthentic(header: string | undefined): boolean;
    verify(transactionId: number): Promise<FlutterwaveTransaction>;
}
