var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import { SocialProvider } from '../generated/prisma/client.js';
let SocialVerifier = class SocialVerifier {
    providers;
    constructor(config, keys) {
        this.providers = {
            [SocialProvider.GOOGLE]: {
                keys: keys?.GOOGLE ?? createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs')),
                issuers: ['https://accounts.google.com', 'accounts.google.com'],
                audience: config.get('GOOGLE_CLIENT_ID') || undefined,
            },
            [SocialProvider.APPLE]: {
                keys: keys?.APPLE ?? createRemoteJWKSet(new URL('https://appleid.apple.com/auth/keys')),
                issuers: ['https://appleid.apple.com'],
                audience: config.get('APPLE_CLIENT_ID') || undefined,
            },
        };
    }
    async verify(provider, idToken) {
        const p = this.providers[provider];
        const label = provider === SocialProvider.GOOGLE ? 'Google' : 'Apple';
        if (!p.audience)
            throw new ServiceUnavailableException(`${label} sign-in isn’t configured on the server`);
        let claims;
        try {
            ({ payload: claims } = await jwtVerify(idToken, p.keys, { issuer: p.issuers, audience: p.audience, algorithms: ['RS256', 'ES256'] }));
        }
        catch {
            throw new UnauthorizedException(`We couldn’t verify your ${label} sign-in — please try again`);
        }
        if (typeof claims.sub !== 'string' || !claims.sub)
            throw new UnauthorizedException(`Invalid ${label} account`);
        const verified = claims.email_verified === true || claims.email_verified === 'true';
        const email = verified && typeof claims.email === 'string' ? claims.email.toLowerCase() : null;
        const given = typeof claims.given_name === 'string' ? claims.given_name : null;
        const family = typeof claims.family_name === 'string' ? claims.family_name : null;
        const [first = null, ...rest] = typeof claims.name === 'string' ? claims.name.trim().split(/\s+/) : [];
        return {
            provider,
            subject: claims.sub,
            email,
            firstName: given ?? first,
            lastName: family ?? (rest.length ? rest.join(' ') : null),
        };
    }
};
SocialVerifier = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService, Object])
], SocialVerifier);
export { SocialVerifier };
//# sourceMappingURL=social-verifier.service.js.map