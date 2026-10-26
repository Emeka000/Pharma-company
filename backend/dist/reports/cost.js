import { CostBearer, FailureCause } from '../generated/prisma/client.js';
export const COST_BEARER = {
    CUSTOMER_UNAVAILABLE: CostBearer.CUSTOMER,
    WRONG_ADDRESS: CostBearer.CUSTOMER,
    CUSTOMER_REFUSED: CostBearer.CUSTOMER,
    PHARMACY_DELAY: CostBearer.PHARMACY,
    COURIER_FAULT: CostBearer.COURIER,
    SAFETY: CostBearer.PLATFORM,
    OTHER: CostBearer.PLATFORM,
};
export function causeFromReason(reason) {
    const r = reason.toLowerCase();
    if (r.includes('not reachable') || r.includes('unavailable'))
        return FailureCause.CUSTOMER_UNAVAILABLE;
    if (r.includes('address'))
        return FailureCause.WRONG_ADDRESS;
    if (r.includes('refused'))
        return FailureCause.CUSTOMER_REFUSED;
    if (r.includes('seal') || r.includes('tamper') || r.includes('unsafe'))
        return FailureCause.SAFETY;
    if (r.includes('pharmacy'))
        return FailureCause.PHARMACY_DELAY;
    if (r.includes('courier'))
        return FailureCause.COURIER_FAULT;
    return FailureCause.OTHER;
}
//# sourceMappingURL=cost.js.map