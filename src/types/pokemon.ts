export type NamedAPIResource = {
    name: string;
    url: string;
};

export type NamedAPIResourceList = {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[];
};

export type Pokemon = {
    id: number;
    name: string;
    weight: number;
    height: number;
    types: string[];
    stats: {
        name: string;
        value: number;
    }[];
    sprite: string;
    gif: string;
};
