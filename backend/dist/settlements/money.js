import { PHARMACY_COMMISSION_BPS } from '../common/fees.js';
export const commissionKobo = (subtotalKobo) => Math.round((subtotalKobo * PHARMACY_COMMISSION_BPS) / 10_000);
export function settle(orders) {
    const grossKobo = orders.reduce((s, o) => s + o.subtotalKobo, 0);
    const feesKobo = orders.reduce((s, o) => s + commissionKobo(o.subtotalKobo), 0);
    return { orderCount: orders.length, grossKobo, feesKobo, netKobo: grossKobo - feesKobo };
}
export const ngn = (kobo) => `NGN ${(kobo / 100).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
//# sourceMappingURL=money.js.map