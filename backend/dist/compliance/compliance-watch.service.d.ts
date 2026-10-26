import { type OnApplicationBootstrap, type OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuditService } from '../audit/audit.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { StaffTextsService } from '../sms/staff-texts.service.js';
export declare class ComplianceWatchService implements OnApplicationBootstrap, OnModuleDestroy {
    private readonly prisma;
    private readonly audit;
    private readonly texts;
    private readonly config;
    private readonly log;
    private timer?;
    constructor(prisma: PrismaService, audit: AuditService, texts: StaffTextsService, config: ConfigService);
    onApplicationBootstrap(): void;
    onModuleDestroy(): void;
    check(now?: Date): Promise<{
        suspended: string[];
        reminded: string[];
    }>;
    private suspendExpired;
    private licenceReminders;
    private documentReminders;
}
