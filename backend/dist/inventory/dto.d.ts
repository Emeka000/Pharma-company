export declare class ReceiveBatchDto {
    productId: string;
    batchNumber: string;
    expiresAt: string;
    quantity: number;
    priceKobo: number;
    location?: string;
}
export declare class AdjustBatchDto {
    delta: number;
    reason: string;
}
export declare class QuarantineDto {
    reason: string;
}
export declare class ReleaseDto {
    qualityAssessmentConfirmed: boolean;
    note?: string;
}
