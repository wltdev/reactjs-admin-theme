export interface GeoFeature {
    type: string;
    id: string;
    properties: {
        name: string;
    };
    geometry: {
        type: string;
        coordinates: any;
    };
}

export interface Geo {
    type: string;
    features: GeoFeature[];
}
