var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ChowdeckRelayAdapter_1;
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CourierApiError } from './courier-api.js';
const TIMEOUT_MS = 15_000;
export function relayStatus(raw) {
    switch ((raw ?? '').toLowerCase()) {
        case 'preparing':
        case 'accepted':
            return 'pending';
        case 'awaiting_pickup':
            return 'rider_assigned';
        case 'in_transit':
        case 'picked':
        case 'arrived':
            return 'in_transit';
        case 'success':
        case 'completed':
            return 'delivered';
        case 'rejected':
        case 'cancelled':
        case 'canceled':
            return 'cancelled';
        default:
            return 'unknown';
    }
}
let ChowdeckRelayAdapter = ChowdeckRelayAdapter_1 = class ChowdeckRelayAdapter {
    config;
    key = 'CHOWDECK_RELAY';
    label = 'Chowdeck Relay';
    log = new Logger(ChowdeckRelayAdapter_1.name);
    constructor(config) {
        this.config = config;
    }
    configured() {
        return !!this.config.get('CHOWDECK_API_KEY');
    }
    get base() {
        return (this.config.get('CHOWDECK_BASE_URL') || 'https://api.chowdeck.com').replace(/\/$/, '');
    }
    async quote(pickup, dropoff, opts) {
        const data = await this.call('POST', '/relay/delivery/fee', {
            source_address: { latitude: pickup.lat, longitude: pickup.lng },
            destination_address: { latitude: dropoff.lat, longitude: dropoff.lng },
            ...(opts.pickupAddress ? { source_address_string: opts.pickupAddress } : {}),
            ...(opts.dropoffAddress ? { destination_address_string: opts.dropoffAddress } : {}),
        });
        if (typeof data.id !== 'number' || typeof data.total_amount !== 'number')
            throw new CourierApiError('Relay returned an unexpected fee quote');
        return { feeId: String(data.id), amountKobo: data.total_amount };
    }
    async book(input) {
        const data = await this.call('POST', '/relay/delivery', {
            fee_id: Number(input.feeId),
            reference: input.reference,
            item_type: this.config.get('CHOWDECK_ITEM_TYPE') || 'others',
            user_action: 'sending',
            source_contact: { name: input.pickup.name, phone: input.pickup.phone, country_code: 'NG' },
            destination_contact: { name: input.dropoff.name, phone: input.dropoff.phone, country_code: 'NG' },
            customer_delivery_note: input.note,
        });
        if (!data.reference)
            throw new CourierApiError('Relay didn’t return a delivery reference');
        return {
            reference: data.reference,
            priceKobo: typeof data.delivery_price === 'number' ? data.delivery_price : null,
            trackingUrl: data.tracking_url ?? null,
            status: relayStatus(data.status),
            rawStatus: data.status ?? 'unknown',
        };
    }
    async status(reference) {
        const data = await this.call('GET', `/relay/delivery/${encodeURIComponent(reference)}`);
        return { status: relayStatus(data.status), rawStatus: data.status ?? 'unknown', trackingUrl: data.tracking_url ?? null };
    }
    async cancel(reference, reason) {
        await this.call('POST', `/relay/delivery/${encodeURIComponent(reference)}/cancel`, { reason });
    }
    async call(method, path, body) {
        let status = 0;
        let json = {};
        try {
            const res = await fetch(`${this.base}${path}`, {
                method,
                headers: { Authorization: `Bearer ${this.config.getOrThrow('CHOWDECK_API_KEY')}`, 'Content-Type': 'application/json', Accept: 'application/json' },
                ...(body ? { body: JSON.stringify(body) } : {}),
                signal: AbortSignal.timeout(TIMEOUT_MS),
            });
            status = res.status;
            json = await res.json().catch(() => ({}));
        }
        catch (e) {
            this.log.error(`Relay unreachable (${method} ${path}): ${e instanceof Error ? e.message : String(e)}`);
            throw new CourierApiError('Chowdeck Relay can’t be reached right now');
        }
        if (status < 200 || status >= 300 || json.status !== 'success' || json.data === undefined) {
            this.log.warn(`Relay ${method} ${path} → HTTP ${status}: ${json.message ?? ''}`);
            throw new CourierApiError(`Chowdeck Relay: ${json.message ?? `request failed (HTTP ${status})`}`);
        }
        return json.data;
    }
};
ChowdeckRelayAdapter = ChowdeckRelayAdapter_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService])
], ChowdeckRelayAdapter);
export { ChowdeckRelayAdapter };
//# sourceMappingURL=chowdeck-relay.adapter.js.map