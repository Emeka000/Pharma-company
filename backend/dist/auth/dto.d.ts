import { SocialProvider } from '../generated/prisma/client.js';
export declare const AUTH_INTENTS: readonly ["signin", "signup", "auto"];
export type AuthIntent = (typeof AUTH_INTENTS)[number];
export declare class RequestOtpDto {
    phone: string;
    intent?: AuthIntent;
}
export declare class VerifyOtpDto {
    phone: string;
    code: string;
    intent?: AuthIntent;
    firstName?: string;
    lastName?: string;
    email?: string;
    consent?: boolean;
}
export declare class SocialSignInDto {
    provider: SocialProvider;
    idToken: string;
    firstName?: string;
    lastName?: string;
}
export declare class DemoSocialSignInDto {
    provider: SocialProvider;
    email: string;
    firstName?: string;
    lastName?: string;
}
export declare class AddPhoneDto {
    phone: string;
    code: string;
}
export declare class MfaSetupDto {
    mfaToken: string;
}
export declare class MfaVerifyDto {
    mfaToken: string;
    code: string;
}
