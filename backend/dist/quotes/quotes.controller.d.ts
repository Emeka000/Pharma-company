import { PrismaService } from '../prisma/prisma.service.js';
declare class QuoteItemDto {
    productId: string;
    quantity: number;
}
declare class QuoteDto {
    items: QuoteItemDto[];
    area?: string;
}
export declare class QuotesController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    quote(dto: QuoteDto): Promise<{
        pharmacy: {
            id: string;
            name: string;
            area: string;
            coldChain: boolean;
        };
        etaMinutes: number | null;
        distanceKm: number | null;
        lines: {
            productId: string;
            quantity: number;
            available: boolean;
            unitPriceKobo: number | null;
            coldChain: boolean;
        }[];
        unavailable: number;
        subtotalKobo: number;
        deliveryKobo: number;
        serviceKobo: number;
        totalKobo: number;
    }[]>;
}
export {};
