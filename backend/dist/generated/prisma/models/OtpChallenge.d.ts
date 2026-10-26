import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OtpChallengeModel = runtime.Types.Result.DefaultSelection<Prisma.$OtpChallengePayload>;
export type AggregateOtpChallenge = {
    _count: OtpChallengeCountAggregateOutputType | null;
    _avg: OtpChallengeAvgAggregateOutputType | null;
    _sum: OtpChallengeSumAggregateOutputType | null;
    _min: OtpChallengeMinAggregateOutputType | null;
    _max: OtpChallengeMaxAggregateOutputType | null;
};
export type OtpChallengeAvgAggregateOutputType = {
    attempts: number | null;
};
export type OtpChallengeSumAggregateOutputType = {
    attempts: number | null;
};
export type OtpChallengeMinAggregateOutputType = {
    id: string | null;
    phone: string | null;
    codeHash: string | null;
    expiresAt: Date | null;
    attempts: number | null;
    consumedAt: Date | null;
    createdAt: Date | null;
};
export type OtpChallengeMaxAggregateOutputType = {
    id: string | null;
    phone: string | null;
    codeHash: string | null;
    expiresAt: Date | null;
    attempts: number | null;
    consumedAt: Date | null;
    createdAt: Date | null;
};
export type OtpChallengeCountAggregateOutputType = {
    id: number;
    phone: number;
    codeHash: number;
    expiresAt: number;
    attempts: number;
    consumedAt: number;
    createdAt: number;
    _all: number;
};
export type OtpChallengeAvgAggregateInputType = {
    attempts?: true;
};
export type OtpChallengeSumAggregateInputType = {
    attempts?: true;
};
export type OtpChallengeMinAggregateInputType = {
    id?: true;
    phone?: true;
    codeHash?: true;
    expiresAt?: true;
    attempts?: true;
    consumedAt?: true;
    createdAt?: true;
};
export type OtpChallengeMaxAggregateInputType = {
    id?: true;
    phone?: true;
    codeHash?: true;
    expiresAt?: true;
    attempts?: true;
    consumedAt?: true;
    createdAt?: true;
};
export type OtpChallengeCountAggregateInputType = {
    id?: true;
    phone?: true;
    codeHash?: true;
    expiresAt?: true;
    attempts?: true;
    consumedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type OtpChallengeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpChallengeWhereInput;
    orderBy?: Prisma.OtpChallengeOrderByWithRelationInput | Prisma.OtpChallengeOrderByWithRelationInput[];
    cursor?: Prisma.OtpChallengeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OtpChallengeCountAggregateInputType;
    _avg?: OtpChallengeAvgAggregateInputType;
    _sum?: OtpChallengeSumAggregateInputType;
    _min?: OtpChallengeMinAggregateInputType;
    _max?: OtpChallengeMaxAggregateInputType;
};
export type GetOtpChallengeAggregateType<T extends OtpChallengeAggregateArgs> = {
    [P in keyof T & keyof AggregateOtpChallenge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOtpChallenge[P]> : Prisma.GetScalarType<T[P], AggregateOtpChallenge[P]>;
};
export type OtpChallengeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpChallengeWhereInput;
    orderBy?: Prisma.OtpChallengeOrderByWithAggregationInput | Prisma.OtpChallengeOrderByWithAggregationInput[];
    by: Prisma.OtpChallengeScalarFieldEnum[] | Prisma.OtpChallengeScalarFieldEnum;
    having?: Prisma.OtpChallengeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OtpChallengeCountAggregateInputType | true;
    _avg?: OtpChallengeAvgAggregateInputType;
    _sum?: OtpChallengeSumAggregateInputType;
    _min?: OtpChallengeMinAggregateInputType;
    _max?: OtpChallengeMaxAggregateInputType;
};
export type OtpChallengeGroupByOutputType = {
    id: string;
    phone: string;
    codeHash: string;
    expiresAt: Date;
    attempts: number;
    consumedAt: Date | null;
    createdAt: Date;
    _count: OtpChallengeCountAggregateOutputType | null;
    _avg: OtpChallengeAvgAggregateOutputType | null;
    _sum: OtpChallengeSumAggregateOutputType | null;
    _min: OtpChallengeMinAggregateOutputType | null;
    _max: OtpChallengeMaxAggregateOutputType | null;
};
export type GetOtpChallengeGroupByPayload<T extends OtpChallengeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OtpChallengeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OtpChallengeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OtpChallengeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OtpChallengeGroupByOutputType[P]>;
}>>;
export type OtpChallengeWhereInput = {
    AND?: Prisma.OtpChallengeWhereInput | Prisma.OtpChallengeWhereInput[];
    OR?: Prisma.OtpChallengeWhereInput[];
    NOT?: Prisma.OtpChallengeWhereInput | Prisma.OtpChallengeWhereInput[];
    id?: Prisma.StringFilter<"OtpChallenge"> | string;
    phone?: Prisma.StringFilter<"OtpChallenge"> | string;
    codeHash?: Prisma.StringFilter<"OtpChallenge"> | string;
    expiresAt?: Prisma.DateTimeFilter<"OtpChallenge"> | Date | string;
    attempts?: Prisma.IntFilter<"OtpChallenge"> | number;
    consumedAt?: Prisma.DateTimeNullableFilter<"OtpChallenge"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"OtpChallenge"> | Date | string;
};
export type OtpChallengeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OtpChallengeWhereInput | Prisma.OtpChallengeWhereInput[];
    OR?: Prisma.OtpChallengeWhereInput[];
    NOT?: Prisma.OtpChallengeWhereInput | Prisma.OtpChallengeWhereInput[];
    phone?: Prisma.StringFilter<"OtpChallenge"> | string;
    codeHash?: Prisma.StringFilter<"OtpChallenge"> | string;
    expiresAt?: Prisma.DateTimeFilter<"OtpChallenge"> | Date | string;
    attempts?: Prisma.IntFilter<"OtpChallenge"> | number;
    consumedAt?: Prisma.DateTimeNullableFilter<"OtpChallenge"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"OtpChallenge"> | Date | string;
}, "id">;
export type OtpChallengeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OtpChallengeCountOrderByAggregateInput;
    _avg?: Prisma.OtpChallengeAvgOrderByAggregateInput;
    _max?: Prisma.OtpChallengeMaxOrderByAggregateInput;
    _min?: Prisma.OtpChallengeMinOrderByAggregateInput;
    _sum?: Prisma.OtpChallengeSumOrderByAggregateInput;
};
export type OtpChallengeScalarWhereWithAggregatesInput = {
    AND?: Prisma.OtpChallengeScalarWhereWithAggregatesInput | Prisma.OtpChallengeScalarWhereWithAggregatesInput[];
    OR?: Prisma.OtpChallengeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OtpChallengeScalarWhereWithAggregatesInput | Prisma.OtpChallengeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OtpChallenge"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"OtpChallenge"> | string;
    codeHash?: Prisma.StringWithAggregatesFilter<"OtpChallenge"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"OtpChallenge"> | Date | string;
    attempts?: Prisma.IntWithAggregatesFilter<"OtpChallenge"> | number;
    consumedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"OtpChallenge"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OtpChallenge"> | Date | string;
};
export type OtpChallengeCreateInput = {
    id?: string;
    phone: string;
    codeHash: string;
    expiresAt: Date | string;
    attempts?: number;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type OtpChallengeUncheckedCreateInput = {
    id?: string;
    phone: string;
    codeHash: string;
    expiresAt: Date | string;
    attempts?: number;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type OtpChallengeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpChallengeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpChallengeCreateManyInput = {
    id?: string;
    phone: string;
    codeHash: string;
    expiresAt: Date | string;
    attempts?: number;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type OtpChallengeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpChallengeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpChallengeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpChallengeAvgOrderByAggregateInput = {
    attempts?: Prisma.SortOrder;
};
export type OtpChallengeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpChallengeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpChallengeSumOrderByAggregateInput = {
    attempts?: Prisma.SortOrder;
};
export type OtpChallengeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    codeHash?: boolean;
    expiresAt?: boolean;
    attempts?: boolean;
    consumedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["otpChallenge"]>;
export type OtpChallengeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    codeHash?: boolean;
    expiresAt?: boolean;
    attempts?: boolean;
    consumedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["otpChallenge"]>;
export type OtpChallengeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    codeHash?: boolean;
    expiresAt?: boolean;
    attempts?: boolean;
    consumedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["otpChallenge"]>;
export type OtpChallengeSelectScalar = {
    id?: boolean;
    phone?: boolean;
    codeHash?: boolean;
    expiresAt?: boolean;
    attempts?: boolean;
    consumedAt?: boolean;
    createdAt?: boolean;
};
export type OtpChallengeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "phone" | "codeHash" | "expiresAt" | "attempts" | "consumedAt" | "createdAt", ExtArgs["result"]["otpChallenge"]>;
export type $OtpChallengePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OtpChallenge";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        phone: string;
        codeHash: string;
        expiresAt: Date;
        attempts: number;
        consumedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["otpChallenge"]>;
    composites: {};
};
export type OtpChallengeGetPayload<S extends boolean | null | undefined | OtpChallengeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OtpChallengePayload, S>;
export type OtpChallengeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OtpChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OtpChallengeCountAggregateInputType | true;
};
export interface OtpChallengeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OtpChallenge'];
        meta: {
            name: 'OtpChallenge';
        };
    };
    findUnique<T extends OtpChallengeFindUniqueArgs>(args: Prisma.SelectSubset<T, OtpChallengeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OtpChallengeClient<runtime.Types.Result.GetResult<Prisma.$OtpChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OtpChallengeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OtpChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtpChallengeClient<runtime.Types.Result.GetResult<Prisma.$OtpChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OtpChallengeFindFirstArgs>(args?: Prisma.SelectSubset<T, OtpChallengeFindFirstArgs<ExtArgs>>): Prisma.Prisma__OtpChallengeClient<runtime.Types.Result.GetResult<Prisma.$OtpChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OtpChallengeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OtpChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtpChallengeClient<runtime.Types.Result.GetResult<Prisma.$OtpChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OtpChallengeFindManyArgs>(args?: Prisma.SelectSubset<T, OtpChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OtpChallengeCreateArgs>(args: Prisma.SelectSubset<T, OtpChallengeCreateArgs<ExtArgs>>): Prisma.Prisma__OtpChallengeClient<runtime.Types.Result.GetResult<Prisma.$OtpChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OtpChallengeCreateManyArgs>(args?: Prisma.SelectSubset<T, OtpChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OtpChallengeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OtpChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OtpChallengeDeleteArgs>(args: Prisma.SelectSubset<T, OtpChallengeDeleteArgs<ExtArgs>>): Prisma.Prisma__OtpChallengeClient<runtime.Types.Result.GetResult<Prisma.$OtpChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OtpChallengeUpdateArgs>(args: Prisma.SelectSubset<T, OtpChallengeUpdateArgs<ExtArgs>>): Prisma.Prisma__OtpChallengeClient<runtime.Types.Result.GetResult<Prisma.$OtpChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OtpChallengeDeleteManyArgs>(args?: Prisma.SelectSubset<T, OtpChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OtpChallengeUpdateManyArgs>(args: Prisma.SelectSubset<T, OtpChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OtpChallengeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OtpChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OtpChallengeUpsertArgs>(args: Prisma.SelectSubset<T, OtpChallengeUpsertArgs<ExtArgs>>): Prisma.Prisma__OtpChallengeClient<runtime.Types.Result.GetResult<Prisma.$OtpChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OtpChallengeCountArgs>(args?: Prisma.Subset<T, OtpChallengeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OtpChallengeCountAggregateOutputType> : number>;
    aggregate<T extends OtpChallengeAggregateArgs>(args: Prisma.Subset<T, OtpChallengeAggregateArgs>): Prisma.PrismaPromise<GetOtpChallengeAggregateType<T>>;
    groupBy<T extends OtpChallengeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OtpChallengeGroupByArgs['orderBy'];
    } : {
        orderBy?: OtpChallengeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OtpChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OtpChallengeFieldRefs;
}
export interface Prisma__OtpChallengeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OtpChallengeFieldRefs {
    readonly id: Prisma.FieldRef<"OtpChallenge", 'String'>;
    readonly phone: Prisma.FieldRef<"OtpChallenge", 'String'>;
    readonly codeHash: Prisma.FieldRef<"OtpChallenge", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"OtpChallenge", 'DateTime'>;
    readonly attempts: Prisma.FieldRef<"OtpChallenge", 'Int'>;
    readonly consumedAt: Prisma.FieldRef<"OtpChallenge", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"OtpChallenge", 'DateTime'>;
}
export type OtpChallengeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpChallengeSelect<ExtArgs> | null;
    omit?: Prisma.OtpChallengeOmit<ExtArgs> | null;
    where: Prisma.OtpChallengeWhereUniqueInput;
};
export type OtpChallengeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpChallengeSelect<ExtArgs> | null;
    omit?: Prisma.OtpChallengeOmit<ExtArgs> | null;
    where: Prisma.OtpChallengeWhereUniqueInput;
};
export type OtpChallengeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpChallengeSelect<ExtArgs> | null;
    omit?: Prisma.OtpChallengeOmit<ExtArgs> | null;
    where?: Prisma.OtpChallengeWhereInput;
    orderBy?: Prisma.OtpChallengeOrderByWithRelationInput | Prisma.OtpChallengeOrderByWithRelationInput[];
    cursor?: Prisma.OtpChallengeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpChallengeScalarFieldEnum | Prisma.OtpChallengeScalarFieldEnum[];
};
export type OtpChallengeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpChallengeSelect<ExtArgs> | null;
    omit?: Prisma.OtpChallengeOmit<ExtArgs> | null;
    where?: Prisma.OtpChallengeWhereInput;
    orderBy?: Prisma.OtpChallengeOrderByWithRelationInput | Prisma.OtpChallengeOrderByWithRelationInput[];
    cursor?: Prisma.OtpChallengeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpChallengeScalarFieldEnum | Prisma.OtpChallengeScalarFieldEnum[];
};
export type OtpChallengeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpChallengeSelect<ExtArgs> | null;
    omit?: Prisma.OtpChallengeOmit<ExtArgs> | null;
    where?: Prisma.OtpChallengeWhereInput;
    orderBy?: Prisma.OtpChallengeOrderByWithRelationInput | Prisma.OtpChallengeOrderByWithRelationInput[];
    cursor?: Prisma.OtpChallengeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpChallengeScalarFieldEnum | Prisma.OtpChallengeScalarFieldEnum[];
};
export type OtpChallengeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpChallengeSelect<ExtArgs> | null;
    omit?: Prisma.OtpChallengeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpChallengeCreateInput, Prisma.OtpChallengeUncheckedCreateInput>;
};
export type OtpChallengeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OtpChallengeCreateManyInput | Prisma.OtpChallengeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OtpChallengeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpChallengeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OtpChallengeOmit<ExtArgs> | null;
    data: Prisma.OtpChallengeCreateManyInput | Prisma.OtpChallengeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OtpChallengeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpChallengeSelect<ExtArgs> | null;
    omit?: Prisma.OtpChallengeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpChallengeUpdateInput, Prisma.OtpChallengeUncheckedUpdateInput>;
    where: Prisma.OtpChallengeWhereUniqueInput;
};
export type OtpChallengeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OtpChallengeUpdateManyMutationInput, Prisma.OtpChallengeUncheckedUpdateManyInput>;
    where?: Prisma.OtpChallengeWhereInput;
    limit?: number;
};
export type OtpChallengeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpChallengeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OtpChallengeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpChallengeUpdateManyMutationInput, Prisma.OtpChallengeUncheckedUpdateManyInput>;
    where?: Prisma.OtpChallengeWhereInput;
    limit?: number;
};
export type OtpChallengeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpChallengeSelect<ExtArgs> | null;
    omit?: Prisma.OtpChallengeOmit<ExtArgs> | null;
    where: Prisma.OtpChallengeWhereUniqueInput;
    create: Prisma.XOR<Prisma.OtpChallengeCreateInput, Prisma.OtpChallengeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OtpChallengeUpdateInput, Prisma.OtpChallengeUncheckedUpdateInput>;
};
export type OtpChallengeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpChallengeSelect<ExtArgs> | null;
    omit?: Prisma.OtpChallengeOmit<ExtArgs> | null;
    where: Prisma.OtpChallengeWhereUniqueInput;
};
export type OtpChallengeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpChallengeWhereInput;
    limit?: number;
};
export type OtpChallengeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpChallengeSelect<ExtArgs> | null;
    omit?: Prisma.OtpChallengeOmit<ExtArgs> | null;
};
