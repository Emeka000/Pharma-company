import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumSocialProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialProvider | Prisma.EnumSocialProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.SocialProvider[] | Prisma.ListEnumSocialProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SocialProvider[] | Prisma.ListEnumSocialProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSocialProviderFilter<$PrismaModel> | $Enums.SocialProvider;
};
export type EnumSocialProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialProvider | Prisma.EnumSocialProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.SocialProvider[] | Prisma.ListEnumSocialProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SocialProvider[] | Prisma.ListEnumSocialProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSocialProviderWithAggregatesFilter<$PrismaModel> | $Enums.SocialProvider;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSocialProviderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSocialProviderFilter<$PrismaModel>;
};
export type EnumPharmacyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PharmacyStatus | Prisma.EnumPharmacyStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PharmacyStatus[] | Prisma.ListEnumPharmacyStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PharmacyStatus[] | Prisma.ListEnumPharmacyStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPharmacyStatusFilter<$PrismaModel> | $Enums.PharmacyStatus;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type EnumPharmacyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PharmacyStatus | Prisma.EnumPharmacyStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PharmacyStatus[] | Prisma.ListEnumPharmacyStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PharmacyStatus[] | Prisma.ListEnumPharmacyStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPharmacyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PharmacyStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPharmacyStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPharmacyStatusFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type EnumProductClassFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductClass | Prisma.EnumProductClassFieldRefInput<$PrismaModel>;
    in?: $Enums.ProductClass[] | Prisma.ListEnumProductClassFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProductClass[] | Prisma.ListEnumProductClassFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProductClassFilter<$PrismaModel> | $Enums.ProductClass;
};
export type EnumProductClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductClass | Prisma.EnumProductClassFieldRefInput<$PrismaModel>;
    in?: $Enums.ProductClass[] | Prisma.ListEnumProductClassFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProductClass[] | Prisma.ListEnumProductClassFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProductClassWithAggregatesFilter<$PrismaModel> | $Enums.ProductClass;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProductClassFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProductClassFilter<$PrismaModel>;
};
export type EnumBatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | Prisma.EnumBatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BatchStatus[] | Prisma.ListEnumBatchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BatchStatus[] | Prisma.ListEnumBatchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBatchStatusFilter<$PrismaModel> | $Enums.BatchStatus;
};
export type EnumBatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | Prisma.EnumBatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BatchStatus[] | Prisma.ListEnumBatchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BatchStatus[] | Prisma.ListEnumBatchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.BatchStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBatchStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBatchStatusFilter<$PrismaModel>;
};
export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
};
export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
};
export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
};
export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
};
export type EnumPrescriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | Prisma.EnumPrescriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PrescriptionStatus[] | Prisma.ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PrescriptionStatus[] | Prisma.ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPrescriptionStatusFilter<$PrismaModel> | $Enums.PrescriptionStatus;
};
export type EnumPrescriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | Prisma.EnumPrescriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PrescriptionStatus[] | Prisma.ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PrescriptionStatus[] | Prisma.ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrescriptionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPrescriptionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPrescriptionStatusFilter<$PrismaModel>;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type EnumDeliveryProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryProvider | Prisma.EnumDeliveryProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryProvider[] | Prisma.ListEnumDeliveryProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryProvider[] | Prisma.ListEnumDeliveryProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryProviderFilter<$PrismaModel> | $Enums.DeliveryProvider;
};
export type EnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | Prisma.EnumDeliveryStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus;
};
export type EnumFailureCauseNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FailureCause | Prisma.EnumFailureCauseFieldRefInput<$PrismaModel> | null;
    in?: $Enums.FailureCause[] | Prisma.ListEnumFailureCauseFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.FailureCause[] | Prisma.ListEnumFailureCauseFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumFailureCauseNullableFilter<$PrismaModel> | $Enums.FailureCause | null;
};
export type EnumCostBearerNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CostBearer | Prisma.EnumCostBearerFieldRefInput<$PrismaModel> | null;
    in?: $Enums.CostBearer[] | Prisma.ListEnumCostBearerFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.CostBearer[] | Prisma.ListEnumCostBearerFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumCostBearerNullableFilter<$PrismaModel> | $Enums.CostBearer | null;
};
export type EnumDeliveryProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryProvider | Prisma.EnumDeliveryProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryProvider[] | Prisma.ListEnumDeliveryProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryProvider[] | Prisma.ListEnumDeliveryProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryProviderWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryProvider;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryProviderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryProviderFilter<$PrismaModel>;
};
export type EnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | Prisma.EnumDeliveryStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryStatusFilter<$PrismaModel>;
};
export type EnumFailureCauseNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FailureCause | Prisma.EnumFailureCauseFieldRefInput<$PrismaModel> | null;
    in?: $Enums.FailureCause[] | Prisma.ListEnumFailureCauseFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.FailureCause[] | Prisma.ListEnumFailureCauseFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumFailureCauseNullableWithAggregatesFilter<$PrismaModel> | $Enums.FailureCause | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFailureCauseNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFailureCauseNullableFilter<$PrismaModel>;
};
export type EnumCostBearerNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CostBearer | Prisma.EnumCostBearerFieldRefInput<$PrismaModel> | null;
    in?: $Enums.CostBearer[] | Prisma.ListEnumCostBearerFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.CostBearer[] | Prisma.ListEnumCostBearerFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumCostBearerNullableWithAggregatesFilter<$PrismaModel> | $Enums.CostBearer | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCostBearerNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCostBearerNullableFilter<$PrismaModel>;
};
export type EnumIncidentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | Prisma.EnumIncidentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentType[] | Prisma.ListEnumIncidentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentType[] | Prisma.ListEnumIncidentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentTypeFilter<$PrismaModel> | $Enums.IncidentType;
};
export type EnumIncidentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | Prisma.EnumIncidentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentStatusFilter<$PrismaModel> | $Enums.IncidentStatus;
};
export type EnumIncidentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | Prisma.EnumIncidentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentType[] | Prisma.ListEnumIncidentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentType[] | Prisma.ListEnumIncidentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentTypeWithAggregatesFilter<$PrismaModel> | $Enums.IncidentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumIncidentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumIncidentTypeFilter<$PrismaModel>;
};
export type EnumIncidentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | Prisma.EnumIncidentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumIncidentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumIncidentStatusFilter<$PrismaModel>;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | Prisma.EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus;
};
export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | Prisma.EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel>;
};
export type EnumPartnerKindFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerKind | Prisma.EnumPartnerKindFieldRefInput<$PrismaModel>;
    in?: $Enums.PartnerKind[] | Prisma.ListEnumPartnerKindFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PartnerKind[] | Prisma.ListEnumPartnerKindFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPartnerKindFilter<$PrismaModel> | $Enums.PartnerKind;
};
export type JsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
export type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | Prisma.EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus;
};
export type EnumPartnerKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerKind | Prisma.EnumPartnerKindFieldRefInput<$PrismaModel>;
    in?: $Enums.PartnerKind[] | Prisma.ListEnumPartnerKindFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PartnerKind[] | Prisma.ListEnumPartnerKindFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPartnerKindWithAggregatesFilter<$PrismaModel> | $Enums.PartnerKind;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPartnerKindFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPartnerKindFilter<$PrismaModel>;
};
export type JsonWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonFilter<$PrismaModel>;
};
export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | Prisma.EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumApplicationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumApplicationStatusFilter<$PrismaModel>;
};
export type EnumTransferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferStatus | Prisma.EnumTransferStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransferStatusFilter<$PrismaModel> | $Enums.TransferStatus;
};
export type EnumTransferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferStatus | Prisma.EnumTransferStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransferStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransferStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransferStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransferStatusFilter<$PrismaModel>;
};
export type EnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus;
};
export type EnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
};
export type EnumDocumentKindFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentKind | Prisma.EnumDocumentKindFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentKind[] | Prisma.ListEnumDocumentKindFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentKind[] | Prisma.ListEnumDocumentKindFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentKindFilter<$PrismaModel> | $Enums.DocumentKind;
};
export type EnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | Prisma.EnumDocumentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentStatus[] | Prisma.ListEnumDocumentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentStatus[] | Prisma.ListEnumDocumentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus;
};
export type EnumDocumentKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentKind | Prisma.EnumDocumentKindFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentKind[] | Prisma.ListEnumDocumentKindFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentKind[] | Prisma.ListEnumDocumentKindFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentKindWithAggregatesFilter<$PrismaModel> | $Enums.DocumentKind;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDocumentKindFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDocumentKindFilter<$PrismaModel>;
};
export type EnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | Prisma.EnumDocumentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentStatus[] | Prisma.ListEnumDocumentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentStatus[] | Prisma.ListEnumDocumentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDocumentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDocumentStatusFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumSocialProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialProvider | Prisma.EnumSocialProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.SocialProvider[] | Prisma.ListEnumSocialProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SocialProvider[] | Prisma.ListEnumSocialProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSocialProviderFilter<$PrismaModel> | $Enums.SocialProvider;
};
export type NestedEnumSocialProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialProvider | Prisma.EnumSocialProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.SocialProvider[] | Prisma.ListEnumSocialProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SocialProvider[] | Prisma.ListEnumSocialProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSocialProviderWithAggregatesFilter<$PrismaModel> | $Enums.SocialProvider;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSocialProviderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSocialProviderFilter<$PrismaModel>;
};
export type NestedEnumPharmacyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PharmacyStatus | Prisma.EnumPharmacyStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PharmacyStatus[] | Prisma.ListEnumPharmacyStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PharmacyStatus[] | Prisma.ListEnumPharmacyStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPharmacyStatusFilter<$PrismaModel> | $Enums.PharmacyStatus;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedEnumPharmacyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PharmacyStatus | Prisma.EnumPharmacyStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PharmacyStatus[] | Prisma.ListEnumPharmacyStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PharmacyStatus[] | Prisma.ListEnumPharmacyStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPharmacyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PharmacyStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPharmacyStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPharmacyStatusFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type NestedEnumProductClassFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductClass | Prisma.EnumProductClassFieldRefInput<$PrismaModel>;
    in?: $Enums.ProductClass[] | Prisma.ListEnumProductClassFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProductClass[] | Prisma.ListEnumProductClassFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProductClassFilter<$PrismaModel> | $Enums.ProductClass;
};
export type NestedEnumProductClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductClass | Prisma.EnumProductClassFieldRefInput<$PrismaModel>;
    in?: $Enums.ProductClass[] | Prisma.ListEnumProductClassFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProductClass[] | Prisma.ListEnumProductClassFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProductClassWithAggregatesFilter<$PrismaModel> | $Enums.ProductClass;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProductClassFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProductClassFilter<$PrismaModel>;
};
export type NestedEnumBatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | Prisma.EnumBatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BatchStatus[] | Prisma.ListEnumBatchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BatchStatus[] | Prisma.ListEnumBatchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBatchStatusFilter<$PrismaModel> | $Enums.BatchStatus;
};
export type NestedEnumBatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | Prisma.EnumBatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BatchStatus[] | Prisma.ListEnumBatchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BatchStatus[] | Prisma.ListEnumBatchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.BatchStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBatchStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBatchStatusFilter<$PrismaModel>;
};
export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
};
export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
};
export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
};
export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
};
export type NestedEnumPrescriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | Prisma.EnumPrescriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PrescriptionStatus[] | Prisma.ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PrescriptionStatus[] | Prisma.ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPrescriptionStatusFilter<$PrismaModel> | $Enums.PrescriptionStatus;
};
export type NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | Prisma.EnumPrescriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PrescriptionStatus[] | Prisma.ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PrescriptionStatus[] | Prisma.ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrescriptionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPrescriptionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPrescriptionStatusFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumDeliveryProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryProvider | Prisma.EnumDeliveryProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryProvider[] | Prisma.ListEnumDeliveryProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryProvider[] | Prisma.ListEnumDeliveryProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryProviderFilter<$PrismaModel> | $Enums.DeliveryProvider;
};
export type NestedEnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | Prisma.EnumDeliveryStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus;
};
export type NestedEnumFailureCauseNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FailureCause | Prisma.EnumFailureCauseFieldRefInput<$PrismaModel> | null;
    in?: $Enums.FailureCause[] | Prisma.ListEnumFailureCauseFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.FailureCause[] | Prisma.ListEnumFailureCauseFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumFailureCauseNullableFilter<$PrismaModel> | $Enums.FailureCause | null;
};
export type NestedEnumCostBearerNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CostBearer | Prisma.EnumCostBearerFieldRefInput<$PrismaModel> | null;
    in?: $Enums.CostBearer[] | Prisma.ListEnumCostBearerFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.CostBearer[] | Prisma.ListEnumCostBearerFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumCostBearerNullableFilter<$PrismaModel> | $Enums.CostBearer | null;
};
export type NestedEnumDeliveryProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryProvider | Prisma.EnumDeliveryProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryProvider[] | Prisma.ListEnumDeliveryProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryProvider[] | Prisma.ListEnumDeliveryProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryProviderWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryProvider;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryProviderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryProviderFilter<$PrismaModel>;
};
export type NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | Prisma.EnumDeliveryStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryStatusFilter<$PrismaModel>;
};
export type NestedEnumFailureCauseNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FailureCause | Prisma.EnumFailureCauseFieldRefInput<$PrismaModel> | null;
    in?: $Enums.FailureCause[] | Prisma.ListEnumFailureCauseFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.FailureCause[] | Prisma.ListEnumFailureCauseFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumFailureCauseNullableWithAggregatesFilter<$PrismaModel> | $Enums.FailureCause | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFailureCauseNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFailureCauseNullableFilter<$PrismaModel>;
};
export type NestedEnumCostBearerNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CostBearer | Prisma.EnumCostBearerFieldRefInput<$PrismaModel> | null;
    in?: $Enums.CostBearer[] | Prisma.ListEnumCostBearerFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.CostBearer[] | Prisma.ListEnumCostBearerFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumCostBearerNullableWithAggregatesFilter<$PrismaModel> | $Enums.CostBearer | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCostBearerNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCostBearerNullableFilter<$PrismaModel>;
};
export type NestedEnumIncidentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | Prisma.EnumIncidentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentType[] | Prisma.ListEnumIncidentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentType[] | Prisma.ListEnumIncidentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentTypeFilter<$PrismaModel> | $Enums.IncidentType;
};
export type NestedEnumIncidentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | Prisma.EnumIncidentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentStatusFilter<$PrismaModel> | $Enums.IncidentStatus;
};
export type NestedEnumIncidentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | Prisma.EnumIncidentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentType[] | Prisma.ListEnumIncidentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentType[] | Prisma.ListEnumIncidentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentTypeWithAggregatesFilter<$PrismaModel> | $Enums.IncidentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumIncidentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumIncidentTypeFilter<$PrismaModel>;
};
export type NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | Prisma.EnumIncidentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumIncidentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumIncidentStatusFilter<$PrismaModel>;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | Prisma.EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus;
};
export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | Prisma.EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel>;
};
export type NestedEnumPartnerKindFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerKind | Prisma.EnumPartnerKindFieldRefInput<$PrismaModel>;
    in?: $Enums.PartnerKind[] | Prisma.ListEnumPartnerKindFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PartnerKind[] | Prisma.ListEnumPartnerKindFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPartnerKindFilter<$PrismaModel> | $Enums.PartnerKind;
};
export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | Prisma.EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus;
};
export type NestedEnumPartnerKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerKind | Prisma.EnumPartnerKindFieldRefInput<$PrismaModel>;
    in?: $Enums.PartnerKind[] | Prisma.ListEnumPartnerKindFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PartnerKind[] | Prisma.ListEnumPartnerKindFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPartnerKindWithAggregatesFilter<$PrismaModel> | $Enums.PartnerKind;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPartnerKindFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPartnerKindFilter<$PrismaModel>;
};
export type NestedJsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | Prisma.EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumApplicationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumApplicationStatusFilter<$PrismaModel>;
};
export type NestedEnumTransferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferStatus | Prisma.EnumTransferStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransferStatusFilter<$PrismaModel> | $Enums.TransferStatus;
};
export type NestedEnumTransferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferStatus | Prisma.EnumTransferStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransferStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransferStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransferStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransferStatusFilter<$PrismaModel>;
};
export type NestedEnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus;
};
export type NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
};
export type NestedEnumDocumentKindFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentKind | Prisma.EnumDocumentKindFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentKind[] | Prisma.ListEnumDocumentKindFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentKind[] | Prisma.ListEnumDocumentKindFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentKindFilter<$PrismaModel> | $Enums.DocumentKind;
};
export type NestedEnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | Prisma.EnumDocumentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentStatus[] | Prisma.ListEnumDocumentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentStatus[] | Prisma.ListEnumDocumentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus;
};
export type NestedEnumDocumentKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentKind | Prisma.EnumDocumentKindFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentKind[] | Prisma.ListEnumDocumentKindFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentKind[] | Prisma.ListEnumDocumentKindFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentKindWithAggregatesFilter<$PrismaModel> | $Enums.DocumentKind;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDocumentKindFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDocumentKindFilter<$PrismaModel>;
};
export type NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | Prisma.EnumDocumentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentStatus[] | Prisma.ListEnumDocumentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentStatus[] | Prisma.ListEnumDocumentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDocumentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDocumentStatusFilter<$PrismaModel>;
};
