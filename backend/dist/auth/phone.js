export function normalisePhone(input) {
    let d = input.replace(/\D/g, '');
    if (d.startsWith('234'))
        d = d.slice(3);
    if (d.startsWith('0'))
        d = d.slice(1);
    return /^[789][01]\d{8}$/.test(d) ? `+234${d}` : null;
}
//# sourceMappingURL=phone.js.map