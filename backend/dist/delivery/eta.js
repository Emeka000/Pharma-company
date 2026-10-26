export const ETA = {
    packingMinutes: 15,
    riderToPharmacyMinutes: 10,
    averageKmh: 18,
    roadFactor: 1.35,
    roundToMinutes: 5,
};
export const RIDER_RADIUS_KM = 10;
export const MAX_ACTIVE_JOBS = 3;
export function distanceKm(a, b) {
    const rad = (d) => (d * Math.PI) / 180;
    const dLat = rad(b.lat - a.lat);
    const dLng = rad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 6371 * 2 * Math.asin(Math.sqrt(h));
}
export function etaMinutes(pharmacy, dropoff) {
    if (pharmacy.lat == null || pharmacy.lng == null)
        return null;
    const rideKm = distanceKm({ lat: pharmacy.lat, lng: pharmacy.lng }, dropoff) * ETA.roadFactor;
    const total = ETA.packingMinutes + ETA.riderToPharmacyMinutes + (rideKm / ETA.averageKmh) * 60;
    return Math.ceil(total / ETA.roundToMinutes) * ETA.roundToMinutes;
}
export const arriveBy = (o) => o.paidAt && o.etaMinutes ? new Date(o.paidAt.getTime() + o.etaMinutes * 60_000) : null;
//# sourceMappingURL=eta.js.map