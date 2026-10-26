export type FlutterwaveTransaction = {
    id: number;
    tx_ref: string;
    status: string;
    currency: string;
    amount: number;
};
export declare const orderCodeFromTxRef: (txRef: string) => string | null;
export declare function chargeProblem(tx: FlutterwaveTransaction, order: {
    code: string;
    totalKobo: number;
}): string | null;
