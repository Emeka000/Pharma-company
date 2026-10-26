import { randomInt } from 'node:crypto';
import { PrismaClientKnownRequestError } from '../generated/prisma/internal/prismaNamespace.js';
export const orderCode = () => `PB-${randomInt(100000, 1000000)}`;
export const prescriptionCode = () => `RX-${randomInt(10000, 100000)}`;
export const transferCode = () => `TR-${randomInt(10000, 100000)}`;
export const payoutCode = () => `PO-${randomInt(10000, 100000)}`;
export const applicationCode = () => `APP-${randomInt(10000, 100000)}`;
export const isUniqueViolation = (e) => e instanceof PrismaClientKnownRequestError && e.code === 'P2002';
export async function withUniqueCode(make, create, attempts = 5) {
    for (let i = 0;; i++) {
        try {
            return await create(make());
        }
        catch (e) {
            if (!isUniqueViolation(e) || i >= attempts - 1)
                throw e;
        }
    }
}
//# sourceMappingURL=codes.js.map