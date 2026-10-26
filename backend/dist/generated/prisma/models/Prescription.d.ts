import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PrescriptionModel = runtime.Types.Result.DefaultSelection<Prisma.$PrescriptionPayload>;
export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null;
    _min: PrescriptionMinAggregateOutputType | null;
    _max: PrescriptionMaxAggregateOutputType | null;
};
export type PrescriptionMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    patientId: string | null;
    orderId: string | null;
    imageKey: string | null;
    prescriberName: string | null;
    status: $Enums.PrescriptionStatus | null;
    reviewedById: string | null;
    reviewedAt: Date | null;
    decisionNote: string | null;
    createdAt: Date | null;
};
export type PrescriptionMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    patientId: string | null;
    orderId: string | null;
    imageKey: string | null;
    prescriberName: string | null;
    status: $Enums.PrescriptionStatus | null;
    reviewedById: string | null;
    reviewedAt: Date | null;
    decisionNote: string | null;
    createdAt: Date | null;
};
export type PrescriptionCountAggregateOutputType = {
    id: number;
    code: number;
    patientId: number;
    orderId: number;
    imageKey: number;
    prescriberName: number;
    status: number;
    reviewedById: number;
    reviewedAt: number;
    decisionNote: number;
    createdAt: number;
    _all: number;
};
export type PrescriptionMinAggregateInputType = {
    id?: true;
    code?: true;
    patientId?: true;
    orderId?: true;
    imageKey?: true;
    prescriberName?: true;
    status?: true;
    reviewedById?: true;
    reviewedAt?: true;
    decisionNote?: true;
    createdAt?: true;
};
export type PrescriptionMaxAggregateInputType = {
    id?: true;
    code?: true;
    patientId?: true;
    orderId?: true;
    imageKey?: true;
    prescriberName?: true;
    status?: true;
    reviewedById?: true;
    reviewedAt?: true;
    decisionNote?: true;
    createdAt?: true;
};
export type PrescriptionCountAggregateInputType = {
    id?: true;
    code?: true;
    patientId?: true;
    orderId?: true;
    imageKey?: true;
    prescriberName?: true;
    status?: true;
    reviewedById?: true;
    reviewedAt?: true;
    decisionNote?: true;
    createdAt?: true;
    _all?: true;
};
export type PrescriptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrescriptionWhereInput;
    orderBy?: Prisma.PrescriptionOrderByWithRelationInput | Prisma.PrescriptionOrderByWithRelationInput[];
    cursor?: Prisma.PrescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PrescriptionCountAggregateInputType;
    _min?: PrescriptionMinAggregateInputType;
    _max?: PrescriptionMaxAggregateInputType;
};
export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
    [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrescription[P]> : Prisma.GetScalarType<T[P], AggregatePrescription[P]>;
};
export type PrescriptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrescriptionWhereInput;
    orderBy?: Prisma.PrescriptionOrderByWithAggregationInput | Prisma.PrescriptionOrderByWithAggregationInput[];
    by: Prisma.PrescriptionScalarFieldEnum[] | Prisma.PrescriptionScalarFieldEnum;
    having?: Prisma.PrescriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrescriptionCountAggregateInputType | true;
    _min?: PrescriptionMinAggregateInputType;
    _max?: PrescriptionMaxAggregateInputType;
};
export type PrescriptionGroupByOutputType = {
    id: string;
    code: string;
    patientId: string;
    orderId: string | null;
    imageKey: string | null;
    prescriberName: string | null;
    status: $Enums.PrescriptionStatus;
    reviewedById: string | null;
    reviewedAt: Date | null;
    decisionNote: string | null;
    createdAt: Date;
    _count: PrescriptionCountAggregateOutputType | null;
    _min: PrescriptionMinAggregateOutputType | null;
    _max: PrescriptionMaxAggregateOutputType | null;
};
export type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PrescriptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PrescriptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PrescriptionGroupByOutputType[P]>;
}>>;
export type PrescriptionWhereInput = {
    AND?: Prisma.PrescriptionWhereInput | Prisma.PrescriptionWhereInput[];
    OR?: Prisma.PrescriptionWhereInput[];
    NOT?: Prisma.PrescriptionWhereInput | Prisma.PrescriptionWhereInput[];
    id?: Prisma.StringFilter<"Prescription"> | string;
    code?: Prisma.StringFilter<"Prescription"> | string;
    patientId?: Prisma.StringFilter<"Prescription"> | string;
    orderId?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    imageKey?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    prescriberName?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    status?: Prisma.EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus;
    reviewedById?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"Prescription"> | Date | string | null;
    decisionNote?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Prescription"> | Date | string;
    patient?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
    reviewedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type PrescriptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    prescriberName?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    decisionNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    patient?: Prisma.UserOrderByWithRelationInput;
    order?: Prisma.OrderOrderByWithRelationInput;
    reviewedBy?: Prisma.UserOrderByWithRelationInput;
};
export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    orderId?: string;
    AND?: Prisma.PrescriptionWhereInput | Prisma.PrescriptionWhereInput[];
    OR?: Prisma.PrescriptionWhereInput[];
    NOT?: Prisma.PrescriptionWhereInput | Prisma.PrescriptionWhereInput[];
    patientId?: Prisma.StringFilter<"Prescription"> | string;
    imageKey?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    prescriberName?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    status?: Prisma.EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus;
    reviewedById?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"Prescription"> | Date | string | null;
    decisionNote?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Prescription"> | Date | string;
    patient?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
    reviewedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "code" | "orderId">;
