import { useGetPokes, useNewPokemons } from "../../../hooks/detail/get-poke";
import CardPoke from "../card-poke/CardPoke";
import classes from './ListPoke.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=30';

function PokeList() {
    const [newUrl, setNewUrl] = useState(URL);
    const { pokemons, nextUrl } = useGetPokes(newUrl);
    const allPokemon = useNewPokemons(pokemons);
    const navigate = useNavigate();

    const changeNextUrl = () => {
        if (newUrl !== nextUrl) {
            setNewUrl(nextUrl);
        }
    }

    const onClick = (name: string) => {
        navigate(`/detail/${name}`)
    }

    return (
        <>
            <p className={classes['title']}>List Pokemons</p>
            <InfiniteScroll
                dataLength={allPokemon.length}
                next={changeNextUrl}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                className={classes['container']}
            >
                {allPokemon?.map((poke, index) => <CardPoke key={index} onClick={onClick} {...poke} />)}
            </InfiniteScroll>
        </>
    );
}

export default PokeList;