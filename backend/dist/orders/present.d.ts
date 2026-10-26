import { DeliveryStatus } from '../generated/prisma/client.js';
export declare const orderInclude: {
    items: {
        include: {
            product: {
                select: {
                    name: true;
                    strength: true;
                    classification: true;
                    coldChain: true;
                };
            };
            batch: {
                select: {
                    batchNumber: true;
                    expiresAt: true;
                };
            };
        };
    };
    pharmacy: {
        select: {
            name: true;
            area: true;
        };
    };
    prescription: {
        select: {
            code: true;
            status: true;
        };
    };
};
export declare const patientOrderInclude: {
    deliveries: {
        orderBy: {
            createdAt: "desc";
        };
        take: number;
        select: {
            dropoffCode: true;
            code: true;
            status: true;
            assignedAt: true;
            pickedUpAt: true;
            deliveredAt: true;
            failReason: true;
            provider: true;
            trackingUrl: true;
            courier: {
                select: {
                    name: true;
                };
            };
            rider: {
                select: {
                    firstName: true;
                    riderProfile: {
                        select: {
                            partner: true;
                        };
                    };
                };
            };
        };
    };
    items: {
        include: {
            product: {
                select: {
                    name: true;
                    strength: true;
                    classification: true;
                    coldChain: true;
                };
            };
            batch: {
                select: {
                    batchNumber: true;
                    expiresAt: true;
                };
            };
        };
    };
    pharmacy: {
        select: {
            name: true;
            area: true;
        };
    };
    prescription: {
        select: {
            code: true;
            status: true;
        };
    };
};
export declare const pharmacyOrderInclude: {
    patient: {
        select: {
            firstName: true;
            lastName: true;
        };
    };
    deliveries: {
        orderBy: {
            createdAt: "desc";
        };
        take: number;
        select: {
            code: true;
            status: true;
            assignedAt: true;
            pickedUpAt: true;
            deliveredAt: true;
            failReason: true;
            provider: true;
            trackingUrl: true;
            courier: {
                select: {
                    name: true;
                };
            };
            rider: {
                select: {
                    firstName: true;
                    riderProfile: {
                        select: {
                            partner: true;
                        };
                    };
                };
            };
        };
    };
    items: {
        include: {
            product: {
                select: {
                    name: true;
                    strength: true;
                    classification: true;
                    coldChain: true;
                };
            };
            batch: {
                select: {
                    batchNumber: true;
                    expiresAt: true;
                };
            };
        };
    };
    pharmacy: {
        select: {
            name: true;
            area: true;
        };
    };
    prescription: {
        select: {
            code: true;
            status: true;
        };
    };
};
export declare function present<T extends {
    paidAt: Date | null;
    etaMinutes: number | null;
    deliveries: ({
        status: DeliveryStatus;
        dropoffCode?: string;
    } & object)[];
}>(o: T): Omit<T, "deliveries"> & {
    arriveBy: Date | null;
    delivery: {
        dropoffCode?: string | null | undefined;
        status: DeliveryStatus;
    };
};
