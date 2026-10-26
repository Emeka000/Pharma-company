export class CourierApiError extends Error {
}
export function localPhone(e164) {
    const digits = e164.replace(/\D/g, '');
    return digits.startsWith('234') ? `0${digits.slice(3)}` : digits;
}
//# sourceMappingURL=courier-api.js.map