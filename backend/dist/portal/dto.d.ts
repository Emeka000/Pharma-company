export declare class UpdateSettingsDto {
    phone?: string;
    email?: string;
    openDays?: number[];
    opensAt?: string;
    lastOrderAt?: string;
    coverageAreas?: string[];
}
export declare class BankDetailsDto {
    bankName: string;
    accountName: string;
    accountNumber: string;
}
export declare class ActivityQueryDto {
    limit?: number;
    before?: string;
}
