export declare const commissionKobo: (subtotalKobo: number) => number;
export declare function settle(orders: {
    subtotalKobo: number;
}[]): {
    orderCount: number;
    grossKobo: number;
    feesKobo: number;
    netKobo: number;
};
export declare const ngn: (kobo: number) => string;
