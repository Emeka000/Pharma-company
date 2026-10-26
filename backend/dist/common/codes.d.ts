export declare const orderCode: () => string;
export declare const prescriptionCode: () => string;
export declare const transferCode: () => string;
export declare const payoutCode: () => string;
export declare const applicationCode: () => string;
export declare const isUniqueViolation: (e: unknown) => boolean;
export declare function withUniqueCode<T>(make: () => string, create: (code: string) => Promise<T>, attempts?: number): Promise<T>;
