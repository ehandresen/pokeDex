import { useEffect } from "react";
import axios from "axios";

const PokemonCard = () => {

    useEffect(()=>{

        const ditto = axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        console.log(ditto);

    }, [])

    return (
        <>
        PokemonCard</>
    )
}

export default PokemonCard;