import { PrismaService } from '../prisma/prisma.service.js';
export declare class PharmaciesController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        slug: string;
        name: string;
        area: string;
        coldChain: boolean;
        openDays: number[];
        opensAt: string | null;
        lastOrderAt: string | null;
        coverageAreas: string[];
    }[]>;
}
