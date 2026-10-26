import { EXPIRY_REMINDER_DAYS } from '../common/fees.js';
const DAY = 24 * 60 * 60_000;
const THRESHOLDS = [...EXPIRY_REMINDER_DAYS].sort((a, b) => a - b);
export const daysLeft = (expiresAt, now) => Math.ceil((expiresAt.getTime() - now.getTime()) / DAY);
export function dueReminder(expiresAt, lastSent, now) {
    const left = daysLeft(expiresAt, now);
    if (left <= 0)
        return null;
    const t = THRESHOLDS.find((d) => left <= d);
    if (t === undefined)
        return null;
    return lastSent !== null && lastSent <= t ? null : t;
}
export function expiryState(expiresAt, now) {
    if (!expiresAt)
        return 'valid';
    const left = daysLeft(expiresAt, now);
    return left <= 0 ? 'expired' : left <= THRESHOLDS[THRESHOLDS.length - 1] ? 'expiring' : 'valid';
}
//# sourceMappingURL=expiry.js.map