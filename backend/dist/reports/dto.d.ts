export declare class InvoiceLineDto {
    providerRef: string;
    amountKobo: number;
}
export declare class CreateInvoiceDto {
    number: string;
    periodStart: string;
    periodEnd: string;
    lines: InvoiceLineDto[];
}
export declare class ReconcileInvoiceDto {
    note?: string;
}
