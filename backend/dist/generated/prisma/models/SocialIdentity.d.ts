import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SocialIdentityModel = runtime.Types.Result.DefaultSelection<Prisma.$SocialIdentityPayload>;
export type AggregateSocialIdentity = {
    _count: SocialIdentityCountAggregateOutputType | null;
    _min: SocialIdentityMinAggregateOutputType | null;
    _max: SocialIdentityMaxAggregateOutputType | null;
};
export type SocialIdentityMinAggregateOutputType = {
    id: string | null;
    provider: $Enums.SocialProvider | null;
    subject: string | null;
    email: string | null;
    userId: string | null;
    createdAt: Date | null;
};
export type SocialIdentityMaxAggregateOutputType = {
    id: string | null;
    provider: $Enums.SocialProvider | null;
    subject: string | null;
    email: string | null;
    userId: string | null;
    createdAt: Date | null;
};
export type SocialIdentityCountAggregateOutputType = {
    id: number;
    provider: number;
    subject: number;
    email: number;
    userId: number;
    createdAt: number;
    _all: number;
};
export type SocialIdentityMinAggregateInputType = {
    id?: true;
    provider?: true;
    subject?: true;
    email?: true;
    userId?: true;
    createdAt?: true;
};
export type SocialIdentityMaxAggregateInputType = {
    id?: true;
    provider?: true;
    subject?: true;
    email?: true;
    userId?: true;
    createdAt?: true;
};
export type SocialIdentityCountAggregateInputType = {
    id?: true;
    provider?: true;
    subject?: true;
    email?: true;
    userId?: true;
    createdAt?: true;
    _all?: true;
};
export type SocialIdentityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SocialIdentityWhereInput;
    orderBy?: Prisma.SocialIdentityOrderByWithRelationInput | Prisma.SocialIdentityOrderByWithRelationInput[];
    cursor?: Prisma.SocialIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SocialIdentityCountAggregateInputType;
    _min?: SocialIdentityMinAggregateInputType;
    _max?: SocialIdentityMaxAggregateInputType;
};
export type GetSocialIdentityAggregateType<T extends SocialIdentityAggregateArgs> = {
    [P in keyof T & keyof AggregateSocialIdentity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSocialIdentity[P]> : Prisma.GetScalarType<T[P], AggregateSocialIdentity[P]>;
};
export type SocialIdentityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SocialIdentityWhereInput;
    orderBy?: Prisma.SocialIdentityOrderByWithAggregationInput | Prisma.SocialIdentityOrderByWithAggregationInput[];
    by: Prisma.SocialIdentityScalarFieldEnum[] | Prisma.SocialIdentityScalarFieldEnum;
    having?: Prisma.SocialIdentityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SocialIdentityCountAggregateInputType | true;
    _min?: SocialIdentityMinAggregateInputType;
    _max?: SocialIdentityMaxAggregateInputType;
};
export type SocialIdentityGroupByOutputType = {
    id: string;
    provider: $Enums.SocialProvider;
    subject: string;
    email: string | null;
    userId: string;
    createdAt: Date;
    _count: SocialIdentityCountAggregateOutputType | null;
    _min: SocialIdentityMinAggregateOutputType | null;
    _max: SocialIdentityMaxAggregateOutputType | null;
};
export type GetSocialIdentityGroupByPayload<T extends SocialIdentityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SocialIdentityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SocialIdentityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SocialIdentityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SocialIdentityGroupByOutputType[P]>;
}>>;
export type SocialIdentityWhereInput = {
    AND?: Prisma.SocialIdentityWhereInput | Prisma.SocialIdentityWhereInput[];
    OR?: Prisma.SocialIdentityWhereInput[];
    NOT?: Prisma.SocialIdentityWhereInput | Prisma.SocialIdentityWhereInput[];
    id?: Prisma.StringFilter<"SocialIdentity"> | string;
    provider?: Prisma.EnumSocialProviderFilter<"SocialIdentity"> | $Enums.SocialProvider;
    subject?: Prisma.StringFilter<"SocialIdentity"> | string;
    email?: Prisma.StringNullableFilter<"SocialIdentity"> | string | null;
    userId?: Prisma.StringFilter<"SocialIdentity"> | string;
    createdAt?: Prisma.DateTimeFilter<"SocialIdentity"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type SocialIdentityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type SocialIdentityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    provider_subject?: Prisma.SocialIdentityProviderSubjectCompoundUniqueInput;
    AND?: Prisma.SocialIdentityWhereInput | Prisma.SocialIdentityWhereInput[];
    OR?: Prisma.SocialIdentityWhereInput[];
    NOT?: Prisma.SocialIdentityWhereInput | Prisma.SocialIdentityWhereInput[];
    provider?: Prisma.EnumSocialProviderFilter<"SocialIdentity"> | $Enums.SocialProvider;
    subject?: Prisma.StringFilter<"SocialIdentity"> | string;
    email?: Prisma.StringNullableFilter<"SocialIdentity"> | string | null;
    userId?: Prisma.StringFilter<"SocialIdentity"> | string;
    createdAt?: Prisma.DateTimeFilter<"SocialIdentity"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "provider_subject">;
export type SocialIdentityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SocialIdentityCountOrderByAggregateInput;
    _max?: Prisma.SocialIdentityMaxOrderByAggregateInput;
    _min?: Prisma.SocialIdentityMinOrderByAggregateInput;
};
export type SocialIdentityScalarWhereWithAggregatesInput = {
    AND?: Prisma.SocialIdentityScalarWhereWithAggregatesInput | Prisma.SocialIdentityScalarWhereWithAggregatesInput[];
    OR?: Prisma.SocialIdentityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SocialIdentityScalarWhereWithAggregatesInput | Prisma.SocialIdentityScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SocialIdentity"> | string;
    provider?: Prisma.EnumSocialProviderWithAggregatesFilter<"SocialIdentity"> | $Enums.SocialProvider;
    subject?: Prisma.StringWithAggregatesFilter<"SocialIdentity"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"SocialIdentity"> | string | null;
    userId?: Prisma.StringWithAggregatesFilter<"SocialIdentity"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SocialIdentity"> | Date | string;
};
export type SocialIdentityCreateInput = {
    id?: string;
    provider: $Enums.SocialProvider;
    subject: string;
    email?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSocialIdentitiesInput;
};
export type SocialIdentityUncheckedCreateInput = {
    id?: string;
    provider: $Enums.SocialProvider;
    subject: string;
    email?: string | null;
    userId: string;
    createdAt?: Date | string;
};
export type SocialIdentityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSocialIdentitiesNestedInput;
};
export type SocialIdentityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SocialIdentityCreateManyInput = {
    id?: string;
    provider: $Enums.SocialProvider;
    subject: string;
    email?: string | null;
    userId: string;
    createdAt?: Date | string;
};
export type SocialIdentityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SocialIdentityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SocialIdentityListRelationFilter = {
    every?: Prisma.SocialIdentityWhereInput;
    some?: Prisma.SocialIdentityWhereInput;
    none?: Prisma.SocialIdentityWhereInput;
};
export type SocialIdentityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SocialIdentityProviderSubjectCompoundUniqueInput = {
    provider: $Enums.SocialProvider;
    subject: string;
};
export type SocialIdentityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SocialIdentityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SocialIdentityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SocialIdentityCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SocialIdentityCreateWithoutUserInput, Prisma.SocialIdentityUncheckedCreateWithoutUserInput> | Prisma.SocialIdentityCreateWithoutUserInput[] | Prisma.SocialIdentityUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SocialIdentityCreateOrConnectWithoutUserInput | Prisma.SocialIdentityCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SocialIdentityCreateManyUserInputEnvelope;
    connect?: Prisma.SocialIdentityWhereUniqueInput | Prisma.SocialIdentityWhereUniqueInput[];
};
export type SocialIdentityUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SocialIdentityCreateWithoutUserInput, Prisma.SocialIdentityUncheckedCreateWithoutUserInput> | Prisma.SocialIdentityCreateWithoutUserInput[] | Prisma.SocialIdentityUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SocialIdentityCreateOrConnectWithoutUserInput | Prisma.SocialIdentityCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SocialIdentityCreateManyUserInputEnvelope;
    connect?: Prisma.SocialIdentityWhereUniqueInput | Prisma.SocialIdentityWhereUniqueInput[];
};
export type SocialIdentityUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SocialIdentityCreateWithoutUserInput, Prisma.SocialIdentityUncheckedCreateWithoutUserInput> | Prisma.SocialIdentityCreateWithoutUserInput[] | Prisma.SocialIdentityUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SocialIdentityCreateOrConnectWithoutUserInput | Prisma.SocialIdentityCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SocialIdentityUpsertWithWhereUniqueWithoutUserInput | Prisma.SocialIdentityUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SocialIdentityCreateManyUserInputEnvelope;
    set?: Prisma.SocialIdentityWhereUniqueInput | Prisma.SocialIdentityWhereUniqueInput[];
    disconnect?: Prisma.SocialIdentityWhereUniqueInput | Prisma.SocialIdentityWhereUniqueInput[];
    delete?: Prisma.SocialIdentityWhereUniqueInput | Prisma.SocialIdentityWhereUniqueInput[];
    connect?: Prisma.SocialIdentityWhereUniqueInput | Prisma.SocialIdentityWhereUniqueInput[];
    update?: Prisma.SocialIdentityUpdateWithWhereUniqueWithoutUserInput | Prisma.SocialIdentityUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SocialIdentityUpdateManyWithWhereWithoutUserInput | Prisma.SocialIdentityUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SocialIdentityScalarWhereInput | Prisma.SocialIdentityScalarWhereInput[];
};
export type SocialIdentityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SocialIdentityCreateWithoutUserInput, Prisma.SocialIdentityUncheckedCreateWithoutUserInput> | Prisma.SocialIdentityCreateWithoutUserInput[] | Prisma.SocialIdentityUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SocialIdentityCreateOrConnectWithoutUserInput | Prisma.SocialIdentityCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SocialIdentityUpsertWithWhereUniqueWithoutUserInput | Prisma.SocialIdentityUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SocialIdentityCreateManyUserInputEnvelope;
    set?: Prisma.SocialIdentityWhereUniqueInput | Prisma.SocialIdentityWhereUniqueInput[];
    disconnect?: Prisma.SocialIdentityWhereUniqueInput | Prisma.SocialIdentityWhereUniqueInput[];
    delete?: Prisma.SocialIdentityWhereUniqueInput | Prisma.SocialIdentityWhereUniqueInput[];
    connect?: Prisma.SocialIdentityWhereUniqueInput | Prisma.SocialIdentityWhereUniqueInput[];
    update?: Prisma.SocialIdentityUpdateWithWhereUniqueWithoutUserInput | Prisma.SocialIdentityUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SocialIdentityUpdateManyWithWhereWithoutUserInput | Prisma.SocialIdentityUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SocialIdentityScalarWhereInput | Prisma.SocialIdentityScalarWhereInput[];
};
export type EnumSocialProviderFieldUpdateOperationsInput = {
    set?: $Enums.SocialProvider;
};
export type SocialIdentityCreateWithoutUserInput = {
    id?: string;
    provider: $Enums.SocialProvider;
    subject: string;
    email?: string | null;
    createdAt?: Date | string;
};
export type SocialIdentityUncheckedCreateWithoutUserInput = {
    id?: string;
    provider: $Enums.SocialProvider;
    subject: string;
    email?: string | null;
    createdAt?: Date | string;
};
export type SocialIdentityCreateOrConnectWithoutUserInput = {
    where: Prisma.SocialIdentityWhereUniqueInput;
    create: Prisma.XOR<Prisma.SocialIdentityCreateWithoutUserInput, Prisma.SocialIdentityUncheckedCreateWithoutUserInput>;
};
export type SocialIdentityCreateManyUserInputEnvelope = {
    data: Prisma.SocialIdentityCreateManyUserInput | Prisma.SocialIdentityCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SocialIdentityUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SocialIdentityWhereUniqueInput;
    update: Prisma.XOR<Prisma.SocialIdentityUpdateWithoutUserInput, Prisma.SocialIdentityUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SocialIdentityCreateWithoutUserInput, Prisma.SocialIdentityUncheckedCreateWithoutUserInput>;
};
export type SocialIdentityUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SocialIdentityWhereUniqueInput;
    data: Prisma.XOR<Prisma.SocialIdentityUpdateWithoutUserInput, Prisma.SocialIdentityUncheckedUpdateWithoutUserInput>;
};
export type SocialIdentityUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SocialIdentityScalarWhereInput;
    data: Prisma.XOR<Prisma.SocialIdentityUpdateManyMutationInput, Prisma.SocialIdentityUncheckedUpdateManyWithoutUserInput>;
};
export type SocialIdentityScalarWhereInput = {
    AND?: Prisma.SocialIdentityScalarWhereInput | Prisma.SocialIdentityScalarWhereInput[];
    OR?: Prisma.SocialIdentityScalarWhereInput[];
    NOT?: Prisma.SocialIdentityScalarWhereInput | Prisma.SocialIdentityScalarWhereInput[];
    id?: Prisma.StringFilter<"SocialIdentity"> | string;
    provider?: Prisma.EnumSocialProviderFilter<"SocialIdentity"> | $Enums.SocialProvider;
    subject?: Prisma.StringFilter<"SocialIdentity"> | string;
    email?: Prisma.StringNullableFilter<"SocialIdentity"> | string | null;
    userId?: Prisma.StringFilter<"SocialIdentity"> | string;
    createdAt?: Prisma.DateTimeFilter<"SocialIdentity"> | Date | string;
};
export type SocialIdentityCreateManyUserInput = {
    id?: string;
    provider: $Enums.SocialProvider;
    subject: string;
    email?: string | null;
    createdAt?: Date | string;
};
export type SocialIdentityUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SocialIdentityUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SocialIdentityUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SocialIdentitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    provider?: boolean;
    subject?: boolean;
    email?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["socialIdentity"]>;
