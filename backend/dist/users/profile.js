export function profileOf(u) {
    return {
        id: u.id,
        phone: u.phone,
        email: u.email,
        firstName: u.firstName,
        lastName: u.lastName,
        role: u.role,
        pharmacyId: u.pharmacyId,
        profileComplete: Boolean(u.firstName && u.lastName && u.consentAt),
        linkedAccounts: (u.socialIdentities ?? []).map((s) => s.provider),
        pharmacy: u.pharmacy
            ? { id: u.pharmacy.id, name: u.pharmacy.name, area: u.pharmacy.area, status: u.pharmacy.status, licenceExpiresAt: u.pharmacy.licenceExpiresAt }
            : null,
    };
}
//# sourceMappingURL=profile.js.map