export declare class CreateRiderDto {
    firstName: string;
    lastName: string;
    phone: string;
    partner: string;
    coldChain?: boolean;
}
export declare class UpdateRiderDto {
    active?: boolean;
    coldChain?: boolean;
    partner?: string;
}
export declare const COURIER_APIS: string[];
export declare class PharmacyLocationDto {
    lat: number;
    lng: number;
}
export declare class CourierDto {
    name: string;
    contact?: string;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: string;
    active?: boolean;
    api?: string | null;
    priority?: number;
}
export declare class UpdateCourierDto {
    contact?: string;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: string;
    active?: boolean;
    api?: string | null;
    priority?: number;
}
export declare class ProductEligibilityDto {
    deliveryAllowed: boolean;
}
export declare class PharmacyPhoneDto {
    phone: string;
}
