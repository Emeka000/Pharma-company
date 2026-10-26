import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CourierInvoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$CourierInvoicePayload>;
export type AggregateCourierInvoice = {
    _count: CourierInvoiceCountAggregateOutputType | null;
    _avg: CourierInvoiceAvgAggregateOutputType | null;
    _sum: CourierInvoiceSumAggregateOutputType | null;
    _min: CourierInvoiceMinAggregateOutputType | null;
    _max: CourierInvoiceMaxAggregateOutputType | null;
};
export type CourierInvoiceAvgAggregateOutputType = {
    totalKobo: number | null;
};
export type CourierInvoiceSumAggregateOutputType = {
    totalKobo: number | null;
};
export type CourierInvoiceMinAggregateOutputType = {
    id: string | null;
    courierId: string | null;
    number: string | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    totalKobo: number | null;
    status: $Enums.InvoiceStatus | null;
    note: string | null;
    createdById: string | null;
    createdAt: Date | null;
    reconciledAt: Date | null;
    reconciledById: string | null;
};
export type CourierInvoiceMaxAggregateOutputType = {
    id: string | null;
    courierId: string | null;
    number: string | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    totalKobo: number | null;
    status: $Enums.InvoiceStatus | null;
    note: string | null;
    createdById: string | null;
    createdAt: Date | null;
    reconciledAt: Date | null;
    reconciledById: string | null;
};
export type CourierInvoiceCountAggregateOutputType = {
    id: number;
    courierId: number;
    number: number;
    periodStart: number;
    periodEnd: number;
    totalKobo: number;
    status: number;
    note: number;
    createdById: number;
    createdAt: number;
    reconciledAt: number;
    reconciledById: number;
    _all: number;
};
export type CourierInvoiceAvgAggregateInputType = {
    totalKobo?: true;
};
export type CourierInvoiceSumAggregateInputType = {
    totalKobo?: true;
};
export type CourierInvoiceMinAggregateInputType = {
    id?: true;
    courierId?: true;
    number?: true;
    periodStart?: true;
    periodEnd?: true;
    totalKobo?: true;
    status?: true;
    note?: true;
    createdById?: true;
    createdAt?: true;
    reconciledAt?: true;
    reconciledById?: true;
};
export type CourierInvoiceMaxAggregateInputType = {
    id?: true;
    courierId?: true;
    number?: true;
    periodStart?: true;
    periodEnd?: true;
    totalKobo?: true;
    status?: true;
    note?: true;
    createdById?: true;
    createdAt?: true;
    reconciledAt?: true;
    reconciledById?: true;
};
export type CourierInvoiceCountAggregateInputType = {
    id?: true;
    courierId?: true;
    number?: true;
    periodStart?: true;
    periodEnd?: true;
    totalKobo?: true;
    status?: true;
    note?: true;
    createdById?: true;
    createdAt?: true;
    reconciledAt?: true;
    reconciledById?: true;
    _all?: true;
};
export type CourierInvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourierInvoiceWhereInput;
    orderBy?: Prisma.CourierInvoiceOrderByWithRelationInput | Prisma.CourierInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.CourierInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CourierInvoiceCountAggregateInputType;
    _avg?: CourierInvoiceAvgAggregateInputType;
    _sum?: CourierInvoiceSumAggregateInputType;
    _min?: CourierInvoiceMinAggregateInputType;
    _max?: CourierInvoiceMaxAggregateInputType;
};
export type GetCourierInvoiceAggregateType<T extends CourierInvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateCourierInvoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourierInvoice[P]> : Prisma.GetScalarType<T[P], AggregateCourierInvoice[P]>;
};
export type CourierInvoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourierInvoiceWhereInput;
    orderBy?: Prisma.CourierInvoiceOrderByWithAggregationInput | Prisma.CourierInvoiceOrderByWithAggregationInput[];
    by: Prisma.CourierInvoiceScalarFieldEnum[] | Prisma.CourierInvoiceScalarFieldEnum;
    having?: Prisma.CourierInvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourierInvoiceCountAggregateInputType | true;
    _avg?: CourierInvoiceAvgAggregateInputType;
    _sum?: CourierInvoiceSumAggregateInputType;
    _min?: CourierInvoiceMinAggregateInputType;
    _max?: CourierInvoiceMaxAggregateInputType;
};
export type CourierInvoiceGroupByOutputType = {
    id: string;
    courierId: string;
    number: string;
    periodStart: Date;
    periodEnd: Date;
    totalKobo: number;
    status: $Enums.InvoiceStatus;
    note: string | null;
    createdById: string;
    createdAt: Date;
    reconciledAt: Date | null;
    reconciledById: string | null;
    _count: CourierInvoiceCountAggregateOutputType | null;
    _avg: CourierInvoiceAvgAggregateOutputType | null;
    _sum: CourierInvoiceSumAggregateOutputType | null;
    _min: CourierInvoiceMinAggregateOutputType | null;
    _max: CourierInvoiceMaxAggregateOutputType | null;
};
export type GetCourierInvoiceGroupByPayload<T extends CourierInvoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CourierInvoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CourierInvoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CourierInvoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CourierInvoiceGroupByOutputType[P]>;
}>>;
export type CourierInvoiceWhereInput = {
    AND?: Prisma.CourierInvoiceWhereInput | Prisma.CourierInvoiceWhereInput[];
    OR?: Prisma.CourierInvoiceWhereInput[];
    NOT?: Prisma.CourierInvoiceWhereInput | Prisma.CourierInvoiceWhereInput[];
    id?: Prisma.StringFilter<"CourierInvoice"> | string;
    courierId?: Prisma.StringFilter<"CourierInvoice"> | string;
    number?: Prisma.StringFilter<"CourierInvoice"> | string;
    periodStart?: Prisma.DateTimeFilter<"CourierInvoice"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"CourierInvoice"> | Date | string;
    totalKobo?: Prisma.IntFilter<"CourierInvoice"> | number;
    status?: Prisma.EnumInvoiceStatusFilter<"CourierInvoice"> | $Enums.InvoiceStatus;
    note?: Prisma.StringNullableFilter<"CourierInvoice"> | string | null;
    createdById?: Prisma.StringFilter<"CourierInvoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"CourierInvoice"> | Date | string;
    reconciledAt?: Prisma.DateTimeNullableFilter<"CourierInvoice"> | Date | string | null;
    reconciledById?: Prisma.StringNullableFilter<"CourierInvoice"> | string | null;
    courier?: Prisma.XOR<Prisma.CourierScalarRelationFilter, Prisma.CourierWhereInput>;
    lines?: Prisma.CourierInvoiceLineListRelationFilter;
};
export type CourierInvoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    courierId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reconciledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reconciledById?: Prisma.SortOrderInput | Prisma.SortOrder;
    courier?: Prisma.CourierOrderByWithRelationInput;
    lines?: Prisma.CourierInvoiceLineOrderByRelationAggregateInput;
};
export type CourierInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    courierId_number?: Prisma.CourierInvoiceCourierIdNumberCompoundUniqueInput;
    AND?: Prisma.CourierInvoiceWhereInput | Prisma.CourierInvoiceWhereInput[];
    OR?: Prisma.CourierInvoiceWhereInput[];
    NOT?: Prisma.CourierInvoiceWhereInput | Prisma.CourierInvoiceWhereInput[];
    courierId?: Prisma.StringFilter<"CourierInvoice"> | string;
    number?: Prisma.StringFilter<"CourierInvoice"> | string;
    periodStart?: Prisma.DateTimeFilter<"CourierInvoice"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"CourierInvoice"> | Date | string;
    totalKobo?: Prisma.IntFilter<"CourierInvoice"> | number;
    status?: Prisma.EnumInvoiceStatusFilter<"CourierInvoice"> | $Enums.InvoiceStatus;
    note?: Prisma.StringNullableFilter<"CourierInvoice"> | string | null;
    createdById?: Prisma.StringFilter<"CourierInvoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"CourierInvoice"> | Date | string;
    reconciledAt?: Prisma.DateTimeNullableFilter<"CourierInvoice"> | Date | string | null;
    reconciledById?: Prisma.StringNullableFilter<"CourierInvoice"> | string | null;
    courier?: Prisma.XOR<Prisma.CourierScalarRelationFilter, Prisma.CourierWhereInput>;
    lines?: Prisma.CourierInvoiceLineListRelationFilter;
}, "id" | "courierId_number">;
export type CourierInvoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    courierId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reconciledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reconciledById?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CourierInvoiceCountOrderByAggregateInput;
    _avg?: Prisma.CourierInvoiceAvgOrderByAggregateInput;
    _max?: Prisma.CourierInvoiceMaxOrderByAggregateInput;
    _min?: Prisma.CourierInvoiceMinOrderByAggregateInput;
    _sum?: Prisma.CourierInvoiceSumOrderByAggregateInput;
};
export type CourierInvoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.CourierInvoiceScalarWhereWithAggregatesInput | Prisma.CourierInvoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.CourierInvoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CourierInvoiceScalarWhereWithAggregatesInput | Prisma.CourierInvoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CourierInvoice"> | string;
    courierId?: Prisma.StringWithAggregatesFilter<"CourierInvoice"> | string;
    number?: Prisma.StringWithAggregatesFilter<"CourierInvoice"> | string;
    periodStart?: Prisma.DateTimeWithAggregatesFilter<"CourierInvoice"> | Date | string;
    periodEnd?: Prisma.DateTimeWithAggregatesFilter<"CourierInvoice"> | Date | string;
    totalKobo?: Prisma.IntWithAggregatesFilter<"CourierInvoice"> | number;
    status?: Prisma.EnumInvoiceStatusWithAggregatesFilter<"CourierInvoice"> | $Enums.InvoiceStatus;
    note?: Prisma.StringNullableWithAggregatesFilter<"CourierInvoice"> | string | null;
    createdById?: Prisma.StringWithAggregatesFilter<"CourierInvoice"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CourierInvoice"> | Date | string;
    reconciledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CourierInvoice"> | Date | string | null;
    reconciledById?: Prisma.StringNullableWithAggregatesFilter<"CourierInvoice"> | string | null;
};
export type CourierInvoiceCreateInput = {
    id?: string;
    number: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    totalKobo: number;
    status?: $Enums.InvoiceStatus;
    note?: string | null;
    createdById: string;
    createdAt?: Date | string;
    reconciledAt?: Date | string | null;
    reconciledById?: string | null;
    courier: Prisma.CourierCreateNestedOneWithoutInvoicesInput;
    lines?: Prisma.CourierInvoiceLineCreateNestedManyWithoutInvoiceInput;
};
export type CourierInvoiceUncheckedCreateInput = {
    id?: string;
    courierId: string;
    number: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    totalKobo: number;
    status?: $Enums.InvoiceStatus;
    note?: string | null;
    createdById: string;
    createdAt?: Date | string;
    reconciledAt?: Date | string | null;
    reconciledById?: string | null;
    lines?: Prisma.CourierInvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput;
};
export type CourierInvoiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reconciledById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courier?: Prisma.CourierUpdateOneRequiredWithoutInvoicesNestedInput;
    lines?: Prisma.CourierInvoiceLineUpdateManyWithoutInvoiceNestedInput;
};
export type CourierInvoiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reconciledById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lines?: Prisma.CourierInvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput;
};
export type CourierInvoiceCreateManyInput = {
    id?: string;
    courierId: string;
    number: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    totalKobo: number;
    status?: $Enums.InvoiceStatus;
    note?: string | null;
    createdById: string;
    createdAt?: Date | string;
    reconciledAt?: Date | string | null;
    reconciledById?: string | null;
};
export type CourierInvoiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reconciledById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CourierInvoiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reconciledById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CourierInvoiceListRelationFilter = {
    every?: Prisma.CourierInvoiceWhereInput;
    some?: Prisma.CourierInvoiceWhereInput;
    none?: Prisma.CourierInvoiceWhereInput;
};
export type CourierInvoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CourierInvoiceCourierIdNumberCompoundUniqueInput = {
    courierId: string;
    number: string;
};
export type CourierInvoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courierId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reconciledAt?: Prisma.SortOrder;
    reconciledById?: Prisma.SortOrder;
};
export type CourierInvoiceAvgOrderByAggregateInput = {
    totalKobo?: Prisma.SortOrder;
};
export type CourierInvoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courierId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reconciledAt?: Prisma.SortOrder;
    reconciledById?: Prisma.SortOrder;
};
export type CourierInvoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courierId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reconciledAt?: Prisma.SortOrder;
    reconciledById?: Prisma.SortOrder;
};
export type CourierInvoiceSumOrderByAggregateInput = {
    totalKobo?: Prisma.SortOrder;
};
export type CourierInvoiceScalarRelationFilter = {
    is?: Prisma.CourierInvoiceWhereInput;
    isNot?: Prisma.CourierInvoiceWhereInput;
};
export type CourierInvoiceCreateNestedManyWithoutCourierInput = {
    create?: Prisma.XOR<Prisma.CourierInvoiceCreateWithoutCourierInput, Prisma.CourierInvoiceUncheckedCreateWithoutCourierInput> | Prisma.CourierInvoiceCreateWithoutCourierInput[] | Prisma.CourierInvoiceUncheckedCreateWithoutCourierInput[];
    connectOrCreate?: Prisma.CourierInvoiceCreateOrConnectWithoutCourierInput | Prisma.CourierInvoiceCreateOrConnectWithoutCourierInput[];
    createMany?: Prisma.CourierInvoiceCreateManyCourierInputEnvelope;
    connect?: Prisma.CourierInvoiceWhereUniqueInput | Prisma.CourierInvoiceWhereUniqueInput[];
};
export type CourierInvoiceUncheckedCreateNestedManyWithoutCourierInput = {
    create?: Prisma.XOR<Prisma.CourierInvoiceCreateWithoutCourierInput, Prisma.CourierInvoiceUncheckedCreateWithoutCourierInput> | Prisma.CourierInvoiceCreateWithoutCourierInput[] | Prisma.CourierInvoiceUncheckedCreateWithoutCourierInput[];
    connectOrCreate?: Prisma.CourierInvoiceCreateOrConnectWithoutCourierInput | Prisma.CourierInvoiceCreateOrConnectWithoutCourierInput[];
    createMany?: Prisma.CourierInvoiceCreateManyCourierInputEnvelope;
    connect?: Prisma.CourierInvoiceWhereUniqueInput | Prisma.CourierInvoiceWhereUniqueInput[];
};
export type CourierInvoiceUpdateManyWithoutCourierNestedInput = {
    create?: Prisma.XOR<Prisma.CourierInvoiceCreateWithoutCourierInput, Prisma.CourierInvoiceUncheckedCreateWithoutCourierInput> | Prisma.CourierInvoiceCreateWithoutCourierInput[] | Prisma.CourierInvoiceUncheckedCreateWithoutCourierInput[];
    connectOrCreate?: Prisma.CourierInvoiceCreateOrConnectWithoutCourierInput | Prisma.CourierInvoiceCreateOrConnectWithoutCourierInput[];
    upsert?: Prisma.CourierInvoiceUpsertWithWhereUniqueWithoutCourierInput | Prisma.CourierInvoiceUpsertWithWhereUniqueWithoutCourierInput[];
    createMany?: Prisma.CourierInvoiceCreateManyCourierInputEnvelope;
    set?: Prisma.CourierInvoiceWhereUniqueInput | Prisma.CourierInvoiceWhereUniqueInput[];
    disconnect?: Prisma.CourierInvoiceWhereUniqueInput | Prisma.CourierInvoiceWhereUniqueInput[];
    delete?: Prisma.CourierInvoiceWhereUniqueInput | Prisma.CourierInvoiceWhereUniqueInput[];
    connect?: Prisma.CourierInvoiceWhereUniqueInput | Prisma.CourierInvoiceWhereUniqueInput[];
    update?: Prisma.CourierInvoiceUpdateWithWhereUniqueWithoutCourierInput | Prisma.CourierInvoiceUpdateWithWhereUniqueWithoutCourierInput[];
    updateMany?: Prisma.CourierInvoiceUpdateManyWithWhereWithoutCourierInput | Prisma.CourierInvoiceUpdateManyWithWhereWithoutCourierInput[];
    deleteMany?: Prisma.CourierInvoiceScalarWhereInput | Prisma.CourierInvoiceScalarWhereInput[];
};
export type CourierInvoiceUncheckedUpdateManyWithoutCourierNestedInput = {
    create?: Prisma.XOR<Prisma.CourierInvoiceCreateWithoutCourierInput, Prisma.CourierInvoiceUncheckedCreateWithoutCourierInput> | Prisma.CourierInvoiceCreateWithoutCourierInput[] | Prisma.CourierInvoiceUncheckedCreateWithoutCourierInput[];
    connectOrCreate?: Prisma.CourierInvoiceCreateOrConnectWithoutCourierInput | Prisma.CourierInvoiceCreateOrConnectWithoutCourierInput[];
    upsert?: Prisma.CourierInvoiceUpsertWithWhereUniqueWithoutCourierInput | Prisma.CourierInvoiceUpsertWithWhereUniqueWithoutCourierInput[];
    createMany?: Prisma.CourierInvoiceCreateManyCourierInputEnvelope;
    set?: Prisma.CourierInvoiceWhereUniqueInput | Prisma.CourierInvoiceWhereUniqueInput[];
    disconnect?: Prisma.CourierInvoiceWhereUniqueInput | Prisma.CourierInvoiceWhereUniqueInput[];
    delete?: Prisma.CourierInvoiceWhereUniqueInput | Prisma.CourierInvoiceWhereUniqueInput[];
    connect?: Prisma.CourierInvoiceWhereUniqueInput | Prisma.CourierInvoiceWhereUniqueInput[];
    update?: Prisma.CourierInvoiceUpdateWithWhereUniqueWithoutCourierInput | Prisma.CourierInvoiceUpdateWithWhereUniqueWithoutCourierInput[];
    updateMany?: Prisma.CourierInvoiceUpdateManyWithWhereWithoutCourierInput | Prisma.CourierInvoiceUpdateManyWithWhereWithoutCourierInput[];
    deleteMany?: Prisma.CourierInvoiceScalarWhereInput | Prisma.CourierInvoiceScalarWhereInput[];
};
export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus;
};
export type CourierInvoiceCreateNestedOneWithoutLinesInput = {
    create?: Prisma.XOR<Prisma.CourierInvoiceCreateWithoutLinesInput, Prisma.CourierInvoiceUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.CourierInvoiceCreateOrConnectWithoutLinesInput;
    connect?: Prisma.CourierInvoiceWhereUniqueInput;
};
export type CourierInvoiceUpdateOneRequiredWithoutLinesNestedInput = {
    create?: Prisma.XOR<Prisma.CourierInvoiceCreateWithoutLinesInput, Prisma.CourierInvoiceUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.CourierInvoiceCreateOrConnectWithoutLinesInput;
    upsert?: Prisma.CourierInvoiceUpsertWithoutLinesInput;
    connect?: Prisma.CourierInvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourierInvoiceUpdateToOneWithWhereWithoutLinesInput, Prisma.CourierInvoiceUpdateWithoutLinesInput>, Prisma.CourierInvoiceUncheckedUpdateWithoutLinesInput>;
};
export type CourierInvoiceCreateWithoutCourierInput = {
    id?: string;
    number: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    totalKobo: number;
    status?: $Enums.InvoiceStatus;
    note?: string | null;
    createdById: string;
    createdAt?: Date | string;
    reconciledAt?: Date | string | null;
    reconciledById?: string | null;
    lines?: Prisma.CourierInvoiceLineCreateNestedManyWithoutInvoiceInput;
};
export type CourierInvoiceUncheckedCreateWithoutCourierInput = {
    id?: string;
    number: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    totalKobo: number;
    status?: $Enums.InvoiceStatus;
    note?: string | null;
    createdById: string;
    createdAt?: Date | string;
    reconciledAt?: Date | string | null;
    reconciledById?: string | null;
    lines?: Prisma.CourierInvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput;
};
export type CourierInvoiceCreateOrConnectWithoutCourierInput = {
    where: Prisma.CourierInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourierInvoiceCreateWithoutCourierInput, Prisma.CourierInvoiceUncheckedCreateWithoutCourierInput>;
};
export type CourierInvoiceCreateManyCourierInputEnvelope = {
    data: Prisma.CourierInvoiceCreateManyCourierInput | Prisma.CourierInvoiceCreateManyCourierInput[];
    skipDuplicates?: boolean;
};
export type CourierInvoiceUpsertWithWhereUniqueWithoutCourierInput = {
    where: Prisma.CourierInvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.CourierInvoiceUpdateWithoutCourierInput, Prisma.CourierInvoiceUncheckedUpdateWithoutCourierInput>;
    create: Prisma.XOR<Prisma.CourierInvoiceCreateWithoutCourierInput, Prisma.CourierInvoiceUncheckedCreateWithoutCourierInput>;
};
export type CourierInvoiceUpdateWithWhereUniqueWithoutCourierInput = {
    where: Prisma.CourierInvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.CourierInvoiceUpdateWithoutCourierInput, Prisma.CourierInvoiceUncheckedUpdateWithoutCourierInput>;
};
export type CourierInvoiceUpdateManyWithWhereWithoutCourierInput = {
    where: Prisma.CourierInvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.CourierInvoiceUpdateManyMutationInput, Prisma.CourierInvoiceUncheckedUpdateManyWithoutCourierInput>;
};
export type CourierInvoiceScalarWhereInput = {
    AND?: Prisma.CourierInvoiceScalarWhereInput | Prisma.CourierInvoiceScalarWhereInput[];
    OR?: Prisma.CourierInvoiceScalarWhereInput[];
    NOT?: Prisma.CourierInvoiceScalarWhereInput | Prisma.CourierInvoiceScalarWhereInput[];
    id?: Prisma.StringFilter<"CourierInvoice"> | string;
    courierId?: Prisma.StringFilter<"CourierInvoice"> | string;
    number?: Prisma.StringFilter<"CourierInvoice"> | string;
    periodStart?: Prisma.DateTimeFilter<"CourierInvoice"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"CourierInvoice"> | Date | string;
    totalKobo?: Prisma.IntFilter<"CourierInvoice"> | number;
    status?: Prisma.EnumInvoiceStatusFilter<"CourierInvoice"> | $Enums.InvoiceStatus;
    note?: Prisma.StringNullableFilter<"CourierInvoice"> | string | null;
    createdById?: Prisma.StringFilter<"CourierInvoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"CourierInvoice"> | Date | string;
    reconciledAt?: Prisma.DateTimeNullableFilter<"CourierInvoice"> | Date | string | null;
    reconciledById?: Prisma.StringNullableFilter<"CourierInvoice"> | string | null;
};
export type CourierInvoiceCreateWithoutLinesInput = {
    id?: string;
    number: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    totalKobo: number;
    status?: $Enums.InvoiceStatus;
    note?: string | null;
    createdById: string;
    createdAt?: Date | string;
    reconciledAt?: Date | string | null;
    reconciledById?: string | null;
    courier: Prisma.CourierCreateNestedOneWithoutInvoicesInput;
};
export type CourierInvoiceUncheckedCreateWithoutLinesInput = {
    id?: string;
    courierId: string;
    number: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    totalKobo: number;
    status?: $Enums.InvoiceStatus;
    note?: string | null;
    createdById: string;
    createdAt?: Date | string;
    reconciledAt?: Date | string | null;
    reconciledById?: string | null;
};
export type CourierInvoiceCreateOrConnectWithoutLinesInput = {
    where: Prisma.CourierInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourierInvoiceCreateWithoutLinesInput, Prisma.CourierInvoiceUncheckedCreateWithoutLinesInput>;
};
export type CourierInvoiceUpsertWithoutLinesInput = {
    update: Prisma.XOR<Prisma.CourierInvoiceUpdateWithoutLinesInput, Prisma.CourierInvoiceUncheckedUpdateWithoutLinesInput>;
    create: Prisma.XOR<Prisma.CourierInvoiceCreateWithoutLinesInput, Prisma.CourierInvoiceUncheckedCreateWithoutLinesInput>;
    where?: Prisma.CourierInvoiceWhereInput;
};
export type CourierInvoiceUpdateToOneWithWhereWithoutLinesInput = {
    where?: Prisma.CourierInvoiceWhereInput;
    data: Prisma.XOR<Prisma.CourierInvoiceUpdateWithoutLinesInput, Prisma.CourierInvoiceUncheckedUpdateWithoutLinesInput>;
};
export type CourierInvoiceUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reconciledById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courier?: Prisma.CourierUpdateOneRequiredWithoutInvoicesNestedInput;
};
export type CourierInvoiceUncheckedUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reconciledById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CourierInvoiceCreateManyCourierInput = {
    id?: string;
    number: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    totalKobo: number;
    status?: $Enums.InvoiceStatus;
    note?: string | null;
    createdById: string;
    createdAt?: Date | string;
    reconciledAt?: Date | string | null;
    reconciledById?: string | null;
};
export type CourierInvoiceUpdateWithoutCourierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reconciledById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lines?: Prisma.CourierInvoiceLineUpdateManyWithoutInvoiceNestedInput;
};
export type CourierInvoiceUncheckedUpdateWithoutCourierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reconciledById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lines?: Prisma.CourierInvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput;
};
export type CourierInvoiceUncheckedUpdateManyWithoutCourierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reconciledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reconciledById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CourierInvoiceCountOutputType = {
    lines: number;
};
export type CourierInvoiceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lines?: boolean | CourierInvoiceCountOutputTypeCountLinesArgs;
};
export type CourierInvoiceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceCountOutputTypeSelect<ExtArgs> | null;
};
export type CourierInvoiceCountOutputTypeCountLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourierInvoiceLineWhereInput;
};
export type CourierInvoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courierId?: boolean;
    number?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    totalKobo?: boolean;
    status?: boolean;
    note?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    reconciledAt?: boolean;
    reconciledById?: boolean;
    courier?: boolean | Prisma.CourierDefaultArgs<ExtArgs>;
    lines?: boolean | Prisma.CourierInvoice$linesArgs<ExtArgs>;
    _count?: boolean | Prisma.CourierInvoiceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courierInvoice"]>;