export type SocialIdentitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    provider?: boolean;
    subject?: boolean;
    email?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["socialIdentity"]>;
export type SocialIdentitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    provider?: boolean;
    subject?: boolean;
    email?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["socialIdentity"]>;
export type SocialIdentitySelectScalar = {
    id?: boolean;
    provider?: boolean;
    subject?: boolean;
    email?: boolean;
    userId?: boolean;
    createdAt?: boolean;
};
export type SocialIdentityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "provider" | "subject" | "email" | "userId" | "createdAt", ExtArgs["result"]["socialIdentity"]>;
export type SocialIdentityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SocialIdentityIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SocialIdentityIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SocialIdentityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SocialIdentity";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        provider: $Enums.SocialProvider;
        subject: string;
        email: string | null;
        userId: string;
        createdAt: Date;
    }, ExtArgs["result"]["socialIdentity"]>;
    composites: {};
};
export type SocialIdentityGetPayload<S extends boolean | null | undefined | SocialIdentityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SocialIdentityPayload, S>;
export type SocialIdentityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SocialIdentityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SocialIdentityCountAggregateInputType | true;
};
export interface SocialIdentityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SocialIdentity'];
        meta: {
            name: 'SocialIdentity';
        };
    };
    findUnique<T extends SocialIdentityFindUniqueArgs>(args: Prisma.SelectSubset<T, SocialIdentityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SocialIdentityClient<runtime.Types.Result.GetResult<Prisma.$SocialIdentityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SocialIdentityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SocialIdentityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SocialIdentityClient<runtime.Types.Result.GetResult<Prisma.$SocialIdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SocialIdentityFindFirstArgs>(args?: Prisma.SelectSubset<T, SocialIdentityFindFirstArgs<ExtArgs>>): Prisma.Prisma__SocialIdentityClient<runtime.Types.Result.GetResult<Prisma.$SocialIdentityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SocialIdentityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SocialIdentityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SocialIdentityClient<runtime.Types.Result.GetResult<Prisma.$SocialIdentityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SocialIdentityFindManyArgs>(args?: Prisma.SelectSubset<T, SocialIdentityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SocialIdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SocialIdentityCreateArgs>(args: Prisma.SelectSubset<T, SocialIdentityCreateArgs<ExtArgs>>): Prisma.Prisma__SocialIdentityClient<runtime.Types.Result.GetResult<Prisma.$SocialIdentityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SocialIdentityCreateManyArgs>(args?: Prisma.SelectSubset<T, SocialIdentityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SocialIdentityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SocialIdentityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SocialIdentityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SocialIdentityDeleteArgs>(args: Prisma.SelectSubset<T, SocialIdentityDeleteArgs<ExtArgs>>): Prisma.Prisma__SocialIdentityClient<runtime.Types.Result.GetResult<Prisma.$SocialIdentityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SocialIdentityUpdateArgs>(args: Prisma.SelectSubset<T, SocialIdentityUpdateArgs<ExtArgs>>): Prisma.Prisma__SocialIdentityClient<runtime.Types.Result.GetResult<Prisma.$SocialIdentityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SocialIdentityDeleteManyArgs>(args?: Prisma.SelectSubset<T, SocialIdentityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SocialIdentityUpdateManyArgs>(args: Prisma.SelectSubset<T, SocialIdentityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SocialIdentityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SocialIdentityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SocialIdentityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SocialIdentityUpsertArgs>(args: Prisma.SelectSubset<T, SocialIdentityUpsertArgs<ExtArgs>>): Prisma.Prisma__SocialIdentityClient<runtime.Types.Result.GetResult<Prisma.$SocialIdentityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SocialIdentityCountArgs>(args?: Prisma.Subset<T, SocialIdentityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SocialIdentityCountAggregateOutputType> : number>;
    aggregate<T extends SocialIdentityAggregateArgs>(args: Prisma.Subset<T, SocialIdentityAggregateArgs>): Prisma.PrismaPromise<GetSocialIdentityAggregateType<T>>;
    groupBy<T extends SocialIdentityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SocialIdentityGroupByArgs['orderBy'];
    } : {
        orderBy?: SocialIdentityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SocialIdentityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialIdentityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SocialIdentityFieldRefs;
}
export interface Prisma__SocialIdentityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SocialIdentityFieldRefs {
    readonly id: Prisma.FieldRef<"SocialIdentity", 'String'>;
    readonly provider: Prisma.FieldRef<"SocialIdentity", 'SocialProvider'>;
    readonly subject: Prisma.FieldRef<"SocialIdentity", 'String'>;
    readonly email: Prisma.FieldRef<"SocialIdentity", 'String'>;
    readonly userId: Prisma.FieldRef<"SocialIdentity", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SocialIdentity", 'DateTime'>;
}
export type SocialIdentityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialIdentitySelect<ExtArgs> | null;
    omit?: Prisma.SocialIdentityOmit<ExtArgs> | null;
    include?: Prisma.SocialIdentityInclude<ExtArgs> | null;
    where: Prisma.SocialIdentityWhereUniqueInput;
};
export type SocialIdentityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialIdentitySelect<ExtArgs> | null;
    omit?: Prisma.SocialIdentityOmit<ExtArgs> | null;
    include?: Prisma.SocialIdentityInclude<ExtArgs> | null;
    where: Prisma.SocialIdentityWhereUniqueInput;
};
export type SocialIdentityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialIdentitySelect<ExtArgs> | null;
    omit?: Prisma.SocialIdentityOmit<ExtArgs> | null;
    include?: Prisma.SocialIdentityInclude<ExtArgs> | null;
    where?: Prisma.SocialIdentityWhereInput;
    orderBy?: Prisma.SocialIdentityOrderByWithRelationInput | Prisma.SocialIdentityOrderByWithRelationInput[];
    cursor?: Prisma.SocialIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SocialIdentityScalarFieldEnum | Prisma.SocialIdentityScalarFieldEnum[];
};
export type SocialIdentityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialIdentitySelect<ExtArgs> | null;
    omit?: Prisma.SocialIdentityOmit<ExtArgs> | null;
    include?: Prisma.SocialIdentityInclude<ExtArgs> | null;
    where?: Prisma.SocialIdentityWhereInput;
    orderBy?: Prisma.SocialIdentityOrderByWithRelationInput | Prisma.SocialIdentityOrderByWithRelationInput[];
    cursor?: Prisma.SocialIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SocialIdentityScalarFieldEnum | Prisma.SocialIdentityScalarFieldEnum[];
};
export type SocialIdentityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialIdentitySelect<ExtArgs> | null;
    omit?: Prisma.SocialIdentityOmit<ExtArgs> | null;
    include?: Prisma.SocialIdentityInclude<ExtArgs> | null;
    where?: Prisma.SocialIdentityWhereInput;
    orderBy?: Prisma.SocialIdentityOrderByWithRelationInput | Prisma.SocialIdentityOrderByWithRelationInput[];
    cursor?: Prisma.SocialIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SocialIdentityScalarFieldEnum | Prisma.SocialIdentityScalarFieldEnum[];
};
export type SocialIdentityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialIdentitySelect<ExtArgs> | null;
    omit?: Prisma.SocialIdentityOmit<ExtArgs> | null;
    include?: Prisma.SocialIdentityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SocialIdentityCreateInput, Prisma.SocialIdentityUncheckedCreateInput>;
};
export type SocialIdentityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SocialIdentityCreateManyInput | Prisma.SocialIdentityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SocialIdentityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialIdentitySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SocialIdentityOmit<ExtArgs> | null;
    data: Prisma.SocialIdentityCreateManyInput | Prisma.SocialIdentityCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SocialIdentityIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SocialIdentityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialIdentitySelect<ExtArgs> | null;
    omit?: Prisma.SocialIdentityOmit<ExtArgs> | null;
    include?: Prisma.SocialIdentityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SocialIdentityUpdateInput, Prisma.SocialIdentityUncheckedUpdateInput>;
    where: Prisma.SocialIdentityWhereUniqueInput;
};
export type SocialIdentityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SocialIdentityUpdateManyMutationInput, Prisma.SocialIdentityUncheckedUpdateManyInput>;
    where?: Prisma.SocialIdentityWhereInput;
    limit?: number;
};
export type SocialIdentityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialIdentitySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SocialIdentityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SocialIdentityUpdateManyMutationInput, Prisma.SocialIdentityUncheckedUpdateManyInput>;
    where?: Prisma.SocialIdentityWhereInput;
    limit?: number;
    include?: Prisma.SocialIdentityIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SocialIdentityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialIdentitySelect<ExtArgs> | null;
    omit?: Prisma.SocialIdentityOmit<ExtArgs> | null;
    include?: Prisma.SocialIdentityInclude<ExtArgs> | null;
    where: Prisma.SocialIdentityWhereUniqueInput;
    create: Prisma.XOR<Prisma.SocialIdentityCreateInput, Prisma.SocialIdentityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SocialIdentityUpdateInput, Prisma.SocialIdentityUncheckedUpdateInput>;
};
export type SocialIdentityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialIdentitySelect<ExtArgs> | null;
    omit?: Prisma.SocialIdentityOmit<ExtArgs> | null;
    include?: Prisma.SocialIdentityInclude<ExtArgs> | null;
    where: Prisma.SocialIdentityWhereUniqueInput;
};
export type SocialIdentityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SocialIdentityWhereInput;
    limit?: number;
};
export type SocialIdentityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialIdentitySelect<ExtArgs> | null;
    omit?: Prisma.SocialIdentityOmit<ExtArgs> | null;
    include?: Prisma.SocialIdentityInclude<ExtArgs> | null;
};
