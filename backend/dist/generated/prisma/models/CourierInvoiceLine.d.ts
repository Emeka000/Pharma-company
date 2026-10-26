import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CourierInvoiceLineModel = runtime.Types.Result.DefaultSelection<Prisma.$CourierInvoiceLinePayload>;
export type AggregateCourierInvoiceLine = {
    _count: CourierInvoiceLineCountAggregateOutputType | null;
    _avg: CourierInvoiceLineAvgAggregateOutputType | null;
    _sum: CourierInvoiceLineSumAggregateOutputType | null;
    _min: CourierInvoiceLineMinAggregateOutputType | null;
    _max: CourierInvoiceLineMaxAggregateOutputType | null;
};
export type CourierInvoiceLineAvgAggregateOutputType = {
    amountKobo: number | null;
};
export type CourierInvoiceLineSumAggregateOutputType = {
    amountKobo: number | null;
};
export type CourierInvoiceLineMinAggregateOutputType = {
    id: string | null;
    invoiceId: string | null;
    providerRef: string | null;
    amountKobo: number | null;
};
export type CourierInvoiceLineMaxAggregateOutputType = {
    id: string | null;
    invoiceId: string | null;
    providerRef: string | null;
    amountKobo: number | null;
};
export type CourierInvoiceLineCountAggregateOutputType = {
    id: number;
    invoiceId: number;
    providerRef: number;
    amountKobo: number;
    _all: number;
};
export type CourierInvoiceLineAvgAggregateInputType = {
    amountKobo?: true;
};
export type CourierInvoiceLineSumAggregateInputType = {
    amountKobo?: true;
};
export type CourierInvoiceLineMinAggregateInputType = {
    id?: true;
    invoiceId?: true;
    providerRef?: true;
    amountKobo?: true;
};
export type CourierInvoiceLineMaxAggregateInputType = {
    id?: true;
    invoiceId?: true;
    providerRef?: true;
    amountKobo?: true;
};
export type CourierInvoiceLineCountAggregateInputType = {
    id?: true;
    invoiceId?: true;
    providerRef?: true;
    amountKobo?: true;
    _all?: true;
};
export type CourierInvoiceLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourierInvoiceLineWhereInput;
    orderBy?: Prisma.CourierInvoiceLineOrderByWithRelationInput | Prisma.CourierInvoiceLineOrderByWithRelationInput[];
    cursor?: Prisma.CourierInvoiceLineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CourierInvoiceLineCountAggregateInputType;
    _avg?: CourierInvoiceLineAvgAggregateInputType;
    _sum?: CourierInvoiceLineSumAggregateInputType;
    _min?: CourierInvoiceLineMinAggregateInputType;
    _max?: CourierInvoiceLineMaxAggregateInputType;
};
export type GetCourierInvoiceLineAggregateType<T extends CourierInvoiceLineAggregateArgs> = {
    [P in keyof T & keyof AggregateCourierInvoiceLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourierInvoiceLine[P]> : Prisma.GetScalarType<T[P], AggregateCourierInvoiceLine[P]>;
};
export type CourierInvoiceLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourierInvoiceLineWhereInput;
    orderBy?: Prisma.CourierInvoiceLineOrderByWithAggregationInput | Prisma.CourierInvoiceLineOrderByWithAggregationInput[];
    by: Prisma.CourierInvoiceLineScalarFieldEnum[] | Prisma.CourierInvoiceLineScalarFieldEnum;
    having?: Prisma.CourierInvoiceLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourierInvoiceLineCountAggregateInputType | true;
    _avg?: CourierInvoiceLineAvgAggregateInputType;
    _sum?: CourierInvoiceLineSumAggregateInputType;
    _min?: CourierInvoiceLineMinAggregateInputType;
    _max?: CourierInvoiceLineMaxAggregateInputType;
};
export type CourierInvoiceLineGroupByOutputType = {
    id: string;
    invoiceId: string;
    providerRef: string;
    amountKobo: number;
    _count: CourierInvoiceLineCountAggregateOutputType | null;
    _avg: CourierInvoiceLineAvgAggregateOutputType | null;
    _sum: CourierInvoiceLineSumAggregateOutputType | null;
    _min: CourierInvoiceLineMinAggregateOutputType | null;
    _max: CourierInvoiceLineMaxAggregateOutputType | null;
};
export type GetCourierInvoiceLineGroupByPayload<T extends CourierInvoiceLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CourierInvoiceLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CourierInvoiceLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CourierInvoiceLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CourierInvoiceLineGroupByOutputType[P]>;
}>>;
export type CourierInvoiceLineWhereInput = {
    AND?: Prisma.CourierInvoiceLineWhereInput | Prisma.CourierInvoiceLineWhereInput[];
    OR?: Prisma.CourierInvoiceLineWhereInput[];
    NOT?: Prisma.CourierInvoiceLineWhereInput | Prisma.CourierInvoiceLineWhereInput[];
    id?: Prisma.StringFilter<"CourierInvoiceLine"> | string;
    invoiceId?: Prisma.StringFilter<"CourierInvoiceLine"> | string;
    providerRef?: Prisma.StringFilter<"CourierInvoiceLine"> | string;
    amountKobo?: Prisma.IntFilter<"CourierInvoiceLine"> | number;
    invoice?: Prisma.XOR<Prisma.CourierInvoiceScalarRelationFilter, Prisma.CourierInvoiceWhereInput>;
};
export type CourierInvoiceLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    providerRef?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    invoice?: Prisma.CourierInvoiceOrderByWithRelationInput;
};
export type CourierInvoiceLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CourierInvoiceLineWhereInput | Prisma.CourierInvoiceLineWhereInput[];
    OR?: Prisma.CourierInvoiceLineWhereInput[];
    NOT?: Prisma.CourierInvoiceLineWhereInput | Prisma.CourierInvoiceLineWhereInput[];
    invoiceId?: Prisma.StringFilter<"CourierInvoiceLine"> | string;
    providerRef?: Prisma.StringFilter<"CourierInvoiceLine"> | string;
    amountKobo?: Prisma.IntFilter<"CourierInvoiceLine"> | number;
    invoice?: Prisma.XOR<Prisma.CourierInvoiceScalarRelationFilter, Prisma.CourierInvoiceWhereInput>;
}, "id">;
export type CourierInvoiceLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    providerRef?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    _count?: Prisma.CourierInvoiceLineCountOrderByAggregateInput;
    _avg?: Prisma.CourierInvoiceLineAvgOrderByAggregateInput;
    _max?: Prisma.CourierInvoiceLineMaxOrderByAggregateInput;
    _min?: Prisma.CourierInvoiceLineMinOrderByAggregateInput;
    _sum?: Prisma.CourierInvoiceLineSumOrderByAggregateInput;
};
export type CourierInvoiceLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.CourierInvoiceLineScalarWhereWithAggregatesInput | Prisma.CourierInvoiceLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.CourierInvoiceLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CourierInvoiceLineScalarWhereWithAggregatesInput | Prisma.CourierInvoiceLineScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CourierInvoiceLine"> | string;
    invoiceId?: Prisma.StringWithAggregatesFilter<"CourierInvoiceLine"> | string;
    providerRef?: Prisma.StringWithAggregatesFilter<"CourierInvoiceLine"> | string;
    amountKobo?: Prisma.IntWithAggregatesFilter<"CourierInvoiceLine"> | number;
};
export type CourierInvoiceLineCreateInput = {
    id?: string;
    providerRef: string;
    amountKobo: number;
    invoice: Prisma.CourierInvoiceCreateNestedOneWithoutLinesInput;
};
export type CourierInvoiceLineUncheckedCreateInput = {
    id?: string;
    invoiceId: string;
    providerRef: string;
    amountKobo: number;
};
export type CourierInvoiceLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerRef?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    invoice?: Prisma.CourierInvoiceUpdateOneRequiredWithoutLinesNestedInput;
};
export type CourierInvoiceLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    providerRef?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CourierInvoiceLineCreateManyInput = {
    id?: string;
    invoiceId: string;
    providerRef: string;
    amountKobo: number;
};
export type CourierInvoiceLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerRef?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CourierInvoiceLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    providerRef?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CourierInvoiceLineListRelationFilter = {
    every?: Prisma.CourierInvoiceLineWhereInput;
    some?: Prisma.CourierInvoiceLineWhereInput;
    none?: Prisma.CourierInvoiceLineWhereInput;
};
export type CourierInvoiceLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CourierInvoiceLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    providerRef?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
};
export type CourierInvoiceLineAvgOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type CourierInvoiceLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    providerRef?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
};
export type CourierInvoiceLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    providerRef?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
};
export type CourierInvoiceLineSumOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type CourierInvoiceLineCreateNestedManyWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.CourierInvoiceLineCreateWithoutInvoiceInput, Prisma.CourierInvoiceLineUncheckedCreateWithoutInvoiceInput> | Prisma.CourierInvoiceLineCreateWithoutInvoiceInput[] | Prisma.CourierInvoiceLineUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.CourierInvoiceLineCreateOrConnectWithoutInvoiceInput | Prisma.CourierInvoiceLineCreateOrConnectWithoutInvoiceInput[];
    createMany?: Prisma.CourierInvoiceLineCreateManyInvoiceInputEnvelope;
    connect?: Prisma.CourierInvoiceLineWhereUniqueInput | Prisma.CourierInvoiceLineWhereUniqueInput[];
};
export type CourierInvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.CourierInvoiceLineCreateWithoutInvoiceInput, Prisma.CourierInvoiceLineUncheckedCreateWithoutInvoiceInput> | Prisma.CourierInvoiceLineCreateWithoutInvoiceInput[] | Prisma.CourierInvoiceLineUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.CourierInvoiceLineCreateOrConnectWithoutInvoiceInput | Prisma.CourierInvoiceLineCreateOrConnectWithoutInvoiceInput[];
    createMany?: Prisma.CourierInvoiceLineCreateManyInvoiceInputEnvelope;
    connect?: Prisma.CourierInvoiceLineWhereUniqueInput | Prisma.CourierInvoiceLineWhereUniqueInput[];
};
export type CourierInvoiceLineUpdateManyWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.CourierInvoiceLineCreateWithoutInvoiceInput, Prisma.CourierInvoiceLineUncheckedCreateWithoutInvoiceInput> | Prisma.CourierInvoiceLineCreateWithoutInvoiceInput[] | Prisma.CourierInvoiceLineUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.CourierInvoiceLineCreateOrConnectWithoutInvoiceInput | Prisma.CourierInvoiceLineCreateOrConnectWithoutInvoiceInput[];
    upsert?: Prisma.CourierInvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput | Prisma.CourierInvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: Prisma.CourierInvoiceLineCreateManyInvoiceInputEnvelope;
    set?: Prisma.CourierInvoiceLineWhereUniqueInput | Prisma.CourierInvoiceLineWhereUniqueInput[];
    disconnect?: Prisma.CourierInvoiceLineWhereUniqueInput | Prisma.CourierInvoiceLineWhereUniqueInput[];
    delete?: Prisma.CourierInvoiceLineWhereUniqueInput | Prisma.CourierInvoiceLineWhereUniqueInput[];
    connect?: Prisma.CourierInvoiceLineWhereUniqueInput | Prisma.CourierInvoiceLineWhereUniqueInput[];
    update?: Prisma.CourierInvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput | Prisma.CourierInvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?: Prisma.CourierInvoiceLineUpdateManyWithWhereWithoutInvoiceInput | Prisma.CourierInvoiceLineUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: Prisma.CourierInvoiceLineScalarWhereInput | Prisma.CourierInvoiceLineScalarWhereInput[];
};
export type CourierInvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.CourierInvoiceLineCreateWithoutInvoiceInput, Prisma.CourierInvoiceLineUncheckedCreateWithoutInvoiceInput> | Prisma.CourierInvoiceLineCreateWithoutInvoiceInput[] | Prisma.CourierInvoiceLineUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.CourierInvoiceLineCreateOrConnectWithoutInvoiceInput | Prisma.CourierInvoiceLineCreateOrConnectWithoutInvoiceInput[];
    upsert?: Prisma.CourierInvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput | Prisma.CourierInvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: Prisma.CourierInvoiceLineCreateManyInvoiceInputEnvelope;
    set?: Prisma.CourierInvoiceLineWhereUniqueInput | Prisma.CourierInvoiceLineWhereUniqueInput[];
    disconnect?: Prisma.CourierInvoiceLineWhereUniqueInput | Prisma.CourierInvoiceLineWhereUniqueInput[];
    delete?: Prisma.CourierInvoiceLineWhereUniqueInput | Prisma.CourierInvoiceLineWhereUniqueInput[];
    connect?: Prisma.CourierInvoiceLineWhereUniqueInput | Prisma.CourierInvoiceLineWhereUniqueInput[];
    update?: Prisma.CourierInvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput | Prisma.CourierInvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?: Prisma.CourierInvoiceLineUpdateManyWithWhereWithoutInvoiceInput | Prisma.CourierInvoiceLineUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: Prisma.CourierInvoiceLineScalarWhereInput | Prisma.CourierInvoiceLineScalarWhereInput[];
};
export type CourierInvoiceLineCreateWithoutInvoiceInput = {
    id?: string;
    providerRef: string;
    amountKobo: number;
};
export type CourierInvoiceLineUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    providerRef: string;
    amountKobo: number;
};
export type CourierInvoiceLineCreateOrConnectWithoutInvoiceInput = {
    where: Prisma.CourierInvoiceLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourierInvoiceLineCreateWithoutInvoiceInput, Prisma.CourierInvoiceLineUncheckedCreateWithoutInvoiceInput>;
};
export type CourierInvoiceLineCreateManyInvoiceInputEnvelope = {
    data: Prisma.CourierInvoiceLineCreateManyInvoiceInput | Prisma.CourierInvoiceLineCreateManyInvoiceInput[];
    skipDuplicates?: boolean;
};
export type CourierInvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: Prisma.CourierInvoiceLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.CourierInvoiceLineUpdateWithoutInvoiceInput, Prisma.CourierInvoiceLineUncheckedUpdateWithoutInvoiceInput>;
    create: Prisma.XOR<Prisma.CourierInvoiceLineCreateWithoutInvoiceInput, Prisma.CourierInvoiceLineUncheckedCreateWithoutInvoiceInput>;
};
export type CourierInvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: Prisma.CourierInvoiceLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.CourierInvoiceLineUpdateWithoutInvoiceInput, Prisma.CourierInvoiceLineUncheckedUpdateWithoutInvoiceInput>;
};
export type CourierInvoiceLineUpdateManyWithWhereWithoutInvoiceInput = {
    where: Prisma.CourierInvoiceLineScalarWhereInput;
    data: Prisma.XOR<Prisma.CourierInvoiceLineUpdateManyMutationInput, Prisma.CourierInvoiceLineUncheckedUpdateManyWithoutInvoiceInput>;
};
export type CourierInvoiceLineScalarWhereInput = {
    AND?: Prisma.CourierInvoiceLineScalarWhereInput | Prisma.CourierInvoiceLineScalarWhereInput[];
    OR?: Prisma.CourierInvoiceLineScalarWhereInput[];
    NOT?: Prisma.CourierInvoiceLineScalarWhereInput | Prisma.CourierInvoiceLineScalarWhereInput[];
    id?: Prisma.StringFilter<"CourierInvoiceLine"> | string;
    invoiceId?: Prisma.StringFilter<"CourierInvoiceLine"> | string;
    providerRef?: Prisma.StringFilter<"CourierInvoiceLine"> | string;
    amountKobo?: Prisma.IntFilter<"CourierInvoiceLine"> | number;
};
export type CourierInvoiceLineCreateManyInvoiceInput = {
    id?: string;
    providerRef: string;
    amountKobo: number;
};
export type CourierInvoiceLineUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerRef?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CourierInvoiceLineUncheckedUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerRef?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CourierInvoiceLineUncheckedUpdateManyWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerRef?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CourierInvoiceLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invoiceId?: boolean;
    providerRef?: boolean;
    amountKobo?: boolean;
    invoice?: boolean | Prisma.CourierInvoiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courierInvoiceLine"]>;
