import type { AuthUser } from '../common/auth-user.js';
import { CourierDispatchService } from '../delivery/courier-dispatch.service.js';
import { DeliveryWatchService } from '../delivery/delivery-watch.service.js';
import { AdminService } from './admin.service.js';
import { CourierDto, CreateRiderDto, PharmacyLocationDto, PharmacyPhoneDto, ProductEligibilityDto, UpdateCourierDto, UpdateRiderDto } from './dto.js';
export declare class AdminController {
    private readonly admin;
    private readonly watch;
    private readonly dispatch;
    constructor(admin: AdminService, watch: DeliveryWatchService, dispatch: CourierDispatchService);
    courierApis(): {
        key: string;
        label: string;
        configured: boolean;
    }[];
    setPhone(user: AuthUser, id: string, dto: PharmacyPhoneDto): Promise<{
        id: string;
        phone: string | null;
        email: string | null;
        createdAt: Date;
        slug: string;
        name: string;
        area: string;
        address: string;
        premisesLicenceNo: string;
        licenceExpiresAt: Date;
        status: import("../generated/prisma/enums.js").PharmacyStatus;
        coldChain: boolean;
        lat: number | null;
        lng: number | null;
        superintendentName: string | null;
        verifiedAt: Date | null;
        suspendedAt: Date | null;
        suspendedReason: string | null;
        bankName: string | null;
        bankAccountName: string | null;
        bankAccountNumber: string | null;
        bankUpdatedAt: Date | null;
        bankVerifiedAt: Date | null;
        _count: {
            staff: number;
        };
    }>;
    attention(): Promise<{
        late: {
            order: string;
            status: import("../generated/prisma/enums.js").OrderStatus;
            dueAt: Date;
            minutesLate: number;
            pharmacy: string;
            dropoffArea: string | null;
            delivery: {
                code: string;
                status: import("../generated/prisma/enums.js").DeliveryStatus;
            } | null;
            rider: {
                name: string;
                phone: string | null;
                partner: string | null;
            } | null;
        }[];
        unassigned: {
            order: string;
            orderStatus: import("../generated/prisma/enums.js").OrderStatus;
            delivery: string;
            waitingMinutes: number;
            coldChain: boolean;
            prescription: boolean;
            bookingError: string | null;
            pharmacy: string;
            dropoffArea: string | null;
        }[];
        queue: {
            order: string;
            orderStatus: import("../generated/prisma/enums.js").OrderStatus;
            delivery: string;
            waitingMinutes: number;
            coldChain: boolean;
            prescription: boolean;
            bookingError: string | null;
            pharmacy: string;
            dropoffArea: string | null;
        }[];
        courierJobs: {
            delivery: string;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
            order: string;
            orderStatus: import("../generated/prisma/enums.js").OrderStatus;
            courier: string | null;
            courierContact: string | null;
            providerRef: string | null;
            feeKobo: number | null;
            trackingUrl: string | null;
            connected: boolean;
            providerStatus: string | null;
            warning: string | null;
            pharmacy: string;
            dropoffArea: string | null;
        }[];
    }>;
    riders(): Promise<{
        id: string;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        partner: string | null;
        coldChain: boolean;
        active: boolean;
        online: boolean;
        area: string | null;
        activeJobs: number;
        delivered: number;
        failed: number;
    }[]>;
    createRider(user: AuthUser, dto: CreateRiderDto): Promise<{
        id: string;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        partner: string | null;
        coldChain: boolean;
        active: boolean;
        online: boolean;
        area: string | null;
        activeJobs: number;
        delivered: number;
        failed: number;
    } | undefined>;
    updateRider(user: AuthUser, id: string, dto: UpdateRiderDto): Promise<{
        id: string;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        partner: string | null;
        coldChain: boolean;
        active: boolean;
        online: boolean;
        area: string | null;
        activeJobs: number;
        delivered: number;
        failed: number;
    } | undefined>;
    pharmacies(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        phone: string | null;
        email: string | null;
        createdAt: Date;
        slug: string;
        name: string;
        area: string;
        address: string;
        premisesLicenceNo: string;
        licenceExpiresAt: Date;
        status: import("../generated/prisma/enums.js").PharmacyStatus;
        coldChain: boolean;
        lat: number | null;
        lng: number | null;
        superintendentName: string | null;
        verifiedAt: Date | null;
        suspendedAt: Date | null;
        suspendedReason: string | null;
        bankName: string | null;
        bankAccountName: string | null;
        bankAccountNumber: string | null;
        bankUpdatedAt: Date | null;
        bankVerifiedAt: Date | null;
        _count: {
            staff: number;
        };
    }[]>;
    setLocation(user: AuthUser, id: string, dto: PharmacyLocationDto): Promise<{
        id: string;
        phone: string | null;
        email: string | null;
        createdAt: Date;
        slug: string;
        name: string;
        area: string;
        address: string;
        premisesLicenceNo: string;
        licenceExpiresAt: Date;
        status: import("../generated/prisma/enums.js").PharmacyStatus;
        coldChain: boolean;
        lat: number | null;
        lng: number | null;
        superintendentName: string | null;
        verifiedAt: Date | null;
        suspendedAt: Date | null;
        suspendedReason: string | null;
        bankName: string | null;
        bankAccountName: string | null;
        bankAccountNumber: string | null;
        bankUpdatedAt: Date | null;
        bankVerifiedAt: Date | null;
        _count: {
            staff: number;
        };
    }>;
    couriers(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        _count: {
            deliveries: number;
        };
    } & {
        id: string;
        createdAt: Date;
        name: string;
        active: boolean;
        contact: string | null;
        acceptsPrescription: boolean;
        acceptsColdChain: boolean;
        approvalNote: string | null;
        api: string | null;
        priority: number;
    })[]>;
    createCourier(user: AuthUser, dto: CourierDto): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        active: boolean;
        contact: string | null;
        acceptsPrescription: boolean;
        acceptsColdChain: boolean;
        approvalNote: string | null;
        api: string | null;
        priority: number;
    }>;
    updateCourier(user: AuthUser, id: string, dto: UpdateCourierDto): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        active: boolean;
        contact: string | null;
        acceptsPrescription: boolean;
        acceptsColdChain: boolean;
        approvalNote: string | null;
        api: string | null;
        priority: number;
    }>;
    products(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        name: string;
        coldChain: boolean;
        strength: string | null;
        category: string;
        classification: import("../generated/prisma/enums.js").ProductClass;
        deliveryAllowed: boolean;
    }[]>;
    setDeliveryAllowed(user: AuthUser, id: string, dto: ProductEligibilityDto): Promise<{
        id: string;
        name: string;
        coldChain: boolean;
        strength: string | null;
        category: string;
        classification: import("../generated/prisma/enums.js").ProductClass;
        deliveryAllowed: boolean;
    }>;
}
