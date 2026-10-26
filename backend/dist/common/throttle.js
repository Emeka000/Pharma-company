import { normalisePhone } from '../auth/phone.js';
export function phoneTracker(req) {
    const raw = req.body?.phone;
    const phone = typeof raw === 'string' ? normalisePhone(raw) : null;
    return phone ? `phone:${phone}` : `ip:${req.ips?.[0] ?? req.ip ?? 'unknown'}`;
}
//# sourceMappingURL=throttle.js.map