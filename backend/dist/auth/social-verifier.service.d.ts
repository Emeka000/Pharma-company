import { ConfigService } from '@nestjs/config';
import { type JWTVerifyGetKey } from 'jose';
import { SocialProvider } from '../generated/prisma/client.js';
export type VerifiedIdentity = {
    provider: SocialProvider;
    subject: string;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
};
export declare class SocialVerifier {
    private readonly providers;
    constructor(config: ConfigService, keys?: Partial<Record<SocialProvider, JWTVerifyGetKey>>);
    verify(provider: SocialProvider, idToken: string): Promise<VerifiedIdentity>;
}
