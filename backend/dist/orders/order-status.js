import { OrderStatus } from '../generated/prisma/client.js';
export const PHARMACY_TRANSITIONS = {
    [OrderStatus.ACCEPTED]: [OrderStatus.PREPARING, OrderStatus.CANCELLED],
    [OrderStatus.PREPARING]: [OrderStatus.READY, OrderStatus.CANCELLED],
    [OrderStatus.READY]: [OrderStatus.CANCELLED],
};
export const PATIENT_CANCELLABLE = [OrderStatus.PHARMACIST_REVIEW, OrderStatus.ACCEPTED];
export const canPharmacyMove = (from, to) => PHARMACY_TRANSITIONS[from]?.includes(to) ?? false;
export function allocateFefo(batches, needed) {
    const sorted = [...batches].sort((a, b) => a.expiresAt.getTime() - b.expiresAt.getTime());
    const out = [];
    let remaining = needed;
    for (const b of sorted) {
        if (remaining <= 0)
            break;
        const take = Math.min(b.quantity, remaining);
        if (take > 0) {
            out.push({ batchId: b.id, take });
            remaining -= take;
        }
    }
    return remaining > 0 ? null : out;
}
//# sourceMappingURL=order-status.js.map