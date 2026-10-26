import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MfaRecoveryCodeModel = runtime.Types.Result.DefaultSelection<Prisma.$MfaRecoveryCodePayload>;
export type AggregateMfaRecoveryCode = {
    _count: MfaRecoveryCodeCountAggregateOutputType | null;
    _min: MfaRecoveryCodeMinAggregateOutputType | null;
    _max: MfaRecoveryCodeMaxAggregateOutputType | null;
};
export type MfaRecoveryCodeMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    codeHash: string | null;
    usedAt: Date | null;
    createdAt: Date | null;
};
export type MfaRecoveryCodeMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    codeHash: string | null;
    usedAt: Date | null;
    createdAt: Date | null;
};
export type MfaRecoveryCodeCountAggregateOutputType = {
    id: number;
    userId: number;
    codeHash: number;
    usedAt: number;
    createdAt: number;
    _all: number;
};
export type MfaRecoveryCodeMinAggregateInputType = {
    id?: true;
    userId?: true;
    codeHash?: true;
    usedAt?: true;
    createdAt?: true;
};
export type MfaRecoveryCodeMaxAggregateInputType = {
    id?: true;
    userId?: true;
    codeHash?: true;
    usedAt?: true;
    createdAt?: true;
};
export type MfaRecoveryCodeCountAggregateInputType = {
    id?: true;
    userId?: true;
    codeHash?: true;
    usedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type MfaRecoveryCodeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaRecoveryCodeWhereInput;
    orderBy?: Prisma.MfaRecoveryCodeOrderByWithRelationInput | Prisma.MfaRecoveryCodeOrderByWithRelationInput[];
    cursor?: Prisma.MfaRecoveryCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MfaRecoveryCodeCountAggregateInputType;
    _min?: MfaRecoveryCodeMinAggregateInputType;
    _max?: MfaRecoveryCodeMaxAggregateInputType;
};
export type GetMfaRecoveryCodeAggregateType<T extends MfaRecoveryCodeAggregateArgs> = {
    [P in keyof T & keyof AggregateMfaRecoveryCode]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMfaRecoveryCode[P]> : Prisma.GetScalarType<T[P], AggregateMfaRecoveryCode[P]>;
};
export type MfaRecoveryCodeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaRecoveryCodeWhereInput;
    orderBy?: Prisma.MfaRecoveryCodeOrderByWithAggregationInput | Prisma.MfaRecoveryCodeOrderByWithAggregationInput[];
    by: Prisma.MfaRecoveryCodeScalarFieldEnum[] | Prisma.MfaRecoveryCodeScalarFieldEnum;
    having?: Prisma.MfaRecoveryCodeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MfaRecoveryCodeCountAggregateInputType | true;
    _min?: MfaRecoveryCodeMinAggregateInputType;
    _max?: MfaRecoveryCodeMaxAggregateInputType;
};
export type MfaRecoveryCodeGroupByOutputType = {
    id: string;
    userId: string;
    codeHash: string;
    usedAt: Date | null;
    createdAt: Date;
    _count: MfaRecoveryCodeCountAggregateOutputType | null;
    _min: MfaRecoveryCodeMinAggregateOutputType | null;
    _max: MfaRecoveryCodeMaxAggregateOutputType | null;
};
export type GetMfaRecoveryCodeGroupByPayload<T extends MfaRecoveryCodeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MfaRecoveryCodeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MfaRecoveryCodeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MfaRecoveryCodeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MfaRecoveryCodeGroupByOutputType[P]>;
}>>;
export type MfaRecoveryCodeWhereInput = {
    AND?: Prisma.MfaRecoveryCodeWhereInput | Prisma.MfaRecoveryCodeWhereInput[];
    OR?: Prisma.MfaRecoveryCodeWhereInput[];
    NOT?: Prisma.MfaRecoveryCodeWhereInput | Prisma.MfaRecoveryCodeWhereInput[];
    id?: Prisma.StringFilter<"MfaRecoveryCode"> | string;
    userId?: Prisma.StringFilter<"MfaRecoveryCode"> | string;
    codeHash?: Prisma.StringFilter<"MfaRecoveryCode"> | string;
    usedAt?: Prisma.DateTimeNullableFilter<"MfaRecoveryCode"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MfaRecoveryCode"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type MfaRecoveryCodeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type MfaRecoveryCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MfaRecoveryCodeWhereInput | Prisma.MfaRecoveryCodeWhereInput[];
    OR?: Prisma.MfaRecoveryCodeWhereInput[];
    NOT?: Prisma.MfaRecoveryCodeWhereInput | Prisma.MfaRecoveryCodeWhereInput[];
    userId?: Prisma.StringFilter<"MfaRecoveryCode"> | string;
    codeHash?: Prisma.StringFilter<"MfaRecoveryCode"> | string;
    usedAt?: Prisma.DateTimeNullableFilter<"MfaRecoveryCode"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MfaRecoveryCode"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type MfaRecoveryCodeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MfaRecoveryCodeCountOrderByAggregateInput;
    _max?: Prisma.MfaRecoveryCodeMaxOrderByAggregateInput;
    _min?: Prisma.MfaRecoveryCodeMinOrderByAggregateInput;
};
export type MfaRecoveryCodeScalarWhereWithAggregatesInput = {
    AND?: Prisma.MfaRecoveryCodeScalarWhereWithAggregatesInput | Prisma.MfaRecoveryCodeScalarWhereWithAggregatesInput[];
    OR?: Prisma.MfaRecoveryCodeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MfaRecoveryCodeScalarWhereWithAggregatesInput | Prisma.MfaRecoveryCodeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MfaRecoveryCode"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"MfaRecoveryCode"> | string;
    codeHash?: Prisma.StringWithAggregatesFilter<"MfaRecoveryCode"> | string;
    usedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MfaRecoveryCode"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MfaRecoveryCode"> | Date | string;
};
export type MfaRecoveryCodeCreateInput = {
    id?: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRecoveryCodesInput;
};
export type MfaRecoveryCodeUncheckedCreateInput = {
    id?: string;
    userId: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaRecoveryCodeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRecoveryCodesNestedInput;
};
export type MfaRecoveryCodeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaRecoveryCodeCreateManyInput = {
    id?: string;
    userId: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaRecoveryCodeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaRecoveryCodeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaRecoveryCodeListRelationFilter = {
    every?: Prisma.MfaRecoveryCodeWhereInput;
    some?: Prisma.MfaRecoveryCodeWhereInput;
    none?: Prisma.MfaRecoveryCodeWhereInput;
};
export type MfaRecoveryCodeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MfaRecoveryCodeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MfaRecoveryCodeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MfaRecoveryCodeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MfaRecoveryCodeCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MfaRecoveryCodeCreateWithoutUserInput, Prisma.MfaRecoveryCodeUncheckedCreateWithoutUserInput> | Prisma.MfaRecoveryCodeCreateWithoutUserInput[] | Prisma.MfaRecoveryCodeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MfaRecoveryCodeCreateOrConnectWithoutUserInput | Prisma.MfaRecoveryCodeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MfaRecoveryCodeCreateManyUserInputEnvelope;
    connect?: Prisma.MfaRecoveryCodeWhereUniqueInput | Prisma.MfaRecoveryCodeWhereUniqueInput[];
};
export type MfaRecoveryCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MfaRecoveryCodeCreateWithoutUserInput, Prisma.MfaRecoveryCodeUncheckedCreateWithoutUserInput> | Prisma.MfaRecoveryCodeCreateWithoutUserInput[] | Prisma.MfaRecoveryCodeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MfaRecoveryCodeCreateOrConnectWithoutUserInput | Prisma.MfaRecoveryCodeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MfaRecoveryCodeCreateManyUserInputEnvelope;
    connect?: Prisma.MfaRecoveryCodeWhereUniqueInput | Prisma.MfaRecoveryCodeWhereUniqueInput[];
};
export type MfaRecoveryCodeUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MfaRecoveryCodeCreateWithoutUserInput, Prisma.MfaRecoveryCodeUncheckedCreateWithoutUserInput> | Prisma.MfaRecoveryCodeCreateWithoutUserInput[] | Prisma.MfaRecoveryCodeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MfaRecoveryCodeCreateOrConnectWithoutUserInput | Prisma.MfaRecoveryCodeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MfaRecoveryCodeUpsertWithWhereUniqueWithoutUserInput | Prisma.MfaRecoveryCodeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MfaRecoveryCodeCreateManyUserInputEnvelope;
    set?: Prisma.MfaRecoveryCodeWhereUniqueInput | Prisma.MfaRecoveryCodeWhereUniqueInput[];
    disconnect?: Prisma.MfaRecoveryCodeWhereUniqueInput | Prisma.MfaRecoveryCodeWhereUniqueInput[];
    delete?: Prisma.MfaRecoveryCodeWhereUniqueInput | Prisma.MfaRecoveryCodeWhereUniqueInput[];
    connect?: Prisma.MfaRecoveryCodeWhereUniqueInput | Prisma.MfaRecoveryCodeWhereUniqueInput[];
    update?: Prisma.MfaRecoveryCodeUpdateWithWhereUniqueWithoutUserInput | Prisma.MfaRecoveryCodeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MfaRecoveryCodeUpdateManyWithWhereWithoutUserInput | Prisma.MfaRecoveryCodeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MfaRecoveryCodeScalarWhereInput | Prisma.MfaRecoveryCodeScalarWhereInput[];
};
export type MfaRecoveryCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MfaRecoveryCodeCreateWithoutUserInput, Prisma.MfaRecoveryCodeUncheckedCreateWithoutUserInput> | Prisma.MfaRecoveryCodeCreateWithoutUserInput[] | Prisma.MfaRecoveryCodeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MfaRecoveryCodeCreateOrConnectWithoutUserInput | Prisma.MfaRecoveryCodeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MfaRecoveryCodeUpsertWithWhereUniqueWithoutUserInput | Prisma.MfaRecoveryCodeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MfaRecoveryCodeCreateManyUserInputEnvelope;
    set?: Prisma.MfaRecoveryCodeWhereUniqueInput | Prisma.MfaRecoveryCodeWhereUniqueInput[];
    disconnect?: Prisma.MfaRecoveryCodeWhereUniqueInput | Prisma.MfaRecoveryCodeWhereUniqueInput[];
    delete?: Prisma.MfaRecoveryCodeWhereUniqueInput | Prisma.MfaRecoveryCodeWhereUniqueInput[];
    connect?: Prisma.MfaRecoveryCodeWhereUniqueInput | Prisma.MfaRecoveryCodeWhereUniqueInput[];
    update?: Prisma.MfaRecoveryCodeUpdateWithWhereUniqueWithoutUserInput | Prisma.MfaRecoveryCodeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MfaRecoveryCodeUpdateManyWithWhereWithoutUserInput | Prisma.MfaRecoveryCodeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MfaRecoveryCodeScalarWhereInput | Prisma.MfaRecoveryCodeScalarWhereInput[];
};
export type MfaRecoveryCodeCreateWithoutUserInput = {
    id?: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaRecoveryCodeUncheckedCreateWithoutUserInput = {
    id?: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaRecoveryCodeCreateOrConnectWithoutUserInput = {
    where: Prisma.MfaRecoveryCodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.MfaRecoveryCodeCreateWithoutUserInput, Prisma.MfaRecoveryCodeUncheckedCreateWithoutUserInput>;
};
export type MfaRecoveryCodeCreateManyUserInputEnvelope = {
    data: Prisma.MfaRecoveryCodeCreateManyUserInput | Prisma.MfaRecoveryCodeCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MfaRecoveryCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MfaRecoveryCodeWhereUniqueInput;
    update: Prisma.XOR<Prisma.MfaRecoveryCodeUpdateWithoutUserInput, Prisma.MfaRecoveryCodeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MfaRecoveryCodeCreateWithoutUserInput, Prisma.MfaRecoveryCodeUncheckedCreateWithoutUserInput>;
};
export type MfaRecoveryCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MfaRecoveryCodeWhereUniqueInput;
    data: Prisma.XOR<Prisma.MfaRecoveryCodeUpdateWithoutUserInput, Prisma.MfaRecoveryCodeUncheckedUpdateWithoutUserInput>;
};
export type MfaRecoveryCodeUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MfaRecoveryCodeScalarWhereInput;
    data: Prisma.XOR<Prisma.MfaRecoveryCodeUpdateManyMutationInput, Prisma.MfaRecoveryCodeUncheckedUpdateManyWithoutUserInput>;
};
export type MfaRecoveryCodeScalarWhereInput = {
    AND?: Prisma.MfaRecoveryCodeScalarWhereInput | Prisma.MfaRecoveryCodeScalarWhereInput[];
    OR?: Prisma.MfaRecoveryCodeScalarWhereInput[];
    NOT?: Prisma.MfaRecoveryCodeScalarWhereInput | Prisma.MfaRecoveryCodeScalarWhereInput[];
    id?: Prisma.StringFilter<"MfaRecoveryCode"> | string;
    userId?: Prisma.StringFilter<"MfaRecoveryCode"> | string;
    codeHash?: Prisma.StringFilter<"MfaRecoveryCode"> | string;
    usedAt?: Prisma.DateTimeNullableFilter<"MfaRecoveryCode"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MfaRecoveryCode"> | Date | string;
};
export type MfaRecoveryCodeCreateManyUserInput = {
    id?: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaRecoveryCodeUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaRecoveryCodeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaRecoveryCodeUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaRecoveryCodeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    codeHash?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfaRecoveryCode"]>;
export type MfaRecoveryCodeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    codeHash?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfaRecoveryCode"]>;
export type MfaRecoveryCodeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    codeHash?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfaRecoveryCode"]>;
export type MfaRecoveryCodeSelectScalar = {
    id?: boolean;
    userId?: boolean;
    codeHash?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
};
export type MfaRecoveryCodeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "codeHash" | "usedAt" | "createdAt", ExtArgs["result"]["mfaRecoveryCode"]>;
export type MfaRecoveryCodeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MfaRecoveryCodeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MfaRecoveryCodeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MfaRecoveryCodePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MfaRecoveryCode";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        codeHash: string;
        usedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["mfaRecoveryCode"]>;
    composites: {};
};
export type MfaRecoveryCodeGetPayload<S extends boolean | null | undefined | MfaRecoveryCodeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MfaRecoveryCodePayload, S>;
export type MfaRecoveryCodeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MfaRecoveryCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MfaRecoveryCodeCountAggregateInputType | true;
};
export interface MfaRecoveryCodeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MfaRecoveryCode'];
        meta: {
            name: 'MfaRecoveryCode';
        };
    };
    findUnique<T extends MfaRecoveryCodeFindUniqueArgs>(args: Prisma.SelectSubset<T, MfaRecoveryCodeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MfaRecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaRecoveryCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MfaRecoveryCodeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MfaRecoveryCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MfaRecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaRecoveryCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MfaRecoveryCodeFindFirstArgs>(args?: Prisma.SelectSubset<T, MfaRecoveryCodeFindFirstArgs<ExtArgs>>): Prisma.Prisma__MfaRecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaRecoveryCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MfaRecoveryCodeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MfaRecoveryCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MfaRecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaRecoveryCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MfaRecoveryCodeFindManyArgs>(args?: Prisma.SelectSubset<T, MfaRecoveryCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaRecoveryCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MfaRecoveryCodeCreateArgs>(args: Prisma.SelectSubset<T, MfaRecoveryCodeCreateArgs<ExtArgs>>): Prisma.Prisma__MfaRecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaRecoveryCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MfaRecoveryCodeCreateManyArgs>(args?: Prisma.SelectSubset<T, MfaRecoveryCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MfaRecoveryCodeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MfaRecoveryCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaRecoveryCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MfaRecoveryCodeDeleteArgs>(args: Prisma.SelectSubset<T, MfaRecoveryCodeDeleteArgs<ExtArgs>>): Prisma.Prisma__MfaRecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaRecoveryCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MfaRecoveryCodeUpdateArgs>(args: Prisma.SelectSubset<T, MfaRecoveryCodeUpdateArgs<ExtArgs>>): Prisma.Prisma__MfaRecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaRecoveryCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MfaRecoveryCodeDeleteManyArgs>(args?: Prisma.SelectSubset<T, MfaRecoveryCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MfaRecoveryCodeUpdateManyArgs>(args: Prisma.SelectSubset<T, MfaRecoveryCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MfaRecoveryCodeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MfaRecoveryCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaRecoveryCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MfaRecoveryCodeUpsertArgs>(args: Prisma.SelectSubset<T, MfaRecoveryCodeUpsertArgs<ExtArgs>>): Prisma.Prisma__MfaRecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaRecoveryCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MfaRecoveryCodeCountArgs>(args?: Prisma.Subset<T, MfaRecoveryCodeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MfaRecoveryCodeCountAggregateOutputType> : number>;
    aggregate<T extends MfaRecoveryCodeAggregateArgs>(args: Prisma.Subset<T, MfaRecoveryCodeAggregateArgs>): Prisma.PrismaPromise<GetMfaRecoveryCodeAggregateType<T>>;
    groupBy<T extends MfaRecoveryCodeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MfaRecoveryCodeGroupByArgs['orderBy'];
    } : {
        orderBy?: MfaRecoveryCodeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MfaRecoveryCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMfaRecoveryCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MfaRecoveryCodeFieldRefs;
}
export interface Prisma__MfaRecoveryCodeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MfaRecoveryCodeFieldRefs {
    readonly id: Prisma.FieldRef<"MfaRecoveryCode", 'String'>;
    readonly userId: Prisma.FieldRef<"MfaRecoveryCode", 'String'>;
    readonly codeHash: Prisma.FieldRef<"MfaRecoveryCode", 'String'>;
    readonly usedAt: Prisma.FieldRef<"MfaRecoveryCode", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"MfaRecoveryCode", 'DateTime'>;
}
export type MfaRecoveryCodeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaRecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaRecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaRecoveryCodeInclude<ExtArgs> | null;
    where: Prisma.MfaRecoveryCodeWhereUniqueInput;
};
export type MfaRecoveryCodeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaRecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaRecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaRecoveryCodeInclude<ExtArgs> | null;
    where: Prisma.MfaRecoveryCodeWhereUniqueInput;
};
export type MfaRecoveryCodeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaRecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaRecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaRecoveryCodeInclude<ExtArgs> | null;
    where?: Prisma.MfaRecoveryCodeWhereInput;
    orderBy?: Prisma.MfaRecoveryCodeOrderByWithRelationInput | Prisma.MfaRecoveryCodeOrderByWithRelationInput[];
    cursor?: Prisma.MfaRecoveryCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaRecoveryCodeScalarFieldEnum | Prisma.MfaRecoveryCodeScalarFieldEnum[];
};
export type MfaRecoveryCodeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaRecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaRecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaRecoveryCodeInclude<ExtArgs> | null;
    where?: Prisma.MfaRecoveryCodeWhereInput;
    orderBy?: Prisma.MfaRecoveryCodeOrderByWithRelationInput | Prisma.MfaRecoveryCodeOrderByWithRelationInput[];
    cursor?: Prisma.MfaRecoveryCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaRecoveryCodeScalarFieldEnum | Prisma.MfaRecoveryCodeScalarFieldEnum[];
};
export type MfaRecoveryCodeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaRecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaRecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaRecoveryCodeInclude<ExtArgs> | null;
    where?: Prisma.MfaRecoveryCodeWhereInput;
    orderBy?: Prisma.MfaRecoveryCodeOrderByWithRelationInput | Prisma.MfaRecoveryCodeOrderByWithRelationInput[];
    cursor?: Prisma.MfaRecoveryCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaRecoveryCodeScalarFieldEnum | Prisma.MfaRecoveryCodeScalarFieldEnum[];
};
export type MfaRecoveryCodeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaRecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaRecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaRecoveryCodeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaRecoveryCodeCreateInput, Prisma.MfaRecoveryCodeUncheckedCreateInput>;
};
export type MfaRecoveryCodeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MfaRecoveryCodeCreateManyInput | Prisma.MfaRecoveryCodeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MfaRecoveryCodeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaRecoveryCodeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MfaRecoveryCodeOmit<ExtArgs> | null;
    data: Prisma.MfaRecoveryCodeCreateManyInput | Prisma.MfaRecoveryCodeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MfaRecoveryCodeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MfaRecoveryCodeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaRecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaRecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaRecoveryCodeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaRecoveryCodeUpdateInput, Prisma.MfaRecoveryCodeUncheckedUpdateInput>;
    where: Prisma.MfaRecoveryCodeWhereUniqueInput;
};
export type MfaRecoveryCodeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MfaRecoveryCodeUpdateManyMutationInput, Prisma.MfaRecoveryCodeUncheckedUpdateManyInput>;
    where?: Prisma.MfaRecoveryCodeWhereInput;
    limit?: number;
};
export type MfaRecoveryCodeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaRecoveryCodeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MfaRecoveryCodeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaRecoveryCodeUpdateManyMutationInput, Prisma.MfaRecoveryCodeUncheckedUpdateManyInput>;
    where?: Prisma.MfaRecoveryCodeWhereInput;
    limit?: number;
    include?: Prisma.MfaRecoveryCodeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MfaRecoveryCodeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaRecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaRecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaRecoveryCodeInclude<ExtArgs> | null;
    where: Prisma.MfaRecoveryCodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.MfaRecoveryCodeCreateInput, Prisma.MfaRecoveryCodeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MfaRecoveryCodeUpdateInput, Prisma.MfaRecoveryCodeUncheckedUpdateInput>;
};
export type MfaRecoveryCodeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaRecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaRecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaRecoveryCodeInclude<ExtArgs> | null;
    where: Prisma.MfaRecoveryCodeWhereUniqueInput;
};
export type MfaRecoveryCodeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaRecoveryCodeWhereInput;
    limit?: number;
};
export type MfaRecoveryCodeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaRecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaRecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaRecoveryCodeInclude<ExtArgs> | null;
};
