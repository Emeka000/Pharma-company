export declare class CreateTransferDto {
    batchId: string;
    quantity: number;
    toPharmacyId?: string;
    note?: string;
}
export declare class TransferReasonDto {
    reason: string;
}
export declare class ReceiveTransferDto {
    conditionConfirmed: boolean;
    priceKobo: number;
    location?: string;
}
