import { TRANSFER_MIN_DAYS_LEFT } from '../common/fees.js';
import { BatchStatus, ProductClass } from '../generated/prisma/client.js';
const DAY = 24 * 60 * 60_000;
export function transferBlock(b, now) {
    if (b.product.classification === ProductClass.CONTROLLED)
        return 'Controlled medicines can’t be transferred';
    if (b.product.coldChain)
        return 'Cold-chain products can only move with an equipped logistics partner — contact support';
    if (b.status === BatchStatus.RECALLED)
        return 'This batch is on recall hold';
    if (b.status === BatchStatus.QUARANTINED)
        return 'This batch is quarantined';
    if (b.status === BatchStatus.WRITTEN_OFF)
        return 'This batch has been written off';
    if (b.expiresAt.getTime() <= now.getTime())
        return 'This batch has expired';
    if (b.expiresAt.getTime() - now.getTime() < TRANSFER_MIN_DAYS_LEFT * DAY)
        return `Less than ${TRANSFER_MIN_DAYS_LEFT} days of shelf life left`;
    return null;
}
export function receiptHold(b, now) {
    if (b.status !== BatchStatus.SALEABLE)
        return `Sending batch was ${b.status.toLowerCase().replace('_', ' ')} while in transit — inspect before sale`;
    if (b.expiresAt.getTime() <= now.getTime())
        return 'Expired in transit — do not sell';
    return null;
}
//# sourceMappingURL=rules.js.map