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

    if(!thisPokemon) {
        return <div>Loading...</div>
    }

    // Format the Pokémon ID with leading zeros
    const formattedId = thisPokemon.id.toString().padStart(3, '0');

    return (
            <div className='card' id={thisPokemon.types[0]?.type.name}>
                <div className="image-container">
                    <img src={thisPokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <h4> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
                <p id='id'>#{formattedId}</p>
                <p id='type' className={thisPokemon.types[0]?.type.name}>
                    {thisPokemon.types[0]?.type.name.charAt(0).toUpperCase()}{thisPokemon.types[0]?.type.name.slice(1)}
                </p>
            </div>
    )
}

export default PokemonCard;