export type PrescriptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    prescriberName?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    decisionNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PrescriptionCountOrderByAggregateInput;
    _max?: Prisma.PrescriptionMaxOrderByAggregateInput;
    _min?: Prisma.PrescriptionMinOrderByAggregateInput;
};
export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PrescriptionScalarWhereWithAggregatesInput | Prisma.PrescriptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PrescriptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PrescriptionScalarWhereWithAggregatesInput | Prisma.PrescriptionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Prescription"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Prescription"> | string;
    patientId?: Prisma.StringWithAggregatesFilter<"Prescription"> | string;
    orderId?: Prisma.StringNullableWithAggregatesFilter<"Prescription"> | string | null;
    imageKey?: Prisma.StringNullableWithAggregatesFilter<"Prescription"> | string | null;
    prescriberName?: Prisma.StringNullableWithAggregatesFilter<"Prescription"> | string | null;
    status?: Prisma.EnumPrescriptionStatusWithAggregatesFilter<"Prescription"> | $Enums.PrescriptionStatus;
    reviewedById?: Prisma.StringNullableWithAggregatesFilter<"Prescription"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Prescription"> | Date | string | null;
    decisionNote?: Prisma.StringNullableWithAggregatesFilter<"Prescription"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Prescription"> | Date | string;
};
export type PrescriptionCreateInput = {
    id?: string;
    code: string;
    imageKey?: string | null;
    prescriberName?: string | null;
    status?: $Enums.PrescriptionStatus;
    reviewedAt?: Date | string | null;
    decisionNote?: string | null;
    createdAt?: Date | string;
    patient: Prisma.UserCreateNestedOneWithoutPrescriptionsInput;
    order?: Prisma.OrderCreateNestedOneWithoutPrescriptionInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewsInput;
};
export type PrescriptionUncheckedCreateInput = {
    id?: string;
    code: string;
    patientId: string;
    orderId?: string | null;
    imageKey?: string | null;
    prescriberName?: string | null;
    status?: $Enums.PrescriptionStatus;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    decisionNote?: string | null;
    createdAt?: Date | string;
};
export type PrescriptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriberName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.UserUpdateOneRequiredWithoutPrescriptionsNestedInput;
    order?: Prisma.OrderUpdateOneWithoutPrescriptionNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewsNestedInput;
};
export type PrescriptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriberName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionCreateManyInput = {
    id?: string;
    code: string;
    patientId: string;
    orderId?: string | null;
    imageKey?: string | null;
    prescriberName?: string | null;
    status?: $Enums.PrescriptionStatus;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    decisionNote?: string | null;
    createdAt?: Date | string;
};
export type PrescriptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriberName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriberName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionListRelationFilter = {
    every?: Prisma.PrescriptionWhereInput;
    some?: Prisma.PrescriptionWhereInput;
    none?: Prisma.PrescriptionWhereInput;
};
export type PrescriptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PrescriptionNullableScalarRelationFilter = {
    is?: Prisma.PrescriptionWhereInput | null;
    isNot?: Prisma.PrescriptionWhereInput | null;
};
export type PrescriptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    imageKey?: Prisma.SortOrder;
    prescriberName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    decisionNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PrescriptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    imageKey?: Prisma.SortOrder;
    prescriberName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    decisionNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PrescriptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    imageKey?: Prisma.SortOrder;
    prescriberName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    decisionNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PrescriptionCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutPatientInput, Prisma.PrescriptionUncheckedCreateWithoutPatientInput> | Prisma.PrescriptionCreateWithoutPatientInput[] | Prisma.PrescriptionUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutPatientInput | Prisma.PrescriptionCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.PrescriptionCreateManyPatientInputEnvelope;
    connect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
};
export type PrescriptionCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutReviewedByInput, Prisma.PrescriptionUncheckedCreateWithoutReviewedByInput> | Prisma.PrescriptionCreateWithoutReviewedByInput[] | Prisma.PrescriptionUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutReviewedByInput | Prisma.PrescriptionCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.PrescriptionCreateManyReviewedByInputEnvelope;
    connect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
};
export type PrescriptionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutPatientInput, Prisma.PrescriptionUncheckedCreateWithoutPatientInput> | Prisma.PrescriptionCreateWithoutPatientInput[] | Prisma.PrescriptionUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutPatientInput | Prisma.PrescriptionCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.PrescriptionCreateManyPatientInputEnvelope;
    connect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
};
export type PrescriptionUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutReviewedByInput, Prisma.PrescriptionUncheckedCreateWithoutReviewedByInput> | Prisma.PrescriptionCreateWithoutReviewedByInput[] | Prisma.PrescriptionUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutReviewedByInput | Prisma.PrescriptionCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.PrescriptionCreateManyReviewedByInputEnvelope;
    connect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
};
export type PrescriptionUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutPatientInput, Prisma.PrescriptionUncheckedCreateWithoutPatientInput> | Prisma.PrescriptionCreateWithoutPatientInput[] | Prisma.PrescriptionUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutPatientInput | Prisma.PrescriptionCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.PrescriptionUpsertWithWhereUniqueWithoutPatientInput | Prisma.PrescriptionUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.PrescriptionCreateManyPatientInputEnvelope;
    set?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    disconnect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    delete?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    connect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    update?: Prisma.PrescriptionUpdateWithWhereUniqueWithoutPatientInput | Prisma.PrescriptionUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.PrescriptionUpdateManyWithWhereWithoutPatientInput | Prisma.PrescriptionUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.PrescriptionScalarWhereInput | Prisma.PrescriptionScalarWhereInput[];
};
export type PrescriptionUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutReviewedByInput, Prisma.PrescriptionUncheckedCreateWithoutReviewedByInput> | Prisma.PrescriptionCreateWithoutReviewedByInput[] | Prisma.PrescriptionUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutReviewedByInput | Prisma.PrescriptionCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.PrescriptionUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.PrescriptionUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.PrescriptionCreateManyReviewedByInputEnvelope;
    set?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    disconnect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    delete?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    connect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    update?: Prisma.PrescriptionUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.PrescriptionUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.PrescriptionUpdateManyWithWhereWithoutReviewedByInput | Prisma.PrescriptionUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.PrescriptionScalarWhereInput | Prisma.PrescriptionScalarWhereInput[];
};
export type PrescriptionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutPatientInput, Prisma.PrescriptionUncheckedCreateWithoutPatientInput> | Prisma.PrescriptionCreateWithoutPatientInput[] | Prisma.PrescriptionUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutPatientInput | Prisma.PrescriptionCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.PrescriptionUpsertWithWhereUniqueWithoutPatientInput | Prisma.PrescriptionUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.PrescriptionCreateManyPatientInputEnvelope;
    set?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    disconnect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    delete?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    connect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    update?: Prisma.PrescriptionUpdateWithWhereUniqueWithoutPatientInput | Prisma.PrescriptionUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.PrescriptionUpdateManyWithWhereWithoutPatientInput | Prisma.PrescriptionUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.PrescriptionScalarWhereInput | Prisma.PrescriptionScalarWhereInput[];
};
export type PrescriptionUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutReviewedByInput, Prisma.PrescriptionUncheckedCreateWithoutReviewedByInput> | Prisma.PrescriptionCreateWithoutReviewedByInput[] | Prisma.PrescriptionUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutReviewedByInput | Prisma.PrescriptionCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.PrescriptionUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.PrescriptionUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.PrescriptionCreateManyReviewedByInputEnvelope;
    set?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    disconnect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    delete?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    connect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    update?: Prisma.PrescriptionUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.PrescriptionUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.PrescriptionUpdateManyWithWhereWithoutReviewedByInput | Prisma.PrescriptionUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.PrescriptionScalarWhereInput | Prisma.PrescriptionScalarWhereInput[];
};
export type PrescriptionCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutOrderInput, Prisma.PrescriptionUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutOrderInput;
    connect?: Prisma.PrescriptionWhereUniqueInput;
};
export type PrescriptionUncheckedCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutOrderInput, Prisma.PrescriptionUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutOrderInput;
    connect?: Prisma.PrescriptionWhereUniqueInput;
};
export type PrescriptionUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutOrderInput, Prisma.PrescriptionUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.PrescriptionUpsertWithoutOrderInput;
    disconnect?: Prisma.PrescriptionWhereInput | boolean;
    delete?: Prisma.PrescriptionWhereInput | boolean;
    connect?: Prisma.PrescriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PrescriptionUpdateToOneWithWhereWithoutOrderInput, Prisma.PrescriptionUpdateWithoutOrderInput>, Prisma.PrescriptionUncheckedUpdateWithoutOrderInput>;
};
export type PrescriptionUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutOrderInput, Prisma.PrescriptionUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.PrescriptionUpsertWithoutOrderInput;
    disconnect?: Prisma.PrescriptionWhereInput | boolean;
    delete?: Prisma.PrescriptionWhereInput | boolean;
    connect?: Prisma.PrescriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PrescriptionUpdateToOneWithWhereWithoutOrderInput, Prisma.PrescriptionUpdateWithoutOrderInput>, Prisma.PrescriptionUncheckedUpdateWithoutOrderInput>;
};
export type EnumPrescriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.PrescriptionStatus;
};
export type PrescriptionCreateWithoutPatientInput = {
    id?: string;
    code: string;
    imageKey?: string | null;
    prescriberName?: string | null;
    status?: $Enums.PrescriptionStatus;
    reviewedAt?: Date | string | null;
    decisionNote?: string | null;
    createdAt?: Date | string;
    order?: Prisma.OrderCreateNestedOneWithoutPrescriptionInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewsInput;
};
export type PrescriptionUncheckedCreateWithoutPatientInput = {
    id?: string;
    code: string;
    orderId?: string | null;
    imageKey?: string | null;
    prescriberName?: string | null;
    status?: $Enums.PrescriptionStatus;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    decisionNote?: string | null;
    createdAt?: Date | string;
};
export type PrescriptionCreateOrConnectWithoutPatientInput = {
    where: Prisma.PrescriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrescriptionCreateWithoutPatientInput, Prisma.PrescriptionUncheckedCreateWithoutPatientInput>;
};
export type PrescriptionCreateManyPatientInputEnvelope = {
    data: Prisma.PrescriptionCreateManyPatientInput | Prisma.PrescriptionCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type PrescriptionCreateWithoutReviewedByInput = {
    id?: string;
    code: string;
    imageKey?: string | null;
    prescriberName?: string | null;
    status?: $Enums.PrescriptionStatus;
    reviewedAt?: Date | string | null;
    decisionNote?: string | null;
    createdAt?: Date | string;
    patient: Prisma.UserCreateNestedOneWithoutPrescriptionsInput;
    order?: Prisma.OrderCreateNestedOneWithoutPrescriptionInput;
};
export type PrescriptionUncheckedCreateWithoutReviewedByInput = {
    id?: string;
    code: string;
    patientId: string;
    orderId?: string | null;
    imageKey?: string | null;
    prescriberName?: string | null;
    status?: $Enums.PrescriptionStatus;
    reviewedAt?: Date | string | null;
    decisionNote?: string | null;
    createdAt?: Date | string;
};
export type PrescriptionCreateOrConnectWithoutReviewedByInput = {
    where: Prisma.PrescriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrescriptionCreateWithoutReviewedByInput, Prisma.PrescriptionUncheckedCreateWithoutReviewedByInput>;
};
export type PrescriptionCreateManyReviewedByInputEnvelope = {
    data: Prisma.PrescriptionCreateManyReviewedByInput | Prisma.PrescriptionCreateManyReviewedByInput[];
    skipDuplicates?: boolean;
};
export type PrescriptionUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.PrescriptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrescriptionUpdateWithoutPatientInput, Prisma.PrescriptionUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.PrescriptionCreateWithoutPatientInput, Prisma.PrescriptionUncheckedCreateWithoutPatientInput>;
};
export type PrescriptionUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.PrescriptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrescriptionUpdateWithoutPatientInput, Prisma.PrescriptionUncheckedUpdateWithoutPatientInput>;
};
export type PrescriptionUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.PrescriptionScalarWhereInput;
    data: Prisma.XOR<Prisma.PrescriptionUpdateManyMutationInput, Prisma.PrescriptionUncheckedUpdateManyWithoutPatientInput>;
};
export type PrescriptionScalarWhereInput = {
    AND?: Prisma.PrescriptionScalarWhereInput | Prisma.PrescriptionScalarWhereInput[];
    OR?: Prisma.PrescriptionScalarWhereInput[];
    NOT?: Prisma.PrescriptionScalarWhereInput | Prisma.PrescriptionScalarWhereInput[];
    id?: Prisma.StringFilter<"Prescription"> | string;
    code?: Prisma.StringFilter<"Prescription"> | string;
    patientId?: Prisma.StringFilter<"Prescription"> | string;
    orderId?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    imageKey?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    prescriberName?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    status?: Prisma.EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus;
    reviewedById?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"Prescription"> | Date | string | null;
    decisionNote?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Prescription"> | Date | string;
};
export type PrescriptionUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.PrescriptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrescriptionUpdateWithoutReviewedByInput, Prisma.PrescriptionUncheckedUpdateWithoutReviewedByInput>;
    create: Prisma.XOR<Prisma.PrescriptionCreateWithoutReviewedByInput, Prisma.PrescriptionUncheckedCreateWithoutReviewedByInput>;
};
export type PrescriptionUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.PrescriptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrescriptionUpdateWithoutReviewedByInput, Prisma.PrescriptionUncheckedUpdateWithoutReviewedByInput>;
};
export type PrescriptionUpdateManyWithWhereWithoutReviewedByInput = {
    where: Prisma.PrescriptionScalarWhereInput;
    data: Prisma.XOR<Prisma.PrescriptionUpdateManyMutationInput, Prisma.PrescriptionUncheckedUpdateManyWithoutReviewedByInput>;
};
export type PrescriptionCreateWithoutOrderInput = {
    id?: string;
    code: string;
    imageKey?: string | null;
    prescriberName?: string | null;
    status?: $Enums.PrescriptionStatus;
    reviewedAt?: Date | string | null;
    decisionNote?: string | null;
    createdAt?: Date | string;
    patient: Prisma.UserCreateNestedOneWithoutPrescriptionsInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewsInput;
};
export type PrescriptionUncheckedCreateWithoutOrderInput = {
    id?: string;
    code: string;
    patientId: string;
    imageKey?: string | null;
    prescriberName?: string | null;
    status?: $Enums.PrescriptionStatus;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    decisionNote?: string | null;
    createdAt?: Date | string;
};
export type PrescriptionCreateOrConnectWithoutOrderInput = {
    where: Prisma.PrescriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrescriptionCreateWithoutOrderInput, Prisma.PrescriptionUncheckedCreateWithoutOrderInput>;
};
export type PrescriptionUpsertWithoutOrderInput = {
    update: Prisma.XOR<Prisma.PrescriptionUpdateWithoutOrderInput, Prisma.PrescriptionUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.PrescriptionCreateWithoutOrderInput, Prisma.PrescriptionUncheckedCreateWithoutOrderInput>;
    where?: Prisma.PrescriptionWhereInput;
};
export type PrescriptionUpdateToOneWithWhereWithoutOrderInput = {
    where?: Prisma.PrescriptionWhereInput;
    data: Prisma.XOR<Prisma.PrescriptionUpdateWithoutOrderInput, Prisma.PrescriptionUncheckedUpdateWithoutOrderInput>;
};
export type PrescriptionUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriberName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.UserUpdateOneRequiredWithoutPrescriptionsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewsNestedInput;
};
export type PrescriptionUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriberName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionCreateManyPatientInput = {
    id?: string;
    code: string;
    orderId?: string | null;
    imageKey?: string | null;
    prescriberName?: string | null;
    status?: $Enums.PrescriptionStatus;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    decisionNote?: string | null;
    createdAt?: Date | string;
};
export type PrescriptionCreateManyReviewedByInput = {
    id?: string;
    code: string;
    patientId: string;
    orderId?: string | null;
    imageKey?: string | null;
    prescriberName?: string | null;
    status?: $Enums.PrescriptionStatus;
    reviewedAt?: Date | string | null;
    decisionNote?: string | null;
    createdAt?: Date | string;
};
export type PrescriptionUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriberName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneWithoutPrescriptionNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewsNestedInput;
};
export type PrescriptionUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriberName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriberName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriberName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.UserUpdateOneRequiredWithoutPrescriptionsNestedInput;
    order?: Prisma.OrderUpdateOneWithoutPrescriptionNestedInput;
};
export type PrescriptionUncheckedUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriberName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionUncheckedUpdateManyWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriberName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    decisionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    patientId?: boolean;
    orderId?: boolean;
    imageKey?: boolean;
    prescriberName?: boolean;
    status?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    decisionNote?: boolean;
    createdAt?: boolean;
    patient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.Prescription$orderArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.Prescription$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["prescription"]>;