export type CourierInvoiceLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invoiceId?: boolean;
    providerRef?: boolean;
    amountKobo?: boolean;
    invoice?: boolean | Prisma.CourierInvoiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courierInvoiceLine"]>;
export type CourierInvoiceLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invoiceId?: boolean;
    providerRef?: boolean;
    amountKobo?: boolean;
    invoice?: boolean | Prisma.CourierInvoiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courierInvoiceLine"]>;
export type CourierInvoiceLineSelectScalar = {
    id?: boolean;
    invoiceId?: boolean;
    providerRef?: boolean;
    amountKobo?: boolean;
};
export type CourierInvoiceLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "invoiceId" | "providerRef" | "amountKobo", ExtArgs["result"]["courierInvoiceLine"]>;
export type CourierInvoiceLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoice?: boolean | Prisma.CourierInvoiceDefaultArgs<ExtArgs>;
};
export type CourierInvoiceLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoice?: boolean | Prisma.CourierInvoiceDefaultArgs<ExtArgs>;
};
export type CourierInvoiceLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoice?: boolean | Prisma.CourierInvoiceDefaultArgs<ExtArgs>;
};
export type $CourierInvoiceLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CourierInvoiceLine";
    objects: {
        invoice: Prisma.$CourierInvoicePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        invoiceId: string;
        providerRef: string;
        amountKobo: number;
    }, ExtArgs["result"]["courierInvoiceLine"]>;
    composites: {};
};
export type CourierInvoiceLineGetPayload<S extends boolean | null | undefined | CourierInvoiceLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload, S>;
export type CourierInvoiceLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CourierInvoiceLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourierInvoiceLineCountAggregateInputType | true;
};
export interface CourierInvoiceLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CourierInvoiceLine'];
        meta: {
            name: 'CourierInvoiceLine';
        };
    };
    findUnique<T extends CourierInvoiceLineFindUniqueArgs>(args: Prisma.SelectSubset<T, CourierInvoiceLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CourierInvoiceLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CourierInvoiceLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CourierInvoiceLineFindFirstArgs>(args?: Prisma.SelectSubset<T, CourierInvoiceLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CourierInvoiceLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CourierInvoiceLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CourierInvoiceLineFindManyArgs>(args?: Prisma.SelectSubset<T, CourierInvoiceLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CourierInvoiceLineCreateArgs>(args: Prisma.SelectSubset<T, CourierInvoiceLineCreateArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CourierInvoiceLineCreateManyArgs>(args?: Prisma.SelectSubset<T, CourierInvoiceLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CourierInvoiceLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CourierInvoiceLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CourierInvoiceLineDeleteArgs>(args: Prisma.SelectSubset<T, CourierInvoiceLineDeleteArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CourierInvoiceLineUpdateArgs>(args: Prisma.SelectSubset<T, CourierInvoiceLineUpdateArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CourierInvoiceLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, CourierInvoiceLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CourierInvoiceLineUpdateManyArgs>(args: Prisma.SelectSubset<T, CourierInvoiceLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CourierInvoiceLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CourierInvoiceLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CourierInvoiceLineUpsertArgs>(args: Prisma.SelectSubset<T, CourierInvoiceLineUpsertArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoiceLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CourierInvoiceLineCountArgs>(args?: Prisma.Subset<T, CourierInvoiceLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CourierInvoiceLineCountAggregateOutputType> : number>;
    aggregate<T extends CourierInvoiceLineAggregateArgs>(args: Prisma.Subset<T, CourierInvoiceLineAggregateArgs>): Prisma.PrismaPromise<GetCourierInvoiceLineAggregateType<T>>;
    groupBy<T extends CourierInvoiceLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CourierInvoiceLineGroupByArgs['orderBy'];
    } : {
        orderBy?: CourierInvoiceLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CourierInvoiceLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourierInvoiceLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CourierInvoiceLineFieldRefs;
}
export interface Prisma__CourierInvoiceLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    invoice<T extends Prisma.CourierInvoiceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourierInvoiceDefaultArgs<ExtArgs>>): Prisma.Prisma__CourierInvoiceClient<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CourierInvoiceLineFieldRefs {
    readonly id: Prisma.FieldRef<"CourierInvoiceLine", 'String'>;
    readonly invoiceId: Prisma.FieldRef<"CourierInvoiceLine", 'String'>;
    readonly providerRef: Prisma.FieldRef<"CourierInvoiceLine", 'String'>;
    readonly amountKobo: Prisma.FieldRef<"CourierInvoiceLine", 'Int'>;
}
export type CourierInvoiceLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceLineInclude<ExtArgs> | null;
    where: Prisma.CourierInvoiceLineWhereUniqueInput;
};
export type CourierInvoiceLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceLineInclude<ExtArgs> | null;
    where: Prisma.CourierInvoiceLineWhereUniqueInput;
};
export type CourierInvoiceLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CourierInvoiceLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CourierInvoiceLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CourierInvoiceLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourierInvoiceLineCreateInput, Prisma.CourierInvoiceLineUncheckedCreateInput>;
};
export type CourierInvoiceLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CourierInvoiceLineCreateManyInput | Prisma.CourierInvoiceLineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourierInvoiceLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceLineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceLineOmit<ExtArgs> | null;
    data: Prisma.CourierInvoiceLineCreateManyInput | Prisma.CourierInvoiceLineCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CourierInvoiceLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CourierInvoiceLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourierInvoiceLineUpdateInput, Prisma.CourierInvoiceLineUncheckedUpdateInput>;
    where: Prisma.CourierInvoiceLineWhereUniqueInput;
};
export type CourierInvoiceLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CourierInvoiceLineUpdateManyMutationInput, Prisma.CourierInvoiceLineUncheckedUpdateManyInput>;
    where?: Prisma.CourierInvoiceLineWhereInput;
    limit?: number;
};
export type CourierInvoiceLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceLineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceLineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourierInvoiceLineUpdateManyMutationInput, Prisma.CourierInvoiceLineUncheckedUpdateManyInput>;
    where?: Prisma.CourierInvoiceLineWhereInput;
    limit?: number;
    include?: Prisma.CourierInvoiceLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CourierInvoiceLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceLineInclude<ExtArgs> | null;
    where: Prisma.CourierInvoiceLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourierInvoiceLineCreateInput, Prisma.CourierInvoiceLineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CourierInvoiceLineUpdateInput, Prisma.CourierInvoiceLineUncheckedUpdateInput>;
};
export type CourierInvoiceLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceLineInclude<ExtArgs> | null;
    where: Prisma.CourierInvoiceLineWhereUniqueInput;
};
export type CourierInvoiceLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourierInvoiceLineWhereInput;
    limit?: number;
};
export type CourierInvoiceLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceLineInclude<ExtArgs> | null;
};
