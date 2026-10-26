export declare const TOTP_STEP_SECONDS = 30;
export declare function base32Encode(buf: Buffer): string;
export declare function base32Decode(s: string): Buffer;
export declare const newTotpSecret: () => string;
export declare const stepAt: (ms: number) => number;
export declare function hotp(secret: Buffer, counter: number, digits?: number): string;
export declare function matchTotp(secretB32: string, code: string, nowMs: number, lastStep: number | null): number | null;
export declare const otpauthUrl: (secretB32: string, account: string, issuer?: string) => string;
