import { Role } from '../generated/prisma/client.js';
export declare const IS_PUBLIC = "isPublic";
export declare const ROLES = "roles";
export declare const Public: () => import("@nestjs/common").CustomDecorator<string>;
export declare const Roles: (...roles: Role[]) => import("@nestjs/common").CustomDecorator<string>;
export declare const PharmacyStaff: () => import("@nestjs/common").CustomDecorator<string>;
export type ClientInfo = {
    ip?: string;
    userAgent?: string;
};
export declare const Client: (...dataOrPipes: unknown[]) => ParameterDecorator;
export declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
