import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PartnerApplicationModel = runtime.Types.Result.DefaultSelection<Prisma.$PartnerApplicationPayload>;
export type AggregatePartnerApplication = {
    _count: PartnerApplicationCountAggregateOutputType | null;
    _min: PartnerApplicationMinAggregateOutputType | null;
    _max: PartnerApplicationMaxAggregateOutputType | null;
};
export type PartnerApplicationMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    kind: $Enums.PartnerKind | null;
    organisation: string | null;
    contactName: string | null;
    email: string | null;
    phone: string | null;
    status: $Enums.ApplicationStatus | null;
    note: string | null;
    reviewedById: string | null;
    reviewedAt: Date | null;
    pharmacyId: string | null;
    createdAt: Date | null;
};
export type PartnerApplicationMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    kind: $Enums.PartnerKind | null;
    organisation: string | null;
    contactName: string | null;
    email: string | null;
    phone: string | null;
    status: $Enums.ApplicationStatus | null;
    note: string | null;
    reviewedById: string | null;
    reviewedAt: Date | null;
    pharmacyId: string | null;
    createdAt: Date | null;
};
export type PartnerApplicationCountAggregateOutputType = {
    id: number;
    code: number;
    kind: number;
    organisation: number;
    contactName: number;
    email: number;
    phone: number;
    details: number;
    status: number;
    note: number;
    reviewedById: number;
    reviewedAt: number;
    pharmacyId: number;
    createdAt: number;
    _all: number;
};
export type PartnerApplicationMinAggregateInputType = {
    id?: true;
    code?: true;
    kind?: true;
    organisation?: true;
    contactName?: true;
    email?: true;
    phone?: true;
    status?: true;
    note?: true;
    reviewedById?: true;
    reviewedAt?: true;
    pharmacyId?: true;
    createdAt?: true;
};
export type PartnerApplicationMaxAggregateInputType = {
    id?: true;
    code?: true;
    kind?: true;
    organisation?: true;
    contactName?: true;
    email?: true;
    phone?: true;
    status?: true;
    note?: true;
    reviewedById?: true;
    reviewedAt?: true;
    pharmacyId?: true;
    createdAt?: true;
};
export type PartnerApplicationCountAggregateInputType = {
    id?: true;
    code?: true;
    kind?: true;
    organisation?: true;
    contactName?: true;
    email?: true;
    phone?: true;
    details?: true;
    status?: true;
    note?: true;
    reviewedById?: true;
    reviewedAt?: true;
    pharmacyId?: true;
    createdAt?: true;
    _all?: true;
};
export type PartnerApplicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerApplicationWhereInput;
    orderBy?: Prisma.PartnerApplicationOrderByWithRelationInput | Prisma.PartnerApplicationOrderByWithRelationInput[];
    cursor?: Prisma.PartnerApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PartnerApplicationCountAggregateInputType;
    _min?: PartnerApplicationMinAggregateInputType;
    _max?: PartnerApplicationMaxAggregateInputType;
};
export type GetPartnerApplicationAggregateType<T extends PartnerApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregatePartnerApplication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePartnerApplication[P]> : Prisma.GetScalarType<T[P], AggregatePartnerApplication[P]>;
};
export type PartnerApplicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerApplicationWhereInput;
    orderBy?: Prisma.PartnerApplicationOrderByWithAggregationInput | Prisma.PartnerApplicationOrderByWithAggregationInput[];
    by: Prisma.PartnerApplicationScalarFieldEnum[] | Prisma.PartnerApplicationScalarFieldEnum;
    having?: Prisma.PartnerApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PartnerApplicationCountAggregateInputType | true;
    _min?: PartnerApplicationMinAggregateInputType;
    _max?: PartnerApplicationMaxAggregateInputType;
};
export type PartnerApplicationGroupByOutputType = {
    id: string;
    code: string;
    kind: $Enums.PartnerKind;
    organisation: string;
    contactName: string;
    email: string;
    phone: string;
    details: runtime.JsonValue;
    status: $Enums.ApplicationStatus;
    note: string | null;
    reviewedById: string | null;
    reviewedAt: Date | null;
    pharmacyId: string | null;
    createdAt: Date;
    _count: PartnerApplicationCountAggregateOutputType | null;
    _min: PartnerApplicationMinAggregateOutputType | null;
    _max: PartnerApplicationMaxAggregateOutputType | null;
};
export type GetPartnerApplicationGroupByPayload<T extends PartnerApplicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PartnerApplicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PartnerApplicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PartnerApplicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PartnerApplicationGroupByOutputType[P]>;
}>>;
export type PartnerApplicationWhereInput = {
    AND?: Prisma.PartnerApplicationWhereInput | Prisma.PartnerApplicationWhereInput[];
    OR?: Prisma.PartnerApplicationWhereInput[];
    NOT?: Prisma.PartnerApplicationWhereInput | Prisma.PartnerApplicationWhereInput[];
    id?: Prisma.StringFilter<"PartnerApplication"> | string;
    code?: Prisma.StringFilter<"PartnerApplication"> | string;
    kind?: Prisma.EnumPartnerKindFilter<"PartnerApplication"> | $Enums.PartnerKind;
    organisation?: Prisma.StringFilter<"PartnerApplication"> | string;
    contactName?: Prisma.StringFilter<"PartnerApplication"> | string;
    email?: Prisma.StringFilter<"PartnerApplication"> | string;
    phone?: Prisma.StringFilter<"PartnerApplication"> | string;
    details?: Prisma.JsonFilter<"PartnerApplication">;
    status?: Prisma.EnumApplicationStatusFilter<"PartnerApplication"> | $Enums.ApplicationStatus;
    note?: Prisma.StringNullableFilter<"PartnerApplication"> | string | null;
    reviewedById?: Prisma.StringNullableFilter<"PartnerApplication"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"PartnerApplication"> | Date | string | null;
    pharmacyId?: Prisma.StringNullableFilter<"PartnerApplication"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PartnerApplication"> | Date | string;
};
export type PartnerApplicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    organisation?: Prisma.SortOrder;
    contactName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PartnerApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.PartnerApplicationWhereInput | Prisma.PartnerApplicationWhereInput[];
    OR?: Prisma.PartnerApplicationWhereInput[];
    NOT?: Prisma.PartnerApplicationWhereInput | Prisma.PartnerApplicationWhereInput[];
    kind?: Prisma.EnumPartnerKindFilter<"PartnerApplication"> | $Enums.PartnerKind;
    organisation?: Prisma.StringFilter<"PartnerApplication"> | string;
    contactName?: Prisma.StringFilter<"PartnerApplication"> | string;
    email?: Prisma.StringFilter<"PartnerApplication"> | string;
    phone?: Prisma.StringFilter<"PartnerApplication"> | string;
    details?: Prisma.JsonFilter<"PartnerApplication">;
    status?: Prisma.EnumApplicationStatusFilter<"PartnerApplication"> | $Enums.ApplicationStatus;
    note?: Prisma.StringNullableFilter<"PartnerApplication"> | string | null;
    reviewedById?: Prisma.StringNullableFilter<"PartnerApplication"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"PartnerApplication"> | Date | string | null;
    pharmacyId?: Prisma.StringNullableFilter<"PartnerApplication"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PartnerApplication"> | Date | string;
}, "id" | "code">;
export type PartnerApplicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    organisation?: Prisma.SortOrder;
    contactName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PartnerApplicationCountOrderByAggregateInput;
    _max?: Prisma.PartnerApplicationMaxOrderByAggregateInput;
    _min?: Prisma.PartnerApplicationMinOrderByAggregateInput;
};
export type PartnerApplicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.PartnerApplicationScalarWhereWithAggregatesInput | Prisma.PartnerApplicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.PartnerApplicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PartnerApplicationScalarWhereWithAggregatesInput | Prisma.PartnerApplicationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PartnerApplication"> | string;
    code?: Prisma.StringWithAggregatesFilter<"PartnerApplication"> | string;
    kind?: Prisma.EnumPartnerKindWithAggregatesFilter<"PartnerApplication"> | $Enums.PartnerKind;
    organisation?: Prisma.StringWithAggregatesFilter<"PartnerApplication"> | string;
    contactName?: Prisma.StringWithAggregatesFilter<"PartnerApplication"> | string;
    email?: Prisma.StringWithAggregatesFilter<"PartnerApplication"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"PartnerApplication"> | string;
    details?: Prisma.JsonWithAggregatesFilter<"PartnerApplication">;
    status?: Prisma.EnumApplicationStatusWithAggregatesFilter<"PartnerApplication"> | $Enums.ApplicationStatus;
    note?: Prisma.StringNullableWithAggregatesFilter<"PartnerApplication"> | string | null;
    reviewedById?: Prisma.StringNullableWithAggregatesFilter<"PartnerApplication"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PartnerApplication"> | Date | string | null;
    pharmacyId?: Prisma.StringNullableWithAggregatesFilter<"PartnerApplication"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PartnerApplication"> | Date | string;
};
export type PartnerApplicationCreateInput = {
    id?: string;
    code: string;
    kind: $Enums.PartnerKind;
    organisation: string;
    contactName: string;
    email: string;
    phone: string;
    details: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.ApplicationStatus;
    note?: string | null;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    pharmacyId?: string | null;
    createdAt?: Date | string;
};
export type PartnerApplicationUncheckedCreateInput = {
    id?: string;
    code: string;
    kind: $Enums.PartnerKind;
    organisation: string;
    contactName: string;
    email: string;
    phone: string;
    details: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.ApplicationStatus;
    note?: string | null;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    pharmacyId?: string | null;
    createdAt?: Date | string;
};
export type PartnerApplicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumPartnerKindFieldUpdateOperationsInput | $Enums.PartnerKind;
    organisation?: Prisma.StringFieldUpdateOperationsInput | string;
    contactName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pharmacyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerApplicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumPartnerKindFieldUpdateOperationsInput | $Enums.PartnerKind;
    organisation?: Prisma.StringFieldUpdateOperationsInput | string;
    contactName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pharmacyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerApplicationCreateManyInput = {
    id?: string;
    code: string;
    kind: $Enums.PartnerKind;
    organisation: string;
    contactName: string;
    email: string;
    phone: string;
    details: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.ApplicationStatus;
    note?: string | null;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    pharmacyId?: string | null;
    createdAt?: Date | string;
};
export type PartnerApplicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumPartnerKindFieldUpdateOperationsInput | $Enums.PartnerKind;
    organisation?: Prisma.StringFieldUpdateOperationsInput | string;
    contactName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pharmacyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerApplicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumPartnerKindFieldUpdateOperationsInput | $Enums.PartnerKind;
    organisation?: Prisma.StringFieldUpdateOperationsInput | string;
    contactName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pharmacyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerApplicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    organisation?: Prisma.SortOrder;
    contactName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PartnerApplicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    organisation?: Prisma.SortOrder;
    contactName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PartnerApplicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    organisation?: Prisma.SortOrder;
    contactName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnumPartnerKindFieldUpdateOperationsInput = {
    set?: $Enums.PartnerKind;
};
export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus;
};
export type PartnerApplicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    kind?: boolean;
    organisation?: boolean;
    contactName?: boolean;
    email?: boolean;
    phone?: boolean;
    details?: boolean;
    status?: boolean;
    note?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    pharmacyId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["partnerApplication"]>;
