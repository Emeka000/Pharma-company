import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class JwtAuthGuard implements CanActivate {
    private readonly reflector;
    private readonly jwt;
    private readonly prisma;
    private readonly mfaRoles;
    constructor(reflector: Reflector, jwt: JwtService, prisma: PrismaService, config: ConfigService);
    canActivate(ctx: ExecutionContext): Promise<boolean>;
}
export declare class RolesGuard implements CanActivate {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(ctx: ExecutionContext): boolean;
}
