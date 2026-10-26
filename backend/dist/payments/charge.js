export const orderCodeFromTxRef = (txRef) => {
    const cut = txRef.lastIndexOf('-');
    return cut > 0 ? txRef.slice(0, cut) : null;
};
export function chargeProblem(tx, order) {
    if (tx.status !== 'successful')
        return `payment ${tx.status}`;
    if (tx.currency !== 'NGN')
        return `paid in ${tx.currency}`;
    if (orderCodeFromTxRef(tx.tx_ref) !== order.code)
        return 'reference is for another order';
    if (Math.round(Number(tx.amount) * 100) < order.totalKobo)
        return 'amount is less than the order total';
    return null;
}
//# sourceMappingURL=charge.js.map