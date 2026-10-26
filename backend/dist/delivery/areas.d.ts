export type Area = {
    key: string;
    name: string;
    lat: number;
    lng: number;
};
export declare const AREAS: Area[];
export declare const AREA_KEYS: string[];
export declare const areaByKey: (key: string | null | undefined) => Area | null;
