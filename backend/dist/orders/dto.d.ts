import { OrderStatus } from '../generated/prisma/client.js';
export declare class OrderItemDto {
    productId: string;
    quantity: number;
}
export declare class CreateOrderDto {
    pharmacyId: string;
    items: OrderItemDto[];
    deliveryAddress: string;
    deliveryArea: string;
    dropoffLat?: number;
    dropoffLng?: number;
    deliveryQuoteId?: string;
    prescriptionId?: string;
}
export declare class UpdateOrderStatusDto {
    status: OrderStatus;
    note?: string;
}
