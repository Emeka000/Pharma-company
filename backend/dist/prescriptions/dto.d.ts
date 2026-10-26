export declare enum ReviewDecision {
    APPROVE = "APPROVE",
    REJECT = "REJECT",
    CLARIFY = "CLARIFY"
}
export declare class UploadPrescriptionDto {
    prescriberName?: string;
}
export declare class ProfessionalChecksDto {
    prescriberAndDateVerified: boolean;
    doseAndQuantityAppropriate: boolean;
    noInteractionOrAllergyConcerns: boolean;
}
export declare class ReviewPrescriptionDto {
    decision: ReviewDecision;
    note?: string;
    checks?: ProfessionalChecksDto;
}
