import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
export const TOTP_STEP_SECONDS = 30;
const DIGITS = 6;
const B32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
export function base32Encode(buf) {
    let bits = 0;
    let value = 0;
    let out = '';
    for (const byte of buf) {
        value = (value << 8) | byte;
        bits += 8;
        while (bits >= 5) {
            out += B32[(value >>> (bits - 5)) & 31];
            bits -= 5;
        }
    }
    if (bits > 0)
        out += B32[(value << (5 - bits)) & 31];
    return out;
}
export function base32Decode(s) {
    const clean = s.toUpperCase().replace(/[\s=-]/g, '');
    let bits = 0;
    let value = 0;
    const out = [];
    for (const ch of clean) {
        const i = B32.indexOf(ch);
        if (i < 0)
            throw new Error('Invalid base32');
        value = (value << 5) | i;
        bits += 5;
        if (bits >= 8) {
            out.push((value >>> (bits - 8)) & 255);
            bits -= 8;
        }
    }
    return Buffer.from(out);
}
export const newTotpSecret = () => base32Encode(randomBytes(20));
export const stepAt = (ms) => Math.floor(ms / 1000 / TOTP_STEP_SECONDS);
export function hotp(secret, counter, digits = DIGITS) {
    const msg = Buffer.alloc(8);
    msg.writeBigUInt64BE(BigInt(counter));
    const h = createHmac('sha1', secret).update(msg).digest();
    const offset = h[h.length - 1] & 0xf;
    const bin = ((h[offset] & 0x7f) << 24) | (h[offset + 1] << 16) | (h[offset + 2] << 8) | h[offset + 3];
    return String(bin % 10 ** digits).padStart(digits, '0');
}
export function matchTotp(secretB32, code, nowMs, lastStep) {
    if (!/^\d{6}$/.test(code))
        return null;
    const secret = base32Decode(secretB32);
    const now = stepAt(nowMs);
    for (const step of [now - 1, now, now + 1]) {
        if (lastStep !== null && step <= lastStep)
            continue;
        const a = Buffer.from(hotp(secret, step));
        const b = Buffer.from(code);
        if (timingSafeEqual(a, b))
            return step;
    }
    return null;
}
export const otpauthUrl = (secretB32, account, issuer = 'Pilbridge') => `otpauth://totp/${encodeURIComponent(`${issuer}:${account}`)}?secret=${secretB32}&issuer=${encodeURIComponent(issuer)}&algorithm=SHA1&digits=${DIGITS}&period=${TOTP_STEP_SECONDS}`;
//# sourceMappingURL=totp.js.map