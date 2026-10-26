import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    SocialIdentity: 'SocialIdentity',
    OtpChallenge: 'OtpChallenge',
    Pharmacy: 'Pharmacy',
    Product: 'Product',
    Batch: 'Batch',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Prescription: 'Prescription',
    AuditLog: 'AuditLog',
    RiderProfile: 'RiderProfile',
    Delivery: 'Delivery',
    Courier: 'Courier',
    Incident: 'Incident',
    DeliveryQuote: 'DeliveryQuote',
    CourierInvoice: 'CourierInvoice',
    CourierInvoiceLine: 'CourierInvoiceLine',
    PartnerApplication: 'PartnerApplication',
    Transfer: 'Transfer',
    Payout: 'Payout',
    ComplianceDocument: 'ComplianceDocument',
    Session: 'Session',
    MfaRecoveryCode: 'MfaRecoveryCode'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    phone: 'phone',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    pharmacyId: 'pharmacyId',
    consentAt: 'consentAt',
    pcnRegNo: 'pcnRegNo',
    notificationsSeenAt: 'notificationsSeenAt',
    disabledAt: 'disabledAt',
    disabledReason: 'disabledReason',
    totpSecret: 'totpSecret',
    totpEnabledAt: 'totpEnabledAt',
    totpLastStep: 'totpLastStep',
    mfaFailures: 'mfaFailures',
    mfaLockedUntil: 'mfaLockedUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SocialIdentityScalarFieldEnum = {
    id: 'id',
    provider: 'provider',
    subject: 'subject',
    email: 'email',
    userId: 'userId',
    createdAt: 'createdAt'
};
export const OtpChallengeScalarFieldEnum = {
    id: 'id',
    phone: 'phone',
    codeHash: 'codeHash',
    expiresAt: 'expiresAt',
    attempts: 'attempts',
    consumedAt: 'consumedAt',
    createdAt: 'createdAt'
};
export const PharmacyScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    name: 'name',
    area: 'area',
    address: 'address',
    premisesLicenceNo: 'premisesLicenceNo',
    licenceExpiresAt: 'licenceExpiresAt',
    status: 'status',
    coldChain: 'coldChain',
    lat: 'lat',
    lng: 'lng',
    phone: 'phone',
    email: 'email',
    superintendentName: 'superintendentName',
    verifiedAt: 'verifiedAt',
    suspendedAt: 'suspendedAt',
    suspendedReason: 'suspendedReason',
    licenceReminderDays: 'licenceReminderDays',
    openDays: 'openDays',
    opensAt: 'opensAt',
    lastOrderAt: 'lastOrderAt',
    coverageAreas: 'coverageAreas',
    bankName: 'bankName',
    bankAccountName: 'bankAccountName',
    bankAccountNumber: 'bankAccountNumber',
    bankUpdatedAt: 'bankUpdatedAt',
    bankVerifiedAt: 'bankVerifiedAt',
    bankVerifiedById: 'bankVerifiedById',
    createdAt: 'createdAt'
};
export const ProductScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    name: 'name',
    genericName: 'genericName',
    form: 'form',
    strength: 'strength',
    packDescription: 'packDescription',
    unitsPerPack: 'unitsPerPack',
    manufacturer: 'manufacturer',
    nafdacRegNo: 'nafdacRegNo',
    category: 'category',
    classification: 'classification',
    coldChain: 'coldChain',
    storage: 'storage',
    uses: 'uses',
    deliveryAllowed: 'deliveryAllowed'
};
export const BatchScalarFieldEnum = {
    id: 'id',
    pharmacyId: 'pharmacyId',
    productId: 'productId',
    batchNumber: 'batchNumber',
    expiresAt: 'expiresAt',
    quantity: 'quantity',
    priceKobo: 'priceKobo',
    location: 'location',
    status: 'status',
    quarantineReason: 'quarantineReason',
    receivedAt: 'receivedAt'
};
export const OrderScalarFieldEnum = {
    id: 'id',
    code: 'code',
    patientId: 'patientId',
    pharmacyId: 'pharmacyId',
    status: 'status',
    deliveryAddress: 'deliveryAddress',
    deliveryArea: 'deliveryArea',
    dropoffLat: 'dropoffLat',
    dropoffLng: 'dropoffLng',
    etaMinutes: 'etaMinutes',
    lateTextAt: 'lateTextAt',
    subtotalKobo: 'subtotalKobo',
    deliveryKobo: 'deliveryKobo',
    serviceKobo: 'serviceKobo',
    totalKobo: 'totalKobo',
    statusNote: 'statusNote',
    paymentStatus: 'paymentStatus',
    paidAt: 'paidAt',
    paymentTxId: 'paymentTxId',
    preparingAt: 'preparingAt',
    readyAt: 'readyAt',
    payoutId: 'payoutId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const OrderItemScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    unitPriceKobo: 'unitPriceKobo',
    batchId: 'batchId'
};
export const PrescriptionScalarFieldEnum = {
    id: 'id',
    code: 'code',
    patientId: 'patientId',
    orderId: 'orderId',
    imageKey: 'imageKey',
    prescriberName: 'prescriberName',
    status: 'status',
    reviewedById: 'reviewedById',
    reviewedAt: 'reviewedAt',
    decisionNote: 'decisionNote',
    createdAt: 'createdAt'
};
export const AuditLogScalarFieldEnum = {
    id: 'id',
    actorId: 'actorId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
export const RiderProfileScalarFieldEnum = {
    userId: 'userId',
    partner: 'partner',
    coldChain: 'coldChain',
    active: 'active',
    area: 'area',
    onlineSince: 'onlineSince'
};
export const DeliveryScalarFieldEnum = {
    id: 'id',
    code: 'code',
    orderId: 'orderId',
    riderId: 'riderId',
    provider: 'provider',
    courierId: 'courierId',
    providerRef: 'providerRef',
    feeKobo: 'feeKobo',
    trackingUrl: 'trackingUrl',
    handedOverById: 'handedOverById',
    proof: 'proof',
    providerStatus: 'providerStatus',
    providerStatusAt: 'providerStatusAt',
    bookingError: 'bookingError',
    status: 'status',
    coldChain: 'coldChain',
    dropoffCode: 'dropoffCode',
    codeAttempts: 'codeAttempts',
    createdAt: 'createdAt',
    assignedAt: 'assignedAt',
    pickedUpAt: 'pickedUpAt',
    deliveredAt: 'deliveredAt',
    failedAt: 'failedAt',
    failReason: 'failReason',
    failureCause: 'failureCause',
    costBearer: 'costBearer',
    staleAlertAt: 'staleAlertAt'
};
export const CourierScalarFieldEnum = {
    id: 'id',
    name: 'name',
    contact: 'contact',
    acceptsPrescription: 'acceptsPrescription',
    acceptsColdChain: 'acceptsColdChain',
    approvalNote: 'approvalNote',
    active: 'active',
    api: 'api',
    priority: 'priority',
    createdAt: 'createdAt'
};
export const IncidentScalarFieldEnum = {
    id: 'id',
    code: 'code',
    orderId: 'orderId',
    deliveryId: 'deliveryId',
    type: 'type',
    description: 'description',
    reportedById: 'reportedById',
    reporterRole: 'reporterRole',
    status: 'status',
    resolution: 'resolution',
    resolvedById: 'resolvedById',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt'
};
export const DeliveryQuoteScalarFieldEnum = {
    id: 'id',
    pharmacyId: 'pharmacyId',
    courierId: 'courierId',
    lat: 'lat',
    lng: 'lng',
    courierFeeKobo: 'courierFeeKobo',
    priceKobo: 'priceKobo',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
};
export const CourierInvoiceScalarFieldEnum = {
    id: 'id',
    courierId: 'courierId',
    number: 'number',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    totalKobo: 'totalKobo',
    status: 'status',
    note: 'note',
    createdById: 'createdById',
    createdAt: 'createdAt',
    reconciledAt: 'reconciledAt',
    reconciledById: 'reconciledById'
};
export const CourierInvoiceLineScalarFieldEnum = {
    id: 'id',
    invoiceId: 'invoiceId',
    providerRef: 'providerRef',
    amountKobo: 'amountKobo'
};
export const PartnerApplicationScalarFieldEnum = {
    id: 'id',
    code: 'code',
    kind: 'kind',
    organisation: 'organisation',
    contactName: 'contactName',
    email: 'email',
    phone: 'phone',
    details: 'details',
    status: 'status',
    note: 'note',
    reviewedById: 'reviewedById',
    reviewedAt: 'reviewedAt',
    pharmacyId: 'pharmacyId',
    createdAt: 'createdAt'
};
export const TransferScalarFieldEnum = {
    id: 'id',
    code: 'code',
    fromPharmacyId: 'fromPharmacyId',
    toPharmacyId: 'toPharmacyId',
    batchId: 'batchId',
    quantity: 'quantity',
    status: 'status',
    note: 'note',
    createdById: 'createdById',
    publishedById: 'publishedById',
    publishedAt: 'publishedAt',
    acceptedById: 'acceptedById',
    acceptedAt: 'acceptedAt',
    dispatchedById: 'dispatchedById',
    dispatchedAt: 'dispatchedAt',
    receivedById: 'receivedById',
    receivedAt: 'receivedAt',
    receivedBatchId: 'receivedBatchId',
    closedById: 'closedById',
    closedAt: 'closedAt',
    closeReason: 'closeReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PayoutScalarFieldEnum = {
    id: 'id',
    code: 'code',
    pharmacyId: 'pharmacyId',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    orderCount: 'orderCount',
    grossKobo: 'grossKobo',
    feesKobo: 'feesKobo',
    netKobo: 'netKobo',
    status: 'status',
    bankName: 'bankName',
    bankAccountName: 'bankAccountName',
    bankAccountNumber: 'bankAccountNumber',
    reference: 'reference',
    paidAt: 'paidAt',
    paidById: 'paidById',
    createdById: 'createdById',
    createdAt: 'createdAt'
};
export const ComplianceDocumentScalarFieldEnum = {
    id: 'id',
    pharmacyId: 'pharmacyId',
    kind: 'kind',
    reference: 'reference',
    issuer: 'issuer',
    expiresAt: 'expiresAt',
    fileKey: 'fileKey',
    fileName: 'fileName',
    status: 'status',
    reviewNote: 'reviewNote',
    reviewedById: 'reviewedById',
    reviewedAt: 'reviewedAt',
    reminderDays: 'reminderDays',
    uploadedById: 'uploadedById',
    createdAt: 'createdAt'
};
export const SessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    mfa: 'mfa',
    userAgent: 'userAgent',
    ip: 'ip',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    revokedReason: 'revokedReason'
};
export const MfaRecoveryCodeScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    codeHash: 'codeHash',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const JsonNullValueInput = {
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map