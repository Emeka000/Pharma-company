var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsEnum, IsIn, IsInt, IsLatitude, IsLongitude, IsOptional, IsString, Length, Max, Min, ValidateIf, ValidateNested } from 'class-validator';
import { AREA_KEYS } from '../delivery/areas.js';
import { OrderStatus } from '../generated/prisma/client.js';
export class OrderItemDto {
    productId;
    quantity;
}
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], OrderItemDto.prototype, "productId", void 0);
__decorate([
    ApiProperty({ example: 1, description: 'Packs' }),
    IsInt(),
    Min(1),
    Max(20),
    __metadata("design:type", Number)
], OrderItemDto.prototype, "quantity", void 0);
export class CreateOrderDto {
    pharmacyId;
    items;
    deliveryAddress;
    deliveryArea;
    dropoffLat;
    dropoffLng;
    deliveryQuoteId;
    prescriptionId;
}
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "pharmacyId", void 0);
__decorate([
    ApiProperty({ type: [OrderItemDto] }),
    ValidateNested({ each: true }),
    Type(() => OrderItemDto),
    ArrayMinSize(1),
    ArrayMaxSize(20),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "items", void 0);
__decorate([
    ApiProperty({ example: '14 Herbert Macaulay Way, Yaba' }),
    IsString(),
    Length(5, 200),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "deliveryAddress", void 0);
__decorate([
    ApiProperty({ enum: AREA_KEYS, example: 'yaba', description: 'From GET /delivery/areas' }),
    IsIn(AREA_KEYS, { message: 'Choose your delivery area' }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "deliveryArea", void 0);
__decorate([
    ApiPropertyOptional({ example: 6.6018 }),
    ValidateIf((o) => o.dropoffLng !== undefined || o.deliveryQuoteId !== undefined),
    IsLatitude(),
    Min(6.3),
    Max(6.8),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "dropoffLat", void 0);
__decorate([
    ApiPropertyOptional({ example: 3.3515 }),
    ValidateIf((o) => o.dropoffLat !== undefined || o.deliveryQuoteId !== undefined),
    IsLongitude(),
    Min(2.7),
    Max(4.4),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "dropoffLng", void 0);
__decorate([
    ApiPropertyOptional({ description: 'From POST /delivery/quote: charge that delivery price' }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "deliveryQuoteId", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Required when any item is prescription-only' }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "prescriptionId", void 0);
export class UpdateOrderStatusDto {
    status;
    note;
}
__decorate([
    ApiProperty({ enum: OrderStatus }),
    IsEnum(OrderStatus),
    __metadata("design:type", String)
], UpdateOrderStatusDto.prototype, "status", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Length(2, 300),
    __metadata("design:type", String)
], UpdateOrderStatusDto.prototype, "note", void 0);
//# sourceMappingURL=dto.js.map