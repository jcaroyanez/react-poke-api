import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useGetPoke } from "../../../hooks/detail/get-poke";

const URL = "https://pokeapi.co/api/v2/pokemon";

function DetailPoke() {
    const { name } = useParams();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = useGetPoke(`${URL}/${name}`);

    return (
        <>
            <h1>Detail {name}</h1>
            <Link to="/list">List</Link>
        </>
    )
}

export default DetailPoke;