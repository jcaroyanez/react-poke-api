import { InforPokeResponse, PokeDetail, Pokemon, PokemonData, PokeReponse, typesPoke } from "../../definitions/model/poke";
import { fetcher } from "../../util/fetch";

function mapTypes(types: typesPoke[]): string[]{
    return types.map((typePoke: typesPoke) => typePoke.type.name);
}

function mapPokemon(infoPokes: InforPokeResponse[]): Pokemon[] {
    return infoPokes.map((poke) => {
        return {
            name: poke.name,
            src: poke.sprites.other.dream_world.front_default,
            type: mapTypes(poke.types),
            id: poke.id
        }
    });
}

export async function fetchPoke(url: string): Promise<PokemonData> {
    const pokePromises: Promise<InforPokeResponse>[] = [];
    const response = await fetcher<PokeReponse>(url);
    const nextUrl = response?.next;

    response?.results?.forEach((poke) => {
        pokePromises.push(fetcher(poke.url));
    });

    const listReponse = await Promise.all(pokePromises);
    return {
        pokemons: mapPokemon(listReponse),
        nextUrl: nextUrl
    };
}

function mapDetailPoke(data: InforPokeResponse): PokeDetail {
    return {
        name: data.name,
        src: data?.sprites.other['official-artwork'].front_default,
        id: data.id
    }
}

export async function fetchGetPoke(url: string): Promise<PokeDetail> {
  const response = await fetcher<InforPokeResponse>(url);
  return mapDetailPoke(response);
}