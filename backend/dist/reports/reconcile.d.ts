export type InvoiceLine = {
    providerRef: string;
    amountKobo: number;
};
export type OurDelivery = {
    code: string;
    orderCode: string;
    providerRef: string | null;
    status: 'AWAITING_RIDER' | 'ASSIGNED' | 'PICKED_UP' | 'DELIVERED' | 'FAILED' | 'CANCELLED';
    feeKobo: number | null;
    pickedUpAt: Date | null;
    costBearer: 'CUSTOMER' | 'COURIER' | 'PHARMACY' | 'PLATFORM' | null;
    inPeriod: boolean;
};
export type Outcome = 'MATCHED' | 'OVERCHARGED' | 'UNDERCHARGED' | 'UNKNOWN' | 'DUPLICATE' | 'CANCELLED_BEFORE_PICKUP' | 'COURIER_FAULT' | 'NOT_FINISHED';
export declare const DISPUTED: Outcome[];
export type LineResult = InvoiceLine & {
    outcome: Outcome;
    expectedKobo: number | null;
    delivery: string | null;
    order: string | null;
    disputedKobo: number;
};
export declare function reconcile(lines: InvoiceLine[], ours: OurDelivery[]): {
    lines: LineResult[];
    notInvoiced: {
        delivery: string;
        order: string;
        providerRef: string | null;
        status: "PICKED_UP" | "DELIVERED" | "CANCELLED" | "AWAITING_RIDER" | "ASSIGNED" | "FAILED";
        feeKobo: number | null;
    }[];
    totals: {
        invoicedKobo: number;
        disputedKobo: number;
        payableKobo: number;
        lines: number;
        matched: number;
        disputed: number;
    };
};
