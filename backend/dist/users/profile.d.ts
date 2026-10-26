import type { Pharmacy, SocialIdentity, User } from '../generated/prisma/client.js';
export declare function profileOf(u: User & {
    pharmacy?: Pharmacy | null;
    socialIdentities?: SocialIdentity[];
}): {
    id: string;
    phone: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    role: import("../generated/prisma/enums.js").Role;
    pharmacyId: string | null;
    profileComplete: boolean;
    linkedAccounts: import("../generated/prisma/enums.js").SocialProvider[];
    pharmacy: {
        id: string;
        name: string;
        area: string;
        status: import("../generated/prisma/enums.js").PharmacyStatus;
        licenceExpiresAt: Date;
    } | null;
};
