var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SmsService_1;
import { Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { isDevMode } from '../common/dev-mode.js';
import { OTP_TTL_SECONDS } from '../auth/otp.service.js';
const SEND_TIMEOUT_MS = 10_000;
let SmsService = SmsService_1 = class SmsService {
    config;
    log = new Logger(SmsService_1.name);
    constructor(config) {
        this.config = config;
    }
    get devEcho() {
        return isDevMode(this.config);
    }
    async sendOtp(phone, code) {
        if (this.devEcho) {
            this.log.log(`OTP for ${phone.slice(0, 7)}•••${phone.slice(-2)}: ${code}`);
            return;
        }
        const minutes = Math.round(OTP_TTL_SECONDS / 60);
        await this.send(phone, `Your Pilbridge code is ${code}. It expires in ${minutes} minutes. Never share it with anyone.`, 'We couldn’t send the code right now — please try again shortly');
    }
    async sendText(phone, text) {
        if (this.devEcho) {
            this.log.log(`SMS to ${phone.slice(0, 7)}•••${phone.slice(-2)}: ${text}`);
            return;
        }
        await this.send(phone, text, 'We couldn’t send the text message right now');
    }
    async send(phone, sms, failure) {
        const apiKey = this.config.get('TERMII_API_KEY');
        if (!apiKey)
            throw new ServiceUnavailableException('SMS delivery is not configured');
        const baseUrl = (this.config.get('TERMII_BASE_URL') || 'https://api.ng.termii.com').replace(/\/$/, '');
        let status = 0;
        let body = {};
        try {
            const res = await fetch(`${baseUrl}/api/sms/send`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    api_key: apiKey,
                    to: phone.replace(/^\+/, ''),
                    from: this.config.get('TERMII_SENDER_ID') || 'Pilbridge',
                    sms,
                    type: 'plain',
                    channel: this.config.get('TERMII_CHANNEL') || 'dnd',
                }),
                signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
            });
            status = res.status;
            body = await res.json().catch(() => ({}));
        }
        catch (e) {
            this.log.error(`Termii unreachable: ${e instanceof Error ? e.message : String(e)}`);
            throw new ServiceUnavailableException(failure);
        }
        if (status < 200 || status >= 300 || body.code !== 'ok') {
            this.log.error(`Termii rejected SMS to ${phone.slice(0, 7)}•••${phone.slice(-2)}: HTTP ${status} ${body.code ?? ''} ${body.message ?? ''}`.trim());
            throw new ServiceUnavailableException(failure);
        }
        this.log.log(`SMS sent to ${phone.slice(0, 7)}•••${phone.slice(-2)} (${body.message_id ?? 'no id'})`);
    }
};
SmsService = SmsService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService])
], SmsService);
export { SmsService };
//# sourceMappingURL=sms.service.js.map