export type PrescriptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    patientId?: boolean;
    orderId?: boolean;
    imageKey?: boolean;
    prescriberName?: boolean;
    status?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    decisionNote?: boolean;
    createdAt?: boolean;
    patient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.Prescription$orderArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.Prescription$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["prescription"]>;
export type PrescriptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    patientId?: boolean;
    orderId?: boolean;
    imageKey?: boolean;
    prescriberName?: boolean;
    status?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    decisionNote?: boolean;
    createdAt?: boolean;
    patient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.Prescription$orderArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.Prescription$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["prescription"]>;
export type PrescriptionSelectScalar = {
    id?: boolean;
    code?: boolean;
    patientId?: boolean;
    orderId?: boolean;
    imageKey?: boolean;
    prescriberName?: boolean;
    status?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    decisionNote?: boolean;
    createdAt?: boolean;
};
export type PrescriptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "patientId" | "orderId" | "imageKey" | "prescriberName" | "status" | "reviewedById" | "reviewedAt" | "decisionNote" | "createdAt", ExtArgs["result"]["prescription"]>;
export type PrescriptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.Prescription$orderArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.Prescription$reviewedByArgs<ExtArgs>;
};
export type PrescriptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.Prescription$orderArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.Prescription$reviewedByArgs<ExtArgs>;
};
export type PrescriptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.Prescription$orderArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.Prescription$reviewedByArgs<ExtArgs>;
};
export type $PrescriptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Prescription";
    objects: {
        patient: Prisma.$UserPayload<ExtArgs>;
        order: Prisma.$OrderPayload<ExtArgs> | null;
        reviewedBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        patientId: string;
        orderId: string | null;
        imageKey: string | null;
        prescriberName: string | null;
        status: $Enums.PrescriptionStatus;
        reviewedById: string | null;
        reviewedAt: Date | null;
        decisionNote: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["prescription"]>;
    composites: {};
};
export type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload, S>;
export type PrescriptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PrescriptionCountAggregateInputType | true;
};
export interface PrescriptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Prescription'];
        meta: {
            name: 'Prescription';
        };
    };
    findUnique<T extends PrescriptionFindUniqueArgs>(args: Prisma.SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PrescriptionFindFirstArgs>(args?: Prisma.SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PrescriptionFindManyArgs>(args?: Prisma.SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PrescriptionCreateArgs>(args: Prisma.SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PrescriptionCreateManyArgs>(args?: Prisma.SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PrescriptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PrescriptionDeleteArgs>(args: Prisma.SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PrescriptionUpdateArgs>(args: Prisma.SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PrescriptionUpdateManyArgs>(args: Prisma.SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PrescriptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PrescriptionUpsertArgs>(args: Prisma.SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PrescriptionCountArgs>(args?: Prisma.Subset<T, PrescriptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PrescriptionCountAggregateOutputType> : number>;
    aggregate<T extends PrescriptionAggregateArgs>(args: Prisma.Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>;
    groupBy<T extends PrescriptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PrescriptionGroupByArgs['orderBy'];
    } : {
        orderBy?: PrescriptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PrescriptionFieldRefs;
}
export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patient<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    order<T extends Prisma.Prescription$orderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Prescription$orderArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    reviewedBy<T extends Prisma.Prescription$reviewedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Prescription$reviewedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PrescriptionFieldRefs {
    readonly id: Prisma.FieldRef<"Prescription", 'String'>;
    readonly code: Prisma.FieldRef<"Prescription", 'String'>;
    readonly patientId: Prisma.FieldRef<"Prescription", 'String'>;
    readonly orderId: Prisma.FieldRef<"Prescription", 'String'>;
    readonly imageKey: Prisma.FieldRef<"Prescription", 'String'>;
    readonly prescriberName: Prisma.FieldRef<"Prescription", 'String'>;
    readonly status: Prisma.FieldRef<"Prescription", 'PrescriptionStatus'>;
    readonly reviewedById: Prisma.FieldRef<"Prescription", 'String'>;
    readonly reviewedAt: Prisma.FieldRef<"Prescription", 'DateTime'>;
    readonly decisionNote: Prisma.FieldRef<"Prescription", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Prescription", 'DateTime'>;
}
export type PrescriptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where: Prisma.PrescriptionWhereUniqueInput;
};
export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where: Prisma.PrescriptionWhereUniqueInput;
};
export type PrescriptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where?: Prisma.PrescriptionWhereInput;
    orderBy?: Prisma.PrescriptionOrderByWithRelationInput | Prisma.PrescriptionOrderByWithRelationInput[];
    cursor?: Prisma.PrescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrescriptionScalarFieldEnum | Prisma.PrescriptionScalarFieldEnum[];
};
export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where?: Prisma.PrescriptionWhereInput;
    orderBy?: Prisma.PrescriptionOrderByWithRelationInput | Prisma.PrescriptionOrderByWithRelationInput[];
    cursor?: Prisma.PrescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrescriptionScalarFieldEnum | Prisma.PrescriptionScalarFieldEnum[];
};
export type PrescriptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where?: Prisma.PrescriptionWhereInput;
    orderBy?: Prisma.PrescriptionOrderByWithRelationInput | Prisma.PrescriptionOrderByWithRelationInput[];
    cursor?: Prisma.PrescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrescriptionScalarFieldEnum | Prisma.PrescriptionScalarFieldEnum[];
};
export type PrescriptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrescriptionCreateInput, Prisma.PrescriptionUncheckedCreateInput>;
};
export type PrescriptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PrescriptionCreateManyInput | Prisma.PrescriptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PrescriptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    data: Prisma.PrescriptionCreateManyInput | Prisma.PrescriptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PrescriptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PrescriptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrescriptionUpdateInput, Prisma.PrescriptionUncheckedUpdateInput>;
    where: Prisma.PrescriptionWhereUniqueInput;
};
export type PrescriptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PrescriptionUpdateManyMutationInput, Prisma.PrescriptionUncheckedUpdateManyInput>;
    where?: Prisma.PrescriptionWhereInput;
    limit?: number;
};
export type PrescriptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrescriptionUpdateManyMutationInput, Prisma.PrescriptionUncheckedUpdateManyInput>;
    where?: Prisma.PrescriptionWhereInput;
    limit?: number;
    include?: Prisma.PrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PrescriptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where: Prisma.PrescriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrescriptionCreateInput, Prisma.PrescriptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PrescriptionUpdateInput, Prisma.PrescriptionUncheckedUpdateInput>;
};
export type PrescriptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where: Prisma.PrescriptionWhereUniqueInput;
};
export type PrescriptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrescriptionWhereInput;
    limit?: number;
};
export type Prescription$orderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
};
export type Prescription$reviewedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type PrescriptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
};
