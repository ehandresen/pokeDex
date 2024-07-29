/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';
import './pokemonCard.css';

const PokemonCard = ({pokemon}) => {
    const [thisPokemon, setThisPokemon] = useState(null);
    
    useEffect(() => {
        getPokemon();
    }, [])
    
    async function getPokemon() {
        const response = await axios.get(pokemon.url);
        setThisPokemon(response.data);
    }
    console.log(thisPokemon);

    if(!thisPokemon) {
        return <div>Loading...</div>
    }

    return (
            <div className='container' id={thisPokemon.types[0]?.type.name}>
                <img src={thisPokemon.sprites.front_default} alt={pokemon.name} />
                <h4> {pokemon.name}</h4>
                <p>#{thisPokemon.id < 10 ? '00' : '0'}{thisPokemon.id}</p>
                <p>
                    {thisPokemon.types[0]?.type.name}
                </p>
            </div>
    )
}

export default PokemonCard;