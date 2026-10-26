import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CourierModel = runtime.Types.Result.DefaultSelection<Prisma.$CourierPayload>;
export type AggregateCourier = {
    _count: CourierCountAggregateOutputType | null;
    _avg: CourierAvgAggregateOutputType | null;
    _sum: CourierSumAggregateOutputType | null;
    _min: CourierMinAggregateOutputType | null;
    _max: CourierMaxAggregateOutputType | null;
};
export type CourierAvgAggregateOutputType = {
    priority: number | null;
};
export type CourierSumAggregateOutputType = {
    priority: number | null;
};
export type CourierMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    contact: string | null;
    acceptsPrescription: boolean | null;
    acceptsColdChain: boolean | null;
    approvalNote: string | null;
    active: boolean | null;
    api: string | null;
    priority: number | null;
    createdAt: Date | null;
};
export type CourierMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    contact: string | null;
    acceptsPrescription: boolean | null;
    acceptsColdChain: boolean | null;
    approvalNote: string | null;
    active: boolean | null;
    api: string | null;
    priority: number | null;
    createdAt: Date | null;
};
export type CourierCountAggregateOutputType = {
    id: number;
    name: number;
    contact: number;
    acceptsPrescription: number;
    acceptsColdChain: number;
    approvalNote: number;
    active: number;
    api: number;
    priority: number;
    createdAt: number;
    _all: number;
};
export type CourierAvgAggregateInputType = {
    priority?: true;
};
export type CourierSumAggregateInputType = {
    priority?: true;
};
export type CourierMinAggregateInputType = {
    id?: true;
    name?: true;
    contact?: true;
    acceptsPrescription?: true;
    acceptsColdChain?: true;
    approvalNote?: true;
    active?: true;
    api?: true;
    priority?: true;
    createdAt?: true;
};
export type CourierMaxAggregateInputType = {
    id?: true;
    name?: true;
    contact?: true;
    acceptsPrescription?: true;
    acceptsColdChain?: true;
    approvalNote?: true;
    active?: true;
    api?: true;
    priority?: true;
    createdAt?: true;
};
export type CourierCountAggregateInputType = {
    id?: true;
    name?: true;
    contact?: true;
    acceptsPrescription?: true;
    acceptsColdChain?: true;
    approvalNote?: true;
    active?: true;
    api?: true;
    priority?: true;
    createdAt?: true;
    _all?: true;
};
export type CourierAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourierWhereInput;
    orderBy?: Prisma.CourierOrderByWithRelationInput | Prisma.CourierOrderByWithRelationInput[];
    cursor?: Prisma.CourierWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CourierCountAggregateInputType;
    _avg?: CourierAvgAggregateInputType;
    _sum?: CourierSumAggregateInputType;
    _min?: CourierMinAggregateInputType;
    _max?: CourierMaxAggregateInputType;
};
export type GetCourierAggregateType<T extends CourierAggregateArgs> = {
    [P in keyof T & keyof AggregateCourier]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourier[P]> : Prisma.GetScalarType<T[P], AggregateCourier[P]>;
};
export type CourierGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourierWhereInput;
    orderBy?: Prisma.CourierOrderByWithAggregationInput | Prisma.CourierOrderByWithAggregationInput[];
    by: Prisma.CourierScalarFieldEnum[] | Prisma.CourierScalarFieldEnum;
    having?: Prisma.CourierScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourierCountAggregateInputType | true;
    _avg?: CourierAvgAggregateInputType;
    _sum?: CourierSumAggregateInputType;
    _min?: CourierMinAggregateInputType;
    _max?: CourierMaxAggregateInputType;
};
export type CourierGroupByOutputType = {
    id: string;
    name: string;
    contact: string | null;
    acceptsPrescription: boolean;
    acceptsColdChain: boolean;
    approvalNote: string | null;
    active: boolean;
    api: string | null;
    priority: number;
    createdAt: Date;
    _count: CourierCountAggregateOutputType | null;
    _avg: CourierAvgAggregateOutputType | null;
    _sum: CourierSumAggregateOutputType | null;
    _min: CourierMinAggregateOutputType | null;
    _max: CourierMaxAggregateOutputType | null;
};
export type GetCourierGroupByPayload<T extends CourierGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CourierGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CourierGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CourierGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CourierGroupByOutputType[P]>;
}>>;
export type CourierWhereInput = {
    AND?: Prisma.CourierWhereInput | Prisma.CourierWhereInput[];
    OR?: Prisma.CourierWhereInput[];
    NOT?: Prisma.CourierWhereInput | Prisma.CourierWhereInput[];
    id?: Prisma.StringFilter<"Courier"> | string;
    name?: Prisma.StringFilter<"Courier"> | string;
    contact?: Prisma.StringNullableFilter<"Courier"> | string | null;
    acceptsPrescription?: Prisma.BoolFilter<"Courier"> | boolean;
    acceptsColdChain?: Prisma.BoolFilter<"Courier"> | boolean;
    approvalNote?: Prisma.StringNullableFilter<"Courier"> | string | null;
    active?: Prisma.BoolFilter<"Courier"> | boolean;
    api?: Prisma.StringNullableFilter<"Courier"> | string | null;
    priority?: Prisma.IntFilter<"Courier"> | number;
    createdAt?: Prisma.DateTimeFilter<"Courier"> | Date | string;
    deliveries?: Prisma.DeliveryListRelationFilter;
    invoices?: Prisma.CourierInvoiceListRelationFilter;
};
export type CourierOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    contact?: Prisma.SortOrderInput | Prisma.SortOrder;
    acceptsPrescription?: Prisma.SortOrder;
    acceptsColdChain?: Prisma.SortOrder;
    approvalNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    api?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deliveries?: Prisma.DeliveryOrderByRelationAggregateInput;
    invoices?: Prisma.CourierInvoiceOrderByRelationAggregateInput;
};
export type CourierWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.CourierWhereInput | Prisma.CourierWhereInput[];
    OR?: Prisma.CourierWhereInput[];
    NOT?: Prisma.CourierWhereInput | Prisma.CourierWhereInput[];
    contact?: Prisma.StringNullableFilter<"Courier"> | string | null;
    acceptsPrescription?: Prisma.BoolFilter<"Courier"> | boolean;
    acceptsColdChain?: Prisma.BoolFilter<"Courier"> | boolean;
    approvalNote?: Prisma.StringNullableFilter<"Courier"> | string | null;
    active?: Prisma.BoolFilter<"Courier"> | boolean;
    api?: Prisma.StringNullableFilter<"Courier"> | string | null;
    priority?: Prisma.IntFilter<"Courier"> | number;
    createdAt?: Prisma.DateTimeFilter<"Courier"> | Date | string;
    deliveries?: Prisma.DeliveryListRelationFilter;
    invoices?: Prisma.CourierInvoiceListRelationFilter;
}, "id" | "name">;
export type CourierOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    contact?: Prisma.SortOrderInput | Prisma.SortOrder;
    acceptsPrescription?: Prisma.SortOrder;
    acceptsColdChain?: Prisma.SortOrder;
    approvalNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    api?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CourierCountOrderByAggregateInput;
    _avg?: Prisma.CourierAvgOrderByAggregateInput;
    _max?: Prisma.CourierMaxOrderByAggregateInput;
    _min?: Prisma.CourierMinOrderByAggregateInput;
    _sum?: Prisma.CourierSumOrderByAggregateInput;
};
export type CourierScalarWhereWithAggregatesInput = {
    AND?: Prisma.CourierScalarWhereWithAggregatesInput | Prisma.CourierScalarWhereWithAggregatesInput[];
    OR?: Prisma.CourierScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CourierScalarWhereWithAggregatesInput | Prisma.CourierScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Courier"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Courier"> | string;
    contact?: Prisma.StringNullableWithAggregatesFilter<"Courier"> | string | null;
    acceptsPrescription?: Prisma.BoolWithAggregatesFilter<"Courier"> | boolean;
    acceptsColdChain?: Prisma.BoolWithAggregatesFilter<"Courier"> | boolean;
    approvalNote?: Prisma.StringNullableWithAggregatesFilter<"Courier"> | string | null;
    active?: Prisma.BoolWithAggregatesFilter<"Courier"> | boolean;
    api?: Prisma.StringNullableWithAggregatesFilter<"Courier"> | string | null;
    priority?: Prisma.IntWithAggregatesFilter<"Courier"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Courier"> | Date | string;
};
export type CourierCreateInput = {
    id?: string;
    name: string;
    contact?: string | null;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: string | null;
    active?: boolean;
    api?: string | null;
    priority?: number;
    createdAt?: Date | string;
    deliveries?: Prisma.DeliveryCreateNestedManyWithoutCourierInput;
    invoices?: Prisma.CourierInvoiceCreateNestedManyWithoutCourierInput;
};
export type CourierUncheckedCreateInput = {
    id?: string;
    name: string;
    contact?: string | null;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: string | null;
    active?: boolean;
    api?: string | null;
    priority?: number;
    createdAt?: Date | string;
    deliveries?: Prisma.DeliveryUncheckedCreateNestedManyWithoutCourierInput;
    invoices?: Prisma.CourierInvoiceUncheckedCreateNestedManyWithoutCourierInput;
};
export type CourierUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptsPrescription?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    acceptsColdChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    approvalNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    api?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.DeliveryUpdateManyWithoutCourierNestedInput;
    invoices?: Prisma.CourierInvoiceUpdateManyWithoutCourierNestedInput;
};
export type CourierUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptsPrescription?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    acceptsColdChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    approvalNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    api?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.DeliveryUncheckedUpdateManyWithoutCourierNestedInput;
    invoices?: Prisma.CourierInvoiceUncheckedUpdateManyWithoutCourierNestedInput;
};
export type CourierCreateManyInput = {
    id?: string;
    name: string;
    contact?: string | null;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: string | null;
    active?: boolean;
    api?: string | null;
    priority?: number;
    createdAt?: Date | string;
};
export type CourierUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptsPrescription?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    acceptsColdChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    approvalNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    api?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourierUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptsPrescription?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    acceptsColdChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    approvalNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    api?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourierNullableScalarRelationFilter = {
    is?: Prisma.CourierWhereInput | null;
    isNot?: Prisma.CourierWhereInput | null;
};
export type CourierCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    acceptsPrescription?: Prisma.SortOrder;
    acceptsColdChain?: Prisma.SortOrder;
    approvalNote?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    api?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CourierAvgOrderByAggregateInput = {
    priority?: Prisma.SortOrder;
};
export type CourierMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    acceptsPrescription?: Prisma.SortOrder;
    acceptsColdChain?: Prisma.SortOrder;
    approvalNote?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    api?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CourierMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    acceptsPrescription?: Prisma.SortOrder;
    acceptsColdChain?: Prisma.SortOrder;
    approvalNote?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    api?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CourierSumOrderByAggregateInput = {
    priority?: Prisma.SortOrder;
};
export type CourierScalarRelationFilter = {
    is?: Prisma.CourierWhereInput;
    isNot?: Prisma.CourierWhereInput;
};
export type CourierCreateNestedOneWithoutDeliveriesInput = {
    create?: Prisma.XOR<Prisma.CourierCreateWithoutDeliveriesInput, Prisma.CourierUncheckedCreateWithoutDeliveriesInput>;
    connectOrCreate?: Prisma.CourierCreateOrConnectWithoutDeliveriesInput;
    connect?: Prisma.CourierWhereUniqueInput;
};
export type CourierUpdateOneWithoutDeliveriesNestedInput = {
    create?: Prisma.XOR<Prisma.CourierCreateWithoutDeliveriesInput, Prisma.CourierUncheckedCreateWithoutDeliveriesInput>;
    connectOrCreate?: Prisma.CourierCreateOrConnectWithoutDeliveriesInput;
    upsert?: Prisma.CourierUpsertWithoutDeliveriesInput;
    disconnect?: Prisma.CourierWhereInput | boolean;
    delete?: Prisma.CourierWhereInput | boolean;
    connect?: Prisma.CourierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourierUpdateToOneWithWhereWithoutDeliveriesInput, Prisma.CourierUpdateWithoutDeliveriesInput>, Prisma.CourierUncheckedUpdateWithoutDeliveriesInput>;
};
export type CourierCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.CourierCreateWithoutInvoicesInput, Prisma.CourierUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.CourierCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.CourierWhereUniqueInput;
};
export type CourierUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.CourierCreateWithoutInvoicesInput, Prisma.CourierUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.CourierCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.CourierUpsertWithoutInvoicesInput;
    connect?: Prisma.CourierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourierUpdateToOneWithWhereWithoutInvoicesInput, Prisma.CourierUpdateWithoutInvoicesInput>, Prisma.CourierUncheckedUpdateWithoutInvoicesInput>;
};
export type CourierCreateWithoutDeliveriesInput = {
    id?: string;
    name: string;
    contact?: string | null;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: string | null;
    active?: boolean;
    api?: string | null;
    priority?: number;
    createdAt?: Date | string;
    invoices?: Prisma.CourierInvoiceCreateNestedManyWithoutCourierInput;
};
export type CourierUncheckedCreateWithoutDeliveriesInput = {
    id?: string;
    name: string;
    contact?: string | null;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: string | null;
    active?: boolean;
    api?: string | null;
    priority?: number;
    createdAt?: Date | string;
    invoices?: Prisma.CourierInvoiceUncheckedCreateNestedManyWithoutCourierInput;
};
export type CourierCreateOrConnectWithoutDeliveriesInput = {
    where: Prisma.CourierWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourierCreateWithoutDeliveriesInput, Prisma.CourierUncheckedCreateWithoutDeliveriesInput>;
};
export type CourierUpsertWithoutDeliveriesInput = {
    update: Prisma.XOR<Prisma.CourierUpdateWithoutDeliveriesInput, Prisma.CourierUncheckedUpdateWithoutDeliveriesInput>;
    create: Prisma.XOR<Prisma.CourierCreateWithoutDeliveriesInput, Prisma.CourierUncheckedCreateWithoutDeliveriesInput>;
    where?: Prisma.CourierWhereInput;
};
export type CourierUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: Prisma.CourierWhereInput;
    data: Prisma.XOR<Prisma.CourierUpdateWithoutDeliveriesInput, Prisma.CourierUncheckedUpdateWithoutDeliveriesInput>;
};
export type CourierUpdateWithoutDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptsPrescription?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    acceptsColdChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    approvalNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    api?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.CourierInvoiceUpdateManyWithoutCourierNestedInput;
};
export type CourierUncheckedUpdateWithoutDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptsPrescription?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    acceptsColdChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    approvalNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    api?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.CourierInvoiceUncheckedUpdateManyWithoutCourierNestedInput;
};
export type CourierCreateWithoutInvoicesInput = {
    id?: string;
    name: string;
    contact?: string | null;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: string | null;
    active?: boolean;
    api?: string | null;
    priority?: number;
    createdAt?: Date | string;
    deliveries?: Prisma.DeliveryCreateNestedManyWithoutCourierInput;
};
export type CourierUncheckedCreateWithoutInvoicesInput = {
    id?: string;
    name: string;
    contact?: string | null;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: string | null;
    active?: boolean;
    api?: string | null;
    priority?: number;
    createdAt?: Date | string;
    deliveries?: Prisma.DeliveryUncheckedCreateNestedManyWithoutCourierInput;
};
export type CourierCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.CourierWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourierCreateWithoutInvoicesInput, Prisma.CourierUncheckedCreateWithoutInvoicesInput>;
};
export type CourierUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.CourierUpdateWithoutInvoicesInput, Prisma.CourierUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.CourierCreateWithoutInvoicesInput, Prisma.CourierUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.CourierWhereInput;
};
export type CourierUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.CourierWhereInput;
    data: Prisma.XOR<Prisma.CourierUpdateWithoutInvoicesInput, Prisma.CourierUncheckedUpdateWithoutInvoicesInput>;
};
export type CourierUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptsPrescription?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    acceptsColdChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    approvalNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    api?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.DeliveryUpdateManyWithoutCourierNestedInput;
};
export type CourierUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptsPrescription?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    acceptsColdChain?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    approvalNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    api?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.DeliveryUncheckedUpdateManyWithoutCourierNestedInput;
};
export type CourierCountOutputType = {
    deliveries: number;
    invoices: number;
};
export type CourierCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deliveries?: boolean | CourierCountOutputTypeCountDeliveriesArgs;
    invoices?: boolean | CourierCountOutputTypeCountInvoicesArgs;
};
export type CourierCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierCountOutputTypeSelect<ExtArgs> | null;
};
export type CourierCountOutputTypeCountDeliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryWhereInput;
};
export type CourierCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourierInvoiceWhereInput;
};
export type CourierSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    contact?: boolean;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: boolean;
    active?: boolean;
    api?: boolean;
    priority?: boolean;
    createdAt?: boolean;
    deliveries?: boolean | Prisma.Courier$deliveriesArgs<ExtArgs>;
    invoices?: boolean | Prisma.Courier$invoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.CourierCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courier"]>;
