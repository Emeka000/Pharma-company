import { Role } from '../generated/prisma/client.js';
export declare const isLocalEnv: (nodeEnv: unknown) => nodeEnv is "development" | "test";
export declare function parseDuration(value: unknown): number | null;
export declare function parseMfaRoles(value: unknown): Role[];
export declare const SHORT_SESSION_ROLES: Role[];
