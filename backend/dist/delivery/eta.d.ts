export declare const ETA: {
    packingMinutes: number;
    riderToPharmacyMinutes: number;
    averageKmh: number;
    roadFactor: number;
    roundToMinutes: number;
};
export declare const RIDER_RADIUS_KM = 10;
export declare const MAX_ACTIVE_JOBS = 3;
type Point = {
    lat: number;
    lng: number;
};
export declare function distanceKm(a: Point, b: Point): number;
export declare function etaMinutes(pharmacy: {
    lat: number | null;
    lng: number | null;
}, dropoff: Point): number | null;
export declare const arriveBy: (o: {
    paidAt: Date | null;
    etaMinutes: number | null;
}) => Date | null;
export {};
