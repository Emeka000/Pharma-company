import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RiderProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$RiderProfilePayload>;
export type AggregateRiderProfile = {
    _count: RiderProfileCountAggregateOutputType | null;
    _min: RiderProfileMinAggregateOutputType | null;
    _max: RiderProfileMaxAggregateOutputType | null;
};
export type RiderProfileMinAggregateOutputType = {
    userId: string | null;
    partner: string | null;
    coldChain: boolean | null;
    active: boolean | null;
    area: string | null;
    onlineSince: Date | null;
};
export type RiderProfileMaxAggregateOutputType = {
    userId: string | null;
    partner: string | null;
    coldChain: boolean | null;
    active: boolean | null;
    area: string | null;
    onlineSince: Date | null;
};
export type RiderProfileCountAggregateOutputType = {
    userId: number;
    partner: number;
    coldChain: number;
    active: number;
    area: number;
    onlineSince: number;
    _all: number;
};
export type RiderProfileMinAggregateInputType = {
    userId?: true;
    partner?: true;
    coldChain?: true;
    active?: true;
    area?: true;
    onlineSince?: true;
};
export type RiderProfileMaxAggregateInputType = {
    userId?: true;
    partner?: true;
    coldChain?: true;
    active?: true;
    area?: true;
    onlineSince?: true;
};
export type RiderProfileCountAggregateInputType = {
    userId?: true;
    partner?: true;
    coldChain?: true;
    active?: true;
    area?: true;
    onlineSince?: true;
    _all?: true;
};
export type RiderProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiderProfileWhereInput;
    orderBy?: Prisma.RiderProfileOrderByWithRelationInput | Prisma.RiderProfileOrderByWithRelationInput[];
    cursor?: Prisma.RiderProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RiderProfileCountAggregateInputType;
    _min?: RiderProfileMinAggregateInputType;
    _max?: RiderProfileMaxAggregateInputType;
};
export type GetRiderProfileAggregateType<T extends RiderProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateRiderProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRiderProfile[P]> : Prisma.GetScalarType<T[P], AggregateRiderProfile[P]>;
};
export type RiderProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiderProfileWhereInput;
    orderBy?: Prisma.RiderProfileOrderByWithAggregationInput | Prisma.RiderProfileOrderByWithAggregationInput[];
    by: Prisma.RiderProfileScalarFieldEnum[] | Prisma.RiderProfileScalarFieldEnum;
    having?: Prisma.RiderProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RiderProfileCountAggregateInputType | true;
    _min?: RiderProfileMinAggregateInputType;
    _max?: RiderProfileMaxAggregateInputType;
};
export type RiderProfileGroupByOutputType = {
    userId: string;
    partner: string;
    coldChain: boolean;
    active: boolean;
    area: string | null;
    onlineSince: Date | null;
    _count: RiderProfileCountAggregateOutputType | null;
    _min: RiderProfileMinAggregateOutputType | null;
    _max: RiderProfileMaxAggregateOutputType | null;
};
export type GetRiderProfileGroupByPayload<T extends RiderProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RiderProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RiderProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RiderProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RiderProfileGroupByOutputType[P]>;
}>>;
export type RiderProfileWhereInput = {
    AND?: Prisma.RiderProfileWhereInput | Prisma.RiderProfileWhereInput[];
    OR?: Prisma.RiderProfileWhereInput[];
    NOT?: Prisma.RiderProfileWhereInput | Prisma.RiderProfileWhereInput[];
    userId?: Prisma.StringFilter<"RiderProfile"> | string;
    partner?: Prisma.StringFilter<"RiderProfile"> | string;
    coldChain?: Prisma.BoolFilter<"RiderProfile"> | boolean;
    active?: Prisma.BoolFilter<"RiderProfile"> | boolean;
    area?: Prisma.StringNullableFilter<"RiderProfile"> | string | null;
    onlineSince?: Prisma.DateTimeNullableFilter<"RiderProfile"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type RiderProfileOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    partner?: Prisma.SortOrder;
    coldChain?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    area?: Prisma.SortOrderInput | Prisma.SortOrder;
    onlineSince?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type RiderProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    AND?: Prisma.RiderProfileWhereInput | Prisma.RiderProfileWhereInput[];
    OR?: Prisma.RiderProfileWhereInput[];
    NOT?: Prisma.RiderProfileWhereInput | Prisma.RiderProfileWhereInput[];
    partner?: Prisma.StringFilter<"RiderProfile"> | string;
    coldChain?: Prisma.BoolFilter<"RiderProfile"> | boolean;
    active?: Prisma.BoolFilter<"RiderProfile"> | boolean;
    area?: Prisma.StringNullableFilter<"RiderProfile"> | string | null;
    onlineSince?: Prisma.DateTimeNullableFilter<"RiderProfile"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "userId">;
export type RiderProfileOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    partner?: Prisma.SortOrder;
    coldChain?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    area?: Prisma.SortOrderInput | Prisma.SortOrder;
    onlineSince?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RiderProfileCountOrderByAggregateInput;
    _max?: Prisma.RiderProfileMaxOrderByAggregateInput;
    _min?: Prisma.RiderProfileMinOrderByAggregateInput;
};
export type RiderProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.RiderProfileScalarWhereWithAggregatesInput | Prisma.RiderProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.RiderProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RiderProfileScalarWhereWithAggregatesInput | Prisma.RiderProfileScalarWhereWithAggregatesInput[];
    userId?: Prisma.StringWithAggregatesFilter<"RiderProfile"> | string;
    partner?: Prisma.StringWithAggregatesFilter<"RiderProfile"> | string;
    coldChain?: Prisma.BoolWithAggregatesFilter<"RiderProfile"> | boolean;
    active?: Prisma.BoolWithAggregatesFilter<"RiderProfile"> | boolean;
    area?: Prisma.StringNullableWithAggregatesFilter<"RiderProfile"> | string | null;
    onlineSince?: Prisma.DateTimeNullableWithAggregatesFilter<"RiderProfile"> | Date | string | null;
};
export type RiderProfileCreateInput = {
    partner: string;
    coldChain?: boolean;
    active?: boolean;
    area?: string | null;
    onlineSince?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutRiderProfileInput;
};
export type RiderProfileUncheckedCreateInput = {
    userId: string;
    partner: string;
    coldChain?: boolean;
    active?: boolean;
    area?: string | null;
    onlineSince?: Date | string | null;
};
export type RiderProfileUpdateInput = {
    partner?: Prisma.StringFieldUpdateOperationsInput | string;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    onlineSince?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutRiderProfileNestedInput;
};
export type RiderProfileUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    partner?: Prisma.StringFieldUpdateOperationsInput | string;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    onlineSince?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RiderProfileCreateManyInput = {
    userId: string;
    partner: string;
    coldChain?: boolean;
    active?: boolean;
    area?: string | null;
    onlineSince?: Date | string | null;
};
export type RiderProfileUpdateManyMutationInput = {
    partner?: Prisma.StringFieldUpdateOperationsInput | string;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    onlineSince?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RiderProfileUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    partner?: Prisma.StringFieldUpdateOperationsInput | string;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    onlineSince?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RiderProfileNullableScalarRelationFilter = {
    is?: Prisma.RiderProfileWhereInput | null;
    isNot?: Prisma.RiderProfileWhereInput | null;
};
export type RiderProfileCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    partner?: Prisma.SortOrder;
    coldChain?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    onlineSince?: Prisma.SortOrder;
};
export type RiderProfileMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    partner?: Prisma.SortOrder;
    coldChain?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    onlineSince?: Prisma.SortOrder;
};
export type RiderProfileMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    partner?: Prisma.SortOrder;
    coldChain?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    onlineSince?: Prisma.SortOrder;
};
export type RiderProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RiderProfileCreateWithoutUserInput, Prisma.RiderProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.RiderProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.RiderProfileWhereUniqueInput;
};
export type RiderProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RiderProfileCreateWithoutUserInput, Prisma.RiderProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.RiderProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.RiderProfileWhereUniqueInput;
};
export type RiderProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RiderProfileCreateWithoutUserInput, Prisma.RiderProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.RiderProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.RiderProfileUpsertWithoutUserInput;
    disconnect?: Prisma.RiderProfileWhereInput | boolean;
    delete?: Prisma.RiderProfileWhereInput | boolean;
    connect?: Prisma.RiderProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RiderProfileUpdateToOneWithWhereWithoutUserInput, Prisma.RiderProfileUpdateWithoutUserInput>, Prisma.RiderProfileUncheckedUpdateWithoutUserInput>;
};
export type RiderProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RiderProfileCreateWithoutUserInput, Prisma.RiderProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.RiderProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.RiderProfileUpsertWithoutUserInput;
    disconnect?: Prisma.RiderProfileWhereInput | boolean;
    delete?: Prisma.RiderProfileWhereInput | boolean;
    connect?: Prisma.RiderProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RiderProfileUpdateToOneWithWhereWithoutUserInput, Prisma.RiderProfileUpdateWithoutUserInput>, Prisma.RiderProfileUncheckedUpdateWithoutUserInput>;
};
export type RiderProfileCreateWithoutUserInput = {
    partner: string;
    coldChain?: boolean;
    active?: boolean;
    area?: string | null;
    onlineSince?: Date | string | null;
};
export type RiderProfileUncheckedCreateWithoutUserInput = {
    partner: string;
    coldChain?: boolean;
    active?: boolean;
    area?: string | null;
    onlineSince?: Date | string | null;
};
export type RiderProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.RiderProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiderProfileCreateWithoutUserInput, Prisma.RiderProfileUncheckedCreateWithoutUserInput>;
};
export type RiderProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.RiderProfileUpdateWithoutUserInput, Prisma.RiderProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RiderProfileCreateWithoutUserInput, Prisma.RiderProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.RiderProfileWhereInput;
};
export type RiderProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.RiderProfileWhereInput;
    data: Prisma.XOR<Prisma.RiderProfileUpdateWithoutUserInput, Prisma.RiderProfileUncheckedUpdateWithoutUserInput>;
};
export type RiderProfileUpdateWithoutUserInput = {
    partner?: Prisma.StringFieldUpdateOperationsInput | string;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    onlineSince?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RiderProfileUncheckedUpdateWithoutUserInput = {
    partner?: Prisma.StringFieldUpdateOperationsInput | string;
    coldChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    onlineSince?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RiderProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    partner?: boolean;
    coldChain?: boolean;
    active?: boolean;
    area?: boolean;
    onlineSince?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riderProfile"]>;
export type RiderProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    partner?: boolean;
    coldChain?: boolean;
    active?: boolean;
    area?: boolean;
    onlineSince?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riderProfile"]>;
export type RiderProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    partner?: boolean;
    coldChain?: boolean;
    active?: boolean;
    area?: boolean;
    onlineSince?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riderProfile"]>;
export type RiderProfileSelectScalar = {
    userId?: boolean;
    partner?: boolean;
    coldChain?: boolean;
    active?: boolean;
    area?: boolean;
    onlineSince?: boolean;
};
export type RiderProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "partner" | "coldChain" | "active" | "area" | "onlineSince", ExtArgs["result"]["riderProfile"]>;
export type RiderProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RiderProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RiderProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $RiderProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RiderProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        partner: string;
        coldChain: boolean;
        active: boolean;
        area: string | null;
        onlineSince: Date | null;
    }, ExtArgs["result"]["riderProfile"]>;
    composites: {};
};
export type RiderProfileGetPayload<S extends boolean | null | undefined | RiderProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RiderProfilePayload, S>;
export type RiderProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RiderProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RiderProfileCountAggregateInputType | true;
};
export interface RiderProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RiderProfile'];
        meta: {
            name: 'RiderProfile';
        };
    };
    findUnique<T extends RiderProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, RiderProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RiderProfileClient<runtime.Types.Result.GetResult<Prisma.$RiderProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RiderProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RiderProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiderProfileClient<runtime.Types.Result.GetResult<Prisma.$RiderProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RiderProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, RiderProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__RiderProfileClient<runtime.Types.Result.GetResult<Prisma.$RiderProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RiderProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RiderProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiderProfileClient<runtime.Types.Result.GetResult<Prisma.$RiderProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RiderProfileFindManyArgs>(args?: Prisma.SelectSubset<T, RiderProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiderProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RiderProfileCreateArgs>(args: Prisma.SelectSubset<T, RiderProfileCreateArgs<ExtArgs>>): Prisma.Prisma__RiderProfileClient<runtime.Types.Result.GetResult<Prisma.$RiderProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RiderProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, RiderProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RiderProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RiderProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiderProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RiderProfileDeleteArgs>(args: Prisma.SelectSubset<T, RiderProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__RiderProfileClient<runtime.Types.Result.GetResult<Prisma.$RiderProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RiderProfileUpdateArgs>(args: Prisma.SelectSubset<T, RiderProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__RiderProfileClient<runtime.Types.Result.GetResult<Prisma.$RiderProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RiderProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, RiderProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RiderProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, RiderProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RiderProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RiderProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiderProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RiderProfileUpsertArgs>(args: Prisma.SelectSubset<T, RiderProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__RiderProfileClient<runtime.Types.Result.GetResult<Prisma.$RiderProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RiderProfileCountArgs>(args?: Prisma.Subset<T, RiderProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RiderProfileCountAggregateOutputType> : number>;
    aggregate<T extends RiderProfileAggregateArgs>(args: Prisma.Subset<T, RiderProfileAggregateArgs>): Prisma.PrismaPromise<GetRiderProfileAggregateType<T>>;
    groupBy<T extends RiderProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RiderProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: RiderProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RiderProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiderProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RiderProfileFieldRefs;
}
export interface Prisma__RiderProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RiderProfileFieldRefs {
    readonly userId: Prisma.FieldRef<"RiderProfile", 'String'>;
    readonly partner: Prisma.FieldRef<"RiderProfile", 'String'>;
    readonly coldChain: Prisma.FieldRef<"RiderProfile", 'Boolean'>;
    readonly active: Prisma.FieldRef<"RiderProfile", 'Boolean'>;
    readonly area: Prisma.FieldRef<"RiderProfile", 'String'>;
    readonly onlineSince: Prisma.FieldRef<"RiderProfile", 'DateTime'>;
}
export type RiderProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderProfileSelect<ExtArgs> | null;
    omit?: Prisma.RiderProfileOmit<ExtArgs> | null;
    include?: Prisma.RiderProfileInclude<ExtArgs> | null;
    where: Prisma.RiderProfileWhereUniqueInput;
};
export type RiderProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderProfileSelect<ExtArgs> | null;
    omit?: Prisma.RiderProfileOmit<ExtArgs> | null;
    include?: Prisma.RiderProfileInclude<ExtArgs> | null;
    where: Prisma.RiderProfileWhereUniqueInput;
};
export type RiderProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderProfileSelect<ExtArgs> | null;
    omit?: Prisma.RiderProfileOmit<ExtArgs> | null;
    include?: Prisma.RiderProfileInclude<ExtArgs> | null;
    where?: Prisma.RiderProfileWhereInput;
    orderBy?: Prisma.RiderProfileOrderByWithRelationInput | Prisma.RiderProfileOrderByWithRelationInput[];
    cursor?: Prisma.RiderProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiderProfileScalarFieldEnum | Prisma.RiderProfileScalarFieldEnum[];
};
export type RiderProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderProfileSelect<ExtArgs> | null;
    omit?: Prisma.RiderProfileOmit<ExtArgs> | null;
    include?: Prisma.RiderProfileInclude<ExtArgs> | null;
    where?: Prisma.RiderProfileWhereInput;
    orderBy?: Prisma.RiderProfileOrderByWithRelationInput | Prisma.RiderProfileOrderByWithRelationInput[];
    cursor?: Prisma.RiderProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiderProfileScalarFieldEnum | Prisma.RiderProfileScalarFieldEnum[];
};
export type RiderProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderProfileSelect<ExtArgs> | null;
    omit?: Prisma.RiderProfileOmit<ExtArgs> | null;
    include?: Prisma.RiderProfileInclude<ExtArgs> | null;
    where?: Prisma.RiderProfileWhereInput;
    orderBy?: Prisma.RiderProfileOrderByWithRelationInput | Prisma.RiderProfileOrderByWithRelationInput[];
    cursor?: Prisma.RiderProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiderProfileScalarFieldEnum | Prisma.RiderProfileScalarFieldEnum[];
};
export type RiderProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderProfileSelect<ExtArgs> | null;
    omit?: Prisma.RiderProfileOmit<ExtArgs> | null;
    include?: Prisma.RiderProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiderProfileCreateInput, Prisma.RiderProfileUncheckedCreateInput>;
};
export type RiderProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RiderProfileCreateManyInput | Prisma.RiderProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RiderProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiderProfileOmit<ExtArgs> | null;
    data: Prisma.RiderProfileCreateManyInput | Prisma.RiderProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RiderProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RiderProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderProfileSelect<ExtArgs> | null;
    omit?: Prisma.RiderProfileOmit<ExtArgs> | null;
    include?: Prisma.RiderProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiderProfileUpdateInput, Prisma.RiderProfileUncheckedUpdateInput>;
    where: Prisma.RiderProfileWhereUniqueInput;
};
export type RiderProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RiderProfileUpdateManyMutationInput, Prisma.RiderProfileUncheckedUpdateManyInput>;
    where?: Prisma.RiderProfileWhereInput;
    limit?: number;
};
export type RiderProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiderProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiderProfileUpdateManyMutationInput, Prisma.RiderProfileUncheckedUpdateManyInput>;
    where?: Prisma.RiderProfileWhereInput;
    limit?: number;
    include?: Prisma.RiderProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RiderProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderProfileSelect<ExtArgs> | null;
    omit?: Prisma.RiderProfileOmit<ExtArgs> | null;
    include?: Prisma.RiderProfileInclude<ExtArgs> | null;
    where: Prisma.RiderProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiderProfileCreateInput, Prisma.RiderProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RiderProfileUpdateInput, Prisma.RiderProfileUncheckedUpdateInput>;
};
export type RiderProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderProfileSelect<ExtArgs> | null;
    omit?: Prisma.RiderProfileOmit<ExtArgs> | null;
    include?: Prisma.RiderProfileInclude<ExtArgs> | null;
    where: Prisma.RiderProfileWhereUniqueInput;
};
export type RiderProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiderProfileWhereInput;
    limit?: number;
};
export type RiderProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderProfileSelect<ExtArgs> | null;
    omit?: Prisma.RiderProfileOmit<ExtArgs> | null;
    include?: Prisma.RiderProfileInclude<ExtArgs> | null;
};
