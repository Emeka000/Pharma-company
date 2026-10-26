import type { Role } from '../generated/prisma/client.js';
export interface AuthUser {
    id: string;
    role: Role;
    pharmacyId: string | null;
    sessionId: string;
    sessionCreatedAt: Date;
    mfa: boolean;
}
export interface JwtPayload {
    sub: string;
    sid?: string;
    purpose?: 'mfa';
}
