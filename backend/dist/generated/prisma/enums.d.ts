export declare const Role: {
    readonly PATIENT: "PATIENT";
    readonly PHARMACIST: "PHARMACIST";
    readonly PHARMACY_STAFF: "PHARMACY_STAFF";
    readonly PLATFORM_ADMIN: "PLATFORM_ADMIN";
    readonly RIDER: "RIDER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const SocialProvider: {
    readonly GOOGLE: "GOOGLE";
    readonly APPLE: "APPLE";
};
export type SocialProvider = (typeof SocialProvider)[keyof typeof SocialProvider];
export declare const PharmacyStatus: {
    readonly PENDING_VERIFICATION: "PENDING_VERIFICATION";
    readonly VERIFIED: "VERIFIED";
    readonly SUSPENDED: "SUSPENDED";
};
export type PharmacyStatus = (typeof PharmacyStatus)[keyof typeof PharmacyStatus];
export declare const ProductClass: {
    readonly OTC: "OTC";
    readonly POM: "POM";
    readonly DEVICE: "DEVICE";
    readonly CONTROLLED: "CONTROLLED";
};
export type ProductClass = (typeof ProductClass)[keyof typeof ProductClass];
export declare const BatchStatus: {
    readonly SALEABLE: "SALEABLE";
    readonly QUARANTINED: "QUARANTINED";
    readonly RECALLED: "RECALLED";
    readonly WRITTEN_OFF: "WRITTEN_OFF";
};
export type BatchStatus = (typeof BatchStatus)[keyof typeof BatchStatus];
export declare const OrderStatus: {
    readonly PHARMACIST_REVIEW: "PHARMACIST_REVIEW";
    readonly ACCEPTED: "ACCEPTED";
    readonly PREPARING: "PREPARING";
    readonly READY: "READY";
    readonly PICKED_UP: "PICKED_UP";
    readonly DELIVERED: "DELIVERED";
    readonly REJECTED: "REJECTED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const DeliveryStatus: {
    readonly AWAITING_RIDER: "AWAITING_RIDER";
    readonly ASSIGNED: "ASSIGNED";
    readonly PICKED_UP: "PICKED_UP";
    readonly DELIVERED: "DELIVERED";
    readonly FAILED: "FAILED";
    readonly CANCELLED: "CANCELLED";
};
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];
export declare const DeliveryProvider: {
    readonly PILBRIDGE_RIDERS: "PILBRIDGE_RIDERS";
    readonly COURIER: "COURIER";
};
export type DeliveryProvider = (typeof DeliveryProvider)[keyof typeof DeliveryProvider];
export declare const FailureCause: {
    readonly CUSTOMER_UNAVAILABLE: "CUSTOMER_UNAVAILABLE";
    readonly WRONG_ADDRESS: "WRONG_ADDRESS";
    readonly CUSTOMER_REFUSED: "CUSTOMER_REFUSED";
    readonly PHARMACY_DELAY: "PHARMACY_DELAY";
    readonly COURIER_FAULT: "COURIER_FAULT";
    readonly SAFETY: "SAFETY";
    readonly OTHER: "OTHER";
};
export type FailureCause = (typeof FailureCause)[keyof typeof FailureCause];
export declare const CostBearer: {
    readonly CUSTOMER: "CUSTOMER";
    readonly COURIER: "COURIER";
    readonly PHARMACY: "PHARMACY";
    readonly PLATFORM: "PLATFORM";
};
export type CostBearer = (typeof CostBearer)[keyof typeof CostBearer];
export declare const InvoiceStatus: {
    readonly OPEN: "OPEN";
    readonly RECONCILED: "RECONCILED";
};
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus];
export declare const IncidentType: {
    readonly DAMAGED: "DAMAGED";
    readonly TAMPERED: "TAMPERED";
    readonly LOST: "LOST";
    readonly TEMPERATURE_EXCURSION: "TEMPERATURE_EXCURSION";
    readonly WRONG_ITEM: "WRONG_ITEM";
    readonly OTHER: "OTHER";
};
export type IncidentType = (typeof IncidentType)[keyof typeof IncidentType];
export declare const IncidentStatus: {
    readonly OPEN: "OPEN";
    readonly RESOLVED: "RESOLVED";
};
export type IncidentStatus = (typeof IncidentStatus)[keyof typeof IncidentStatus];
export declare const PaymentStatus: {
    readonly UNPAID: "UNPAID";
    readonly PAID: "PAID";
    readonly REFUND_DUE: "REFUND_DUE";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const PrescriptionStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly CLARIFICATION_REQUESTED: "CLARIFICATION_REQUESTED";
    readonly REJECTED: "REJECTED";
};
export type PrescriptionStatus = (typeof PrescriptionStatus)[keyof typeof PrescriptionStatus];
export declare const PartnerKind: {
    readonly PHARMACY: "PHARMACY";
    readonly HOSPITAL: "HOSPITAL";
    readonly LOGISTICS: "LOGISTICS";
};
export type PartnerKind = (typeof PartnerKind)[keyof typeof PartnerKind];
export declare const ApplicationStatus: {
    readonly NEW: "NEW";
    readonly CONTACTED: "CONTACTED";
    readonly APPROVED: "APPROVED";
    readonly DECLINED: "DECLINED";
};
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];
export declare const TransferStatus: {
    readonly DRAFT: "DRAFT";
    readonly OFFERED: "OFFERED";
    readonly ACCEPTED: "ACCEPTED";
    readonly IN_TRANSIT: "IN_TRANSIT";
    readonly RECEIVED: "RECEIVED";
    readonly DECLINED: "DECLINED";
    readonly CANCELLED: "CANCELLED";
};
export type TransferStatus = (typeof TransferStatus)[keyof typeof TransferStatus];
export declare const PayoutStatus: {
    readonly SCHEDULED: "SCHEDULED";
    readonly PAID: "PAID";
    readonly VOID: "VOID";
};
export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus];
export declare const DocumentKind: {
    readonly PREMISES_LICENCE: "PREMISES_LICENCE";
    readonly SUPERINTENDENT_LICENCE: "SUPERINTENDENT_LICENCE";
    readonly CAC_CERTIFICATE: "CAC_CERTIFICATE";
    readonly COLD_CHAIN_CALIBRATION: "COLD_CHAIN_CALIBRATION";
    readonly INSURANCE: "INSURANCE";
    readonly OTHER: "OTHER";
};
export type DocumentKind = (typeof DocumentKind)[keyof typeof DocumentKind];
export declare const DocumentStatus: {
    readonly PENDING: "PENDING";
    readonly VERIFIED: "VERIFIED";
    readonly REJECTED: "REJECTED";
};
export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus];
