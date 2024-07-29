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

    return (
            <div className='card' id={thisPokemon.types[0]?.type.name}>
                <div className="image-container">
                    <img src={thisPokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <h4> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
                <p id='id'>#{thisPokemon.id < 10 ? '00' : '0'}{thisPokemon.id}</p>
                <p id='type' className={thisPokemon.types[0]?.type.name}>
                    {thisPokemon.types[0]?.type.name}
                </p>
            </div>
    )
}

export default PokemonCard;