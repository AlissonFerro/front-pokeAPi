export interface SomeInfosPoke {
    name: string,
    url: string
}

export interface PayloadPoke {
    data: {
        count: number,
        next: string | null,
        previous: string | null,
        results: Array<SomeInfosPoke>
    }
}

export interface ListPokes {
    results: Array<SomeInfosPoke>,
    previous: string | null,
    next: string | null
}

interface NamedAPIResource {
    name: string;
    url: string;
}

interface Ability {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
}

interface Move {
    move: NamedAPIResource;
    version_group_details: any[];
}

interface SpriteVariants {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other?: {
        dream_world: any;
        home: any;
        "official-artwork": { front_default: string };
        showdown: any;
    };
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
}

interface Type {
    slot: number;
    type: NamedAPIResource;
}

export interface PokemonData {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    is_default: boolean;
    order: number;
    abilities: Ability[];
    forms: NamedAPIResource[];
    moves: Move[];
    species: NamedAPIResource;
    sprites: SpriteVariants;
    stats: Stat[];
    types: Type[];
    location_area_encounters: string;
    cries: {
        latest: string;
        legacy: string;
    };
}

export interface ListUrlsPokes {
    url: string
}
