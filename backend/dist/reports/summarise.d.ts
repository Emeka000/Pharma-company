export declare const TARGETS: {
    pickupWithinMinutes: number;
    pickupPunctuality: number;
    completion: number;
    proofOfDelivery: number;
};
export type DeliveryRow = {
    code: string;
    orderCode: string;
    provider: string;
    pharmacy: string;
    area: string | null;
    status: 'AWAITING_RIDER' | 'ASSIGNED' | 'PICKED_UP' | 'DELIVERED' | 'FAILED' | 'CANCELLED';
    createdAt: Date;
    assignedAt: Date | null;
    pickedUpAt: Date | null;
    deliveredAt: Date | null;
    paidAt: Date | null;
    preparingAt: Date | null;
    readyAt: Date | null;
    arriveBy: Date | null;
    feeKobo: number | null;
    deliveryKobo: number;
    proof: string | null;
    failureCause: string | null;
    costBearer: string | null;
};
export declare function summarise(rows: DeliveryRow[]): {
    jobs: number;
    delivered: number;
    failed: number;
    cancelled: number;
    inProgress: number;
    completionRate: number | null;
    onTimeRate: number | null;
    pickupPunctuality: number | null;
    proofCoverage: number | null;
    avgMinutes: {
        packing: number | null;
        toAssignRider: number | null;
        pickupWait: number | null;
        ride: number | null;
        paymentToDoor: number | null;
    };
    money: {
        deliveryRevenueKobo: number;
        courierCostKobo: number;
        courierCostPerDeliveryKobo: number | null;
        failedCostByBearer: {
            bearer: string;
            kobo: number;
        }[];
    };
    failureCauses: {
        key: string;
        count: number;
    }[];
};
export declare function breakdown(rows: DeliveryRow[], by: (r: DeliveryRow) => string): {
    jobs: number;
    delivered: number;
    failed: number;
    cancelled: number;
    inProgress: number;
    completionRate: number | null;
    onTimeRate: number | null;
    pickupPunctuality: number | null;
    proofCoverage: number | null;
    avgMinutes: {
        packing: number | null;
        toAssignRider: number | null;
        pickupWait: number | null;
        ride: number | null;
        paymentToDoor: number | null;
    };
    money: {
        deliveryRevenueKobo: number;
        courierCostKobo: number;
        courierCostPerDeliveryKobo: number | null;
        failedCostByBearer: {
            bearer: string;
            kobo: number;
        }[];
    };
    failureCauses: {
        key: string;
        count: number;
    }[];
    name: string;
}[];
