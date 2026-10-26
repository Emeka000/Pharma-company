import { OrderStatus } from '../generated/prisma/client.js';
export declare const PHARMACY_TRANSITIONS: Partial<Record<OrderStatus, OrderStatus[]>>;
export declare const PATIENT_CANCELLABLE: OrderStatus[];
export declare const canPharmacyMove: (from: OrderStatus, to: OrderStatus) => boolean;
export type Allocation = {
    batchId: string;
    take: number;
};
export declare function allocateFefo(batches: {
    id: string;
    quantity: number;
    expiresAt: Date;
}[], needed: number): Allocation[] | null;
