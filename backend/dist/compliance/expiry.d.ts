export declare const daysLeft: (expiresAt: Date, now: Date) => number;
export declare function dueReminder(expiresAt: Date, lastSent: number | null, now: Date): number | null;
export type ExpiryState = 'valid' | 'expiring' | 'expired';
export declare function expiryState(expiresAt: Date | null, now: Date): ExpiryState;
