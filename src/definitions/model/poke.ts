export type itemPoke = {
    name: string;
    url: string;
}

export type PokeReponse = {
    next: string;
    results: itemPoke []
}

type OtherSprite = {
    dream_world: {
        front_default: string; 
    } 
}

type SpritesPoke = {
    other: OtherSprite;
}

type typePoke = {
    name: string;
    url: string;
}

export type typesPoke = {
    slot: number;
    type: typePoke;
}

export type InforPokeResponse = {
    name: string;
    sprites: SpritesPoke;
    types: typesPoke[];
    id: number;
}

export type Pokemon = {
    name: string;
    src: string;
    type: string[];
    id: number;
}

export type PokemonData = {
    pokemons: Pokemon[],
    nextUrl: string;
}