import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly SocialIdentity: "SocialIdentity";
    readonly OtpChallenge: "OtpChallenge";
    readonly Pharmacy: "Pharmacy";
    readonly Product: "Product";
    readonly Batch: "Batch";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly Prescription: "Prescription";
    readonly AuditLog: "AuditLog";
    readonly RiderProfile: "RiderProfile";
    readonly Delivery: "Delivery";
    readonly Courier: "Courier";
    readonly Incident: "Incident";
    readonly DeliveryQuote: "DeliveryQuote";
    readonly CourierInvoice: "CourierInvoice";
    readonly CourierInvoiceLine: "CourierInvoiceLine";
    readonly PartnerApplication: "PartnerApplication";
    readonly Transfer: "Transfer";
    readonly Payout: "Payout";
    readonly ComplianceDocument: "ComplianceDocument";
    readonly Session: "Session";
    readonly MfaRecoveryCode: "MfaRecoveryCode";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "socialIdentity" | "otpChallenge" | "pharmacy" | "product" | "batch" | "order" | "orderItem" | "prescription" | "auditLog" | "riderProfile" | "delivery" | "courier" | "incident" | "deliveryQuote" | "courierInvoice" | "courierInvoiceLine" | "partnerApplication" | "transfer" | "payout" | "complianceDocument" | "session" | "mfaRecoveryCode";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        SocialIdentity: {
            payload: Prisma.$SocialIdentityPayload<ExtArgs>;
            fields: Prisma.SocialIdentityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SocialIdentityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialIdentityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SocialIdentityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialIdentityPayload>;
                };
                findFirst: {
                    args: Prisma.SocialIdentityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialIdentityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SocialIdentityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialIdentityPayload>;
                };
                findMany: {
                    args: Prisma.SocialIdentityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialIdentityPayload>[];
                };
                create: {
                    args: Prisma.SocialIdentityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialIdentityPayload>;
                };
                createMany: {
                    args: Prisma.SocialIdentityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SocialIdentityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialIdentityPayload>[];
                };
                delete: {
                    args: Prisma.SocialIdentityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialIdentityPayload>;
                };
                update: {
                    args: Prisma.SocialIdentityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialIdentityPayload>;
                };
                deleteMany: {
                    args: Prisma.SocialIdentityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SocialIdentityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SocialIdentityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialIdentityPayload>[];
                };
                upsert: {
                    args: Prisma.SocialIdentityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialIdentityPayload>;
                };
                aggregate: {
                    args: Prisma.SocialIdentityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSocialIdentity>;
                };
                groupBy: {
                    args: Prisma.SocialIdentityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SocialIdentityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SocialIdentityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SocialIdentityCountAggregateOutputType> | number;
                };
            };
        };
        OtpChallenge: {
            payload: Prisma.$OtpChallengePayload<ExtArgs>;
            fields: Prisma.OtpChallengeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OtpChallengeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpChallengePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OtpChallengeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpChallengePayload>;
                };
                findFirst: {
                    args: Prisma.OtpChallengeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpChallengePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OtpChallengeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpChallengePayload>;
                };
                findMany: {
                    args: Prisma.OtpChallengeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpChallengePayload>[];
                };
                create: {
                    args: Prisma.OtpChallengeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpChallengePayload>;
                };
                createMany: {
                    args: Prisma.OtpChallengeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OtpChallengeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpChallengePayload>[];
                };
                delete: {
                    args: Prisma.OtpChallengeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpChallengePayload>;
                };
                update: {
                    args: Prisma.OtpChallengeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpChallengePayload>;
                };
                deleteMany: {
                    args: Prisma.OtpChallengeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OtpChallengeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OtpChallengeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpChallengePayload>[];
                };
                upsert: {
                    args: Prisma.OtpChallengeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpChallengePayload>;
                };
                aggregate: {
                    args: Prisma.OtpChallengeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOtpChallenge>;
                };
                groupBy: {
                    args: Prisma.OtpChallengeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtpChallengeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OtpChallengeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtpChallengeCountAggregateOutputType> | number;
                };
            };
        };
        Pharmacy: {
            payload: Prisma.$PharmacyPayload<ExtArgs>;
            fields: Prisma.PharmacyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PharmacyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PharmacyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PharmacyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PharmacyPayload>;
                };
                findFirst: {
                    args: Prisma.PharmacyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PharmacyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PharmacyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PharmacyPayload>;
                };
                findMany: {
                    args: Prisma.PharmacyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PharmacyPayload>[];
                };
                create: {
                    args: Prisma.PharmacyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PharmacyPayload>;
                };
                createMany: {
                    args: Prisma.PharmacyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PharmacyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PharmacyPayload>[];
                };
                delete: {
                    args: Prisma.PharmacyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PharmacyPayload>;
                };
                update: {
                    args: Prisma.PharmacyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PharmacyPayload>;
                };
                deleteMany: {
                    args: Prisma.PharmacyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PharmacyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PharmacyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PharmacyPayload>[];
                };
                upsert: {
                    args: Prisma.PharmacyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PharmacyPayload>;
                };
                aggregate: {
                    args: Prisma.PharmacyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePharmacy>;
                };
                groupBy: {
                    args: Prisma.PharmacyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PharmacyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PharmacyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PharmacyCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        Batch: {
            payload: Prisma.$BatchPayload<ExtArgs>;
            fields: Prisma.BatchFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BatchFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatchPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BatchFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatchPayload>;
                };
                findFirst: {
                    args: Prisma.BatchFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatchPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BatchFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatchPayload>;
                };
                findMany: {
                    args: Prisma.BatchFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatchPayload>[];
                };
                create: {
                    args: Prisma.BatchCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatchPayload>;
                };
                createMany: {
                    args: Prisma.BatchCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BatchCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatchPayload>[];
                };
                delete: {
                    args: Prisma.BatchDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatchPayload>;
                };
                update: {
                    args: Prisma.BatchUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatchPayload>;
                };
                deleteMany: {
                    args: Prisma.BatchDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BatchUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BatchUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatchPayload>[];
                };
                upsert: {
                    args: Prisma.BatchUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatchPayload>;
                };
                aggregate: {
                    args: Prisma.BatchAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBatch>;
                };
                groupBy: {
                    args: Prisma.BatchGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BatchGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BatchCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BatchCountAggregateOutputType> | number;
                };
            };
        };
        Order: {
            payload: Prisma.$OrderPayload<ExtArgs>;
            fields: Prisma.OrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findFirst: {
                    args: Prisma.OrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findMany: {
                    args: Prisma.OrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                create: {
                    args: Prisma.OrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                createMany: {
                    args: Prisma.OrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                delete: {
                    args: Prisma.OrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                update: {
                    args: Prisma.OrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                upsert: {
                    args: Prisma.OrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                aggregate: {
                    args: Prisma.OrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder>;
                };
                groupBy: {
                    args: Prisma.OrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderCountAggregateOutputType> | number;
                };
            };
        };
        OrderItem: {
            payload: Prisma.$OrderItemPayload<ExtArgs>;
            fields: Prisma.OrderItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findFirst: {
                    args: Prisma.OrderItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findMany: {
                    args: Prisma.OrderItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                create: {
                    args: Prisma.OrderItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                createMany: {
                    args: Prisma.OrderItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                delete: {
                    args: Prisma.OrderItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                update: {
                    args: Prisma.OrderItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                upsert: {
                    args: Prisma.OrderItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                aggregate: {
                    args: Prisma.OrderItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderItem>;
                };
                groupBy: {
                    args: Prisma.OrderItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemCountAggregateOutputType> | number;
                };
            };
        };
        Prescription: {
            payload: Prisma.$PrescriptionPayload<ExtArgs>;
            fields: Prisma.PrescriptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrescriptionPayload>;
                };
                findFirst: {
                    args: Prisma.PrescriptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrescriptionPayload>;
                };
                findMany: {
                    args: Prisma.PrescriptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrescriptionPayload>[];
                };
                create: {
                    args: Prisma.PrescriptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrescriptionPayload>;
                };
                createMany: {
                    args: Prisma.PrescriptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PrescriptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrescriptionPayload>[];
                };
                delete: {
                    args: Prisma.PrescriptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrescriptionPayload>;
                };
                update: {
                    args: Prisma.PrescriptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrescriptionPayload>;
                };
                deleteMany: {
                    args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PrescriptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrescriptionPayload>[];
                };
                upsert: {
                    args: Prisma.PrescriptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrescriptionPayload>;
                };
                aggregate: {
                    args: Prisma.PrescriptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePrescription>;
                };
                groupBy: {
                    args: Prisma.PrescriptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PrescriptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PrescriptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PrescriptionCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        RiderProfile: {
            payload: Prisma.$RiderProfilePayload<ExtArgs>;
            fields: Prisma.RiderProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RiderProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RiderProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderProfilePayload>;
                };
                findFirst: {
                    args: Prisma.RiderProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RiderProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderProfilePayload>;
                };
                findMany: {
                    args: Prisma.RiderProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderProfilePayload>[];
                };
                create: {
                    args: Prisma.RiderProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderProfilePayload>;
                };
                createMany: {
                    args: Prisma.RiderProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RiderProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderProfilePayload>[];
                };
                delete: {
                    args: Prisma.RiderProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderProfilePayload>;
                };
                update: {
                    args: Prisma.RiderProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.RiderProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RiderProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RiderProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderProfilePayload>[];
                };
                upsert: {
                    args: Prisma.RiderProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderProfilePayload>;
                };
                aggregate: {
                    args: Prisma.RiderProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRiderProfile>;
                };
                groupBy: {
                    args: Prisma.RiderProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RiderProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RiderProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RiderProfileCountAggregateOutputType> | number;
                };
            };
        };
        Delivery: {
            payload: Prisma.$DeliveryPayload<ExtArgs>;
            fields: Prisma.DeliveryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeliveryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeliveryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>;
                };
                findFirst: {
                    args: Prisma.DeliveryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeliveryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>;
                };
                findMany: {
                    args: Prisma.DeliveryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>[];
                };
                create: {
                    args: Prisma.DeliveryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>;
                };
                createMany: {
                    args: Prisma.DeliveryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeliveryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>[];
                };
                delete: {
                    args: Prisma.DeliveryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>;
                };
                update: {
                    args: Prisma.DeliveryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>;
                };
                deleteMany: {
                    args: Prisma.DeliveryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeliveryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeliveryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>[];
                };
                upsert: {
                    args: Prisma.DeliveryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>;
                };
                aggregate: {
                    args: Prisma.DeliveryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDelivery>;
                };
                groupBy: {
                    args: Prisma.DeliveryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeliveryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeliveryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeliveryCountAggregateOutputType> | number;
                };
            };
        };
        Courier: {
            payload: Prisma.$CourierPayload<ExtArgs>;
            fields: Prisma.CourierFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CourierFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CourierFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>;
                };
                findFirst: {
                    args: Prisma.CourierFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CourierFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>;
                };
                findMany: {
                    args: Prisma.CourierFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>[];
                };
                create: {
                    args: Prisma.CourierCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>;
                };
                createMany: {
                    args: Prisma.CourierCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CourierCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>[];
                };
                delete: {
                    args: Prisma.CourierDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>;
                };
                update: {
                    args: Prisma.CourierUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>;
                };
                deleteMany: {
                    args: Prisma.CourierDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CourierUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CourierUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>[];
                };
                upsert: {
                    args: Prisma.CourierUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>;
                };
                aggregate: {
                    args: Prisma.CourierAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourier>;
                };
                groupBy: {
                    args: Prisma.CourierGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourierGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CourierCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourierCountAggregateOutputType> | number;
                };
            };
        };
        Incident: {
            payload: Prisma.$IncidentPayload<ExtArgs>;
            fields: Prisma.IncidentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IncidentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>;
                };
                findFirst: {
                    args: Prisma.IncidentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>;
                };
                findMany: {
                    args: Prisma.IncidentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>[];
                };
                create: {
                    args: Prisma.IncidentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>;
                };
                createMany: {
                    args: Prisma.IncidentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>[];
                };
                delete: {
                    args: Prisma.IncidentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>;
                };
                update: {
                    args: Prisma.IncidentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>;
                };
                deleteMany: {
                    args: Prisma.IncidentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IncidentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>[];
                };
                upsert: {
                    args: Prisma.IncidentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>;
                };
                aggregate: {
                    args: Prisma.IncidentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIncident>;
                };
                groupBy: {
                    args: Prisma.IncidentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IncidentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IncidentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IncidentCountAggregateOutputType> | number;
                };
            };
        };
        DeliveryQuote: {
            payload: Prisma.$DeliveryQuotePayload<ExtArgs>;
            fields: Prisma.DeliveryQuoteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeliveryQuoteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryQuotePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeliveryQuoteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryQuotePayload>;
                };
                findFirst: {
                    args: Prisma.DeliveryQuoteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryQuotePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeliveryQuoteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryQuotePayload>;
                };
                findMany: {
                    args: Prisma.DeliveryQuoteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryQuotePayload>[];
                };
                create: {
                    args: Prisma.DeliveryQuoteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryQuotePayload>;
                };
                createMany: {
                    args: Prisma.DeliveryQuoteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeliveryQuoteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryQuotePayload>[];
                };
                delete: {
                    args: Prisma.DeliveryQuoteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryQuotePayload>;
                };
                update: {
                    args: Prisma.DeliveryQuoteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryQuotePayload>;
                };
                deleteMany: {
                    args: Prisma.DeliveryQuoteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeliveryQuoteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeliveryQuoteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryQuotePayload>[];
                };
                upsert: {
                    args: Prisma.DeliveryQuoteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryQuotePayload>;
                };
                aggregate: {
                    args: Prisma.DeliveryQuoteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeliveryQuote>;
                };
                groupBy: {
                    args: Prisma.DeliveryQuoteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeliveryQuoteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeliveryQuoteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeliveryQuoteCountAggregateOutputType> | number;
                };
            };
        };
        CourierInvoice: {
            payload: Prisma.$CourierInvoicePayload<ExtArgs>;
            fields: Prisma.CourierInvoiceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CourierInvoiceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CourierInvoiceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoicePayload>;
                };
                findFirst: {
                    args: Prisma.CourierInvoiceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CourierInvoiceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoicePayload>;
                };
                findMany: {
                    args: Prisma.CourierInvoiceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoicePayload>[];
                };
                create: {
                    args: Prisma.CourierInvoiceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoicePayload>;
                };
                createMany: {
                    args: Prisma.CourierInvoiceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CourierInvoiceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoicePayload>[];
                };
                delete: {
                    args: Prisma.CourierInvoiceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoicePayload>;
                };
                update: {
                    args: Prisma.CourierInvoiceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoicePayload>;
                };
                deleteMany: {
                    args: Prisma.CourierInvoiceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CourierInvoiceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CourierInvoiceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoicePayload>[];
                };
                upsert: {
                    args: Prisma.CourierInvoiceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoicePayload>;
                };
                aggregate: {
                    args: Prisma.CourierInvoiceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourierInvoice>;
                };
                groupBy: {
                    args: Prisma.CourierInvoiceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourierInvoiceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CourierInvoiceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourierInvoiceCountAggregateOutputType> | number;
                };
            };
        };
        CourierInvoiceLine: {
            payload: Prisma.$CourierInvoiceLinePayload<ExtArgs>;
            fields: Prisma.CourierInvoiceLineFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CourierInvoiceLineFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoiceLinePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CourierInvoiceLineFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoiceLinePayload>;
                };
                findFirst: {
                    args: Prisma.CourierInvoiceLineFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoiceLinePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CourierInvoiceLineFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoiceLinePayload>;
                };
                findMany: {
                    args: Prisma.CourierInvoiceLineFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoiceLinePayload>[];
                };
                create: {
                    args: Prisma.CourierInvoiceLineCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoiceLinePayload>;
                };
                createMany: {
                    args: Prisma.CourierInvoiceLineCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CourierInvoiceLineCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoiceLinePayload>[];
                };
                delete: {
                    args: Prisma.CourierInvoiceLineDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoiceLinePayload>;
                };
                update: {
                    args: Prisma.CourierInvoiceLineUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoiceLinePayload>;
                };
                deleteMany: {
                    args: Prisma.CourierInvoiceLineDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CourierInvoiceLineUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CourierInvoiceLineUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoiceLinePayload>[];
                };
                upsert: {
                    args: Prisma.CourierInvoiceLineUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierInvoiceLinePayload>;
                };
                aggregate: {
                    args: Prisma.CourierInvoiceLineAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourierInvoiceLine>;
                };
                groupBy: {
                    args: Prisma.CourierInvoiceLineGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourierInvoiceLineGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CourierInvoiceLineCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourierInvoiceLineCountAggregateOutputType> | number;
                };
            };
        };
        PartnerApplication: {
            payload: Prisma.$PartnerApplicationPayload<ExtArgs>;
            fields: Prisma.PartnerApplicationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PartnerApplicationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerApplicationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PartnerApplicationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerApplicationPayload>;
                };
                findFirst: {
                    args: Prisma.PartnerApplicationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerApplicationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PartnerApplicationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerApplicationPayload>;
                };
                findMany: {
                    args: Prisma.PartnerApplicationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerApplicationPayload>[];
                };
                create: {
                    args: Prisma.PartnerApplicationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerApplicationPayload>;
                };
                createMany: {
                    args: Prisma.PartnerApplicationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PartnerApplicationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerApplicationPayload>[];
                };
                delete: {
                    args: Prisma.PartnerApplicationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerApplicationPayload>;
                };
                update: {
                    args: Prisma.PartnerApplicationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerApplicationPayload>;
                };
                deleteMany: {
                    args: Prisma.PartnerApplicationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PartnerApplicationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PartnerApplicationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerApplicationPayload>[];
                };
                upsert: {
                    args: Prisma.PartnerApplicationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerApplicationPayload>;
                };
                aggregate: {
                    args: Prisma.PartnerApplicationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePartnerApplication>;
                };
                groupBy: {
                    args: Prisma.PartnerApplicationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerApplicationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PartnerApplicationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerApplicationCountAggregateOutputType> | number;
                };
            };
        };
        Transfer: {
            payload: Prisma.$TransferPayload<ExtArgs>;
            fields: Prisma.TransferFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TransferFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransferPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TransferFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransferPayload>;
                };
                findFirst: {
                    args: Prisma.TransferFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransferPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TransferFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransferPayload>;
                };
                findMany: {
                    args: Prisma.TransferFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransferPayload>[];
                };
                create: {
                    args: Prisma.TransferCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransferPayload>;
                };
                createMany: {
                    args: Prisma.TransferCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TransferCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransferPayload>[];
                };
                delete: {
                    args: Prisma.TransferDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransferPayload>;
                };
                update: {
                    args: Prisma.TransferUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransferPayload>;
                };
                deleteMany: {
                    args: Prisma.TransferDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TransferUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TransferUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransferPayload>[];
                };
                upsert: {
                    args: Prisma.TransferUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransferPayload>;
                };
                aggregate: {
                    args: Prisma.TransferAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTransfer>;
                };
                groupBy: {
                    args: Prisma.TransferGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransferGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TransferCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransferCountAggregateOutputType> | number;
                };
            };
        };
        Payout: {
            payload: Prisma.$PayoutPayload<ExtArgs>;
            fields: Prisma.PayoutFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PayoutFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PayoutFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                findFirst: {
                    args: Prisma.PayoutFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PayoutFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                findMany: {
                    args: Prisma.PayoutFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>[];
                };
                create: {
                    args: Prisma.PayoutCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                createMany: {
                    args: Prisma.PayoutCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PayoutCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>[];
                };
                delete: {
                    args: Prisma.PayoutDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                update: {
                    args: Prisma.PayoutUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                deleteMany: {
                    args: Prisma.PayoutDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PayoutUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PayoutUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>[];
                };
                upsert: {
                    args: Prisma.PayoutUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                aggregate: {
                    args: Prisma.PayoutAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayout>;
                };
                groupBy: {
                    args: Prisma.PayoutGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayoutGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PayoutCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayoutCountAggregateOutputType> | number;
                };
            };
        };
        ComplianceDocument: {
            payload: Prisma.$ComplianceDocumentPayload<ExtArgs>;
            fields: Prisma.ComplianceDocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ComplianceDocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplianceDocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ComplianceDocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplianceDocumentPayload>;
                };
                findFirst: {
                    args: Prisma.ComplianceDocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplianceDocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ComplianceDocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplianceDocumentPayload>;
                };
                findMany: {
                    args: Prisma.ComplianceDocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplianceDocumentPayload>[];
                };
                create: {
                    args: Prisma.ComplianceDocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplianceDocumentPayload>;
                };
                createMany: {
                    args: Prisma.ComplianceDocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ComplianceDocumentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplianceDocumentPayload>[];
                };
                delete: {
                    args: Prisma.ComplianceDocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplianceDocumentPayload>;
                };
                update: {
                    args: Prisma.ComplianceDocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplianceDocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.ComplianceDocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ComplianceDocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ComplianceDocumentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplianceDocumentPayload>[];
                };
                upsert: {
                    args: Prisma.ComplianceDocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplianceDocumentPayload>;
                };
                aggregate: {
                    args: Prisma.ComplianceDocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateComplianceDocument>;
                };
                groupBy: {
                    args: Prisma.ComplianceDocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComplianceDocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ComplianceDocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComplianceDocumentCountAggregateOutputType> | number;
                };
            };
        };
        Session: {
            payload: Prisma.$SessionPayload<ExtArgs>;
            fields: Prisma.SessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findMany: {
                    args: Prisma.SessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                create: {
                    args: Prisma.SessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                createMany: {
                    args: Prisma.SessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                delete: {
                    args: Prisma.SessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                update: {
                    args: Prisma.SessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                upsert: {
                    args: Prisma.SessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.SessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        MfaRecoveryCode: {
            payload: Prisma.$MfaRecoveryCodePayload<ExtArgs>;
            fields: Prisma.MfaRecoveryCodeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MfaRecoveryCodeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MfaRecoveryCodePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MfaRecoveryCodeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MfaRecoveryCodePayload>;
                };
                findFirst: {
                    args: Prisma.MfaRecoveryCodeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MfaRecoveryCodePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MfaRecoveryCodeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MfaRecoveryCodePayload>;
                };
                findMany: {
                    args: Prisma.MfaRecoveryCodeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MfaRecoveryCodePayload>[];
                };
                create: {
                    args: Prisma.MfaRecoveryCodeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MfaRecoveryCodePayload>;
                };
                createMany: {
                    args: Prisma.MfaRecoveryCodeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MfaRecoveryCodeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MfaRecoveryCodePayload>[];
                };
                delete: {
                    args: Prisma.MfaRecoveryCodeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MfaRecoveryCodePayload>;
                };
                update: {
                    args: Prisma.MfaRecoveryCodeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MfaRecoveryCodePayload>;
                };
                deleteMany: {
                    args: Prisma.MfaRecoveryCodeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MfaRecoveryCodeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MfaRecoveryCodeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MfaRecoveryCodePayload>[];
                };
                upsert: {
                    args: Prisma.MfaRecoveryCodeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MfaRecoveryCodePayload>;
                };
                aggregate: {
                    args: Prisma.MfaRecoveryCodeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMfaRecoveryCode>;
                };
                groupBy: {
                    args: Prisma.MfaRecoveryCodeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MfaRecoveryCodeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MfaRecoveryCodeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MfaRecoveryCodeCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly phone: "phone";
    readonly email: "email";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly role: "role";
    readonly pharmacyId: "pharmacyId";
    readonly consentAt: "consentAt";
    readonly pcnRegNo: "pcnRegNo";
    readonly notificationsSeenAt: "notificationsSeenAt";
    readonly disabledAt: "disabledAt";
    readonly disabledReason: "disabledReason";
    readonly totpSecret: "totpSecret";
    readonly totpEnabledAt: "totpEnabledAt";
    readonly totpLastStep: "totpLastStep";
    readonly mfaFailures: "mfaFailures";
    readonly mfaLockedUntil: "mfaLockedUntil";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SocialIdentityScalarFieldEnum: {
    readonly id: "id";
    readonly provider: "provider";
    readonly subject: "subject";
    readonly email: "email";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
};
export type SocialIdentityScalarFieldEnum = (typeof SocialIdentityScalarFieldEnum)[keyof typeof SocialIdentityScalarFieldEnum];
export declare const OtpChallengeScalarFieldEnum: {
    readonly id: "id";
    readonly phone: "phone";
    readonly codeHash: "codeHash";
    readonly expiresAt: "expiresAt";
    readonly attempts: "attempts";
    readonly consumedAt: "consumedAt";
    readonly createdAt: "createdAt";
};
export type OtpChallengeScalarFieldEnum = (typeof OtpChallengeScalarFieldEnum)[keyof typeof OtpChallengeScalarFieldEnum];
export declare const PharmacyScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly name: "name";
    readonly area: "area";
    readonly address: "address";
    readonly premisesLicenceNo: "premisesLicenceNo";
    readonly licenceExpiresAt: "licenceExpiresAt";
    readonly status: "status";
    readonly coldChain: "coldChain";
    readonly lat: "lat";
    readonly lng: "lng";
    readonly phone: "phone";
    readonly email: "email";
    readonly superintendentName: "superintendentName";
    readonly verifiedAt: "verifiedAt";
    readonly suspendedAt: "suspendedAt";
    readonly suspendedReason: "suspendedReason";
    readonly licenceReminderDays: "licenceReminderDays";
    readonly openDays: "openDays";
    readonly opensAt: "opensAt";
    readonly lastOrderAt: "lastOrderAt";
    readonly coverageAreas: "coverageAreas";
    readonly bankName: "bankName";
    readonly bankAccountName: "bankAccountName";
    readonly bankAccountNumber: "bankAccountNumber";
    readonly bankUpdatedAt: "bankUpdatedAt";
    readonly bankVerifiedAt: "bankVerifiedAt";
    readonly bankVerifiedById: "bankVerifiedById";
    readonly createdAt: "createdAt";
};
export type PharmacyScalarFieldEnum = (typeof PharmacyScalarFieldEnum)[keyof typeof PharmacyScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly name: "name";
    readonly genericName: "genericName";
    readonly form: "form";
    readonly strength: "strength";
    readonly packDescription: "packDescription";
    readonly unitsPerPack: "unitsPerPack";
    readonly manufacturer: "manufacturer";
    readonly nafdacRegNo: "nafdacRegNo";
    readonly category: "category";
    readonly classification: "classification";
    readonly coldChain: "coldChain";
    readonly storage: "storage";
    readonly uses: "uses";
    readonly deliveryAllowed: "deliveryAllowed";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const BatchScalarFieldEnum: {
    readonly id: "id";
    readonly pharmacyId: "pharmacyId";
    readonly productId: "productId";
    readonly batchNumber: "batchNumber";
    readonly expiresAt: "expiresAt";
    readonly quantity: "quantity";
    readonly priceKobo: "priceKobo";
    readonly location: "location";
    readonly status: "status";
    readonly quarantineReason: "quarantineReason";
    readonly receivedAt: "receivedAt";
};
export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly patientId: "patientId";
    readonly pharmacyId: "pharmacyId";
    readonly status: "status";
    readonly deliveryAddress: "deliveryAddress";
    readonly deliveryArea: "deliveryArea";
    readonly dropoffLat: "dropoffLat";
    readonly dropoffLng: "dropoffLng";
    readonly etaMinutes: "etaMinutes";
    readonly lateTextAt: "lateTextAt";
    readonly subtotalKobo: "subtotalKobo";
    readonly deliveryKobo: "deliveryKobo";
    readonly serviceKobo: "serviceKobo";
    readonly totalKobo: "totalKobo";
    readonly statusNote: "statusNote";
    readonly paymentStatus: "paymentStatus";
    readonly paidAt: "paidAt";
    readonly paymentTxId: "paymentTxId";
    readonly preparingAt: "preparingAt";
    readonly readyAt: "readyAt";
    readonly payoutId: "payoutId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly productId: "productId";
    readonly quantity: "quantity";
    readonly unitPriceKobo: "unitPriceKobo";
    readonly batchId: "batchId";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const PrescriptionScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly patientId: "patientId";
    readonly orderId: "orderId";
    readonly imageKey: "imageKey";
    readonly prescriberName: "prescriberName";
    readonly status: "status";
    readonly reviewedById: "reviewedById";
    readonly reviewedAt: "reviewedAt";
    readonly decisionNote: "decisionNote";
    readonly createdAt: "createdAt";
};
export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly actorId: "actorId";
    readonly action: "action";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const RiderProfileScalarFieldEnum: {
    readonly userId: "userId";
    readonly partner: "partner";
    readonly coldChain: "coldChain";
    readonly active: "active";
    readonly area: "area";
    readonly onlineSince: "onlineSince";
};
export type RiderProfileScalarFieldEnum = (typeof RiderProfileScalarFieldEnum)[keyof typeof RiderProfileScalarFieldEnum];
export declare const DeliveryScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly orderId: "orderId";
    readonly riderId: "riderId";
    readonly provider: "provider";
    readonly courierId: "courierId";
    readonly providerRef: "providerRef";
    readonly feeKobo: "feeKobo";
    readonly trackingUrl: "trackingUrl";
    readonly handedOverById: "handedOverById";
    readonly proof: "proof";
    readonly providerStatus: "providerStatus";
    readonly providerStatusAt: "providerStatusAt";
    readonly bookingError: "bookingError";
    readonly status: "status";
    readonly coldChain: "coldChain";
    readonly dropoffCode: "dropoffCode";
    readonly codeAttempts: "codeAttempts";
    readonly createdAt: "createdAt";
    readonly assignedAt: "assignedAt";
    readonly pickedUpAt: "pickedUpAt";
    readonly deliveredAt: "deliveredAt";
    readonly failedAt: "failedAt";
    readonly failReason: "failReason";
    readonly failureCause: "failureCause";
    readonly costBearer: "costBearer";
    readonly staleAlertAt: "staleAlertAt";
};
export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum];
export declare const CourierScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly contact: "contact";
    readonly acceptsPrescription: "acceptsPrescription";
    readonly acceptsColdChain: "acceptsColdChain";
    readonly approvalNote: "approvalNote";
    readonly active: "active";
    readonly api: "api";
    readonly priority: "priority";
    readonly createdAt: "createdAt";
};
export type CourierScalarFieldEnum = (typeof CourierScalarFieldEnum)[keyof typeof CourierScalarFieldEnum];
export declare const IncidentScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly orderId: "orderId";
    readonly deliveryId: "deliveryId";
    readonly type: "type";
    readonly description: "description";
    readonly reportedById: "reportedById";
    readonly reporterRole: "reporterRole";
    readonly status: "status";
    readonly resolution: "resolution";
    readonly resolvedById: "resolvedById";
    readonly createdAt: "createdAt";
    readonly resolvedAt: "resolvedAt";
};
export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum];
export declare const DeliveryQuoteScalarFieldEnum: {
    readonly id: "id";
    readonly pharmacyId: "pharmacyId";
    readonly courierId: "courierId";
    readonly lat: "lat";
    readonly lng: "lng";
    readonly courierFeeKobo: "courierFeeKobo";
    readonly priceKobo: "priceKobo";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type DeliveryQuoteScalarFieldEnum = (typeof DeliveryQuoteScalarFieldEnum)[keyof typeof DeliveryQuoteScalarFieldEnum];
export declare const CourierInvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly courierId: "courierId";
    readonly number: "number";
    readonly periodStart: "periodStart";
    readonly periodEnd: "periodEnd";
    readonly totalKobo: "totalKobo";
    readonly status: "status";
    readonly note: "note";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly reconciledAt: "reconciledAt";
    readonly reconciledById: "reconciledById";
};
export type CourierInvoiceScalarFieldEnum = (typeof CourierInvoiceScalarFieldEnum)[keyof typeof CourierInvoiceScalarFieldEnum];
export declare const CourierInvoiceLineScalarFieldEnum: {
    readonly id: "id";
    readonly invoiceId: "invoiceId";
    readonly providerRef: "providerRef";
    readonly amountKobo: "amountKobo";
};
export type CourierInvoiceLineScalarFieldEnum = (typeof CourierInvoiceLineScalarFieldEnum)[keyof typeof CourierInvoiceLineScalarFieldEnum];
export declare const PartnerApplicationScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly kind: "kind";
    readonly organisation: "organisation";
    readonly contactName: "contactName";
    readonly email: "email";
    readonly phone: "phone";
    readonly details: "details";
    readonly status: "status";
    readonly note: "note";
    readonly reviewedById: "reviewedById";
    readonly reviewedAt: "reviewedAt";
    readonly pharmacyId: "pharmacyId";
    readonly createdAt: "createdAt";
};
export type PartnerApplicationScalarFieldEnum = (typeof PartnerApplicationScalarFieldEnum)[keyof typeof PartnerApplicationScalarFieldEnum];
export declare const TransferScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly fromPharmacyId: "fromPharmacyId";
    readonly toPharmacyId: "toPharmacyId";
    readonly batchId: "batchId";
    readonly quantity: "quantity";
    readonly status: "status";
    readonly note: "note";
    readonly createdById: "createdById";
    readonly publishedById: "publishedById";
    readonly publishedAt: "publishedAt";
    readonly acceptedById: "acceptedById";
    readonly acceptedAt: "acceptedAt";
    readonly dispatchedById: "dispatchedById";
    readonly dispatchedAt: "dispatchedAt";
    readonly receivedById: "receivedById";
    readonly receivedAt: "receivedAt";
    readonly receivedBatchId: "receivedBatchId";
    readonly closedById: "closedById";
    readonly closedAt: "closedAt";
    readonly closeReason: "closeReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TransferScalarFieldEnum = (typeof TransferScalarFieldEnum)[keyof typeof TransferScalarFieldEnum];
export declare const PayoutScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly pharmacyId: "pharmacyId";
    readonly periodStart: "periodStart";
    readonly periodEnd: "periodEnd";
    readonly orderCount: "orderCount";
    readonly grossKobo: "grossKobo";
    readonly feesKobo: "feesKobo";
    readonly netKobo: "netKobo";
    readonly status: "status";
    readonly bankName: "bankName";
    readonly bankAccountName: "bankAccountName";
    readonly bankAccountNumber: "bankAccountNumber";
    readonly reference: "reference";
    readonly paidAt: "paidAt";
    readonly paidById: "paidById";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
};
export type PayoutScalarFieldEnum = (typeof PayoutScalarFieldEnum)[keyof typeof PayoutScalarFieldEnum];
export declare const ComplianceDocumentScalarFieldEnum: {
    readonly id: "id";
    readonly pharmacyId: "pharmacyId";
    readonly kind: "kind";
    readonly reference: "reference";
    readonly issuer: "issuer";
    readonly expiresAt: "expiresAt";
    readonly fileKey: "fileKey";
    readonly fileName: "fileName";
    readonly status: "status";
    readonly reviewNote: "reviewNote";
    readonly reviewedById: "reviewedById";
    readonly reviewedAt: "reviewedAt";
    readonly reminderDays: "reminderDays";
    readonly uploadedById: "uploadedById";
    readonly createdAt: "createdAt";
};
export type ComplianceDocumentScalarFieldEnum = (typeof ComplianceDocumentScalarFieldEnum)[keyof typeof ComplianceDocumentScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly mfa: "mfa";
    readonly userAgent: "userAgent";
    readonly ip: "ip";
    readonly createdAt: "createdAt";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly revokedReason: "revokedReason";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const MfaRecoveryCodeScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly codeHash: "codeHash";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type MfaRecoveryCodeScalarFieldEnum = (typeof MfaRecoveryCodeScalarFieldEnum)[keyof typeof MfaRecoveryCodeScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumSocialProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SocialProvider'>;
export type ListEnumSocialProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SocialProvider[]'>;
export type EnumPharmacyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PharmacyStatus'>;
export type ListEnumPharmacyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PharmacyStatus[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumProductClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductClass'>;
export type ListEnumProductClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductClass[]'>;
export type EnumBatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BatchStatus'>;
export type ListEnumBatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BatchStatus[]'>;
export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>;
export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>;
export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>;
export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>;
export type EnumPrescriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrescriptionStatus'>;
export type ListEnumPrescriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrescriptionStatus[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumDeliveryProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryProvider'>;
export type ListEnumDeliveryProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryProvider[]'>;
export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>;
export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>;
export type EnumFailureCauseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FailureCause'>;
export type ListEnumFailureCauseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FailureCause[]'>;
export type EnumCostBearerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CostBearer'>;
export type ListEnumCostBearerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CostBearer[]'>;
export type EnumIncidentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentType'>;
export type ListEnumIncidentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentType[]'>;
export type EnumIncidentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentStatus'>;
export type ListEnumIncidentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentStatus[]'>;
export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>;
export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>;
export type EnumPartnerKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartnerKind'>;
export type ListEnumPartnerKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartnerKind[]'>;
export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>;
export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>;
export type EnumTransferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransferStatus'>;
export type ListEnumTransferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransferStatus[]'>;
export type EnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus'>;
export type ListEnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus[]'>;
export type EnumDocumentKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentKind'>;
export type ListEnumDocumentKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentKind[]'>;
export type EnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus'>;
export type ListEnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    socialIdentity?: Prisma.SocialIdentityOmit;
    otpChallenge?: Prisma.OtpChallengeOmit;
    pharmacy?: Prisma.PharmacyOmit;
    product?: Prisma.ProductOmit;
    batch?: Prisma.BatchOmit;
    order?: Prisma.OrderOmit;
    orderItem?: Prisma.OrderItemOmit;
    prescription?: Prisma.PrescriptionOmit;
    auditLog?: Prisma.AuditLogOmit;
    riderProfile?: Prisma.RiderProfileOmit;
    delivery?: Prisma.DeliveryOmit;
    courier?: Prisma.CourierOmit;
    incident?: Prisma.IncidentOmit;
    deliveryQuote?: Prisma.DeliveryQuoteOmit;
    courierInvoice?: Prisma.CourierInvoiceOmit;
    courierInvoiceLine?: Prisma.CourierInvoiceLineOmit;
    partnerApplication?: Prisma.PartnerApplicationOmit;
    transfer?: Prisma.TransferOmit;
    payout?: Prisma.PayoutOmit;
    complianceDocument?: Prisma.ComplianceDocumentOmit;
    session?: Prisma.SessionOmit;
    mfaRecoveryCode?: Prisma.MfaRecoveryCodeOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