export type CourierInvoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courierId?: boolean;
    number?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    totalKobo?: boolean;
    status?: boolean;
    note?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    reconciledAt?: boolean;
    reconciledById?: boolean;
    courier?: boolean | Prisma.CourierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courierInvoice"]>;
export type CourierInvoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courierId?: boolean;
    number?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    totalKobo?: boolean;
    status?: boolean;
    note?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    reconciledAt?: boolean;
    reconciledById?: boolean;
    courier?: boolean | Prisma.CourierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courierInvoice"]>;
export type CourierInvoiceSelectScalar = {
    id?: boolean;
    courierId?: boolean;
    number?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    totalKobo?: boolean;
    status?: boolean;
    note?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    reconciledAt?: boolean;
    reconciledById?: boolean;
};
export type CourierInvoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "courierId" | "number" | "periodStart" | "periodEnd" | "totalKobo" | "status" | "note" | "createdById" | "createdAt" | "reconciledAt" | "reconciledById", ExtArgs["result"]["courierInvoice"]>;
export type CourierInvoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courier?: boolean | Prisma.CourierDefaultArgs<ExtArgs>;
    lines?: boolean | Prisma.CourierInvoice$linesArgs<ExtArgs>;
    _count?: boolean | Prisma.CourierInvoiceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CourierInvoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courier?: boolean | Prisma.CourierDefaultArgs<ExtArgs>;
};
export type CourierInvoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courier?: boolean | Prisma.CourierDefaultArgs<ExtArgs>;
};
export type $CourierInvoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CourierInvoice";
    objects: {
        courier: Prisma.$CourierPayload<ExtArgs>;
        lines: Prisma.$CourierInvoiceLinePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        courierId: string;
        number: string;
        periodStart: Date;
        periodEnd: Date;
        totalKobo: number;
        status: $Enums.InvoiceStatus;
        note: string | null;
        createdById: string;
        createdAt: Date;
        reconciledAt: Date | null;
        reconciledById: string | null;
    }, ExtArgs["result"]["courierInvoice"]>;
    composites: {};
};
export type CourierInvoiceGetPayload<S extends boolean | null | undefined | CourierInvoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload, S>;
export type CourierInvoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CourierInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourierInvoiceCountAggregateInputType | true;
};
export interface CourierInvoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CourierInvoice'];
        meta: {
            name: 'CourierInvoice';
        };
    };
    findUnique<T extends CourierInvoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, CourierInvoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CourierInvoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CourierInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CourierInvoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, CourierInvoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CourierInvoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CourierInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CourierInvoiceFindManyArgs>(args?: Prisma.SelectSubset<T, CourierInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CourierInvoiceCreateArgs>(args: Prisma.SelectSubset<T, CourierInvoiceCreateArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CourierInvoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, CourierInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CourierInvoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CourierInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CourierInvoiceDeleteArgs>(args: Prisma.SelectSubset<T, CourierInvoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CourierInvoiceUpdateArgs>(args: Prisma.SelectSubset<T, CourierInvoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CourierInvoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, CourierInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CourierInvoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, CourierInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CourierInvoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CourierInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CourierInvoiceUpsertArgs>(args: Prisma.SelectSubset<T, CourierInvoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CourierInvoiceCountArgs>(args?: Prisma.Subset<T, CourierInvoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CourierInvoiceCountAggregateOutputType> : number>;
    aggregate<T extends CourierInvoiceAggregateArgs>(args: Prisma.Subset<T, CourierInvoiceAggregateArgs>): Prisma.PrismaPromise<GetCourierInvoiceAggregateType<T>>;
    groupBy<T extends CourierInvoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CourierInvoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: CourierInvoiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CourierInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourierInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CourierInvoiceFieldRefs;
}
export interface Prisma__CourierInvoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    courier<T extends Prisma.CourierDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourierDefaultArgs<ExtArgs>>): Prisma.Prisma__CourierClient<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lines<T extends Prisma.CourierInvoice$linesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourierInvoice$linesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CourierInvoiceFieldRefs {
    readonly id: Prisma.FieldRef<"CourierInvoice", 'String'>;
    readonly courierId: Prisma.FieldRef<"CourierInvoice", 'String'>;
    readonly number: Prisma.FieldRef<"CourierInvoice", 'String'>;
    readonly periodStart: Prisma.FieldRef<"CourierInvoice", 'DateTime'>;
    readonly periodEnd: Prisma.FieldRef<"CourierInvoice", 'DateTime'>;
    readonly totalKobo: Prisma.FieldRef<"CourierInvoice", 'Int'>;
    readonly status: Prisma.FieldRef<"CourierInvoice", 'InvoiceStatus'>;
    readonly note: Prisma.FieldRef<"CourierInvoice", 'String'>;
    readonly createdById: Prisma.FieldRef<"CourierInvoice", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CourierInvoice", 'DateTime'>;
    readonly reconciledAt: Prisma.FieldRef<"CourierInvoice", 'DateTime'>;
    readonly reconciledById: Prisma.FieldRef<"CourierInvoice", 'String'>;
}
export type CourierInvoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceInclude<ExtArgs> | null;
    where: Prisma.CourierInvoiceWhereUniqueInput;
};
export type CourierInvoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceInclude<ExtArgs> | null;
    where: Prisma.CourierInvoiceWhereUniqueInput;
};
export type CourierInvoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceInclude<ExtArgs> | null;
    where?: Prisma.CourierInvoiceWhereInput;
    orderBy?: Prisma.CourierInvoiceOrderByWithRelationInput | Prisma.CourierInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.CourierInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourierInvoiceScalarFieldEnum | Prisma.CourierInvoiceScalarFieldEnum[];
};
export type CourierInvoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceInclude<ExtArgs> | null;
    where?: Prisma.CourierInvoiceWhereInput;
    orderBy?: Prisma.CourierInvoiceOrderByWithRelationInput | Prisma.CourierInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.CourierInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourierInvoiceScalarFieldEnum | Prisma.CourierInvoiceScalarFieldEnum[];
};
export type CourierInvoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceInclude<ExtArgs> | null;
    where?: Prisma.CourierInvoiceWhereInput;
    orderBy?: Prisma.CourierInvoiceOrderByWithRelationInput | Prisma.CourierInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.CourierInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourierInvoiceScalarFieldEnum | Prisma.CourierInvoiceScalarFieldEnum[];
};
export type CourierInvoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourierInvoiceCreateInput, Prisma.CourierInvoiceUncheckedCreateInput>;
};
export type CourierInvoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CourierInvoiceCreateManyInput | Prisma.CourierInvoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourierInvoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    data: Prisma.CourierInvoiceCreateManyInput | Prisma.CourierInvoiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CourierInvoiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CourierInvoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourierInvoiceUpdateInput, Prisma.CourierInvoiceUncheckedUpdateInput>;
    where: Prisma.CourierInvoiceWhereUniqueInput;
};
export type CourierInvoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CourierInvoiceUpdateManyMutationInput, Prisma.CourierInvoiceUncheckedUpdateManyInput>;
    where?: Prisma.CourierInvoiceWhereInput;
    limit?: number;
};
export type CourierInvoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourierInvoiceUpdateManyMutationInput, Prisma.CourierInvoiceUncheckedUpdateManyInput>;
    where?: Prisma.CourierInvoiceWhereInput;
    limit?: number;
    include?: Prisma.CourierInvoiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CourierInvoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceInclude<ExtArgs> | null;
    where: Prisma.CourierInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourierInvoiceCreateInput, Prisma.CourierInvoiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CourierInvoiceUpdateInput, Prisma.CourierInvoiceUncheckedUpdateInput>;
};
export type CourierInvoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceInclude<ExtArgs> | null;
    where: Prisma.CourierInvoiceWhereUniqueInput;
};
export type CourierInvoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourierInvoiceWhereInput;
    limit?: number;
};
export type CourierInvoice$linesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceLineInclude<ExtArgs> | null;
    where?: Prisma.CourierInvoiceLineWhereInput;
    orderBy?: Prisma.CourierInvoiceLineOrderByWithRelationInput | Prisma.CourierInvoiceLineOrderByWithRelationInput[];
    cursor?: Prisma.CourierInvoiceLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourierInvoiceLineScalarFieldEnum | Prisma.CourierInvoiceLineScalarFieldEnum[];
};
export type CourierInvoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceInclude<ExtArgs> | null;
};
