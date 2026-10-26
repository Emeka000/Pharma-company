import { PartnerKind } from '../generated/prisma/client.js';
export declare class CreatePharmacyDto {
    name: string;
    area: string;
    address: string;
    premisesLicenceNo: string;
    licenceExpiresAt: string;
    superintendentName?: string;
    email?: string;
    phone?: string;
    coldChain?: boolean;
    lat?: number;
    lng?: number;
    applicationId?: string;
}
export declare class UpdatePharmacyDto {
    name?: string;
    area?: string;
    address?: string;
    premisesLicenceNo?: string;
    licenceExpiresAt?: string;
    superintendentName?: string;
    email?: string;
    coldChain?: boolean;
}
export declare class VerifyPharmacyDto {
    note: string;
}
export declare class SuspendPharmacyDto {
    reason: string;
}
export declare const STAFF_ROLES: readonly ["PHARMACIST", "PHARMACY_STAFF"];
export declare class AddStaffDto {
    firstName: string;
    lastName: string;
    phone: string;
    role: (typeof STAFF_ROLES)[number];
    pcnRegNo?: string;
}
export declare class VerifyBankDto {
    note: string;
}
export declare class PartnerApplicationDto {
    kind: PartnerKind;
    organisation: string;
    contactName?: string;
    email: string;
    phone: string;
    details: Record<string, unknown>;
}
export declare const REVIEW_STATUSES: readonly ["CONTACTED", "APPROVED", "DECLINED"];
export declare class ReviewApplicationDto {
    status: (typeof REVIEW_STATUSES)[number];
    note?: string;
}
export declare const DETAIL_KEY: RegExp;
