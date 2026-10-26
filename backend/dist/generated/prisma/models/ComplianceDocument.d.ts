import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ComplianceDocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$ComplianceDocumentPayload>;
export type AggregateComplianceDocument = {
    _count: ComplianceDocumentCountAggregateOutputType | null;
    _avg: ComplianceDocumentAvgAggregateOutputType | null;
    _sum: ComplianceDocumentSumAggregateOutputType | null;
    _min: ComplianceDocumentMinAggregateOutputType | null;
    _max: ComplianceDocumentMaxAggregateOutputType | null;
};
export type ComplianceDocumentAvgAggregateOutputType = {
    reminderDays: number | null;
};
export type ComplianceDocumentSumAggregateOutputType = {
    reminderDays: number | null;
};
export type ComplianceDocumentMinAggregateOutputType = {
    id: string | null;
    pharmacyId: string | null;
    kind: $Enums.DocumentKind | null;
    reference: string | null;
    issuer: string | null;
    expiresAt: Date | null;
    fileKey: string | null;
    fileName: string | null;
    status: $Enums.DocumentStatus | null;
    reviewNote: string | null;
    reviewedById: string | null;
    reviewedAt: Date | null;
    reminderDays: number | null;
    uploadedById: string | null;
    createdAt: Date | null;
};
export type ComplianceDocumentMaxAggregateOutputType = {
    id: string | null;
    pharmacyId: string | null;
    kind: $Enums.DocumentKind | null;
    reference: string | null;
    issuer: string | null;
    expiresAt: Date | null;
    fileKey: string | null;
    fileName: string | null;
    status: $Enums.DocumentStatus | null;
    reviewNote: string | null;
    reviewedById: string | null;
    reviewedAt: Date | null;
    reminderDays: number | null;
    uploadedById: string | null;
    createdAt: Date | null;
};
export type ComplianceDocumentCountAggregateOutputType = {
    id: number;
    pharmacyId: number;
    kind: number;
    reference: number;
    issuer: number;
    expiresAt: number;
    fileKey: number;
    fileName: number;
    status: number;
    reviewNote: number;
    reviewedById: number;
    reviewedAt: number;
    reminderDays: number;
    uploadedById: number;
    createdAt: number;
    _all: number;
};
export type ComplianceDocumentAvgAggregateInputType = {
    reminderDays?: true;
};
export type ComplianceDocumentSumAggregateInputType = {
    reminderDays?: true;
};
export type ComplianceDocumentMinAggregateInputType = {
    id?: true;
    pharmacyId?: true;
    kind?: true;
    reference?: true;
    issuer?: true;
    expiresAt?: true;
    fileKey?: true;
    fileName?: true;
    status?: true;
    reviewNote?: true;
    reviewedById?: true;
    reviewedAt?: true;
    reminderDays?: true;
    uploadedById?: true;
    createdAt?: true;
};
export type ComplianceDocumentMaxAggregateInputType = {
    id?: true;
    pharmacyId?: true;
    kind?: true;
    reference?: true;
    issuer?: true;
    expiresAt?: true;
    fileKey?: true;
    fileName?: true;
    status?: true;
    reviewNote?: true;
    reviewedById?: true;
    reviewedAt?: true;
    reminderDays?: true;
    uploadedById?: true;
    createdAt?: true;
};
export type ComplianceDocumentCountAggregateInputType = {
    id?: true;
    pharmacyId?: true;
    kind?: true;
    reference?: true;
    issuer?: true;
    expiresAt?: true;
    fileKey?: true;
    fileName?: true;
    status?: true;
    reviewNote?: true;
    reviewedById?: true;
    reviewedAt?: true;
    reminderDays?: true;
    uploadedById?: true;
    createdAt?: true;
    _all?: true;
};
export type ComplianceDocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceDocumentWhereInput;
    orderBy?: Prisma.ComplianceDocumentOrderByWithRelationInput | Prisma.ComplianceDocumentOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ComplianceDocumentCountAggregateInputType;
    _avg?: ComplianceDocumentAvgAggregateInputType;
    _sum?: ComplianceDocumentSumAggregateInputType;
    _min?: ComplianceDocumentMinAggregateInputType;
    _max?: ComplianceDocumentMaxAggregateInputType;
};
export type GetComplianceDocumentAggregateType<T extends ComplianceDocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateComplianceDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComplianceDocument[P]> : Prisma.GetScalarType<T[P], AggregateComplianceDocument[P]>;
};
export type ComplianceDocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceDocumentWhereInput;
    orderBy?: Prisma.ComplianceDocumentOrderByWithAggregationInput | Prisma.ComplianceDocumentOrderByWithAggregationInput[];
    by: Prisma.ComplianceDocumentScalarFieldEnum[] | Prisma.ComplianceDocumentScalarFieldEnum;
    having?: Prisma.ComplianceDocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ComplianceDocumentCountAggregateInputType | true;
    _avg?: ComplianceDocumentAvgAggregateInputType;
    _sum?: ComplianceDocumentSumAggregateInputType;
    _min?: ComplianceDocumentMinAggregateInputType;
    _max?: ComplianceDocumentMaxAggregateInputType;
};
export type ComplianceDocumentGroupByOutputType = {
    id: string;
    pharmacyId: string;
    kind: $Enums.DocumentKind;
    reference: string;
    issuer: string;
    expiresAt: Date | null;
    fileKey: string;
    fileName: string | null;
    status: $Enums.DocumentStatus;
    reviewNote: string | null;
    reviewedById: string | null;
    reviewedAt: Date | null;
    reminderDays: number | null;
    uploadedById: string;
    createdAt: Date;
    _count: ComplianceDocumentCountAggregateOutputType | null;
    _avg: ComplianceDocumentAvgAggregateOutputType | null;
    _sum: ComplianceDocumentSumAggregateOutputType | null;
    _min: ComplianceDocumentMinAggregateOutputType | null;
    _max: ComplianceDocumentMaxAggregateOutputType | null;
};
export type GetComplianceDocumentGroupByPayload<T extends ComplianceDocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ComplianceDocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ComplianceDocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ComplianceDocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ComplianceDocumentGroupByOutputType[P]>;
}>>;
export type ComplianceDocumentWhereInput = {
    AND?: Prisma.ComplianceDocumentWhereInput | Prisma.ComplianceDocumentWhereInput[];
    OR?: Prisma.ComplianceDocumentWhereInput[];
    NOT?: Prisma.ComplianceDocumentWhereInput | Prisma.ComplianceDocumentWhereInput[];
    id?: Prisma.StringFilter<"ComplianceDocument"> | string;
    pharmacyId?: Prisma.StringFilter<"ComplianceDocument"> | string;
    kind?: Prisma.EnumDocumentKindFilter<"ComplianceDocument"> | $Enums.DocumentKind;
    reference?: Prisma.StringFilter<"ComplianceDocument"> | string;
    issuer?: Prisma.StringFilter<"ComplianceDocument"> | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"ComplianceDocument"> | Date | string | null;
    fileKey?: Prisma.StringFilter<"ComplianceDocument"> | string;
    fileName?: Prisma.StringNullableFilter<"ComplianceDocument"> | string | null;
    status?: Prisma.EnumDocumentStatusFilter<"ComplianceDocument"> | $Enums.DocumentStatus;
    reviewNote?: Prisma.StringNullableFilter<"ComplianceDocument"> | string | null;
    reviewedById?: Prisma.StringNullableFilter<"ComplianceDocument"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"ComplianceDocument"> | Date | string | null;
    reminderDays?: Prisma.IntNullableFilter<"ComplianceDocument"> | number | null;
    uploadedById?: Prisma.StringFilter<"ComplianceDocument"> | string;
    createdAt?: Prisma.DateTimeFilter<"ComplianceDocument"> | Date | string;
    pharmacy?: Prisma.XOR<Prisma.PharmacyScalarRelationFilter, Prisma.PharmacyWhereInput>;
};
export type ComplianceDocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    issuer?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileKey?: Prisma.SortOrder;
    fileName?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reminderDays?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    pharmacy?: Prisma.PharmacyOrderByWithRelationInput;
};
export type ComplianceDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ComplianceDocumentWhereInput | Prisma.ComplianceDocumentWhereInput[];
    OR?: Prisma.ComplianceDocumentWhereInput[];
    NOT?: Prisma.ComplianceDocumentWhereInput | Prisma.ComplianceDocumentWhereInput[];
    pharmacyId?: Prisma.StringFilter<"ComplianceDocument"> | string;
    kind?: Prisma.EnumDocumentKindFilter<"ComplianceDocument"> | $Enums.DocumentKind;
    reference?: Prisma.StringFilter<"ComplianceDocument"> | string;
    issuer?: Prisma.StringFilter<"ComplianceDocument"> | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"ComplianceDocument"> | Date | string | null;
    fileKey?: Prisma.StringFilter<"ComplianceDocument"> | string;
    fileName?: Prisma.StringNullableFilter<"ComplianceDocument"> | string | null;
    status?: Prisma.EnumDocumentStatusFilter<"ComplianceDocument"> | $Enums.DocumentStatus;
    reviewNote?: Prisma.StringNullableFilter<"ComplianceDocument"> | string | null;
    reviewedById?: Prisma.StringNullableFilter<"ComplianceDocument"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"ComplianceDocument"> | Date | string | null;
    reminderDays?: Prisma.IntNullableFilter<"ComplianceDocument"> | number | null;
    uploadedById?: Prisma.StringFilter<"ComplianceDocument"> | string;
    createdAt?: Prisma.DateTimeFilter<"ComplianceDocument"> | Date | string;
    pharmacy?: Prisma.XOR<Prisma.PharmacyScalarRelationFilter, Prisma.PharmacyWhereInput>;
}, "id">;
export type ComplianceDocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    issuer?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileKey?: Prisma.SortOrder;
    fileName?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reminderDays?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ComplianceDocumentCountOrderByAggregateInput;
    _avg?: Prisma.ComplianceDocumentAvgOrderByAggregateInput;
    _max?: Prisma.ComplianceDocumentMaxOrderByAggregateInput;
    _min?: Prisma.ComplianceDocumentMinOrderByAggregateInput;
    _sum?: Prisma.ComplianceDocumentSumOrderByAggregateInput;
};
export type ComplianceDocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ComplianceDocumentScalarWhereWithAggregatesInput | Prisma.ComplianceDocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ComplianceDocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ComplianceDocumentScalarWhereWithAggregatesInput | Prisma.ComplianceDocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ComplianceDocument"> | string;
    pharmacyId?: Prisma.StringWithAggregatesFilter<"ComplianceDocument"> | string;
    kind?: Prisma.EnumDocumentKindWithAggregatesFilter<"ComplianceDocument"> | $Enums.DocumentKind;
    reference?: Prisma.StringWithAggregatesFilter<"ComplianceDocument"> | string;
    issuer?: Prisma.StringWithAggregatesFilter<"ComplianceDocument"> | string;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ComplianceDocument"> | Date | string | null;
    fileKey?: Prisma.StringWithAggregatesFilter<"ComplianceDocument"> | string;
    fileName?: Prisma.StringNullableWithAggregatesFilter<"ComplianceDocument"> | string | null;
    status?: Prisma.EnumDocumentStatusWithAggregatesFilter<"ComplianceDocument"> | $Enums.DocumentStatus;
    reviewNote?: Prisma.StringNullableWithAggregatesFilter<"ComplianceDocument"> | string | null;
    reviewedById?: Prisma.StringNullableWithAggregatesFilter<"ComplianceDocument"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ComplianceDocument"> | Date | string | null;
    reminderDays?: Prisma.IntNullableWithAggregatesFilter<"ComplianceDocument"> | number | null;
    uploadedById?: Prisma.StringWithAggregatesFilter<"ComplianceDocument"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ComplianceDocument"> | Date | string;
};
export type ComplianceDocumentCreateInput = {
    id?: string;
    kind: $Enums.DocumentKind;
    reference: string;
    issuer: string;
    expiresAt?: Date | string | null;
    fileKey: string;
    fileName?: string | null;
    status?: $Enums.DocumentStatus;
    reviewNote?: string | null;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    reminderDays?: number | null;
    uploadedById: string;
    createdAt?: Date | string;
    pharmacy: Prisma.PharmacyCreateNestedOneWithoutDocumentsInput;
};
export type ComplianceDocumentUncheckedCreateInput = {
    id?: string;
    pharmacyId: string;
    kind: $Enums.DocumentKind;
    reference: string;
    issuer: string;
    expiresAt?: Date | string | null;
    fileKey: string;
    fileName?: string | null;
    status?: $Enums.DocumentStatus;
    reviewNote?: string | null;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    reminderDays?: number | null;
    uploadedById: string;
    createdAt?: Date | string;
};
export type ComplianceDocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumDocumentKindFieldUpdateOperationsInput | $Enums.DocumentKind;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuer?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminderDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pharmacy?: Prisma.PharmacyUpdateOneRequiredWithoutDocumentsNestedInput;
};
export type ComplianceDocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pharmacyId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumDocumentKindFieldUpdateOperationsInput | $Enums.DocumentKind;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuer?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminderDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceDocumentCreateManyInput = {
    id?: string;
    pharmacyId: string;
    kind: $Enums.DocumentKind;
    reference: string;
    issuer: string;
    expiresAt?: Date | string | null;
    fileKey: string;
    fileName?: string | null;
    status?: $Enums.DocumentStatus;
    reviewNote?: string | null;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    reminderDays?: number | null;
    uploadedById: string;
    createdAt?: Date | string;
};
export type ComplianceDocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumDocumentKindFieldUpdateOperationsInput | $Enums.DocumentKind;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuer?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminderDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceDocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pharmacyId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumDocumentKindFieldUpdateOperationsInput | $Enums.DocumentKind;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuer?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminderDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceDocumentListRelationFilter = {
    every?: Prisma.ComplianceDocumentWhereInput;
    some?: Prisma.ComplianceDocumentWhereInput;
    none?: Prisma.ComplianceDocumentWhereInput;
};
export type ComplianceDocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ComplianceDocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    issuer?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    fileKey?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    reminderDays?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplianceDocumentAvgOrderByAggregateInput = {
    reminderDays?: Prisma.SortOrder;
};
export type ComplianceDocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    issuer?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    fileKey?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    reminderDays?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplianceDocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pharmacyId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    issuer?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    fileKey?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    reminderDays?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplianceDocumentSumOrderByAggregateInput = {
    reminderDays?: Prisma.SortOrder;
};
export type ComplianceDocumentCreateNestedManyWithoutPharmacyInput = {
    create?: Prisma.XOR<Prisma.ComplianceDocumentCreateWithoutPharmacyInput, Prisma.ComplianceDocumentUncheckedCreateWithoutPharmacyInput> | Prisma.ComplianceDocumentCreateWithoutPharmacyInput[] | Prisma.ComplianceDocumentUncheckedCreateWithoutPharmacyInput[];
    connectOrCreate?: Prisma.ComplianceDocumentCreateOrConnectWithoutPharmacyInput | Prisma.ComplianceDocumentCreateOrConnectWithoutPharmacyInput[];
    createMany?: Prisma.ComplianceDocumentCreateManyPharmacyInputEnvelope;
    connect?: Prisma.ComplianceDocumentWhereUniqueInput | Prisma.ComplianceDocumentWhereUniqueInput[];
};
export type ComplianceDocumentUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: Prisma.XOR<Prisma.ComplianceDocumentCreateWithoutPharmacyInput, Prisma.ComplianceDocumentUncheckedCreateWithoutPharmacyInput> | Prisma.ComplianceDocumentCreateWithoutPharmacyInput[] | Prisma.ComplianceDocumentUncheckedCreateWithoutPharmacyInput[];
    connectOrCreate?: Prisma.ComplianceDocumentCreateOrConnectWithoutPharmacyInput | Prisma.ComplianceDocumentCreateOrConnectWithoutPharmacyInput[];
    createMany?: Prisma.ComplianceDocumentCreateManyPharmacyInputEnvelope;
    connect?: Prisma.ComplianceDocumentWhereUniqueInput | Prisma.ComplianceDocumentWhereUniqueInput[];
};
export type ComplianceDocumentUpdateManyWithoutPharmacyNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceDocumentCreateWithoutPharmacyInput, Prisma.ComplianceDocumentUncheckedCreateWithoutPharmacyInput> | Prisma.ComplianceDocumentCreateWithoutPharmacyInput[] | Prisma.ComplianceDocumentUncheckedCreateWithoutPharmacyInput[];
    connectOrCreate?: Prisma.ComplianceDocumentCreateOrConnectWithoutPharmacyInput | Prisma.ComplianceDocumentCreateOrConnectWithoutPharmacyInput[];
    upsert?: Prisma.ComplianceDocumentUpsertWithWhereUniqueWithoutPharmacyInput | Prisma.ComplianceDocumentUpsertWithWhereUniqueWithoutPharmacyInput[];
    createMany?: Prisma.ComplianceDocumentCreateManyPharmacyInputEnvelope;
    set?: Prisma.ComplianceDocumentWhereUniqueInput | Prisma.ComplianceDocumentWhereUniqueInput[];
    disconnect?: Prisma.ComplianceDocumentWhereUniqueInput | Prisma.ComplianceDocumentWhereUniqueInput[];
    delete?: Prisma.ComplianceDocumentWhereUniqueInput | Prisma.ComplianceDocumentWhereUniqueInput[];
    connect?: Prisma.ComplianceDocumentWhereUniqueInput | Prisma.ComplianceDocumentWhereUniqueInput[];
    update?: Prisma.ComplianceDocumentUpdateWithWhereUniqueWithoutPharmacyInput | Prisma.ComplianceDocumentUpdateWithWhereUniqueWithoutPharmacyInput[];
    updateMany?: Prisma.ComplianceDocumentUpdateManyWithWhereWithoutPharmacyInput | Prisma.ComplianceDocumentUpdateManyWithWhereWithoutPharmacyInput[];
    deleteMany?: Prisma.ComplianceDocumentScalarWhereInput | Prisma.ComplianceDocumentScalarWhereInput[];
};
export type ComplianceDocumentUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceDocumentCreateWithoutPharmacyInput, Prisma.ComplianceDocumentUncheckedCreateWithoutPharmacyInput> | Prisma.ComplianceDocumentCreateWithoutPharmacyInput[] | Prisma.ComplianceDocumentUncheckedCreateWithoutPharmacyInput[];
    connectOrCreate?: Prisma.ComplianceDocumentCreateOrConnectWithoutPharmacyInput | Prisma.ComplianceDocumentCreateOrConnectWithoutPharmacyInput[];
    upsert?: Prisma.ComplianceDocumentUpsertWithWhereUniqueWithoutPharmacyInput | Prisma.ComplianceDocumentUpsertWithWhereUniqueWithoutPharmacyInput[];
    createMany?: Prisma.ComplianceDocumentCreateManyPharmacyInputEnvelope;
    set?: Prisma.ComplianceDocumentWhereUniqueInput | Prisma.ComplianceDocumentWhereUniqueInput[];
    disconnect?: Prisma.ComplianceDocumentWhereUniqueInput | Prisma.ComplianceDocumentWhereUniqueInput[];
    delete?: Prisma.ComplianceDocumentWhereUniqueInput | Prisma.ComplianceDocumentWhereUniqueInput[];
    connect?: Prisma.ComplianceDocumentWhereUniqueInput | Prisma.ComplianceDocumentWhereUniqueInput[];
    update?: Prisma.ComplianceDocumentUpdateWithWhereUniqueWithoutPharmacyInput | Prisma.ComplianceDocumentUpdateWithWhereUniqueWithoutPharmacyInput[];
    updateMany?: Prisma.ComplianceDocumentUpdateManyWithWhereWithoutPharmacyInput | Prisma.ComplianceDocumentUpdateManyWithWhereWithoutPharmacyInput[];
    deleteMany?: Prisma.ComplianceDocumentScalarWhereInput | Prisma.ComplianceDocumentScalarWhereInput[];
};
export type EnumDocumentKindFieldUpdateOperationsInput = {
    set?: $Enums.DocumentKind;
};
export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus;
};
export type ComplianceDocumentCreateWithoutPharmacyInput = {
    id?: string;
    kind: $Enums.DocumentKind;
    reference: string;
    issuer: string;
    expiresAt?: Date | string | null;
    fileKey: string;
    fileName?: string | null;
    status?: $Enums.DocumentStatus;
    reviewNote?: string | null;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    reminderDays?: number | null;
    uploadedById: string;
    createdAt?: Date | string;
};
export type ComplianceDocumentUncheckedCreateWithoutPharmacyInput = {
    id?: string;
    kind: $Enums.DocumentKind;
    reference: string;
    issuer: string;
    expiresAt?: Date | string | null;
    fileKey: string;
    fileName?: string | null;
    status?: $Enums.DocumentStatus;
    reviewNote?: string | null;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    reminderDays?: number | null;
    uploadedById: string;
    createdAt?: Date | string;
};
export type ComplianceDocumentCreateOrConnectWithoutPharmacyInput = {
    where: Prisma.ComplianceDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplianceDocumentCreateWithoutPharmacyInput, Prisma.ComplianceDocumentUncheckedCreateWithoutPharmacyInput>;
};
export type ComplianceDocumentCreateManyPharmacyInputEnvelope = {
    data: Prisma.ComplianceDocumentCreateManyPharmacyInput | Prisma.ComplianceDocumentCreateManyPharmacyInput[];
    skipDuplicates?: boolean;
};
export type ComplianceDocumentUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: Prisma.ComplianceDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ComplianceDocumentUpdateWithoutPharmacyInput, Prisma.ComplianceDocumentUncheckedUpdateWithoutPharmacyInput>;
    create: Prisma.XOR<Prisma.ComplianceDocumentCreateWithoutPharmacyInput, Prisma.ComplianceDocumentUncheckedCreateWithoutPharmacyInput>;
};
export type ComplianceDocumentUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: Prisma.ComplianceDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ComplianceDocumentUpdateWithoutPharmacyInput, Prisma.ComplianceDocumentUncheckedUpdateWithoutPharmacyInput>;
};
export type ComplianceDocumentUpdateManyWithWhereWithoutPharmacyInput = {
    where: Prisma.ComplianceDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.ComplianceDocumentUpdateManyMutationInput, Prisma.ComplianceDocumentUncheckedUpdateManyWithoutPharmacyInput>;
};
export type ComplianceDocumentScalarWhereInput = {
    AND?: Prisma.ComplianceDocumentScalarWhereInput | Prisma.ComplianceDocumentScalarWhereInput[];
    OR?: Prisma.ComplianceDocumentScalarWhereInput[];
    NOT?: Prisma.ComplianceDocumentScalarWhereInput | Prisma.ComplianceDocumentScalarWhereInput[];
    id?: Prisma.StringFilter<"ComplianceDocument"> | string;
    pharmacyId?: Prisma.StringFilter<"ComplianceDocument"> | string;
    kind?: Prisma.EnumDocumentKindFilter<"ComplianceDocument"> | $Enums.DocumentKind;
    reference?: Prisma.StringFilter<"ComplianceDocument"> | string;
    issuer?: Prisma.StringFilter<"ComplianceDocument"> | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"ComplianceDocument"> | Date | string | null;
    fileKey?: Prisma.StringFilter<"ComplianceDocument"> | string;
    fileName?: Prisma.StringNullableFilter<"ComplianceDocument"> | string | null;
    status?: Prisma.EnumDocumentStatusFilter<"ComplianceDocument"> | $Enums.DocumentStatus;
    reviewNote?: Prisma.StringNullableFilter<"ComplianceDocument"> | string | null;
    reviewedById?: Prisma.StringNullableFilter<"ComplianceDocument"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"ComplianceDocument"> | Date | string | null;
    reminderDays?: Prisma.IntNullableFilter<"ComplianceDocument"> | number | null;
    uploadedById?: Prisma.StringFilter<"ComplianceDocument"> | string;
    createdAt?: Prisma.DateTimeFilter<"ComplianceDocument"> | Date | string;
};
export type ComplianceDocumentCreateManyPharmacyInput = {
    id?: string;
    kind: $Enums.DocumentKind;
    reference: string;
    issuer: string;
    expiresAt?: Date | string | null;
    fileKey: string;
    fileName?: string | null;
    status?: $Enums.DocumentStatus;
    reviewNote?: string | null;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    reminderDays?: number | null;
    uploadedById: string;
    createdAt?: Date | string;
};
export type ComplianceDocumentUpdateWithoutPharmacyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumDocumentKindFieldUpdateOperationsInput | $Enums.DocumentKind;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuer?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminderDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceDocumentUncheckedUpdateWithoutPharmacyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumDocumentKindFieldUpdateOperationsInput | $Enums.DocumentKind;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuer?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminderDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceDocumentUncheckedUpdateManyWithoutPharmacyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumDocumentKindFieldUpdateOperationsInput | $Enums.DocumentKind;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuer?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminderDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceDocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pharmacyId?: boolean;
    kind?: boolean;
    reference?: boolean;
    issuer?: boolean;
    expiresAt?: boolean;
    fileKey?: boolean;
    fileName?: boolean;
    status?: boolean;
    reviewNote?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    reminderDays?: boolean;
    uploadedById?: boolean;
    createdAt?: boolean;
    pharmacy?: boolean | Prisma.PharmacyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["complianceDocument"]>;
