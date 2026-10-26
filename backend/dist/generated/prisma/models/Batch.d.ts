import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BatchModel = runtime.Types.Result.DefaultSelection<Prisma.$BatchPayload>;
export type AggregateBatch = {
    _count: BatchCountAggregateOutputType | null;
    _avg: BatchAvgAggregateOutputType | null;
    _sum: BatchSumAggregateOutputType | null;
    _min: BatchMinAggregateOutputType | null;
    _max: BatchMaxAggregateOutputType | null;
};
export type BatchAvgAggregateOutputType = {
    quantity: number | null;
    priceKobo: number | null;
};
export type BatchSumAggregateOutputType = {
    quantity: number | null;
    priceKobo: number | null;
};
export type BatchMinAggregateOutputType = {
    id: string | null;
    pharmacyId: string | null;
    productId: string | null;
    batchNumber: string | null;
    expiresAt: Date | null;
    quantity: number | null;
    priceKobo: number | null;
    location: string | null;
    status: $Enums.BatchStatus | null;
    quarantineReason: string | null;
    receivedAt: Date | null;
};
export type BatchMaxAggregateOutputType = {
    id: string | null;
    pharmacyId: string | null;
    productId: string | null;
    batchNumber: string | null;
    expiresAt: Date | null;
    quantity: number | null;
    priceKobo: number | null;
    location: string | null;
    status: $Enums.BatchStatus | null;
    quarantineReason: string | null;
    receivedAt: Date | null;
};
export type BatchCountAggregateOutputType = {
    id: number;
    pharmacyId: number;
    productId: number;
    batchNumber: number;
    expiresAt: number;
    quantity: number;
    priceKobo: number;
    location: number;
    status: number;
    quarantineReason: number;
    receivedAt: number;
    _all: number;
};
export type BatchAvgAggregateInputType = {
    quantity?: true;
    priceKobo?: true;
};
export type BatchSumAggregateInputType = {
    quantity?: true;
    priceKobo?: true;
};
export type BatchMinAggregateInputType = {
    id?: true;
    pharmacyId?: true;
    productId?: true;
    batchNumber?: true;
    expiresAt?: true;
    quantity?: true;
    priceKobo?: true;
    location?: true;
    status?: true;
    quarantineReason?: true;
    receivedAt?: true;
};
export type BatchMaxAggregateInputType = {
    id?: true;
    pharmacyId?: true;
    productId?: true;
    batchNumber?: true;
    expiresAt?: true;
    quantity?: true;
    priceKobo?: true;
    location?: true;
    status?: true;
    quarantineReason?: true;
    receivedAt?: true;
};
export type BatchCountAggregateInputType = {
    id?: true;
    pharmacyId?: true;
    productId?: true;
    batchNumber?: true;
    expiresAt?: true;
    quantity?: true;
    priceKobo?: true;
    location?: true;
    status?: true;
    quarantineReason?: true;
    receivedAt?: true;
    _all?: true;
};
export type BatchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BatchWhereInput;
    orderBy?: Prisma.BatchOrderByWithRelationInput | Prisma.BatchOrderByWithRelationInput[];
    cursor?: Prisma.BatchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BatchCountAggregateInputType;
    _avg?: BatchAvgAggregateInputType;
    _sum?: BatchSumAggregateInputType;
    _min?: BatchMinAggregateInputType;
    _max?: BatchMaxAggregateInputType;
};
export type GetBatchAggregateType<T extends BatchAggregateArgs> = {
    [P in keyof T & keyof AggregateBatch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBatch[P]> : Prisma.GetScalarType<T[P], AggregateBatch[P]>;
};
export type BatchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BatchWhereInput;
    orderBy?: Prisma.BatchOrderByWithAggregationInput | Prisma.BatchOrderByWithAggregationInput[];
    by: Prisma.BatchScalarFieldEnum[] | Prisma.BatchScalarFieldEnum;
    having?: Prisma.BatchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BatchCountAggregateInputType | true;
    _avg?: BatchAvgAggregateInputType;
    _sum?: BatchSumAggregateInputType;
    _min?: BatchMinAggregateInputType;
    _max?: BatchMaxAggregateInputType;
};
export type BatchGroupByOutputType = {
    id: string;
    pharmacyId: string;
    productId: string;
    batchNumber: string;
    expiresAt: Date;
    quantity: number;
    priceKobo: number;
    location: string | null;
    status: $Enums.BatchStatus;
    quarantineReason: string | null;
    receivedAt: Date;
    _count: BatchCountAggregateOutputType | null;
    _avg: BatchAvgAggregateOutputType | null;
    _sum: BatchSumAggregateOutputType | null;
    _min: BatchMinAggregateOutputType | null;
    _max: BatchMaxAggregateOutputType | null;
};
export type GetBatchGroupByPayload<T extends BatchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BatchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BatchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BatchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BatchGroupByOutputType[P]>;
}>>;
export type BatchWhereInput = {
    AND?: Prisma.BatchWhereInput | Prisma.BatchWhereInput[];
    OR?: Prisma.BatchWhereInput[];
    NOT?: Prisma.BatchWhereInput | Prisma.BatchWhereInput[];
    id?: Prisma.StringFilter<"Batch"> | string;
    pharmacyId?: Prisma.StringFilter<"Batch"> | string;
    productId?: Prisma.StringFilter<"Batch"> | string;
    batchNumber?: Prisma.StringFilter<"Batch"> | string;
    expiresAt?: Prisma.DateTimeFilter<"Batch"> | Date | string;
    quantity?: Prisma.IntFilter<"Batch"> | number;
    priceKobo?: Prisma.IntFilter<"Batch"> | number;
    location?: Prisma.StringNullableFilter<"Batch"> | string | null;
    status?: Prisma.EnumBatchStatusFilter<"Batch"> | $Enums.BatchStatus;
    quarantineReason?: Prisma.StringNullableFilter<"Batch"> | string | null;
    receivedAt?: Prisma.DateTimeFilter<"Batch"> | Date | string;
    pharmacy?: Prisma.XOR<Prisma.PharmacyScalarRelationFilter, Prisma.PharmacyWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    allocations?: Prisma.OrderItemListRelationFilter;
    transfers?: Prisma.TransferListRelationFilter;
};
export type BatchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    quarantineReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    receivedAt?: Prisma.SortOrder;
    pharmacy?: Prisma.PharmacyOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
    allocations?: Prisma.OrderItemOrderByRelationAggregateInput;
    transfers?: Prisma.TransferOrderByRelationAggregateInput;
};
export type BatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    pharmacyId_productId_batchNumber?: Prisma.BatchPharmacyIdProductIdBatchNumberCompoundUniqueInput;
    AND?: Prisma.BatchWhereInput | Prisma.BatchWhereInput[];
    OR?: Prisma.BatchWhereInput[];
    NOT?: Prisma.BatchWhereInput | Prisma.BatchWhereInput[];
    pharmacyId?: Prisma.StringFilter<"Batch"> | string;
    productId?: Prisma.StringFilter<"Batch"> | string;
    batchNumber?: Prisma.StringFilter<"Batch"> | string;
    expiresAt?: Prisma.DateTimeFilter<"Batch"> | Date | string;
    quantity?: Prisma.IntFilter<"Batch"> | number;
    priceKobo?: Prisma.IntFilter<"Batch"> | number;
    location?: Prisma.StringNullableFilter<"Batch"> | string | null;
    status?: Prisma.EnumBatchStatusFilter<"Batch"> | $Enums.BatchStatus;
    quarantineReason?: Prisma.StringNullableFilter<"Batch"> | string | null;
    receivedAt?: Prisma.DateTimeFilter<"Batch"> | Date | string;
    pharmacy?: Prisma.XOR<Prisma.PharmacyScalarRelationFilter, Prisma.PharmacyWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    allocations?: Prisma.OrderItemListRelationFilter;
    transfers?: Prisma.TransferListRelationFilter;
}, "id" | "pharmacyId_productId_batchNumber">;
export type BatchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    quarantineReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    receivedAt?: Prisma.SortOrder;
    _count?: Prisma.BatchCountOrderByAggregateInput;
    _avg?: Prisma.BatchAvgOrderByAggregateInput;
    _max?: Prisma.BatchMaxOrderByAggregateInput;
    _min?: Prisma.BatchMinOrderByAggregateInput;
    _sum?: Prisma.BatchSumOrderByAggregateInput;
};
export type BatchScalarWhereWithAggregatesInput = {
    AND?: Prisma.BatchScalarWhereWithAggregatesInput | Prisma.BatchScalarWhereWithAggregatesInput[];
    OR?: Prisma.BatchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BatchScalarWhereWithAggregatesInput | Prisma.BatchScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Batch"> | string;
    pharmacyId?: Prisma.StringWithAggregatesFilter<"Batch"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"Batch"> | string;
    batchNumber?: Prisma.StringWithAggregatesFilter<"Batch"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"Batch"> | Date | string;
    quantity?: Prisma.IntWithAggregatesFilter<"Batch"> | number;
    priceKobo?: Prisma.IntWithAggregatesFilter<"Batch"> | number;
    location?: Prisma.StringNullableWithAggregatesFilter<"Batch"> | string | null;
    status?: Prisma.EnumBatchStatusWithAggregatesFilter<"Batch"> | $Enums.BatchStatus;
    quarantineReason?: Prisma.StringNullableWithAggregatesFilter<"Batch"> | string | null;
    receivedAt?: Prisma.DateTimeWithAggregatesFilter<"Batch"> | Date | string;
};
export type BatchCreateInput = {
    id?: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
    pharmacy: Prisma.PharmacyCreateNestedOneWithoutBatchesInput;
    product: Prisma.ProductCreateNestedOneWithoutBatchesInput;
    allocations?: Prisma.OrderItemCreateNestedManyWithoutBatchInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutBatchInput;
};
export type BatchUncheckedCreateInput = {
    id?: string;
    pharmacyId: string;
    productId: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
    allocations?: Prisma.OrderItemUncheckedCreateNestedManyWithoutBatchInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutBatchInput;
};
export type BatchUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pharmacy?: Prisma.PharmacyUpdateOneRequiredWithoutBatchesNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutBatchesNestedInput;
    allocations?: Prisma.OrderItemUpdateManyWithoutBatchNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutBatchNestedInput;
};
export type BatchUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pharmacyId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.OrderItemUncheckedUpdateManyWithoutBatchNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutBatchNestedInput;
};
export type BatchCreateManyInput = {
    id?: string;
    pharmacyId: string;
    productId: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
};
export type BatchUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BatchUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pharmacyId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BatchListRelationFilter = {
    every?: Prisma.BatchWhereInput;
    some?: Prisma.BatchWhereInput;
    none?: Prisma.BatchWhereInput;
};
export type BatchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BatchPharmacyIdProductIdBatchNumberCompoundUniqueInput = {
    pharmacyId: string;
    productId: string;
    batchNumber: string;
};
export type BatchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    quarantineReason?: Prisma.SortOrder;
    receivedAt?: Prisma.SortOrder;
};
export type BatchAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
};
export type BatchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    quarantineReason?: Prisma.SortOrder;
    receivedAt?: Prisma.SortOrder;
};
export type BatchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    quarantineReason?: Prisma.SortOrder;
    receivedAt?: Prisma.SortOrder;
};
export type BatchSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
};
export type BatchNullableScalarRelationFilter = {
    is?: Prisma.BatchWhereInput | null;
    isNot?: Prisma.BatchWhereInput | null;
};
export type BatchScalarRelationFilter = {
    is?: Prisma.BatchWhereInput;
    isNot?: Prisma.BatchWhereInput;
};
export type BatchCreateNestedManyWithoutPharmacyInput = {
    create?: Prisma.XOR<Prisma.BatchCreateWithoutPharmacyInput, Prisma.BatchUncheckedCreateWithoutPharmacyInput> | Prisma.BatchCreateWithoutPharmacyInput[] | Prisma.BatchUncheckedCreateWithoutPharmacyInput[];
    connectOrCreate?: Prisma.BatchCreateOrConnectWithoutPharmacyInput | Prisma.BatchCreateOrConnectWithoutPharmacyInput[];
    createMany?: Prisma.BatchCreateManyPharmacyInputEnvelope;
    connect?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
};
export type BatchUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: Prisma.XOR<Prisma.BatchCreateWithoutPharmacyInput, Prisma.BatchUncheckedCreateWithoutPharmacyInput> | Prisma.BatchCreateWithoutPharmacyInput[] | Prisma.BatchUncheckedCreateWithoutPharmacyInput[];
    connectOrCreate?: Prisma.BatchCreateOrConnectWithoutPharmacyInput | Prisma.BatchCreateOrConnectWithoutPharmacyInput[];
    createMany?: Prisma.BatchCreateManyPharmacyInputEnvelope;
    connect?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
};
export type BatchUpdateManyWithoutPharmacyNestedInput = {
    create?: Prisma.XOR<Prisma.BatchCreateWithoutPharmacyInput, Prisma.BatchUncheckedCreateWithoutPharmacyInput> | Prisma.BatchCreateWithoutPharmacyInput[] | Prisma.BatchUncheckedCreateWithoutPharmacyInput[];
    connectOrCreate?: Prisma.BatchCreateOrConnectWithoutPharmacyInput | Prisma.BatchCreateOrConnectWithoutPharmacyInput[];
    upsert?: Prisma.BatchUpsertWithWhereUniqueWithoutPharmacyInput | Prisma.BatchUpsertWithWhereUniqueWithoutPharmacyInput[];
    createMany?: Prisma.BatchCreateManyPharmacyInputEnvelope;
    set?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    disconnect?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    delete?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    connect?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    update?: Prisma.BatchUpdateWithWhereUniqueWithoutPharmacyInput | Prisma.BatchUpdateWithWhereUniqueWithoutPharmacyInput[];
    updateMany?: Prisma.BatchUpdateManyWithWhereWithoutPharmacyInput | Prisma.BatchUpdateManyWithWhereWithoutPharmacyInput[];
    deleteMany?: Prisma.BatchScalarWhereInput | Prisma.BatchScalarWhereInput[];
};
export type BatchUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: Prisma.XOR<Prisma.BatchCreateWithoutPharmacyInput, Prisma.BatchUncheckedCreateWithoutPharmacyInput> | Prisma.BatchCreateWithoutPharmacyInput[] | Prisma.BatchUncheckedCreateWithoutPharmacyInput[];
    connectOrCreate?: Prisma.BatchCreateOrConnectWithoutPharmacyInput | Prisma.BatchCreateOrConnectWithoutPharmacyInput[];
    upsert?: Prisma.BatchUpsertWithWhereUniqueWithoutPharmacyInput | Prisma.BatchUpsertWithWhereUniqueWithoutPharmacyInput[];
    createMany?: Prisma.BatchCreateManyPharmacyInputEnvelope;
    set?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    disconnect?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    delete?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    connect?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    update?: Prisma.BatchUpdateWithWhereUniqueWithoutPharmacyInput | Prisma.BatchUpdateWithWhereUniqueWithoutPharmacyInput[];
    updateMany?: Prisma.BatchUpdateManyWithWhereWithoutPharmacyInput | Prisma.BatchUpdateManyWithWhereWithoutPharmacyInput[];
    deleteMany?: Prisma.BatchScalarWhereInput | Prisma.BatchScalarWhereInput[];
};
export type BatchCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.BatchCreateWithoutProductInput, Prisma.BatchUncheckedCreateWithoutProductInput> | Prisma.BatchCreateWithoutProductInput[] | Prisma.BatchUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.BatchCreateOrConnectWithoutProductInput | Prisma.BatchCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.BatchCreateManyProductInputEnvelope;
    connect?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
};
export type BatchUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.BatchCreateWithoutProductInput, Prisma.BatchUncheckedCreateWithoutProductInput> | Prisma.BatchCreateWithoutProductInput[] | Prisma.BatchUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.BatchCreateOrConnectWithoutProductInput | Prisma.BatchCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.BatchCreateManyProductInputEnvelope;
    connect?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
};
export type BatchUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.BatchCreateWithoutProductInput, Prisma.BatchUncheckedCreateWithoutProductInput> | Prisma.BatchCreateWithoutProductInput[] | Prisma.BatchUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.BatchCreateOrConnectWithoutProductInput | Prisma.BatchCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.BatchUpsertWithWhereUniqueWithoutProductInput | Prisma.BatchUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.BatchCreateManyProductInputEnvelope;
    set?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    disconnect?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    delete?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    connect?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    update?: Prisma.BatchUpdateWithWhereUniqueWithoutProductInput | Prisma.BatchUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.BatchUpdateManyWithWhereWithoutProductInput | Prisma.BatchUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.BatchScalarWhereInput | Prisma.BatchScalarWhereInput[];
};
export type BatchUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.BatchCreateWithoutProductInput, Prisma.BatchUncheckedCreateWithoutProductInput> | Prisma.BatchCreateWithoutProductInput[] | Prisma.BatchUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.BatchCreateOrConnectWithoutProductInput | Prisma.BatchCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.BatchUpsertWithWhereUniqueWithoutProductInput | Prisma.BatchUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.BatchCreateManyProductInputEnvelope;
    set?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    disconnect?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    delete?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    connect?: Prisma.BatchWhereUniqueInput | Prisma.BatchWhereUniqueInput[];
    update?: Prisma.BatchUpdateWithWhereUniqueWithoutProductInput | Prisma.BatchUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.BatchUpdateManyWithWhereWithoutProductInput | Prisma.BatchUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.BatchScalarWhereInput | Prisma.BatchScalarWhereInput[];
};
export type EnumBatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.BatchStatus;
};
export type BatchCreateNestedOneWithoutAllocationsInput = {
    create?: Prisma.XOR<Prisma.BatchCreateWithoutAllocationsInput, Prisma.BatchUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.BatchCreateOrConnectWithoutAllocationsInput;
    connect?: Prisma.BatchWhereUniqueInput;
};
export type BatchUpdateOneWithoutAllocationsNestedInput = {
    create?: Prisma.XOR<Prisma.BatchCreateWithoutAllocationsInput, Prisma.BatchUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.BatchCreateOrConnectWithoutAllocationsInput;
    upsert?: Prisma.BatchUpsertWithoutAllocationsInput;
    disconnect?: Prisma.BatchWhereInput | boolean;
    delete?: Prisma.BatchWhereInput | boolean;
    connect?: Prisma.BatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BatchUpdateToOneWithWhereWithoutAllocationsInput, Prisma.BatchUpdateWithoutAllocationsInput>, Prisma.BatchUncheckedUpdateWithoutAllocationsInput>;
};
export type BatchCreateNestedOneWithoutTransfersInput = {
    create?: Prisma.XOR<Prisma.BatchCreateWithoutTransfersInput, Prisma.BatchUncheckedCreateWithoutTransfersInput>;
    connectOrCreate?: Prisma.BatchCreateOrConnectWithoutTransfersInput;
    connect?: Prisma.BatchWhereUniqueInput;
};
export type BatchUpdateOneRequiredWithoutTransfersNestedInput = {
    create?: Prisma.XOR<Prisma.BatchCreateWithoutTransfersInput, Prisma.BatchUncheckedCreateWithoutTransfersInput>;
    connectOrCreate?: Prisma.BatchCreateOrConnectWithoutTransfersInput;
    upsert?: Prisma.BatchUpsertWithoutTransfersInput;
    connect?: Prisma.BatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BatchUpdateToOneWithWhereWithoutTransfersInput, Prisma.BatchUpdateWithoutTransfersInput>, Prisma.BatchUncheckedUpdateWithoutTransfersInput>;
};
export type BatchCreateWithoutPharmacyInput = {
    id?: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutBatchesInput;
    allocations?: Prisma.OrderItemCreateNestedManyWithoutBatchInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutBatchInput;
};
export type BatchUncheckedCreateWithoutPharmacyInput = {
    id?: string;
    productId: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
    allocations?: Prisma.OrderItemUncheckedCreateNestedManyWithoutBatchInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutBatchInput;
};
export type BatchCreateOrConnectWithoutPharmacyInput = {
    where: Prisma.BatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.BatchCreateWithoutPharmacyInput, Prisma.BatchUncheckedCreateWithoutPharmacyInput>;
};
export type BatchCreateManyPharmacyInputEnvelope = {
    data: Prisma.BatchCreateManyPharmacyInput | Prisma.BatchCreateManyPharmacyInput[];
    skipDuplicates?: boolean;
};
export type BatchUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: Prisma.BatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.BatchUpdateWithoutPharmacyInput, Prisma.BatchUncheckedUpdateWithoutPharmacyInput>;
    create: Prisma.XOR<Prisma.BatchCreateWithoutPharmacyInput, Prisma.BatchUncheckedCreateWithoutPharmacyInput>;
};
export type BatchUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: Prisma.BatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.BatchUpdateWithoutPharmacyInput, Prisma.BatchUncheckedUpdateWithoutPharmacyInput>;
};
export type BatchUpdateManyWithWhereWithoutPharmacyInput = {
    where: Prisma.BatchScalarWhereInput;
    data: Prisma.XOR<Prisma.BatchUpdateManyMutationInput, Prisma.BatchUncheckedUpdateManyWithoutPharmacyInput>;
};
export type BatchScalarWhereInput = {
    AND?: Prisma.BatchScalarWhereInput | Prisma.BatchScalarWhereInput[];
    OR?: Prisma.BatchScalarWhereInput[];
    NOT?: Prisma.BatchScalarWhereInput | Prisma.BatchScalarWhereInput[];
    id?: Prisma.StringFilter<"Batch"> | string;
    pharmacyId?: Prisma.StringFilter<"Batch"> | string;
    productId?: Prisma.StringFilter<"Batch"> | string;
    batchNumber?: Prisma.StringFilter<"Batch"> | string;
    expiresAt?: Prisma.DateTimeFilter<"Batch"> | Date | string;
    quantity?: Prisma.IntFilter<"Batch"> | number;
    priceKobo?: Prisma.IntFilter<"Batch"> | number;
    location?: Prisma.StringNullableFilter<"Batch"> | string | null;
    status?: Prisma.EnumBatchStatusFilter<"Batch"> | $Enums.BatchStatus;
    quarantineReason?: Prisma.StringNullableFilter<"Batch"> | string | null;
    receivedAt?: Prisma.DateTimeFilter<"Batch"> | Date | string;
};
export type BatchCreateWithoutProductInput = {
    id?: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
    pharmacy: Prisma.PharmacyCreateNestedOneWithoutBatchesInput;
    allocations?: Prisma.OrderItemCreateNestedManyWithoutBatchInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutBatchInput;
};
export type BatchUncheckedCreateWithoutProductInput = {
    id?: string;
    pharmacyId: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
    allocations?: Prisma.OrderItemUncheckedCreateNestedManyWithoutBatchInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutBatchInput;
};
export type BatchCreateOrConnectWithoutProductInput = {
    where: Prisma.BatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.BatchCreateWithoutProductInput, Prisma.BatchUncheckedCreateWithoutProductInput>;
};
export type BatchCreateManyProductInputEnvelope = {
    data: Prisma.BatchCreateManyProductInput | Prisma.BatchCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type BatchUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.BatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.BatchUpdateWithoutProductInput, Prisma.BatchUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.BatchCreateWithoutProductInput, Prisma.BatchUncheckedCreateWithoutProductInput>;
};
export type BatchUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.BatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.BatchUpdateWithoutProductInput, Prisma.BatchUncheckedUpdateWithoutProductInput>;
};
export type BatchUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.BatchScalarWhereInput;
    data: Prisma.XOR<Prisma.BatchUpdateManyMutationInput, Prisma.BatchUncheckedUpdateManyWithoutProductInput>;
};
export type BatchCreateWithoutAllocationsInput = {
    id?: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
    pharmacy: Prisma.PharmacyCreateNestedOneWithoutBatchesInput;
    product: Prisma.ProductCreateNestedOneWithoutBatchesInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutBatchInput;
};
export type BatchUncheckedCreateWithoutAllocationsInput = {
    id?: string;
    pharmacyId: string;
    productId: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutBatchInput;
};
export type BatchCreateOrConnectWithoutAllocationsInput = {
    where: Prisma.BatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.BatchCreateWithoutAllocationsInput, Prisma.BatchUncheckedCreateWithoutAllocationsInput>;
};
export type BatchUpsertWithoutAllocationsInput = {
    update: Prisma.XOR<Prisma.BatchUpdateWithoutAllocationsInput, Prisma.BatchUncheckedUpdateWithoutAllocationsInput>;
    create: Prisma.XOR<Prisma.BatchCreateWithoutAllocationsInput, Prisma.BatchUncheckedCreateWithoutAllocationsInput>;
    where?: Prisma.BatchWhereInput;
};
export type BatchUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: Prisma.BatchWhereInput;
    data: Prisma.XOR<Prisma.BatchUpdateWithoutAllocationsInput, Prisma.BatchUncheckedUpdateWithoutAllocationsInput>;
};
export type BatchUpdateWithoutAllocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pharmacy?: Prisma.PharmacyUpdateOneRequiredWithoutBatchesNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutBatchesNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutBatchNestedInput;
};
export type BatchUncheckedUpdateWithoutAllocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pharmacyId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutBatchNestedInput;
};
export type BatchCreateWithoutTransfersInput = {
    id?: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
    pharmacy: Prisma.PharmacyCreateNestedOneWithoutBatchesInput;
    product: Prisma.ProductCreateNestedOneWithoutBatchesInput;
    allocations?: Prisma.OrderItemCreateNestedManyWithoutBatchInput;
};
export type BatchUncheckedCreateWithoutTransfersInput = {
    id?: string;
    pharmacyId: string;
    productId: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
    allocations?: Prisma.OrderItemUncheckedCreateNestedManyWithoutBatchInput;
};
export type BatchCreateOrConnectWithoutTransfersInput = {
    where: Prisma.BatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.BatchCreateWithoutTransfersInput, Prisma.BatchUncheckedCreateWithoutTransfersInput>;
};
export type BatchUpsertWithoutTransfersInput = {
    update: Prisma.XOR<Prisma.BatchUpdateWithoutTransfersInput, Prisma.BatchUncheckedUpdateWithoutTransfersInput>;
    create: Prisma.XOR<Prisma.BatchCreateWithoutTransfersInput, Prisma.BatchUncheckedCreateWithoutTransfersInput>;
    where?: Prisma.BatchWhereInput;
};
export type BatchUpdateToOneWithWhereWithoutTransfersInput = {
    where?: Prisma.BatchWhereInput;
    data: Prisma.XOR<Prisma.BatchUpdateWithoutTransfersInput, Prisma.BatchUncheckedUpdateWithoutTransfersInput>;
};
export type BatchUpdateWithoutTransfersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pharmacy?: Prisma.PharmacyUpdateOneRequiredWithoutBatchesNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutBatchesNestedInput;
    allocations?: Prisma.OrderItemUpdateManyWithoutBatchNestedInput;
};
export type BatchUncheckedUpdateWithoutTransfersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pharmacyId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.OrderItemUncheckedUpdateManyWithoutBatchNestedInput;
};
export type BatchCreateManyPharmacyInput = {
    id?: string;
    productId: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
};
export type BatchUpdateWithoutPharmacyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutBatchesNestedInput;
    allocations?: Prisma.OrderItemUpdateManyWithoutBatchNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutBatchNestedInput;
};
export type BatchUncheckedUpdateWithoutPharmacyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.OrderItemUncheckedUpdateManyWithoutBatchNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutBatchNestedInput;
};
export type BatchUncheckedUpdateManyWithoutPharmacyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BatchCreateManyProductInput = {
    id?: string;
    pharmacyId: string;
    batchNumber: string;
    expiresAt: Date | string;
    quantity: number;
    priceKobo: number;
    location?: string | null;
    status?: $Enums.BatchStatus;
    quarantineReason?: string | null;
    receivedAt?: Date | string;
};
export type BatchUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pharmacy?: Prisma.PharmacyUpdateOneRequiredWithoutBatchesNestedInput;
    allocations?: Prisma.OrderItemUpdateManyWithoutBatchNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutBatchNestedInput;
};
export type BatchUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pharmacyId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.OrderItemUncheckedUpdateManyWithoutBatchNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutBatchNestedInput;
};
export type BatchUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pharmacyId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus;
    quarantineReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BatchCountOutputType = {
    allocations: number;
    transfers: number;
};
export type BatchCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    allocations?: boolean | BatchCountOutputTypeCountAllocationsArgs;
    transfers?: boolean | BatchCountOutputTypeCountTransfersArgs;
};
export type BatchCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatchCountOutputTypeSelect<ExtArgs> | null;
};
export type BatchCountOutputTypeCountAllocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type BatchCountOutputTypeCountTransfersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransferWhereInput;
};
export type BatchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pharmacyId?: boolean;
    productId?: boolean;
    batchNumber?: boolean;
    expiresAt?: boolean;
    quantity?: boolean;
    priceKobo?: boolean;
    location?: boolean;
    status?: boolean;
    quarantineReason?: boolean;
    receivedAt?: boolean;
    pharmacy?: boolean | Prisma.PharmacyDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    allocations?: boolean | Prisma.Batch$allocationsArgs<ExtArgs>;
    transfers?: boolean | Prisma.Batch$transfersArgs<ExtArgs>;
    _count?: boolean | Prisma.BatchCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["batch"]>;
