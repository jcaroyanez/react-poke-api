import { useEffect, useState } from "react";
import useSWR from "swr";
import { Pokemon, PokemonData } from "../../definitions/model/poke";
import fetchPoke from "../../service/poke/poke";

const initValue: PokemonData = { pokemons: [], nextUrl: ''};

export function useGetPoke(url: string): PokemonData {
    const { data } = useSWR(
        [url], 
        fetchPoke);
    
    return data?.pokemons?.length ? data : initValue;
}

export function useNewPokemons(pokemons: Pokemon[]): Pokemon[] {
    const [data, setData] = useState(pokemons);

    useEffect(() => {
        setData(prevState => prevState.concat(pokemons));
    }, [pokemons]);

    return data;
}
