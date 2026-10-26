import { Role } from '../generated/prisma/client.js';
export declare class FindUsersDto {
    q?: string;
    role?: Role;
}
export declare class ReasonDto {
    reason: string;
}
export declare class ChangePhoneDto {
    phone: string;
    reason: string;
}
