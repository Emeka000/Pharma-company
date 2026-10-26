import { BatchStatus, ProductClass } from '../generated/prisma/client.js';
type BatchLike = {
    status: BatchStatus;
    expiresAt: Date;
    product: {
        classification: ProductClass;
        coldChain: boolean;
    };
};
export declare function transferBlock(b: BatchLike, now: Date): string | null;
export declare function receiptHold(b: Pick<BatchLike, 'status' | 'expiresAt'>, now: Date): string | null;
export {};
