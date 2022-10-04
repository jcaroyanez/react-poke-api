import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function DetailPoke() {
    const { id } = useParams();

    return (
        <>
            <h1>Detail {id}</h1>
            <Link to="/list">List</Link>
        </>
    )
}

export default DetailPoke;