export type ComplianceDocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pharmacyId?: boolean;
    kind?: boolean;
    reference?: boolean;
    issuer?: boolean;
    expiresAt?: boolean;
    fileKey?: boolean;
    fileName?: boolean;
    status?: boolean;
    reviewNote?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    reminderDays?: boolean;
    uploadedById?: boolean;
    createdAt?: boolean;
    pharmacy?: boolean | Prisma.PharmacyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["complianceDocument"]>;
export type ComplianceDocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pharmacyId?: boolean;
    kind?: boolean;
    reference?: boolean;
    issuer?: boolean;
    expiresAt?: boolean;
    fileKey?: boolean;
    fileName?: boolean;
    status?: boolean;
    reviewNote?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    reminderDays?: boolean;
    uploadedById?: boolean;
    createdAt?: boolean;
    pharmacy?: boolean | Prisma.PharmacyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["complianceDocument"]>;
export type ComplianceDocumentSelectScalar = {
    id?: boolean;
    pharmacyId?: boolean;
    kind?: boolean;
    reference?: boolean;
    issuer?: boolean;
    expiresAt?: boolean;
    fileKey?: boolean;
    fileName?: boolean;
    status?: boolean;
    reviewNote?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    reminderDays?: boolean;
    uploadedById?: boolean;
    createdAt?: boolean;
};
export type ComplianceDocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pharmacyId" | "kind" | "reference" | "issuer" | "expiresAt" | "fileKey" | "fileName" | "status" | "reviewNote" | "reviewedById" | "reviewedAt" | "reminderDays" | "uploadedById" | "createdAt", ExtArgs["result"]["complianceDocument"]>;
export type ComplianceDocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pharmacy?: boolean | Prisma.PharmacyDefaultArgs<ExtArgs>;
};
export type ComplianceDocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pharmacy?: boolean | Prisma.PharmacyDefaultArgs<ExtArgs>;
};
export type ComplianceDocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pharmacy?: boolean | Prisma.PharmacyDefaultArgs<ExtArgs>;
};
export type $ComplianceDocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ComplianceDocument";
    objects: {
        pharmacy: Prisma.$PharmacyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        pharmacyId: string;
        kind: $Enums.DocumentKind;
        reference: string;
        issuer: string;
        expiresAt: Date | null;
        fileKey: string;
        fileName: string | null;
        status: $Enums.DocumentStatus;
        reviewNote: string | null;
        reviewedById: string | null;
        reviewedAt: Date | null;
        reminderDays: number | null;
        uploadedById: string;
        createdAt: Date;
    }, ExtArgs["result"]["complianceDocument"]>;
    composites: {};
};
export type ComplianceDocumentGetPayload<S extends boolean | null | undefined | ComplianceDocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ComplianceDocumentPayload, S>;
export type ComplianceDocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ComplianceDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ComplianceDocumentCountAggregateInputType | true;
};
export interface ComplianceDocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ComplianceDocument'];
        meta: {
            name: 'ComplianceDocument';
        };
    };
    findUnique<T extends ComplianceDocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, ComplianceDocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ComplianceDocumentClient<runtime.Types.Result.GetResult<Prisma.$ComplianceDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ComplianceDocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ComplianceDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComplianceDocumentClient<runtime.Types.Result.GetResult<Prisma.$ComplianceDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ComplianceDocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, ComplianceDocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ComplianceDocumentClient<runtime.Types.Result.GetResult<Prisma.$ComplianceDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ComplianceDocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ComplianceDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComplianceDocumentClient<runtime.Types.Result.GetResult<Prisma.$ComplianceDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ComplianceDocumentFindManyArgs>(args?: Prisma.SelectSubset<T, ComplianceDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ComplianceDocumentCreateArgs>(args: Prisma.SelectSubset<T, ComplianceDocumentCreateArgs<ExtArgs>>): Prisma.Prisma__ComplianceDocumentClient<runtime.Types.Result.GetResult<Prisma.$ComplianceDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ComplianceDocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, ComplianceDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ComplianceDocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ComplianceDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ComplianceDocumentDeleteArgs>(args: Prisma.SelectSubset<T, ComplianceDocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__ComplianceDocumentClient<runtime.Types.Result.GetResult<Prisma.$ComplianceDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ComplianceDocumentUpdateArgs>(args: Prisma.SelectSubset<T, ComplianceDocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__ComplianceDocumentClient<runtime.Types.Result.GetResult<Prisma.$ComplianceDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ComplianceDocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ComplianceDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ComplianceDocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, ComplianceDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ComplianceDocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ComplianceDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ComplianceDocumentUpsertArgs>(args: Prisma.SelectSubset<T, ComplianceDocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__ComplianceDocumentClient<runtime.Types.Result.GetResult<Prisma.$ComplianceDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ComplianceDocumentCountArgs>(args?: Prisma.Subset<T, ComplianceDocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ComplianceDocumentCountAggregateOutputType> : number>;
    aggregate<T extends ComplianceDocumentAggregateArgs>(args: Prisma.Subset<T, ComplianceDocumentAggregateArgs>): Prisma.PrismaPromise<GetComplianceDocumentAggregateType<T>>;
    groupBy<T extends ComplianceDocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ComplianceDocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: ComplianceDocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ComplianceDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplianceDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ComplianceDocumentFieldRefs;
}
export interface Prisma__ComplianceDocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pharmacy<T extends Prisma.PharmacyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PharmacyDefaultArgs<ExtArgs>>): Prisma.Prisma__PharmacyClient<runtime.Types.Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ComplianceDocumentFieldRefs {
    readonly id: Prisma.FieldRef<"ComplianceDocument", 'String'>;
    readonly pharmacyId: Prisma.FieldRef<"ComplianceDocument", 'String'>;
    readonly kind: Prisma.FieldRef<"ComplianceDocument", 'DocumentKind'>;
    readonly reference: Prisma.FieldRef<"ComplianceDocument", 'String'>;
    readonly issuer: Prisma.FieldRef<"ComplianceDocument", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"ComplianceDocument", 'DateTime'>;
    readonly fileKey: Prisma.FieldRef<"ComplianceDocument", 'String'>;
    readonly fileName: Prisma.FieldRef<"ComplianceDocument", 'String'>;
    readonly status: Prisma.FieldRef<"ComplianceDocument", 'DocumentStatus'>;
    readonly reviewNote: Prisma.FieldRef<"ComplianceDocument", 'String'>;
    readonly reviewedById: Prisma.FieldRef<"ComplianceDocument", 'String'>;
    readonly reviewedAt: Prisma.FieldRef<"ComplianceDocument", 'DateTime'>;
    readonly reminderDays: Prisma.FieldRef<"ComplianceDocument", 'Int'>;
    readonly uploadedById: Prisma.FieldRef<"ComplianceDocument", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ComplianceDocument", 'DateTime'>;
}
export type ComplianceDocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceDocumentOmit<ExtArgs> | null;
    include?: Prisma.ComplianceDocumentInclude<ExtArgs> | null;
    where: Prisma.ComplianceDocumentWhereUniqueInput;
};
export type ComplianceDocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceDocumentOmit<ExtArgs> | null;
    include?: Prisma.ComplianceDocumentInclude<ExtArgs> | null;
    where: Prisma.ComplianceDocumentWhereUniqueInput;
};
export type ComplianceDocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceDocumentOmit<ExtArgs> | null;
    include?: Prisma.ComplianceDocumentInclude<ExtArgs> | null;
    where?: Prisma.ComplianceDocumentWhereInput;
    orderBy?: Prisma.ComplianceDocumentOrderByWithRelationInput | Prisma.ComplianceDocumentOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceDocumentScalarFieldEnum | Prisma.ComplianceDocumentScalarFieldEnum[];
};
export type ComplianceDocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceDocumentOmit<ExtArgs> | null;
    include?: Prisma.ComplianceDocumentInclude<ExtArgs> | null;
    where?: Prisma.ComplianceDocumentWhereInput;
    orderBy?: Prisma.ComplianceDocumentOrderByWithRelationInput | Prisma.ComplianceDocumentOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceDocumentScalarFieldEnum | Prisma.ComplianceDocumentScalarFieldEnum[];
};
export type ComplianceDocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceDocumentOmit<ExtArgs> | null;
    include?: Prisma.ComplianceDocumentInclude<ExtArgs> | null;
    where?: Prisma.ComplianceDocumentWhereInput;
    orderBy?: Prisma.ComplianceDocumentOrderByWithRelationInput | Prisma.ComplianceDocumentOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceDocumentScalarFieldEnum | Prisma.ComplianceDocumentScalarFieldEnum[];
};
export type ComplianceDocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceDocumentOmit<ExtArgs> | null;
    include?: Prisma.ComplianceDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceDocumentCreateInput, Prisma.ComplianceDocumentUncheckedCreateInput>;
};
export type ComplianceDocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ComplianceDocumentCreateManyInput | Prisma.ComplianceDocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ComplianceDocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceDocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComplianceDocumentOmit<ExtArgs> | null;
    data: Prisma.ComplianceDocumentCreateManyInput | Prisma.ComplianceDocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ComplianceDocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ComplianceDocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceDocumentOmit<ExtArgs> | null;
    include?: Prisma.ComplianceDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceDocumentUpdateInput, Prisma.ComplianceDocumentUncheckedUpdateInput>;
    where: Prisma.ComplianceDocumentWhereUniqueInput;
};
export type ComplianceDocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ComplianceDocumentUpdateManyMutationInput, Prisma.ComplianceDocumentUncheckedUpdateManyInput>;
    where?: Prisma.ComplianceDocumentWhereInput;
    limit?: number;
};
export type ComplianceDocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceDocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComplianceDocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceDocumentUpdateManyMutationInput, Prisma.ComplianceDocumentUncheckedUpdateManyInput>;
    where?: Prisma.ComplianceDocumentWhereInput;
    limit?: number;
    include?: Prisma.ComplianceDocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ComplianceDocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceDocumentOmit<ExtArgs> | null;
    include?: Prisma.ComplianceDocumentInclude<ExtArgs> | null;
    where: Prisma.ComplianceDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplianceDocumentCreateInput, Prisma.ComplianceDocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ComplianceDocumentUpdateInput, Prisma.ComplianceDocumentUncheckedUpdateInput>;
};
export type ComplianceDocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceDocumentOmit<ExtArgs> | null;
    include?: Prisma.ComplianceDocumentInclude<ExtArgs> | null;
    where: Prisma.ComplianceDocumentWhereUniqueInput;
};
export type ComplianceDocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceDocumentWhereInput;
    limit?: number;
};
export type ComplianceDocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceDocumentOmit<ExtArgs> | null;
    include?: Prisma.ComplianceDocumentInclude<ExtArgs> | null;
};
