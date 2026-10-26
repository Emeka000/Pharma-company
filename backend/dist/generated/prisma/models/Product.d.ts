import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    unitsPerPack: number | null;
};
export type ProductSumAggregateOutputType = {
    unitsPerPack: number | null;
};
export type ProductMinAggregateOutputType = {
    id: string | null;
    slug: string | null;
    name: string | null;
    genericName: string | null;
    form: string | null;
    strength: string | null;
    packDescription: string | null;
    unitsPerPack: number | null;
    manufacturer: string | null;
    nafdacRegNo: string | null;
    category: string | null;
    classification: $Enums.ProductClass | null;
    coldChain: boolean | null;
    storage: string | null;
    uses: string | null;
    deliveryAllowed: boolean | null;
};
export type ProductMaxAggregateOutputType = {
    id: string | null;
    slug: string | null;
    name: string | null;
    genericName: string | null;
    form: string | null;
    strength: string | null;
    packDescription: string | null;
    unitsPerPack: number | null;
    manufacturer: string | null;
    nafdacRegNo: string | null;
    category: string | null;
    classification: $Enums.ProductClass | null;
    coldChain: boolean | null;
    storage: string | null;
    uses: string | null;
    deliveryAllowed: boolean | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    slug: number;
    name: number;
    genericName: number;
    form: number;
    strength: number;
    packDescription: number;
    unitsPerPack: number;
    manufacturer: number;
    nafdacRegNo: number;
    category: number;
    classification: number;
    coldChain: number;
    storage: number;
    uses: number;
    deliveryAllowed: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    unitsPerPack?: true;
};
export type ProductSumAggregateInputType = {
    unitsPerPack?: true;
};
export type ProductMinAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    genericName?: true;
    form?: true;
    strength?: true;
    packDescription?: true;
    unitsPerPack?: true;
    manufacturer?: true;
    nafdacRegNo?: true;
    category?: true;
    classification?: true;
    coldChain?: true;
    storage?: true;
    uses?: true;
    deliveryAllowed?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    genericName?: true;
    form?: true;
    strength?: true;
    packDescription?: true;
    unitsPerPack?: true;
    manufacturer?: true;
    nafdacRegNo?: true;
    category?: true;
    classification?: true;
    coldChain?: true;
    storage?: true;
    uses?: true;
    deliveryAllowed?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    genericName?: true;
    form?: true;
    strength?: true;
    packDescription?: true;
    unitsPerPack?: true;
    manufacturer?: true;
    nafdacRegNo?: true;
    category?: true;
    classification?: true;
    coldChain?: true;
    storage?: true;
    uses?: true;
    deliveryAllowed?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: string;
    slug: string;
    name: string;
    genericName: string;
    form: string;
    strength: string | null;
    packDescription: string;
    unitsPerPack: number;
    manufacturer: string;
    nafdacRegNo: string | null;
    category: string;
    classification: $Enums.ProductClass;
    coldChain: boolean;
    storage: string;
    uses: string | null;
    deliveryAllowed: boolean;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    slug?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    genericName?: Prisma.StringFilter<"Product"> | string;
    form?: Prisma.StringFilter<"Product"> | string;
    strength?: Prisma.StringNullableFilter<"Product"> | string | null;
    packDescription?: Prisma.StringFilter<"Product"> | string;
    unitsPerPack?: Prisma.IntFilter<"Product"> | number;
    manufacturer?: Prisma.StringFilter<"Product"> | string;
    nafdacRegNo?: Prisma.StringNullableFilter<"Product"> | string | null;
    category?: Prisma.StringFilter<"Product"> | string;
    classification?: Prisma.EnumProductClassFilter<"Product"> | $Enums.ProductClass;
    coldChain?: Prisma.BoolFilter<"Product"> | boolean;
    storage?: Prisma.StringFilter<"Product"> | string;
    uses?: Prisma.StringNullableFilter<"Product"> | string | null;
    deliveryAllowed?: Prisma.BoolFilter<"Product"> | boolean;
    batches?: Prisma.BatchListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    genericName?: Prisma.SortOrder;
    form?: Prisma.SortOrder;
    strength?: Prisma.SortOrderInput | Prisma.SortOrder;
    packDescription?: Prisma.SortOrder;
    unitsPerPack?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    nafdacRegNo?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    classification?: Prisma.SortOrder;
    coldChain?: Prisma.SortOrder;
    storage?: Prisma.SortOrder;
    uses?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryAllowed?: Prisma.SortOrder;
    batches?: Prisma.BatchOrderByRelationAggregateInput;
    orderItems?: Prisma.OrderItemOrderByRelationAggregateInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    name?: Prisma.StringFilter<"Product"> | string;
    genericName?: Prisma.StringFilter<"Product"> | string;
    form?: Prisma.StringFilter<"Product"> | string;
    strength?: Prisma.StringNullableFilter<"Product"> | string | null;
    packDescription?: Prisma.StringFilter<"Product"> | string;
    unitsPerPack?: Prisma.IntFilter<"Product"> | number;
    manufacturer?: Prisma.StringFilter<"Product"> | string;
    nafdacRegNo?: Prisma.StringNullableFilter<"Product"> | string | null;
    category?: Prisma.StringFilter<"Product"> | string;
    classification?: Prisma.EnumProductClassFilter<"Product"> | $Enums.ProductClass;
    coldChain?: Prisma.BoolFilter<"Product"> | boolean;
    storage?: Prisma.StringFilter<"Product"> | string;
    uses?: Prisma.StringNullableFilter<"Product"> | string | null;
    deliveryAllowed?: Prisma.BoolFilter<"Product"> | boolean;
    batches?: Prisma.BatchListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
}, "id" | "slug">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    genericName?: Prisma.SortOrder;
    form?: Prisma.SortOrder;
    strength?: Prisma.SortOrderInput | Prisma.SortOrder;
    packDescription?: Prisma.SortOrder;
    unitsPerPack?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    nafdacRegNo?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    classification?: Prisma.SortOrder;
    coldChain?: Prisma.SortOrder;
    storage?: Prisma.SortOrder;
    uses?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryAllowed?: Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    genericName?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    form?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    strength?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    packDescription?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    unitsPerPack?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    manufacturer?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    nafdacRegNo?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    category?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    classification?: Prisma.EnumProductClassWithAggregatesFilter<"Product"> | $Enums.ProductClass;
    coldChain?: Prisma.BoolWithAggregatesFilter<"Product"> | boolean;
    storage?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    uses?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    deliveryAllowed?: Prisma.BoolWithAggregatesFilter<"Product"> | boolean;
};
export type ProductCreateInput = {
    id?: string;
    slug: string;
    name: string;
    genericName: string;
    form: string;
    strength?: string | null;
    packDescription: string;
    unitsPerPack?: number;
    manufacturer: string;
    nafdacRegNo?: string | null;
    category: string;
    classification: $Enums.ProductClass;
    coldChain?: boolean;
    storage: string;
    uses?: string | null;
    deliveryAllowed?: boolean;
    batches?: Prisma.BatchCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateInput = {
    id?: string;
    slug: string;
    name: string;
    genericName: string;
    form: string;
    strength?: string | null;
    packDescription: string;
    unitsPerPack?: number;
    manufacturer: string;
    nafdacRegNo?: string | null;
    category: string;
    classification: $Enums.ProductClass;
    coldChain?: boolean;
    storage: string;
    uses?: string | null;
    deliveryAllowed?: boolean;
    batches?: Prisma.BatchUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.StringFieldUpdateOperationsInput | string;
    form?: Prisma.StringFieldUpdateOperationsInput | string;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    packDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    unitsPerPack?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    nafdacRegNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    classification?: Prisma.EnumProductClassFieldUpdateOperationsInput | $Enums.ProductClass;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    storage?: Prisma.StringFieldUpdateOperationsInput | string;
    uses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryAllowed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    batches?: Prisma.BatchUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.StringFieldUpdateOperationsInput | string;
    form?: Prisma.StringFieldUpdateOperationsInput | string;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    packDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    unitsPerPack?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    nafdacRegNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    classification?: Prisma.EnumProductClassFieldUpdateOperationsInput | $Enums.ProductClass;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    storage?: Prisma.StringFieldUpdateOperationsInput | string;
    uses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryAllowed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    batches?: Prisma.BatchUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    id?: string;
    slug: string;
    name: string;
    genericName: string;
    form: string;
    strength?: string | null;
    packDescription: string;
    unitsPerPack?: number;
    manufacturer: string;
    nafdacRegNo?: string | null;
    category: string;
    classification: $Enums.ProductClass;
    coldChain?: boolean;
    storage: string;
    uses?: string | null;
    deliveryAllowed?: boolean;
};
export type ProductUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.StringFieldUpdateOperationsInput | string;
    form?: Prisma.StringFieldUpdateOperationsInput | string;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    packDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    unitsPerPack?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    nafdacRegNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    classification?: Prisma.EnumProductClassFieldUpdateOperationsInput | $Enums.ProductClass;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    storage?: Prisma.StringFieldUpdateOperationsInput | string;
    uses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryAllowed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.StringFieldUpdateOperationsInput | string;
    form?: Prisma.StringFieldUpdateOperationsInput | string;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    packDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    unitsPerPack?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    nafdacRegNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    classification?: Prisma.EnumProductClassFieldUpdateOperationsInput | $Enums.ProductClass;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    storage?: Prisma.StringFieldUpdateOperationsInput | string;
    uses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryAllowed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    genericName?: Prisma.SortOrder;
    form?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    packDescription?: Prisma.SortOrder;
    unitsPerPack?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    nafdacRegNo?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    classification?: Prisma.SortOrder;
    coldChain?: Prisma.SortOrder;
    storage?: Prisma.SortOrder;
    uses?: Prisma.SortOrder;
    deliveryAllowed?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    unitsPerPack?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    genericName?: Prisma.SortOrder;
    form?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    packDescription?: Prisma.SortOrder;
    unitsPerPack?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    nafdacRegNo?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    classification?: Prisma.SortOrder;
    coldChain?: Prisma.SortOrder;
    storage?: Prisma.SortOrder;
    uses?: Prisma.SortOrder;
    deliveryAllowed?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    genericName?: Prisma.SortOrder;
    form?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    packDescription?: Prisma.SortOrder;
    unitsPerPack?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    nafdacRegNo?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    classification?: Prisma.SortOrder;
    coldChain?: Prisma.SortOrder;
    storage?: Prisma.SortOrder;
    uses?: Prisma.SortOrder;
    deliveryAllowed?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    unitsPerPack?: Prisma.SortOrder;
};
export type ProductScalarRelationFilter = {
    is?: Prisma.ProductWhereInput;
    isNot?: Prisma.ProductWhereInput;
};
export type EnumProductClassFieldUpdateOperationsInput = {
    set?: $Enums.ProductClass;
};
export type ProductCreateNestedOneWithoutBatchesInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBatchesInput, Prisma.ProductUncheckedCreateWithoutBatchesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBatchesInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutBatchesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBatchesInput, Prisma.ProductUncheckedCreateWithoutBatchesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBatchesInput;
    upsert?: Prisma.ProductUpsertWithoutBatchesInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutBatchesInput, Prisma.ProductUpdateWithoutBatchesInput>, Prisma.ProductUncheckedUpdateWithoutBatchesInput>;
};
export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemsInput, Prisma.ProductUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemsInput, Prisma.ProductUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.ProductUpsertWithoutOrderItemsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.ProductUpdateWithoutOrderItemsInput>, Prisma.ProductUncheckedUpdateWithoutOrderItemsInput>;
};
export type ProductCreateWithoutBatchesInput = {
    id?: string;
    slug: string;
    name: string;
    genericName: string;
    form: string;
    strength?: string | null;
    packDescription: string;
    unitsPerPack?: number;
    manufacturer: string;
    nafdacRegNo?: string | null;
    category: string;
    classification: $Enums.ProductClass;
    coldChain?: boolean;
    storage: string;
    uses?: string | null;
    deliveryAllowed?: boolean;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutBatchesInput = {
    id?: string;
    slug: string;
    name: string;
    genericName: string;
    form: string;
    strength?: string | null;
    packDescription: string;
    unitsPerPack?: number;
    manufacturer: string;
    nafdacRegNo?: string | null;
    category: string;
    classification: $Enums.ProductClass;
    coldChain?: boolean;
    storage: string;
    uses?: string | null;
    deliveryAllowed?: boolean;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutBatchesInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutBatchesInput, Prisma.ProductUncheckedCreateWithoutBatchesInput>;
};
export type ProductUpsertWithoutBatchesInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutBatchesInput, Prisma.ProductUncheckedUpdateWithoutBatchesInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutBatchesInput, Prisma.ProductUncheckedCreateWithoutBatchesInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutBatchesInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutBatchesInput, Prisma.ProductUncheckedUpdateWithoutBatchesInput>;
};
export type ProductUpdateWithoutBatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.StringFieldUpdateOperationsInput | string;
    form?: Prisma.StringFieldUpdateOperationsInput | string;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    packDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    unitsPerPack?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    nafdacRegNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    classification?: Prisma.EnumProductClassFieldUpdateOperationsInput | $Enums.ProductClass;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    storage?: Prisma.StringFieldUpdateOperationsInput | string;
    uses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryAllowed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutBatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.StringFieldUpdateOperationsInput | string;
    form?: Prisma.StringFieldUpdateOperationsInput | string;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    packDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    unitsPerPack?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    nafdacRegNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    classification?: Prisma.EnumProductClassFieldUpdateOperationsInput | $Enums.ProductClass;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    storage?: Prisma.StringFieldUpdateOperationsInput | string;
    uses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryAllowed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutOrderItemsInput = {
    id?: string;
    slug: string;
    name: string;
    genericName: string;
    form: string;
    strength?: string | null;
    packDescription: string;
    unitsPerPack?: number;
    manufacturer: string;
    nafdacRegNo?: string | null;
    category: string;
    classification: $Enums.ProductClass;
    coldChain?: boolean;
    storage: string;
    uses?: string | null;
    deliveryAllowed?: boolean;
    batches?: Prisma.BatchCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string;
    slug: string;
    name: string;
    genericName: string;
    form: string;
    strength?: string | null;
    packDescription: string;
    unitsPerPack?: number;
    manufacturer: string;
    nafdacRegNo?: string | null;
    category: string;
    classification: $Enums.ProductClass;
    coldChain?: boolean;
    storage: string;
    uses?: string | null;
    deliveryAllowed?: boolean;
    batches?: Prisma.BatchUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemsInput, Prisma.ProductUncheckedCreateWithoutOrderItemsInput>;
};
export type ProductUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutOrderItemsInput, Prisma.ProductUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemsInput, Prisma.ProductUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutOrderItemsInput, Prisma.ProductUncheckedUpdateWithoutOrderItemsInput>;
};
export type ProductUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.StringFieldUpdateOperationsInput | string;
    form?: Prisma.StringFieldUpdateOperationsInput | string;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    packDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    unitsPerPack?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    nafdacRegNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    classification?: Prisma.EnumProductClassFieldUpdateOperationsInput | $Enums.ProductClass;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    storage?: Prisma.StringFieldUpdateOperationsInput | string;
    uses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryAllowed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    batches?: Prisma.BatchUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.StringFieldUpdateOperationsInput | string;
    form?: Prisma.StringFieldUpdateOperationsInput | string;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    packDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    unitsPerPack?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    nafdacRegNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    classification?: Prisma.EnumProductClassFieldUpdateOperationsInput | $Enums.ProductClass;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    storage?: Prisma.StringFieldUpdateOperationsInput | string;
    uses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryAllowed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    batches?: Prisma.BatchUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCountOutputType = {
    batches: number;
    orderItems: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batches?: boolean | ProductCountOutputTypeCountBatchesArgs;
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs;
};
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductCountOutputTypeCountBatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BatchWhereInput;
};
export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    genericName?: boolean;
    form?: boolean;
    strength?: boolean;
    packDescription?: boolean;
    unitsPerPack?: boolean;
    manufacturer?: boolean;
    nafdacRegNo?: boolean;
    category?: boolean;
    classification?: boolean;
    coldChain?: boolean;
    storage?: boolean;
    uses?: boolean;
    deliveryAllowed?: boolean;
    batches?: boolean | Prisma.Product$batchesArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Product$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    genericName?: boolean;
    form?: boolean;
    strength?: boolean;
    packDescription?: boolean;
    unitsPerPack?: boolean;
    manufacturer?: boolean;
    nafdacRegNo?: boolean;
    category?: boolean;
    classification?: boolean;
    coldChain?: boolean;
    storage?: boolean;
    uses?: boolean;
    deliveryAllowed?: boolean;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    genericName?: boolean;
    form?: boolean;
    strength?: boolean;
    packDescription?: boolean;
    unitsPerPack?: boolean;
    manufacturer?: boolean;
    nafdacRegNo?: boolean;
    category?: boolean;
    classification?: boolean;
    coldChain?: boolean;
    storage?: boolean;
    uses?: boolean;
    deliveryAllowed?: boolean;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    genericName?: boolean;
    form?: boolean;
    strength?: boolean;
    packDescription?: boolean;
    unitsPerPack?: boolean;
    manufacturer?: boolean;
    nafdacRegNo?: boolean;
    category?: boolean;
    classification?: boolean;
    coldChain?: boolean;
    storage?: boolean;
    uses?: boolean;
    deliveryAllowed?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "name" | "genericName" | "form" | "strength" | "packDescription" | "unitsPerPack" | "manufacturer" | "nafdacRegNo" | "category" | "classification" | "coldChain" | "storage" | "uses" | "deliveryAllowed", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batches?: boolean | Prisma.Product$batchesArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Product$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        batches: Prisma.$BatchPayload<ExtArgs>[];
        orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slug: string;
        name: string;
        genericName: string;
        form: string;
        strength: string | null;
        packDescription: string;
        unitsPerPack: number;
        manufacturer: string;
        nafdacRegNo: string | null;
        category: string;
        classification: $Enums.ProductClass;
        coldChain: boolean;
        storage: string;
        uses: string | null;
        deliveryAllowed: boolean;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    batches<T extends Prisma.Product$batchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItems<T extends Prisma.Product$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'String'>;
    readonly slug: Prisma.FieldRef<"Product", 'String'>;
    readonly name: Prisma.FieldRef<"Product", 'String'>;
    readonly genericName: Prisma.FieldRef<"Product", 'String'>;
    readonly form: Prisma.FieldRef<"Product", 'String'>;
    readonly strength: Prisma.FieldRef<"Product", 'String'>;
    readonly packDescription: Prisma.FieldRef<"Product", 'String'>;
    readonly unitsPerPack: Prisma.FieldRef<"Product", 'Int'>;
    readonly manufacturer: Prisma.FieldRef<"Product", 'String'>;
    readonly nafdacRegNo: Prisma.FieldRef<"Product", 'String'>;
    readonly category: Prisma.FieldRef<"Product", 'String'>;
    readonly classification: Prisma.FieldRef<"Product", 'ProductClass'>;
    readonly coldChain: Prisma.FieldRef<"Product", 'Boolean'>;
    readonly storage: Prisma.FieldRef<"Product", 'String'>;
    readonly uses: Prisma.FieldRef<"Product", 'String'>;
    readonly deliveryAllowed: Prisma.FieldRef<"Product", 'Boolean'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type Product$batchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatchSelect<ExtArgs> | null;
    omit?: Prisma.BatchOmit<ExtArgs> | null;
    include?: Prisma.BatchInclude<ExtArgs> | null;
    where?: Prisma.BatchWhereInput;
    orderBy?: Prisma.BatchOrderByWithRelationInput | Prisma.BatchOrderByWithRelationInput[];
    cursor?: Prisma.BatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BatchScalarFieldEnum | Prisma.BatchScalarFieldEnum[];
};
export type Product$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
