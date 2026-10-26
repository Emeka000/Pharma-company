import type { Response } from 'express';
import type { AuthUser } from '../common/auth-user.js';
import { PrescriptionStatus } from '../generated/prisma/client.js';
import { ReviewPrescriptionDto, UploadPrescriptionDto } from './dto.js';
import { PrescriptionsService } from './prescriptions.service.js';
export declare class PrescriptionsController {
    private readonly rx;
    constructor(rx: PrescriptionsService);
    upload(user: AuthUser, file: Express.Multer.File, dto: UploadPrescriptionDto): Promise<{
        id: string;
        code: string;
        status: PrescriptionStatus;
        createdAt: Date;
    }>;
    list(user: AuthUser): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        status: PrescriptionStatus;
        code: string;
        decisionNote: string | null;
        order: {
            code: string;
        } | null;
    }[]>;
}
export declare class PharmacyPrescriptionsController {
    private readonly rx;
    constructor(rx: PrescriptionsService);
    list(user: AuthUser, status?: PrescriptionStatus): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        status: PrescriptionStatus;
        code: string;
        prescriberName: string | null;
        reviewedAt: Date | null;
        decisionNote: string | null;
        order: {
            code: string;
            items: {
                quantity: number;
                product: {
                    name: string;
                    strength: string | null;
                };
            }[];
        } | null;
        patient: {
            firstName: string | null;
            lastName: string | null;
        };
    }[]>;
    image(user: AuthUser, code: string, res: Response): Promise<void>;
    review(user: AuthUser, code: string, dto: ReviewPrescriptionDto): Promise<{
        status: PrescriptionStatus;
        code: string;
        reviewedAt: Date | null;
        decisionNote: string | null;
        order: {
            status: import("../generated/prisma/enums.js").OrderStatus;
            code: string;
        } | null;
    }>;
}