export type BatchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pharmacyId?: boolean;
    productId?: boolean;
    batchNumber?: boolean;
    expiresAt?: boolean;
    quantity?: boolean;
    priceKobo?: boolean;
    location?: boolean;
    status?: boolean;
    quarantineReason?: boolean;
    receivedAt?: boolean;
    pharmacy?: boolean | Prisma.PharmacyDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["batch"]>;
export type BatchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pharmacyId?: boolean;
    productId?: boolean;
    batchNumber?: boolean;
    expiresAt?: boolean;
    quantity?: boolean;
    priceKobo?: boolean;
    location?: boolean;
    status?: boolean;
    quarantineReason?: boolean;
    receivedAt?: boolean;
    pharmacy?: boolean | Prisma.PharmacyDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["batch"]>;
export type BatchSelectScalar = {
    id?: boolean;
    pharmacyId?: boolean;
    productId?: boolean;
    batchNumber?: boolean;
    expiresAt?: boolean;
    quantity?: boolean;
    priceKobo?: boolean;
    location?: boolean;
    status?: boolean;
    quarantineReason?: boolean;
    receivedAt?: boolean;
};
export type BatchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pharmacyId" | "productId" | "batchNumber" | "expiresAt" | "quantity" | "priceKobo" | "location" | "status" | "quarantineReason" | "receivedAt", ExtArgs["result"]["batch"]>;
export type BatchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pharmacy?: boolean | Prisma.PharmacyDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    allocations?: boolean | Prisma.Batch$allocationsArgs<ExtArgs>;
    transfers?: boolean | Prisma.Batch$transfersArgs<ExtArgs>;
    _count?: boolean | Prisma.BatchCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BatchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pharmacy?: boolean | Prisma.PharmacyDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type BatchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pharmacy?: boolean | Prisma.PharmacyDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $BatchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Batch";
    objects: {
        pharmacy: Prisma.$PharmacyPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
        allocations: Prisma.$OrderItemPayload<ExtArgs>[];
        transfers: Prisma.$TransferPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        pharmacyId: string;
        productId: string;
        batchNumber: string;
        expiresAt: Date;
        quantity: number;
        priceKobo: number;
        location: string | null;
        status: $Enums.BatchStatus;
        quarantineReason: string | null;
        receivedAt: Date;
    }, ExtArgs["result"]["batch"]>;
    composites: {};
};
export type BatchGetPayload<S extends boolean | null | undefined | BatchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BatchPayload, S>;
export type BatchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BatchCountAggregateInputType | true;
};
export interface BatchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Batch'];
        meta: {
            name: 'Batch';
        };
    };
    findUnique<T extends BatchFindUniqueArgs>(args: Prisma.SelectSubset<T, BatchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BatchClient<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BatchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BatchClient<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BatchFindFirstArgs>(args?: Prisma.SelectSubset<T, BatchFindFirstArgs<ExtArgs>>): Prisma.Prisma__BatchClient<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BatchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BatchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BatchClient<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BatchFindManyArgs>(args?: Prisma.SelectSubset<T, BatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BatchCreateArgs>(args: Prisma.SelectSubset<T, BatchCreateArgs<ExtArgs>>): Prisma.Prisma__BatchClient<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BatchCreateManyArgs>(args?: Prisma.SelectSubset<T, BatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BatchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BatchDeleteArgs>(args: Prisma.SelectSubset<T, BatchDeleteArgs<ExtArgs>>): Prisma.Prisma__BatchClient<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BatchUpdateArgs>(args: Prisma.SelectSubset<T, BatchUpdateArgs<ExtArgs>>): Prisma.Prisma__BatchClient<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BatchDeleteManyArgs>(args?: Prisma.SelectSubset<T, BatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BatchUpdateManyArgs>(args: Prisma.SelectSubset<T, BatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BatchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BatchUpsertArgs>(args: Prisma.SelectSubset<T, BatchUpsertArgs<ExtArgs>>): Prisma.Prisma__BatchClient<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BatchCountArgs>(args?: Prisma.Subset<T, BatchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BatchCountAggregateOutputType> : number>;
    aggregate<T extends BatchAggregateArgs>(args: Prisma.Subset<T, BatchAggregateArgs>): Prisma.PrismaPromise<GetBatchAggregateType<T>>;
    groupBy<T extends BatchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BatchGroupByArgs['orderBy'];
    } : {
        orderBy?: BatchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BatchFieldRefs;
}
export interface Prisma__BatchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pharmacy<T extends Prisma.PharmacyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PharmacyDefaultArgs<ExtArgs>>): Prisma.Prisma__PharmacyClient<runtime.Types.Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    allocations<T extends Prisma.Batch$allocationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Batch$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transfers<T extends Prisma.Batch$transfersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Batch$transfersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BatchFieldRefs {
    readonly id: Prisma.FieldRef<"Batch", 'String'>;
    readonly pharmacyId: Prisma.FieldRef<"Batch", 'String'>;
    readonly productId: Prisma.FieldRef<"Batch", 'String'>;
    readonly batchNumber: Prisma.FieldRef<"Batch", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"Batch", 'DateTime'>;
    readonly quantity: Prisma.FieldRef<"Batch", 'Int'>;
    readonly priceKobo: Prisma.FieldRef<"Batch", 'Int'>;
    readonly location: Prisma.FieldRef<"Batch", 'String'>;
    readonly status: Prisma.FieldRef<"Batch", 'BatchStatus'>;
    readonly quarantineReason: Prisma.FieldRef<"Batch", 'String'>;
    readonly receivedAt: Prisma.FieldRef<"Batch", 'DateTime'>;
}
export type BatchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatchSelect<ExtArgs> | null;
    omit?: Prisma.BatchOmit<ExtArgs> | null;
    include?: Prisma.BatchInclude<ExtArgs> | null;
    where: Prisma.BatchWhereUniqueInput;
};
export type BatchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatchSelect<ExtArgs> | null;
    omit?: Prisma.BatchOmit<ExtArgs> | null;
    include?: Prisma.BatchInclude<ExtArgs> | null;
    where: Prisma.BatchWhereUniqueInput;
};
export type BatchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BatchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BatchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BatchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatchSelect<ExtArgs> | null;
    omit?: Prisma.BatchOmit<ExtArgs> | null;
    include?: Prisma.BatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BatchCreateInput, Prisma.BatchUncheckedCreateInput>;
};
export type BatchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BatchCreateManyInput | Prisma.BatchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BatchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BatchOmit<ExtArgs> | null;
    data: Prisma.BatchCreateManyInput | Prisma.BatchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BatchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BatchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatchSelect<ExtArgs> | null;
    omit?: Prisma.BatchOmit<ExtArgs> | null;
    include?: Prisma.BatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BatchUpdateInput, Prisma.BatchUncheckedUpdateInput>;
    where: Prisma.BatchWhereUniqueInput;
};
export type BatchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BatchUpdateManyMutationInput, Prisma.BatchUncheckedUpdateManyInput>;
    where?: Prisma.BatchWhereInput;
    limit?: number;
};
export type BatchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BatchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BatchUpdateManyMutationInput, Prisma.BatchUncheckedUpdateManyInput>;
    where?: Prisma.BatchWhereInput;
    limit?: number;
    include?: Prisma.BatchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BatchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatchSelect<ExtArgs> | null;
    omit?: Prisma.BatchOmit<ExtArgs> | null;
    include?: Prisma.BatchInclude<ExtArgs> | null;
    where: Prisma.BatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.BatchCreateInput, Prisma.BatchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BatchUpdateInput, Prisma.BatchUncheckedUpdateInput>;
};
export type BatchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatchSelect<ExtArgs> | null;
    omit?: Prisma.BatchOmit<ExtArgs> | null;
    include?: Prisma.BatchInclude<ExtArgs> | null;
    where: Prisma.BatchWhereUniqueInput;
};
export type BatchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BatchWhereInput;
    limit?: number;
};
export type Batch$allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Batch$transfersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransferSelect<ExtArgs> | null;
    omit?: Prisma.TransferOmit<ExtArgs> | null;
    include?: Prisma.TransferInclude<ExtArgs> | null;
    where?: Prisma.TransferWhereInput;
    orderBy?: Prisma.TransferOrderByWithRelationInput | Prisma.TransferOrderByWithRelationInput[];
    cursor?: Prisma.TransferWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransferScalarFieldEnum | Prisma.TransferScalarFieldEnum[];
};
export type BatchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatchSelect<ExtArgs> | null;
    omit?: Prisma.BatchOmit<ExtArgs> | null;
    include?: Prisma.BatchInclude<ExtArgs> | null;
};
