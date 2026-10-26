var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FlutterwaveService_1;
import { BadGatewayException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { timingSafeEqual } from 'node:crypto';
const API = 'https://api.flutterwave.com/v3';
const TIMEOUT_MS = 15_000;
let FlutterwaveService = FlutterwaveService_1 = class FlutterwaveService {
    config;
    log = new Logger(FlutterwaveService_1.name);
    constructor(config) {
        this.config = config;
    }
    get publicKey() {
        return this.config.get('FLW_PUBLIC_KEY') ?? '';
    }
    get configured() {
        return Boolean(this.publicKey && this.config.get('FLW_SECRET_KEY'));
    }
    webhookAuthentic(header) {
        const expected = this.config.get('FLW_SECRET_HASH');
        if (!expected || !header)
            return false;
        const a = Buffer.from(header);
        const b = Buffer.from(expected);
        return a.length === b.length && timingSafeEqual(a, b);
    }
    async verify(transactionId) {
        let status = 0;
        let body = {};
        try {
            const res = await fetch(`${API}/transactions/${encodeURIComponent(transactionId)}/verify`, {
                headers: { Authorization: `Bearer ${this.config.getOrThrow('FLW_SECRET_KEY')}` },
                signal: AbortSignal.timeout(TIMEOUT_MS),
            });
            status = res.status;
            body = await res.json().catch(() => ({}));
        }
        catch (e) {
            this.log.error(`Flutterwave unreachable: ${e instanceof Error ? e.message : String(e)}`);
            throw new BadGatewayException('We couldn’t confirm your payment with Flutterwave — please try again in a moment');
        }
        if (status !== 200 || body.status !== 'success' || !body.data) {
            this.log.warn(`Flutterwave couldn’t verify transaction ${transactionId}: HTTP ${status} ${body.message ?? ''}`.trim());
            throw new BadGatewayException('We couldn’t confirm that payment — if you were charged, contact support with your order code');
        }
        return body.data;
    }
};
FlutterwaveService = FlutterwaveService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService])
], FlutterwaveService);
export { FlutterwaveService };
//# sourceMappingURL=flutterwave.service.js.map