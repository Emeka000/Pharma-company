import { createParamDecorator, SetMetadata } from '@nestjs/common';
import { Role } from '../generated/prisma/client.js';
export const IS_PUBLIC = 'isPublic';
export const ROLES = 'roles';
export const Public = () => SetMetadata(IS_PUBLIC, true);
export const Roles = (...roles) => SetMetadata(ROLES, roles);
export const PharmacyStaff = () => Roles(Role.PHARMACIST, Role.PHARMACY_STAFF);
export const Client = createParamDecorator((_, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const ua = req.headers['user-agent'];
    return { ip: req.ips?.[0] ?? req.ip, userAgent: typeof ua === 'string' ? ua.slice(0, 200) : undefined };
});
export const CurrentUser = createParamDecorator((_, ctx) => {
    return ctx.switchToHttp().getRequest().user;
});
//# sourceMappingURL=decorators.js.map