import { ProductClass, type Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare const sellableBatch: () => Prisma.BatchWhereInput;
export declare class CatalogController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(q?: string, category?: string): Promise<{
        pharmaciesInStock: number;
        fromPriceKobo: number | null;
        id: string;
        slug: string;
        name: string;
        coldChain: boolean;
        genericName: string;
        form: string;
        strength: string | null;
        packDescription: string;
        unitsPerPack: number;
        manufacturer: string;
        nafdacRegNo: string | null;
        category: string;
        classification: ProductClass;
        storage: string;
        uses: string | null;
        deliveryAllowed: boolean;
    }[]>;
    get(slug: string): Promise<{
        id: string;
        slug: string;
        name: string;
        coldChain: boolean;
        genericName: string;
        form: string;
        strength: string | null;
        packDescription: string;
        unitsPerPack: number;
        manufacturer: string;
        nafdacRegNo: string | null;
        category: string;
        classification: ProductClass;
        storage: string;
        uses: string | null;
        deliveryAllowed: boolean;
    }>;
}
