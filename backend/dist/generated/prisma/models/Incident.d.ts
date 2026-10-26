import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IncidentModel = runtime.Types.Result.DefaultSelection<Prisma.$IncidentPayload>;
export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null;
    _min: IncidentMinAggregateOutputType | null;
    _max: IncidentMaxAggregateOutputType | null;
};
export type IncidentMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    orderId: string | null;
    deliveryId: string | null;
    type: $Enums.IncidentType | null;
    description: string | null;
    reportedById: string | null;
    reporterRole: $Enums.Role | null;
    status: $Enums.IncidentStatus | null;
    resolution: string | null;
    resolvedById: string | null;
    createdAt: Date | null;
    resolvedAt: Date | null;
};
export type IncidentMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    orderId: string | null;
    deliveryId: string | null;
    type: $Enums.IncidentType | null;
    description: string | null;
    reportedById: string | null;
    reporterRole: $Enums.Role | null;
    status: $Enums.IncidentStatus | null;
    resolution: string | null;
    resolvedById: string | null;
    createdAt: Date | null;
    resolvedAt: Date | null;
};
export type IncidentCountAggregateOutputType = {
    id: number;
    code: number;
    orderId: number;
    deliveryId: number;
    type: number;
    description: number;
    reportedById: number;
    reporterRole: number;
    status: number;
    resolution: number;
    resolvedById: number;
    createdAt: number;
    resolvedAt: number;
    _all: number;
};
export type IncidentMinAggregateInputType = {
    id?: true;
    code?: true;
    orderId?: true;
    deliveryId?: true;
    type?: true;
    description?: true;
    reportedById?: true;
    reporterRole?: true;
    status?: true;
    resolution?: true;
    resolvedById?: true;
    createdAt?: true;
    resolvedAt?: true;
};
export type IncidentMaxAggregateInputType = {
    id?: true;
    code?: true;
    orderId?: true;
    deliveryId?: true;
    type?: true;
    description?: true;
    reportedById?: true;
    reporterRole?: true;
    status?: true;
    resolution?: true;
    resolvedById?: true;
    createdAt?: true;
    resolvedAt?: true;
};
export type IncidentCountAggregateInputType = {
    id?: true;
    code?: true;
    orderId?: true;
    deliveryId?: true;
    type?: true;
    description?: true;
    reportedById?: true;
    reporterRole?: true;
    status?: true;
    resolution?: true;
    resolvedById?: true;
    createdAt?: true;
    resolvedAt?: true;
    _all?: true;
};
export type IncidentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncidentWhereInput;
    orderBy?: Prisma.IncidentOrderByWithRelationInput | Prisma.IncidentOrderByWithRelationInput[];
    cursor?: Prisma.IncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IncidentCountAggregateInputType;
    _min?: IncidentMinAggregateInputType;
    _max?: IncidentMaxAggregateInputType;
};
export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
    [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIncident[P]> : Prisma.GetScalarType<T[P], AggregateIncident[P]>;
};
export type IncidentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncidentWhereInput;
    orderBy?: Prisma.IncidentOrderByWithAggregationInput | Prisma.IncidentOrderByWithAggregationInput[];
    by: Prisma.IncidentScalarFieldEnum[] | Prisma.IncidentScalarFieldEnum;
    having?: Prisma.IncidentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IncidentCountAggregateInputType | true;
    _min?: IncidentMinAggregateInputType;
    _max?: IncidentMaxAggregateInputType;
};
export type IncidentGroupByOutputType = {
    id: string;
    code: string;
    orderId: string;
    deliveryId: string | null;
    type: $Enums.IncidentType;
    description: string;
    reportedById: string;
    reporterRole: $Enums.Role;
    status: $Enums.IncidentStatus;
    resolution: string | null;
    resolvedById: string | null;
    createdAt: Date;
    resolvedAt: Date | null;
    _count: IncidentCountAggregateOutputType | null;
    _min: IncidentMinAggregateOutputType | null;
    _max: IncidentMaxAggregateOutputType | null;
};
export type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IncidentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IncidentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IncidentGroupByOutputType[P]>;
}>>;
export type IncidentWhereInput = {
    AND?: Prisma.IncidentWhereInput | Prisma.IncidentWhereInput[];
    OR?: Prisma.IncidentWhereInput[];
    NOT?: Prisma.IncidentWhereInput | Prisma.IncidentWhereInput[];
    id?: Prisma.StringFilter<"Incident"> | string;
    code?: Prisma.StringFilter<"Incident"> | string;
    orderId?: Prisma.StringFilter<"Incident"> | string;
    deliveryId?: Prisma.StringNullableFilter<"Incident"> | string | null;
    type?: Prisma.EnumIncidentTypeFilter<"Incident"> | $Enums.IncidentType;
    description?: Prisma.StringFilter<"Incident"> | string;
    reportedById?: Prisma.StringFilter<"Incident"> | string;
    reporterRole?: Prisma.EnumRoleFilter<"Incident"> | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus;
    resolution?: Prisma.StringNullableFilter<"Incident"> | string | null;
    resolvedById?: Prisma.StringNullableFilter<"Incident"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Incident"> | Date | string;
    resolvedAt?: Prisma.DateTimeNullableFilter<"Incident"> | Date | string | null;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    delivery?: Prisma.XOR<Prisma.DeliveryNullableScalarRelationFilter, Prisma.DeliveryWhereInput> | null;
};
export type IncidentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    reporterRole?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolution?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolvedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    delivery?: Prisma.DeliveryOrderByWithRelationInput;
};
export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.IncidentWhereInput | Prisma.IncidentWhereInput[];
    OR?: Prisma.IncidentWhereInput[];
    NOT?: Prisma.IncidentWhereInput | Prisma.IncidentWhereInput[];
    orderId?: Prisma.StringFilter<"Incident"> | string;
    deliveryId?: Prisma.StringNullableFilter<"Incident"> | string | null;
    type?: Prisma.EnumIncidentTypeFilter<"Incident"> | $Enums.IncidentType;
    description?: Prisma.StringFilter<"Incident"> | string;
    reportedById?: Prisma.StringFilter<"Incident"> | string;
    reporterRole?: Prisma.EnumRoleFilter<"Incident"> | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus;
    resolution?: Prisma.StringNullableFilter<"Incident"> | string | null;
    resolvedById?: Prisma.StringNullableFilter<"Incident"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Incident"> | Date | string;
    resolvedAt?: Prisma.DateTimeNullableFilter<"Incident"> | Date | string | null;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    delivery?: Prisma.XOR<Prisma.DeliveryNullableScalarRelationFilter, Prisma.DeliveryWhereInput> | null;
}, "id" | "code">;
export type IncidentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    reporterRole?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolution?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolvedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.IncidentCountOrderByAggregateInput;
    _max?: Prisma.IncidentMaxOrderByAggregateInput;
    _min?: Prisma.IncidentMinOrderByAggregateInput;
};
export type IncidentScalarWhereWithAggregatesInput = {
    AND?: Prisma.IncidentScalarWhereWithAggregatesInput | Prisma.IncidentScalarWhereWithAggregatesInput[];
    OR?: Prisma.IncidentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IncidentScalarWhereWithAggregatesInput | Prisma.IncidentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Incident"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Incident"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"Incident"> | string;
    deliveryId?: Prisma.StringNullableWithAggregatesFilter<"Incident"> | string | null;
    type?: Prisma.EnumIncidentTypeWithAggregatesFilter<"Incident"> | $Enums.IncidentType;
    description?: Prisma.StringWithAggregatesFilter<"Incident"> | string;
    reportedById?: Prisma.StringWithAggregatesFilter<"Incident"> | string;
    reporterRole?: Prisma.EnumRoleWithAggregatesFilter<"Incident"> | $Enums.Role;
    status?: Prisma.EnumIncidentStatusWithAggregatesFilter<"Incident"> | $Enums.IncidentStatus;
    resolution?: Prisma.StringNullableWithAggregatesFilter<"Incident"> | string | null;
    resolvedById?: Prisma.StringNullableWithAggregatesFilter<"Incident"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Incident"> | Date | string;
    resolvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null;
};
export type IncidentCreateInput = {
    id?: string;
    code: string;
    type: $Enums.IncidentType;
    description: string;
    reportedById: string;
    reporterRole: $Enums.Role;
    status?: $Enums.IncidentStatus;
    resolution?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    order: Prisma.OrderCreateNestedOneWithoutIncidentsInput;
    delivery?: Prisma.DeliveryCreateNestedOneWithoutIncidentsInput;
};
export type IncidentUncheckedCreateInput = {
    id?: string;
    code: string;
    orderId: string;
    deliveryId?: string | null;
    type: $Enums.IncidentType;
    description: string;
    reportedById: string;
    reporterRole: $Enums.Role;
    status?: $Enums.IncidentStatus;
    resolution?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
};
export type IncidentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterRole?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order?: Prisma.OrderUpdateOneRequiredWithoutIncidentsNestedInput;
    delivery?: Prisma.DeliveryUpdateOneWithoutIncidentsNestedInput;
};
export type IncidentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterRole?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type IncidentCreateManyInput = {
    id?: string;
    code: string;
    orderId: string;
    deliveryId?: string | null;
    type: $Enums.IncidentType;
    description: string;
    reportedById: string;
    reporterRole: $Enums.Role;
    status?: $Enums.IncidentStatus;
    resolution?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
};
export type IncidentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterRole?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type IncidentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterRole?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type IncidentListRelationFilter = {
    every?: Prisma.IncidentWhereInput;
    some?: Prisma.IncidentWhereInput;
    none?: Prisma.IncidentWhereInput;
};
export type IncidentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IncidentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    reporterRole?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolution?: Prisma.SortOrder;
    resolvedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
};
export type IncidentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    reporterRole?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolution?: Prisma.SortOrder;
    resolvedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
};
export type IncidentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    reporterRole?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolution?: Prisma.SortOrder;
    resolvedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
};
export type IncidentCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutOrderInput, Prisma.IncidentUncheckedCreateWithoutOrderInput> | Prisma.IncidentCreateWithoutOrderInput[] | Prisma.IncidentUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutOrderInput | Prisma.IncidentCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.IncidentCreateManyOrderInputEnvelope;
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
};
export type IncidentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutOrderInput, Prisma.IncidentUncheckedCreateWithoutOrderInput> | Prisma.IncidentCreateWithoutOrderInput[] | Prisma.IncidentUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutOrderInput | Prisma.IncidentCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.IncidentCreateManyOrderInputEnvelope;
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
};
export type IncidentUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutOrderInput, Prisma.IncidentUncheckedCreateWithoutOrderInput> | Prisma.IncidentCreateWithoutOrderInput[] | Prisma.IncidentUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutOrderInput | Prisma.IncidentCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.IncidentUpsertWithWhereUniqueWithoutOrderInput | Prisma.IncidentUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.IncidentCreateManyOrderInputEnvelope;
    set?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    disconnect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    delete?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    update?: Prisma.IncidentUpdateWithWhereUniqueWithoutOrderInput | Prisma.IncidentUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.IncidentUpdateManyWithWhereWithoutOrderInput | Prisma.IncidentUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.IncidentScalarWhereInput | Prisma.IncidentScalarWhereInput[];
};
export type IncidentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutOrderInput, Prisma.IncidentUncheckedCreateWithoutOrderInput> | Prisma.IncidentCreateWithoutOrderInput[] | Prisma.IncidentUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutOrderInput | Prisma.IncidentCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.IncidentUpsertWithWhereUniqueWithoutOrderInput | Prisma.IncidentUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.IncidentCreateManyOrderInputEnvelope;
    set?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    disconnect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    delete?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    update?: Prisma.IncidentUpdateWithWhereUniqueWithoutOrderInput | Prisma.IncidentUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.IncidentUpdateManyWithWhereWithoutOrderInput | Prisma.IncidentUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.IncidentScalarWhereInput | Prisma.IncidentScalarWhereInput[];
};
export type IncidentCreateNestedManyWithoutDeliveryInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutDeliveryInput, Prisma.IncidentUncheckedCreateWithoutDeliveryInput> | Prisma.IncidentCreateWithoutDeliveryInput[] | Prisma.IncidentUncheckedCreateWithoutDeliveryInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutDeliveryInput | Prisma.IncidentCreateOrConnectWithoutDeliveryInput[];
    createMany?: Prisma.IncidentCreateManyDeliveryInputEnvelope;
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
};
export type IncidentUncheckedCreateNestedManyWithoutDeliveryInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutDeliveryInput, Prisma.IncidentUncheckedCreateWithoutDeliveryInput> | Prisma.IncidentCreateWithoutDeliveryInput[] | Prisma.IncidentUncheckedCreateWithoutDeliveryInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutDeliveryInput | Prisma.IncidentCreateOrConnectWithoutDeliveryInput[];
    createMany?: Prisma.IncidentCreateManyDeliveryInputEnvelope;
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
};
export type IncidentUpdateManyWithoutDeliveryNestedInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutDeliveryInput, Prisma.IncidentUncheckedCreateWithoutDeliveryInput> | Prisma.IncidentCreateWithoutDeliveryInput[] | Prisma.IncidentUncheckedCreateWithoutDeliveryInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutDeliveryInput | Prisma.IncidentCreateOrConnectWithoutDeliveryInput[];
    upsert?: Prisma.IncidentUpsertWithWhereUniqueWithoutDeliveryInput | Prisma.IncidentUpsertWithWhereUniqueWithoutDeliveryInput[];
    createMany?: Prisma.IncidentCreateManyDeliveryInputEnvelope;
    set?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    disconnect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    delete?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    update?: Prisma.IncidentUpdateWithWhereUniqueWithoutDeliveryInput | Prisma.IncidentUpdateWithWhereUniqueWithoutDeliveryInput[];
    updateMany?: Prisma.IncidentUpdateManyWithWhereWithoutDeliveryInput | Prisma.IncidentUpdateManyWithWhereWithoutDeliveryInput[];
    deleteMany?: Prisma.IncidentScalarWhereInput | Prisma.IncidentScalarWhereInput[];
};
export type IncidentUncheckedUpdateManyWithoutDeliveryNestedInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutDeliveryInput, Prisma.IncidentUncheckedCreateWithoutDeliveryInput> | Prisma.IncidentCreateWithoutDeliveryInput[] | Prisma.IncidentUncheckedCreateWithoutDeliveryInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutDeliveryInput | Prisma.IncidentCreateOrConnectWithoutDeliveryInput[];
    upsert?: Prisma.IncidentUpsertWithWhereUniqueWithoutDeliveryInput | Prisma.IncidentUpsertWithWhereUniqueWithoutDeliveryInput[];
    createMany?: Prisma.IncidentCreateManyDeliveryInputEnvelope;
    set?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    disconnect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    delete?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    update?: Prisma.IncidentUpdateWithWhereUniqueWithoutDeliveryInput | Prisma.IncidentUpdateWithWhereUniqueWithoutDeliveryInput[];
    updateMany?: Prisma.IncidentUpdateManyWithWhereWithoutDeliveryInput | Prisma.IncidentUpdateManyWithWhereWithoutDeliveryInput[];
    deleteMany?: Prisma.IncidentScalarWhereInput | Prisma.IncidentScalarWhereInput[];
};
export type EnumIncidentTypeFieldUpdateOperationsInput = {
    set?: $Enums.IncidentType;
};
export type EnumIncidentStatusFieldUpdateOperationsInput = {
    set?: $Enums.IncidentStatus;
};
export type IncidentCreateWithoutOrderInput = {
    id?: string;
    code: string;
    type: $Enums.IncidentType;
    description: string;
    reportedById: string;
    reporterRole: $Enums.Role;
    status?: $Enums.IncidentStatus;
    resolution?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    delivery?: Prisma.DeliveryCreateNestedOneWithoutIncidentsInput;
};
export type IncidentUncheckedCreateWithoutOrderInput = {
    id?: string;
    code: string;
    deliveryId?: string | null;
    type: $Enums.IncidentType;
    description: string;
    reportedById: string;
    reporterRole: $Enums.Role;
    status?: $Enums.IncidentStatus;
    resolution?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
};
export type IncidentCreateOrConnectWithoutOrderInput = {
    where: Prisma.IncidentWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncidentCreateWithoutOrderInput, Prisma.IncidentUncheckedCreateWithoutOrderInput>;
};
export type IncidentCreateManyOrderInputEnvelope = {
    data: Prisma.IncidentCreateManyOrderInput | Prisma.IncidentCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type IncidentUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.IncidentWhereUniqueInput;
    update: Prisma.XOR<Prisma.IncidentUpdateWithoutOrderInput, Prisma.IncidentUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.IncidentCreateWithoutOrderInput, Prisma.IncidentUncheckedCreateWithoutOrderInput>;
};
export type IncidentUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.IncidentWhereUniqueInput;
    data: Prisma.XOR<Prisma.IncidentUpdateWithoutOrderInput, Prisma.IncidentUncheckedUpdateWithoutOrderInput>;
};
export type IncidentUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.IncidentScalarWhereInput;
    data: Prisma.XOR<Prisma.IncidentUpdateManyMutationInput, Prisma.IncidentUncheckedUpdateManyWithoutOrderInput>;
};
export type IncidentScalarWhereInput = {
    AND?: Prisma.IncidentScalarWhereInput | Prisma.IncidentScalarWhereInput[];
    OR?: Prisma.IncidentScalarWhereInput[];
    NOT?: Prisma.IncidentScalarWhereInput | Prisma.IncidentScalarWhereInput[];
    id?: Prisma.StringFilter<"Incident"> | string;
    code?: Prisma.StringFilter<"Incident"> | string;
    orderId?: Prisma.StringFilter<"Incident"> | string;
    deliveryId?: Prisma.StringNullableFilter<"Incident"> | string | null;
    type?: Prisma.EnumIncidentTypeFilter<"Incident"> | $Enums.IncidentType;
    description?: Prisma.StringFilter<"Incident"> | string;
    reportedById?: Prisma.StringFilter<"Incident"> | string;
    reporterRole?: Prisma.EnumRoleFilter<"Incident"> | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus;
    resolution?: Prisma.StringNullableFilter<"Incident"> | string | null;
    resolvedById?: Prisma.StringNullableFilter<"Incident"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Incident"> | Date | string;
    resolvedAt?: Prisma.DateTimeNullableFilter<"Incident"> | Date | string | null;
};
export type IncidentCreateWithoutDeliveryInput = {
    id?: string;
    code: string;
    type: $Enums.IncidentType;
    description: string;
    reportedById: string;
    reporterRole: $Enums.Role;
    status?: $Enums.IncidentStatus;
    resolution?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    order: Prisma.OrderCreateNestedOneWithoutIncidentsInput;
};
export type IncidentUncheckedCreateWithoutDeliveryInput = {
    id?: string;
    code: string;
    orderId: string;
    type: $Enums.IncidentType;
    description: string;
    reportedById: string;
    reporterRole: $Enums.Role;
    status?: $Enums.IncidentStatus;
    resolution?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
};
export type IncidentCreateOrConnectWithoutDeliveryInput = {
    where: Prisma.IncidentWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncidentCreateWithoutDeliveryInput, Prisma.IncidentUncheckedCreateWithoutDeliveryInput>;
};
export type IncidentCreateManyDeliveryInputEnvelope = {
    data: Prisma.IncidentCreateManyDeliveryInput | Prisma.IncidentCreateManyDeliveryInput[];
    skipDuplicates?: boolean;
};
export type IncidentUpsertWithWhereUniqueWithoutDeliveryInput = {
    where: Prisma.IncidentWhereUniqueInput;
    update: Prisma.XOR<Prisma.IncidentUpdateWithoutDeliveryInput, Prisma.IncidentUncheckedUpdateWithoutDeliveryInput>;
    create: Prisma.XOR<Prisma.IncidentCreateWithoutDeliveryInput, Prisma.IncidentUncheckedCreateWithoutDeliveryInput>;
};
export type IncidentUpdateWithWhereUniqueWithoutDeliveryInput = {
    where: Prisma.IncidentWhereUniqueInput;
    data: Prisma.XOR<Prisma.IncidentUpdateWithoutDeliveryInput, Prisma.IncidentUncheckedUpdateWithoutDeliveryInput>;
};
export type IncidentUpdateManyWithWhereWithoutDeliveryInput = {
    where: Prisma.IncidentScalarWhereInput;
    data: Prisma.XOR<Prisma.IncidentUpdateManyMutationInput, Prisma.IncidentUncheckedUpdateManyWithoutDeliveryInput>;
};
export type IncidentCreateManyOrderInput = {
    id?: string;
    code: string;
    deliveryId?: string | null;
    type: $Enums.IncidentType;
    description: string;
    reportedById: string;
    reporterRole: $Enums.Role;
    status?: $Enums.IncidentStatus;
    resolution?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
};
export type IncidentUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterRole?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivery?: Prisma.DeliveryUpdateOneWithoutIncidentsNestedInput;
};
export type IncidentUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterRole?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type IncidentUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterRole?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type IncidentCreateManyDeliveryInput = {
    id?: string;
    code: string;
    orderId: string;
    type: $Enums.IncidentType;
    description: string;
    reportedById: string;
    reporterRole: $Enums.Role;
    status?: $Enums.IncidentStatus;
    resolution?: string | null;
    resolvedById?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
};
export type IncidentUpdateWithoutDeliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterRole?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order?: Prisma.OrderUpdateOneRequiredWithoutIncidentsNestedInput;
};
export type IncidentUncheckedUpdateWithoutDeliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterRole?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type IncidentUncheckedUpdateManyWithoutDeliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterRole?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type IncidentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    orderId?: boolean;
    deliveryId?: boolean;
    type?: boolean;
    description?: boolean;
    reportedById?: boolean;
    reporterRole?: boolean;
    status?: boolean;
    resolution?: boolean;
    resolvedById?: boolean;
    createdAt?: boolean;
    resolvedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    delivery?: boolean | Prisma.Incident$deliveryArgs<ExtArgs>;
}, ExtArgs["result"]["incident"]>;
export type IncidentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    orderId?: boolean;
    deliveryId?: boolean;
    type?: boolean;
    description?: boolean;
    reportedById?: boolean;
    reporterRole?: boolean;
    status?: boolean;
    resolution?: boolean;
    resolvedById?: boolean;
    createdAt?: boolean;
    resolvedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    delivery?: boolean | Prisma.Incident$deliveryArgs<ExtArgs>;
}, ExtArgs["result"]["incident"]>;
export type IncidentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    orderId?: boolean;
    deliveryId?: boolean;
    type?: boolean;
    description?: boolean;
    reportedById?: boolean;
    reporterRole?: boolean;
    status?: boolean;
    resolution?: boolean;
    resolvedById?: boolean;
    createdAt?: boolean;
    resolvedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    delivery?: boolean | Prisma.Incident$deliveryArgs<ExtArgs>;
}, ExtArgs["result"]["incident"]>;
export type IncidentSelectScalar = {
    id?: boolean;
    code?: boolean;
    orderId?: boolean;
    deliveryId?: boolean;
    type?: boolean;
    description?: boolean;
    reportedById?: boolean;
    reporterRole?: boolean;
    status?: boolean;
    resolution?: boolean;
    resolvedById?: boolean;
    createdAt?: boolean;
    resolvedAt?: boolean;
};
export type IncidentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "orderId" | "deliveryId" | "type" | "description" | "reportedById" | "reporterRole" | "status" | "resolution" | "resolvedById" | "createdAt" | "resolvedAt", ExtArgs["result"]["incident"]>;
export type IncidentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    delivery?: boolean | Prisma.Incident$deliveryArgs<ExtArgs>;
};
export type IncidentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    delivery?: boolean | Prisma.Incident$deliveryArgs<ExtArgs>;
};
export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    delivery?: boolean | Prisma.Incident$deliveryArgs<ExtArgs>;
};
export type $IncidentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Incident";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        delivery: Prisma.$DeliveryPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        orderId: string;
        deliveryId: string | null;
        type: $Enums.IncidentType;
        description: string;
        reportedById: string;
        reporterRole: $Enums.Role;
        status: $Enums.IncidentStatus;
        resolution: string | null;
        resolvedById: string | null;
        createdAt: Date;
        resolvedAt: Date | null;
    }, ExtArgs["result"]["incident"]>;
    composites: {};
};
export type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IncidentPayload, S>;
export type IncidentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IncidentCountAggregateInputType | true;
};
export interface IncidentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Incident'];
        meta: {
            name: 'Incident';
        };
    };
    findUnique<T extends IncidentFindUniqueArgs>(args: Prisma.SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IncidentFindFirstArgs>(args?: Prisma.SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IncidentFindManyArgs>(args?: Prisma.SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IncidentCreateArgs>(args: Prisma.SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IncidentCreateManyArgs>(args?: Prisma.SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IncidentDeleteArgs>(args: Prisma.SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IncidentUpdateArgs>(args: Prisma.SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IncidentDeleteManyArgs>(args?: Prisma.SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IncidentUpdateManyArgs>(args: Prisma.SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IncidentUpsertArgs>(args: Prisma.SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IncidentCountArgs>(args?: Prisma.Subset<T, IncidentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IncidentCountAggregateOutputType> : number>;
    aggregate<T extends IncidentAggregateArgs>(args: Prisma.Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>;
    groupBy<T extends IncidentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IncidentGroupByArgs['orderBy'];
    } : {
        orderBy?: IncidentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IncidentFieldRefs;
}
export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    delivery<T extends Prisma.Incident$deliveryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Incident$deliveryArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IncidentFieldRefs {
    readonly id: Prisma.FieldRef<"Incident", 'String'>;
    readonly code: Prisma.FieldRef<"Incident", 'String'>;
    readonly orderId: Prisma.FieldRef<"Incident", 'String'>;
    readonly deliveryId: Prisma.FieldRef<"Incident", 'String'>;
    readonly type: Prisma.FieldRef<"Incident", 'IncidentType'>;
    readonly description: Prisma.FieldRef<"Incident", 'String'>;
    readonly reportedById: Prisma.FieldRef<"Incident", 'String'>;
    readonly reporterRole: Prisma.FieldRef<"Incident", 'Role'>;
    readonly status: Prisma.FieldRef<"Incident", 'IncidentStatus'>;
    readonly resolution: Prisma.FieldRef<"Incident", 'String'>;
    readonly resolvedById: Prisma.FieldRef<"Incident", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Incident", 'DateTime'>;
    readonly resolvedAt: Prisma.FieldRef<"Incident", 'DateTime'>;
}
export type IncidentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where: Prisma.IncidentWhereUniqueInput;
};
export type IncidentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where: Prisma.IncidentWhereUniqueInput;
};
export type IncidentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where?: Prisma.IncidentWhereInput;
    orderBy?: Prisma.IncidentOrderByWithRelationInput | Prisma.IncidentOrderByWithRelationInput[];
    cursor?: Prisma.IncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncidentScalarFieldEnum | Prisma.IncidentScalarFieldEnum[];
};
export type IncidentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where?: Prisma.IncidentWhereInput;
    orderBy?: Prisma.IncidentOrderByWithRelationInput | Prisma.IncidentOrderByWithRelationInput[];
    cursor?: Prisma.IncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncidentScalarFieldEnum | Prisma.IncidentScalarFieldEnum[];
};
export type IncidentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where?: Prisma.IncidentWhereInput;
    orderBy?: Prisma.IncidentOrderByWithRelationInput | Prisma.IncidentOrderByWithRelationInput[];
    cursor?: Prisma.IncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncidentScalarFieldEnum | Prisma.IncidentScalarFieldEnum[];
};
export type IncidentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncidentCreateInput, Prisma.IncidentUncheckedCreateInput>;
};
export type IncidentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IncidentCreateManyInput | Prisma.IncidentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IncidentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    data: Prisma.IncidentCreateManyInput | Prisma.IncidentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IncidentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IncidentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncidentUpdateInput, Prisma.IncidentUncheckedUpdateInput>;
    where: Prisma.IncidentWhereUniqueInput;
};
export type IncidentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IncidentUpdateManyMutationInput, Prisma.IncidentUncheckedUpdateManyInput>;
    where?: Prisma.IncidentWhereInput;
    limit?: number;
};
export type IncidentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncidentUpdateManyMutationInput, Prisma.IncidentUncheckedUpdateManyInput>;
    where?: Prisma.IncidentWhereInput;
    limit?: number;
    include?: Prisma.IncidentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IncidentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where: Prisma.IncidentWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncidentCreateInput, Prisma.IncidentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IncidentUpdateInput, Prisma.IncidentUncheckedUpdateInput>;
};
export type IncidentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where: Prisma.IncidentWhereUniqueInput;
};
export type IncidentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncidentWhereInput;
    limit?: number;
};
export type Incident$deliveryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where?: Prisma.DeliveryWhereInput;
};
export type IncidentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
};
