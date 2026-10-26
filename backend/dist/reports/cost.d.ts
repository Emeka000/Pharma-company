import { CostBearer, FailureCause } from '../generated/prisma/client.js';
export declare const COST_BEARER: Record<FailureCause, CostBearer>;
export declare function causeFromReason(reason: string): FailureCause;