export type PartnerApplicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    kind?: boolean;
    organisation?: boolean;
    contactName?: boolean;
    email?: boolean;
    phone?: boolean;
    details?: boolean;
    status?: boolean;
    note?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    pharmacyId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["partnerApplication"]>;
export type PartnerApplicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    kind?: boolean;
    organisation?: boolean;
    contactName?: boolean;
    email?: boolean;
    phone?: boolean;
    details?: boolean;
    status?: boolean;
    note?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    pharmacyId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["partnerApplication"]>;
export type PartnerApplicationSelectScalar = {
    id?: boolean;
    code?: boolean;
    kind?: boolean;
    organisation?: boolean;
    contactName?: boolean;
    email?: boolean;
    phone?: boolean;
    details?: boolean;
    status?: boolean;
    note?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    pharmacyId?: boolean;
    createdAt?: boolean;
};
export type PartnerApplicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "kind" | "organisation" | "contactName" | "email" | "phone" | "details" | "status" | "note" | "reviewedById" | "reviewedAt" | "pharmacyId" | "createdAt", ExtArgs["result"]["partnerApplication"]>;
export type $PartnerApplicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PartnerApplication";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        kind: $Enums.PartnerKind;
        organisation: string;
        contactName: string;
        email: string;
        phone: string;
        details: runtime.JsonValue;
        status: $Enums.ApplicationStatus;
        note: string | null;
        reviewedById: string | null;
        reviewedAt: Date | null;
        pharmacyId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["partnerApplication"]>;
    composites: {};
};
export type PartnerApplicationGetPayload<S extends boolean | null | undefined | PartnerApplicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PartnerApplicationPayload, S>;
export type PartnerApplicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PartnerApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PartnerApplicationCountAggregateInputType | true;
};
export interface PartnerApplicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PartnerApplication'];
        meta: {
            name: 'PartnerApplication';
        };
    };
    findUnique<T extends PartnerApplicationFindUniqueArgs>(args: Prisma.SelectSubset<T, PartnerApplicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PartnerApplicationClient<runtime.Types.Result.GetResult<Prisma.$PartnerApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PartnerApplicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PartnerApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartnerApplicationClient<runtime.Types.Result.GetResult<Prisma.$PartnerApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PartnerApplicationFindFirstArgs>(args?: Prisma.SelectSubset<T, PartnerApplicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__PartnerApplicationClient<runtime.Types.Result.GetResult<Prisma.$PartnerApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PartnerApplicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PartnerApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartnerApplicationClient<runtime.Types.Result.GetResult<Prisma.$PartnerApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PartnerApplicationFindManyArgs>(args?: Prisma.SelectSubset<T, PartnerApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PartnerApplicationCreateArgs>(args: Prisma.SelectSubset<T, PartnerApplicationCreateArgs<ExtArgs>>): Prisma.Prisma__PartnerApplicationClient<runtime.Types.Result.GetResult<Prisma.$PartnerApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PartnerApplicationCreateManyArgs>(args?: Prisma.SelectSubset<T, PartnerApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PartnerApplicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PartnerApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PartnerApplicationDeleteArgs>(args: Prisma.SelectSubset<T, PartnerApplicationDeleteArgs<ExtArgs>>): Prisma.Prisma__PartnerApplicationClient<runtime.Types.Result.GetResult<Prisma.$PartnerApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PartnerApplicationUpdateArgs>(args: Prisma.SelectSubset<T, PartnerApplicationUpdateArgs<ExtArgs>>): Prisma.Prisma__PartnerApplicationClient<runtime.Types.Result.GetResult<Prisma.$PartnerApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PartnerApplicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, PartnerApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PartnerApplicationUpdateManyArgs>(args: Prisma.SelectSubset<T, PartnerApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PartnerApplicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PartnerApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PartnerApplicationUpsertArgs>(args: Prisma.SelectSubset<T, PartnerApplicationUpsertArgs<ExtArgs>>): Prisma.Prisma__PartnerApplicationClient<runtime.Types.Result.GetResult<Prisma.$PartnerApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PartnerApplicationCountArgs>(args?: Prisma.Subset<T, PartnerApplicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PartnerApplicationCountAggregateOutputType> : number>;
    aggregate<T extends PartnerApplicationAggregateArgs>(args: Prisma.Subset<T, PartnerApplicationAggregateArgs>): Prisma.PrismaPromise<GetPartnerApplicationAggregateType<T>>;
    groupBy<T extends PartnerApplicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PartnerApplicationGroupByArgs['orderBy'];
    } : {
        orderBy?: PartnerApplicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PartnerApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PartnerApplicationFieldRefs;
}
export interface Prisma__PartnerApplicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PartnerApplicationFieldRefs {
    readonly id: Prisma.FieldRef<"PartnerApplication", 'String'>;
    readonly code: Prisma.FieldRef<"PartnerApplication", 'String'>;
    readonly kind: Prisma.FieldRef<"PartnerApplication", 'PartnerKind'>;
    readonly organisation: Prisma.FieldRef<"PartnerApplication", 'String'>;
    readonly contactName: Prisma.FieldRef<"PartnerApplication", 'String'>;
    readonly email: Prisma.FieldRef<"PartnerApplication", 'String'>;
    readonly phone: Prisma.FieldRef<"PartnerApplication", 'String'>;
    readonly details: Prisma.FieldRef<"PartnerApplication", 'Json'>;
    readonly status: Prisma.FieldRef<"PartnerApplication", 'ApplicationStatus'>;
    readonly note: Prisma.FieldRef<"PartnerApplication", 'String'>;
    readonly reviewedById: Prisma.FieldRef<"PartnerApplication", 'String'>;
    readonly reviewedAt: Prisma.FieldRef<"PartnerApplication", 'DateTime'>;
    readonly pharmacyId: Prisma.FieldRef<"PartnerApplication", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PartnerApplication", 'DateTime'>;
}
export type PartnerApplicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerApplicationSelect<ExtArgs> | null;
    omit?: Prisma.PartnerApplicationOmit<ExtArgs> | null;
    where: Prisma.PartnerApplicationWhereUniqueInput;
};
export type PartnerApplicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerApplicationSelect<ExtArgs> | null;
    omit?: Prisma.PartnerApplicationOmit<ExtArgs> | null;
    where: Prisma.PartnerApplicationWhereUniqueInput;
};
export type PartnerApplicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerApplicationSelect<ExtArgs> | null;
    omit?: Prisma.PartnerApplicationOmit<ExtArgs> | null;
    where?: Prisma.PartnerApplicationWhereInput;
    orderBy?: Prisma.PartnerApplicationOrderByWithRelationInput | Prisma.PartnerApplicationOrderByWithRelationInput[];
    cursor?: Prisma.PartnerApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerApplicationScalarFieldEnum | Prisma.PartnerApplicationScalarFieldEnum[];
};
export type PartnerApplicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerApplicationSelect<ExtArgs> | null;
    omit?: Prisma.PartnerApplicationOmit<ExtArgs> | null;
    where?: Prisma.PartnerApplicationWhereInput;
    orderBy?: Prisma.PartnerApplicationOrderByWithRelationInput | Prisma.PartnerApplicationOrderByWithRelationInput[];
    cursor?: Prisma.PartnerApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerApplicationScalarFieldEnum | Prisma.PartnerApplicationScalarFieldEnum[];
};
export type PartnerApplicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerApplicationSelect<ExtArgs> | null;
    omit?: Prisma.PartnerApplicationOmit<ExtArgs> | null;
    where?: Prisma.PartnerApplicationWhereInput;
    orderBy?: Prisma.PartnerApplicationOrderByWithRelationInput | Prisma.PartnerApplicationOrderByWithRelationInput[];
    cursor?: Prisma.PartnerApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerApplicationScalarFieldEnum | Prisma.PartnerApplicationScalarFieldEnum[];
};
export type PartnerApplicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerApplicationSelect<ExtArgs> | null;
    omit?: Prisma.PartnerApplicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerApplicationCreateInput, Prisma.PartnerApplicationUncheckedCreateInput>;
};
export type PartnerApplicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PartnerApplicationCreateManyInput | Prisma.PartnerApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartnerApplicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerApplicationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartnerApplicationOmit<ExtArgs> | null;
    data: Prisma.PartnerApplicationCreateManyInput | Prisma.PartnerApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartnerApplicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerApplicationSelect<ExtArgs> | null;
    omit?: Prisma.PartnerApplicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerApplicationUpdateInput, Prisma.PartnerApplicationUncheckedUpdateInput>;
    where: Prisma.PartnerApplicationWhereUniqueInput;
};
export type PartnerApplicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PartnerApplicationUpdateManyMutationInput, Prisma.PartnerApplicationUncheckedUpdateManyInput>;
    where?: Prisma.PartnerApplicationWhereInput;
    limit?: number;
};
export type PartnerApplicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartnerApplicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerApplicationUpdateManyMutationInput, Prisma.PartnerApplicationUncheckedUpdateManyInput>;
    where?: Prisma.PartnerApplicationWhereInput;
    limit?: number;
};
export type PartnerApplicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerApplicationSelect<ExtArgs> | null;
    omit?: Prisma.PartnerApplicationOmit<ExtArgs> | null;
    where: Prisma.PartnerApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartnerApplicationCreateInput, Prisma.PartnerApplicationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PartnerApplicationUpdateInput, Prisma.PartnerApplicationUncheckedUpdateInput>;
};
export type PartnerApplicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerApplicationSelect<ExtArgs> | null;
    omit?: Prisma.PartnerApplicationOmit<ExtArgs> | null;
    where: Prisma.PartnerApplicationWhereUniqueInput;
};
export type PartnerApplicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerApplicationWhereInput;
    limit?: number;
};
export type PartnerApplicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerApplicationSelect<ExtArgs> | null;
    omit?: Prisma.PartnerApplicationOmit<ExtArgs> | null;
};