export type CourierSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    contact?: boolean;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: boolean;
    active?: boolean;
    api?: boolean;
    priority?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["courier"]>;
export type CourierSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    contact?: boolean;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: boolean;
    active?: boolean;
    api?: boolean;
    priority?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["courier"]>;
export type CourierSelectScalar = {
    id?: boolean;
    name?: boolean;
    contact?: boolean;
    acceptsPrescription?: boolean;
    acceptsColdChain?: boolean;
    approvalNote?: boolean;
    active?: boolean;
    api?: boolean;
    priority?: boolean;
    createdAt?: boolean;
};
export type CourierOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "contact" | "acceptsPrescription" | "acceptsColdChain" | "approvalNote" | "active" | "api" | "priority" | "createdAt", ExtArgs["result"]["courier"]>;
export type CourierInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deliveries?: boolean | Prisma.Courier$deliveriesArgs<ExtArgs>;
    invoices?: boolean | Prisma.Courier$invoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.CourierCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CourierIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CourierIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CourierPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Courier";
    objects: {
        deliveries: Prisma.$DeliveryPayload<ExtArgs>[];
        invoices: Prisma.$CourierInvoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        contact: string | null;
        acceptsPrescription: boolean;
        acceptsColdChain: boolean;
        approvalNote: string | null;
        active: boolean;
        api: string | null;
        priority: number;
        createdAt: Date;
    }, ExtArgs["result"]["courier"]>;
    composites: {};
};
export type CourierGetPayload<S extends boolean | null | undefined | CourierDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CourierPayload, S>;
export type CourierCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CourierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourierCountAggregateInputType | true;
};
export interface CourierDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Courier'];
        meta: {
            name: 'Courier';
        };
    };
    findUnique<T extends CourierFindUniqueArgs>(args: Prisma.SelectSubset<T, CourierFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CourierClient<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CourierFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CourierFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourierClient<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CourierFindFirstArgs>(args?: Prisma.SelectSubset<T, CourierFindFirstArgs<ExtArgs>>): Prisma.Prisma__CourierClient<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CourierFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CourierFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourierClient<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CourierFindManyArgs>(args?: Prisma.SelectSubset<T, CourierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CourierCreateArgs>(args: Prisma.SelectSubset<T, CourierCreateArgs<ExtArgs>>): Prisma.Prisma__CourierClient<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CourierCreateManyArgs>(args?: Prisma.SelectSubset<T, CourierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CourierCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CourierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CourierDeleteArgs>(args: Prisma.SelectSubset<T, CourierDeleteArgs<ExtArgs>>): Prisma.Prisma__CourierClient<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CourierUpdateArgs>(args: Prisma.SelectSubset<T, CourierUpdateArgs<ExtArgs>>): Prisma.Prisma__CourierClient<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CourierDeleteManyArgs>(args?: Prisma.SelectSubset<T, CourierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CourierUpdateManyArgs>(args: Prisma.SelectSubset<T, CourierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CourierUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CourierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CourierUpsertArgs>(args: Prisma.SelectSubset<T, CourierUpsertArgs<ExtArgs>>): Prisma.Prisma__CourierClient<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CourierCountArgs>(args?: Prisma.Subset<T, CourierCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CourierCountAggregateOutputType> : number>;
    aggregate<T extends CourierAggregateArgs>(args: Prisma.Subset<T, CourierAggregateArgs>): Prisma.PrismaPromise<GetCourierAggregateType<T>>;
    groupBy<T extends CourierGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CourierGroupByArgs['orderBy'];
    } : {
        orderBy?: CourierGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CourierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CourierFieldRefs;
}
export interface Prisma__CourierClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    deliveries<T extends Prisma.Courier$deliveriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Courier$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoices<T extends Prisma.Courier$invoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Courier$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourierInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CourierFieldRefs {
    readonly id: Prisma.FieldRef<"Courier", 'String'>;
    readonly name: Prisma.FieldRef<"Courier", 'String'>;
    readonly contact: Prisma.FieldRef<"Courier", 'String'>;
    readonly acceptsPrescription: Prisma.FieldRef<"Courier", 'Boolean'>;
    readonly acceptsColdChain: Prisma.FieldRef<"Courier", 'Boolean'>;
    readonly approvalNote: Prisma.FieldRef<"Courier", 'String'>;
    readonly active: Prisma.FieldRef<"Courier", 'Boolean'>;
    readonly api: Prisma.FieldRef<"Courier", 'String'>;
    readonly priority: Prisma.FieldRef<"Courier", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Courier", 'DateTime'>;
}
export type CourierFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierSelect<ExtArgs> | null;
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    include?: Prisma.CourierInclude<ExtArgs> | null;
    where: Prisma.CourierWhereUniqueInput;
};
export type CourierFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierSelect<ExtArgs> | null;
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    include?: Prisma.CourierInclude<ExtArgs> | null;
    where: Prisma.CourierWhereUniqueInput;
};
export type CourierFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierSelect<ExtArgs> | null;
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    include?: Prisma.CourierInclude<ExtArgs> | null;
    where?: Prisma.CourierWhereInput;
    orderBy?: Prisma.CourierOrderByWithRelationInput | Prisma.CourierOrderByWithRelationInput[];
    cursor?: Prisma.CourierWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourierScalarFieldEnum | Prisma.CourierScalarFieldEnum[];
};
export type CourierFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierSelect<ExtArgs> | null;
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    include?: Prisma.CourierInclude<ExtArgs> | null;
    where?: Prisma.CourierWhereInput;
    orderBy?: Prisma.CourierOrderByWithRelationInput | Prisma.CourierOrderByWithRelationInput[];
    cursor?: Prisma.CourierWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourierScalarFieldEnum | Prisma.CourierScalarFieldEnum[];
};
export type CourierFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierSelect<ExtArgs> | null;
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    include?: Prisma.CourierInclude<ExtArgs> | null;
    where?: Prisma.CourierWhereInput;
    orderBy?: Prisma.CourierOrderByWithRelationInput | Prisma.CourierOrderByWithRelationInput[];
    cursor?: Prisma.CourierWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourierScalarFieldEnum | Prisma.CourierScalarFieldEnum[];
};
export type CourierCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierSelect<ExtArgs> | null;
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    include?: Prisma.CourierInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourierCreateInput, Prisma.CourierUncheckedCreateInput>;
};
export type CourierCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CourierCreateManyInput | Prisma.CourierCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourierCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    data: Prisma.CourierCreateManyInput | Prisma.CourierCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourierUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierSelect<ExtArgs> | null;
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    include?: Prisma.CourierInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourierUpdateInput, Prisma.CourierUncheckedUpdateInput>;
    where: Prisma.CourierWhereUniqueInput;
};
export type CourierUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CourierUpdateManyMutationInput, Prisma.CourierUncheckedUpdateManyInput>;
    where?: Prisma.CourierWhereInput;
    limit?: number;
};
export type CourierUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourierUpdateManyMutationInput, Prisma.CourierUncheckedUpdateManyInput>;
    where?: Prisma.CourierWhereInput;
    limit?: number;
};
export type CourierUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierSelect<ExtArgs> | null;
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    include?: Prisma.CourierInclude<ExtArgs> | null;
    where: Prisma.CourierWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourierCreateInput, Prisma.CourierUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CourierUpdateInput, Prisma.CourierUncheckedUpdateInput>;
};
export type CourierDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierSelect<ExtArgs> | null;
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    include?: Prisma.CourierInclude<ExtArgs> | null;
    where: Prisma.CourierWhereUniqueInput;
};
export type CourierDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourierWhereInput;
    limit?: number;
};
export type Courier$deliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where?: Prisma.DeliveryWhereInput;
    orderBy?: Prisma.DeliveryOrderByWithRelationInput | Prisma.DeliveryOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveryScalarFieldEnum | Prisma.DeliveryScalarFieldEnum[];
};
export type Courier$invoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.CourierInvoiceOmit<ExtArgs> | null;
    include?: Prisma.CourierInvoiceInclude<ExtArgs> | null;
    where?: Prisma.CourierInvoiceWhereInput;
    orderBy?: Prisma.CourierInvoiceOrderByWithRelationInput | Prisma.CourierInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.CourierInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourierInvoiceScalarFieldEnum | Prisma.CourierInvoiceScalarFieldEnum[];
};
export type CourierDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourierSelect<ExtArgs> | null;
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    include?: Prisma.CourierInclude<ExtArgs> | null;
};
