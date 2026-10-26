import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DeliveryQuoteModel = runtime.Types.Result.DefaultSelection<Prisma.$DeliveryQuotePayload>;
export type AggregateDeliveryQuote = {
    _count: DeliveryQuoteCountAggregateOutputType | null;
    _avg: DeliveryQuoteAvgAggregateOutputType | null;
    _sum: DeliveryQuoteSumAggregateOutputType | null;
    _min: DeliveryQuoteMinAggregateOutputType | null;
    _max: DeliveryQuoteMaxAggregateOutputType | null;
};
export type DeliveryQuoteAvgAggregateOutputType = {
    lat: number | null;
    lng: number | null;
    courierFeeKobo: number | null;
    priceKobo: number | null;
};
export type DeliveryQuoteSumAggregateOutputType = {
    lat: number | null;
    lng: number | null;
    courierFeeKobo: number | null;
    priceKobo: number | null;
};
export type DeliveryQuoteMinAggregateOutputType = {
    id: string | null;
    pharmacyId: string | null;
    courierId: string | null;
    lat: number | null;
    lng: number | null;
    courierFeeKobo: number | null;
    priceKobo: number | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type DeliveryQuoteMaxAggregateOutputType = {
    id: string | null;
    pharmacyId: string | null;
    courierId: string | null;
    lat: number | null;
    lng: number | null;
    courierFeeKobo: number | null;
    priceKobo: number | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type DeliveryQuoteCountAggregateOutputType = {
    id: number;
    pharmacyId: number;
    courierId: number;
    lat: number;
    lng: number;
    courierFeeKobo: number;
    priceKobo: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
};
export type DeliveryQuoteAvgAggregateInputType = {
    lat?: true;
    lng?: true;
    courierFeeKobo?: true;
    priceKobo?: true;
};
export type DeliveryQuoteSumAggregateInputType = {
    lat?: true;
    lng?: true;
    courierFeeKobo?: true;
    priceKobo?: true;
};
export type DeliveryQuoteMinAggregateInputType = {
    id?: true;
    pharmacyId?: true;
    courierId?: true;
    lat?: true;
    lng?: true;
    courierFeeKobo?: true;
    priceKobo?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type DeliveryQuoteMaxAggregateInputType = {
    id?: true;
    pharmacyId?: true;
    courierId?: true;
    lat?: true;
    lng?: true;
    courierFeeKobo?: true;
    priceKobo?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type DeliveryQuoteCountAggregateInputType = {
    id?: true;
    pharmacyId?: true;
    courierId?: true;
    lat?: true;
    lng?: true;
    courierFeeKobo?: true;
    priceKobo?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
};
export type DeliveryQuoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryQuoteWhereInput;
    orderBy?: Prisma.DeliveryQuoteOrderByWithRelationInput | Prisma.DeliveryQuoteOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryQuoteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DeliveryQuoteCountAggregateInputType;
    _avg?: DeliveryQuoteAvgAggregateInputType;
    _sum?: DeliveryQuoteSumAggregateInputType;
    _min?: DeliveryQuoteMinAggregateInputType;
    _max?: DeliveryQuoteMaxAggregateInputType;
};
export type GetDeliveryQuoteAggregateType<T extends DeliveryQuoteAggregateArgs> = {
    [P in keyof T & keyof AggregateDeliveryQuote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeliveryQuote[P]> : Prisma.GetScalarType<T[P], AggregateDeliveryQuote[P]>;
};
export type DeliveryQuoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryQuoteWhereInput;
    orderBy?: Prisma.DeliveryQuoteOrderByWithAggregationInput | Prisma.DeliveryQuoteOrderByWithAggregationInput[];
    by: Prisma.DeliveryQuoteScalarFieldEnum[] | Prisma.DeliveryQuoteScalarFieldEnum;
    having?: Prisma.DeliveryQuoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeliveryQuoteCountAggregateInputType | true;
    _avg?: DeliveryQuoteAvgAggregateInputType;
    _sum?: DeliveryQuoteSumAggregateInputType;
    _min?: DeliveryQuoteMinAggregateInputType;
    _max?: DeliveryQuoteMaxAggregateInputType;
};
export type DeliveryQuoteGroupByOutputType = {
    id: string;
    pharmacyId: string;
    courierId: string | null;
    lat: number;
    lng: number;
    courierFeeKobo: number | null;
    priceKobo: number;
    expiresAt: Date;
    createdAt: Date;
    _count: DeliveryQuoteCountAggregateOutputType | null;
    _avg: DeliveryQuoteAvgAggregateOutputType | null;
    _sum: DeliveryQuoteSumAggregateOutputType | null;
    _min: DeliveryQuoteMinAggregateOutputType | null;
    _max: DeliveryQuoteMaxAggregateOutputType | null;
};
export type GetDeliveryQuoteGroupByPayload<T extends DeliveryQuoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeliveryQuoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeliveryQuoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeliveryQuoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeliveryQuoteGroupByOutputType[P]>;
}>>;
export type DeliveryQuoteWhereInput = {
    AND?: Prisma.DeliveryQuoteWhereInput | Prisma.DeliveryQuoteWhereInput[];
    OR?: Prisma.DeliveryQuoteWhereInput[];
    NOT?: Prisma.DeliveryQuoteWhereInput | Prisma.DeliveryQuoteWhereInput[];
    id?: Prisma.StringFilter<"DeliveryQuote"> | string;
    pharmacyId?: Prisma.StringFilter<"DeliveryQuote"> | string;
    courierId?: Prisma.StringNullableFilter<"DeliveryQuote"> | string | null;
    lat?: Prisma.FloatFilter<"DeliveryQuote"> | number;
    lng?: Prisma.FloatFilter<"DeliveryQuote"> | number;
    courierFeeKobo?: Prisma.IntNullableFilter<"DeliveryQuote"> | number | null;
    priceKobo?: Prisma.IntFilter<"DeliveryQuote"> | number;
    expiresAt?: Prisma.DateTimeFilter<"DeliveryQuote"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"DeliveryQuote"> | Date | string;
};
export type DeliveryQuoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    courierId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    courierFeeKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeliveryQuoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DeliveryQuoteWhereInput | Prisma.DeliveryQuoteWhereInput[];
    OR?: Prisma.DeliveryQuoteWhereInput[];
    NOT?: Prisma.DeliveryQuoteWhereInput | Prisma.DeliveryQuoteWhereInput[];
    pharmacyId?: Prisma.StringFilter<"DeliveryQuote"> | string;
    courierId?: Prisma.StringNullableFilter<"DeliveryQuote"> | string | null;
    lat?: Prisma.FloatFilter<"DeliveryQuote"> | number;
    lng?: Prisma.FloatFilter<"DeliveryQuote"> | number;
    courierFeeKobo?: Prisma.IntNullableFilter<"DeliveryQuote"> | number | null;
    priceKobo?: Prisma.IntFilter<"DeliveryQuote"> | number;
    expiresAt?: Prisma.DateTimeFilter<"DeliveryQuote"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"DeliveryQuote"> | Date | string;
}, "id">;
export type DeliveryQuoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    courierId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    courierFeeKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DeliveryQuoteCountOrderByAggregateInput;
    _avg?: Prisma.DeliveryQuoteAvgOrderByAggregateInput;
    _max?: Prisma.DeliveryQuoteMaxOrderByAggregateInput;
    _min?: Prisma.DeliveryQuoteMinOrderByAggregateInput;
    _sum?: Prisma.DeliveryQuoteSumOrderByAggregateInput;
};
export type DeliveryQuoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeliveryQuoteScalarWhereWithAggregatesInput | Prisma.DeliveryQuoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeliveryQuoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeliveryQuoteScalarWhereWithAggregatesInput | Prisma.DeliveryQuoteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DeliveryQuote"> | string;
    pharmacyId?: Prisma.StringWithAggregatesFilter<"DeliveryQuote"> | string;
    courierId?: Prisma.StringNullableWithAggregatesFilter<"DeliveryQuote"> | string | null;
    lat?: Prisma.FloatWithAggregatesFilter<"DeliveryQuote"> | number;
    lng?: Prisma.FloatWithAggregatesFilter<"DeliveryQuote"> | number;
    courierFeeKobo?: Prisma.IntNullableWithAggregatesFilter<"DeliveryQuote"> | number | null;
    priceKobo?: Prisma.IntWithAggregatesFilter<"DeliveryQuote"> | number;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"DeliveryQuote"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DeliveryQuote"> | Date | string;
};
export type DeliveryQuoteCreateInput = {
    id?: string;
    pharmacyId: string;
    courierId?: string | null;
    lat: number;
    lng: number;
    courierFeeKobo?: number | null;
    priceKobo: number;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type DeliveryQuoteUncheckedCreateInput = {
    id?: string;
    pharmacyId: string;
    courierId?: string | null;
    lat: number;
    lng: number;
    courierFeeKobo?: number | null;
    priceKobo: number;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type DeliveryQuoteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pharmacyId?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    courierFeeKobo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeliveryQuoteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pharmacyId?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    courierFeeKobo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeliveryQuoteCreateManyInput = {
    id?: string;
    pharmacyId: string;
    courierId?: string | null;
    lat: number;
    lng: number;
    courierFeeKobo?: number | null;
    priceKobo: number;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type DeliveryQuoteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pharmacyId?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    courierFeeKobo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeliveryQuoteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pharmacyId?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    courierFeeKobo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    priceKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeliveryQuoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    courierId?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    courierFeeKobo?: Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeliveryQuoteAvgOrderByAggregateInput = {
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    courierFeeKobo?: Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
};
export type DeliveryQuoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    courierId?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    courierFeeKobo?: Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeliveryQuoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    courierId?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    courierFeeKobo?: Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeliveryQuoteSumOrderByAggregateInput = {
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    courierFeeKobo?: Prisma.SortOrder;
    priceKobo?: Prisma.SortOrder;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DeliveryQuoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pharmacyId?: boolean;
    courierId?: boolean;
    lat?: boolean;
    lng?: boolean;
    courierFeeKobo?: boolean;
    priceKobo?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["deliveryQuote"]>;
export type DeliveryQuoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pharmacyId?: boolean;
    courierId?: boolean;
    lat?: boolean;
    lng?: boolean;
    courierFeeKobo?: boolean;
    priceKobo?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["deliveryQuote"]>;
export type DeliveryQuoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pharmacyId?: boolean;
    courierId?: boolean;
    lat?: boolean;
    lng?: boolean;
    courierFeeKobo?: boolean;
    priceKobo?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["deliveryQuote"]>;
export type DeliveryQuoteSelectScalar = {
    id?: boolean;
    pharmacyId?: boolean;
    courierId?: boolean;
    lat?: boolean;
    lng?: boolean;
    courierFeeKobo?: boolean;
    priceKobo?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
};
export type DeliveryQuoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pharmacyId" | "courierId" | "lat" | "lng" | "courierFeeKobo" | "priceKobo" | "expiresAt" | "createdAt", ExtArgs["result"]["deliveryQuote"]>;
export type $DeliveryQuotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DeliveryQuote";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        pharmacyId: string;
        courierId: string | null;
        lat: number;
        lng: number;
        courierFeeKobo: number | null;
        priceKobo: number;
        expiresAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["deliveryQuote"]>;
    composites: {};
};
export type DeliveryQuoteGetPayload<S extends boolean | null | undefined | DeliveryQuoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeliveryQuotePayload, S>;
export type DeliveryQuoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeliveryQuoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeliveryQuoteCountAggregateInputType | true;
};
export interface DeliveryQuoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DeliveryQuote'];
        meta: {
            name: 'DeliveryQuote';
        };
    };
    findUnique<T extends DeliveryQuoteFindUniqueArgs>(args: Prisma.SelectSubset<T, DeliveryQuoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeliveryQuoteClient<runtime.Types.Result.GetResult<Prisma.$DeliveryQuotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DeliveryQuoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeliveryQuoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeliveryQuoteClient<runtime.Types.Result.GetResult<Prisma.$DeliveryQuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DeliveryQuoteFindFirstArgs>(args?: Prisma.SelectSubset<T, DeliveryQuoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeliveryQuoteClient<runtime.Types.Result.GetResult<Prisma.$DeliveryQuotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DeliveryQuoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeliveryQuoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeliveryQuoteClient<runtime.Types.Result.GetResult<Prisma.$DeliveryQuotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DeliveryQuoteFindManyArgs>(args?: Prisma.SelectSubset<T, DeliveryQuoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryQuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DeliveryQuoteCreateArgs>(args: Prisma.SelectSubset<T, DeliveryQuoteCreateArgs<ExtArgs>>): Prisma.Prisma__DeliveryQuoteClient<runtime.Types.Result.GetResult<Prisma.$DeliveryQuotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DeliveryQuoteCreateManyArgs>(args?: Prisma.SelectSubset<T, DeliveryQuoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DeliveryQuoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeliveryQuoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryQuotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DeliveryQuoteDeleteArgs>(args: Prisma.SelectSubset<T, DeliveryQuoteDeleteArgs<ExtArgs>>): Prisma.Prisma__DeliveryQuoteClient<runtime.Types.Result.GetResult<Prisma.$DeliveryQuotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DeliveryQuoteUpdateArgs>(args: Prisma.SelectSubset<T, DeliveryQuoteUpdateArgs<ExtArgs>>): Prisma.Prisma__DeliveryQuoteClient<runtime.Types.Result.GetResult<Prisma.$DeliveryQuotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DeliveryQuoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeliveryQuoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DeliveryQuoteUpdateManyArgs>(args: Prisma.SelectSubset<T, DeliveryQuoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DeliveryQuoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeliveryQuoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryQuotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DeliveryQuoteUpsertArgs>(args: Prisma.SelectSubset<T, DeliveryQuoteUpsertArgs<ExtArgs>>): Prisma.Prisma__DeliveryQuoteClient<runtime.Types.Result.GetResult<Prisma.$DeliveryQuotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DeliveryQuoteCountArgs>(args?: Prisma.Subset<T, DeliveryQuoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeliveryQuoteCountAggregateOutputType> : number>;
    aggregate<T extends DeliveryQuoteAggregateArgs>(args: Prisma.Subset<T, DeliveryQuoteAggregateArgs>): Prisma.PrismaPromise<GetDeliveryQuoteAggregateType<T>>;
    groupBy<T extends DeliveryQuoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeliveryQuoteGroupByArgs['orderBy'];
    } : {
        orderBy?: DeliveryQuoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeliveryQuoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryQuoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DeliveryQuoteFieldRefs;
}
export interface Prisma__DeliveryQuoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DeliveryQuoteFieldRefs {
    readonly id: Prisma.FieldRef<"DeliveryQuote", 'String'>;
    readonly pharmacyId: Prisma.FieldRef<"DeliveryQuote", 'String'>;
    readonly courierId: Prisma.FieldRef<"DeliveryQuote", 'String'>;
    readonly lat: Prisma.FieldRef<"DeliveryQuote", 'Float'>;
    readonly lng: Prisma.FieldRef<"DeliveryQuote", 'Float'>;
    readonly courierFeeKobo: Prisma.FieldRef<"DeliveryQuote", 'Int'>;
    readonly priceKobo: Prisma.FieldRef<"DeliveryQuote", 'Int'>;
    readonly expiresAt: Prisma.FieldRef<"DeliveryQuote", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"DeliveryQuote", 'DateTime'>;
}
export type DeliveryQuoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryQuoteSelect<ExtArgs> | null;
    omit?: Prisma.DeliveryQuoteOmit<ExtArgs> | null;
    where: Prisma.DeliveryQuoteWhereUniqueInput;
};
export type DeliveryQuoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryQuoteSelect<ExtArgs> | null;
    omit?: Prisma.DeliveryQuoteOmit<ExtArgs> | null;
    where: Prisma.DeliveryQuoteWhereUniqueInput;
};
export type DeliveryQuoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryQuoteSelect<ExtArgs> | null;
    omit?: Prisma.DeliveryQuoteOmit<ExtArgs> | null;
    where?: Prisma.DeliveryQuoteWhereInput;
    orderBy?: Prisma.DeliveryQuoteOrderByWithRelationInput | Prisma.DeliveryQuoteOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryQuoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveryQuoteScalarFieldEnum | Prisma.DeliveryQuoteScalarFieldEnum[];
};
export type DeliveryQuoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryQuoteSelect<ExtArgs> | null;
    omit?: Prisma.DeliveryQuoteOmit<ExtArgs> | null;
    where?: Prisma.DeliveryQuoteWhereInput;
    orderBy?: Prisma.DeliveryQuoteOrderByWithRelationInput | Prisma.DeliveryQuoteOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryQuoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveryQuoteScalarFieldEnum | Prisma.DeliveryQuoteScalarFieldEnum[];
};
export type DeliveryQuoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryQuoteSelect<ExtArgs> | null;
    omit?: Prisma.DeliveryQuoteOmit<ExtArgs> | null;
    where?: Prisma.DeliveryQuoteWhereInput;
    orderBy?: Prisma.DeliveryQuoteOrderByWithRelationInput | Prisma.DeliveryQuoteOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryQuoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveryQuoteScalarFieldEnum | Prisma.DeliveryQuoteScalarFieldEnum[];
};
export type DeliveryQuoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryQuoteSelect<ExtArgs> | null;
    omit?: Prisma.DeliveryQuoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeliveryQuoteCreateInput, Prisma.DeliveryQuoteUncheckedCreateInput>;
};
export type DeliveryQuoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DeliveryQuoteCreateManyInput | Prisma.DeliveryQuoteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DeliveryQuoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryQuoteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeliveryQuoteOmit<ExtArgs> | null;
    data: Prisma.DeliveryQuoteCreateManyInput | Prisma.DeliveryQuoteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DeliveryQuoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryQuoteSelect<ExtArgs> | null;
    omit?: Prisma.DeliveryQuoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeliveryQuoteUpdateInput, Prisma.DeliveryQuoteUncheckedUpdateInput>;
    where: Prisma.DeliveryQuoteWhereUniqueInput;
};
export type DeliveryQuoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DeliveryQuoteUpdateManyMutationInput, Prisma.DeliveryQuoteUncheckedUpdateManyInput>;
    where?: Prisma.DeliveryQuoteWhereInput;
    limit?: number;
};
export type DeliveryQuoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryQuoteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeliveryQuoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeliveryQuoteUpdateManyMutationInput, Prisma.DeliveryQuoteUncheckedUpdateManyInput>;
    where?: Prisma.DeliveryQuoteWhereInput;
    limit?: number;
};
export type DeliveryQuoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryQuoteSelect<ExtArgs> | null;
    omit?: Prisma.DeliveryQuoteOmit<ExtArgs> | null;
    where: Prisma.DeliveryQuoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeliveryQuoteCreateInput, Prisma.DeliveryQuoteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DeliveryQuoteUpdateInput, Prisma.DeliveryQuoteUncheckedUpdateInput>;
};
export type DeliveryQuoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryQuoteSelect<ExtArgs> | null;
    omit?: Prisma.DeliveryQuoteOmit<ExtArgs> | null;
    where: Prisma.DeliveryQuoteWhereUniqueInput;
};
export type DeliveryQuoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryQuoteWhereInput;
    limit?: number;
};
export type DeliveryQuoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryQuoteSelect<ExtArgs> | null;
    omit?: Prisma.DeliveryQuoteOmit<ExtArgs> | null;
};
