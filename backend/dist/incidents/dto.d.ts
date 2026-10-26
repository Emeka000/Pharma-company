import { IncidentType } from '../generated/prisma/client.js';
export declare class ReportIncidentDto {
    type: IncidentType;
    description: string;
}
export declare class ResolveIncidentDto {
    resolution: string;
}
