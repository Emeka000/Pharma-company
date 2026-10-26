import { DocumentKind } from '../generated/prisma/client.js';
export declare const DOCUMENT_LABELS: Record<DocumentKind, {
    name: string;
    issuer: string;
    expires: boolean;
}>;
export declare class UploadDocumentDto {
    kind: DocumentKind;
    reference: string;
    issuer?: string;
    expiresAt?: string;
}
export declare const DOCUMENT_DECISIONS: readonly ["VERIFY", "REJECT"];
export declare class ReviewDocumentDto {
    decision: (typeof DOCUMENT_DECISIONS)[number];
    note?: string;
    expiresAt?: string;
}
