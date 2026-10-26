export const DISPUTED = ['OVERCHARGED', 'UNKNOWN', 'DUPLICATE', 'CANCELLED_BEFORE_PICKUP', 'COURIER_FAULT', 'NOT_FINISHED'];
export function reconcile(lines, ours) {
    const byRef = new Map(ours.filter((d) => d.providerRef).map((d) => [d.providerRef, d]));
    const seen = new Set();
    const results = lines.map((line) => {
        const d = byRef.get(line.providerRef);
        const base = { ...line, expectedKobo: d?.feeKobo ?? null, delivery: d?.code ?? null, order: d?.orderCode ?? null };
        const dispute = (outcome, disputedKobo = line.amountKobo) => ({ ...base, outcome, disputedKobo });
        if (seen.has(line.providerRef))
            return dispute('DUPLICATE');
        seen.add(line.providerRef);
        if (!d)
            return dispute('UNKNOWN');
        if (d.status === 'CANCELLED' && !d.pickedUpAt)
            return dispute('CANCELLED_BEFORE_PICKUP');
        if (d.status === 'FAILED' && d.costBearer === 'COURIER')
            return dispute('COURIER_FAULT');
        if (d.status !== 'DELIVERED' && d.status !== 'FAILED' && d.status !== 'CANCELLED')
            return dispute('NOT_FINISHED');
        if (d.feeKobo != null && line.amountKobo > d.feeKobo)
            return dispute('OVERCHARGED', line.amountKobo - d.feeKobo);
        if (d.feeKobo != null && line.amountKobo < d.feeKobo)
            return { ...base, outcome: 'UNDERCHARGED', disputedKobo: 0 };
        return { ...base, outcome: 'MATCHED', disputedKobo: 0 };
    });
    const notInvoiced = ours.filter((d) => d.inPeriod && d.providerRef && !seen.has(d.providerRef) && (d.status === 'DELIVERED' || (d.status === 'FAILED' && d.costBearer !== 'COURIER')));
    const sum = (xs) => xs.reduce((a, b) => a + b, 0);
    return {
        lines: results,
        notInvoiced: notInvoiced.map((d) => ({ delivery: d.code, order: d.orderCode, providerRef: d.providerRef, status: d.status, feeKobo: d.feeKobo })),
        totals: {
            invoicedKobo: sum(lines.map((l) => l.amountKobo)),
            disputedKobo: sum(results.map((r) => r.disputedKobo)),
            payableKobo: sum(lines.map((l) => l.amountKobo)) - sum(results.map((r) => r.disputedKobo)),
            lines: results.length,
            matched: results.filter((r) => r.outcome === 'MATCHED' || r.outcome === 'UNDERCHARGED').length,
            disputed: results.filter((r) => DISPUTED.includes(r.outcome)).length,
        },
    };
}
//# sourceMappingURL=reconcile.js.map