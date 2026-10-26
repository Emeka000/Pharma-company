import { Role } from '../generated/prisma/client.js';
export const isLocalEnv = (nodeEnv) => nodeEnv === 'development' || nodeEnv === 'test';
export function parseDuration(value) {
    const m = typeof value === 'string' ? /^(\d+)\s*(s|m|h|d)$/.exec(value.trim()) : null;
    if (!m)
        return null;
    const n = Number(m[1]) * { s: 1, m: 60, h: 3600, d: 86_400 }[m[2]];
    return n > 0 ? n : null;
}
export function parseMfaRoles(value) {
    const raw = typeof value === 'string' ? value : 'PLATFORM_ADMIN,PHARMACIST';
    return raw
        .split(',')
        .map((r) => r.trim())
        .filter((r) => Object.values(Role).includes(r));
}
export const SHORT_SESSION_ROLES = [Role.PLATFORM_ADMIN, Role.PHARMACIST, Role.PHARMACY_STAFF];
//# sourceMappingURL=env.js.map