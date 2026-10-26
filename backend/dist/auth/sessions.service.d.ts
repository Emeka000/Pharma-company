import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import type { ClientInfo } from '../common/decorators.js';
import type { Role } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class SessionsService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    ttlSeconds(role: Role): number;
    create(user: {
        id: string;
        role: Role;
    }, opts: {
        mfa: boolean;
        client?: ClientInfo;
    }): Promise<{
        accessToken: string;
        sessionId: string;
        expiresAt: Date;
    }>;
    revoke(sessionId: string, reason: string): Promise<void>;
    revokeAll(userId: string, reason: string, keep?: string): Promise<number>;
    list(userId: string, current?: string): Promise<{
        current: boolean;
        id: string;
        createdAt: Date;
        expiresAt: Date;
        mfa: boolean;
        userAgent: string | null;
        ip: string | null;
    }[]>;
}
