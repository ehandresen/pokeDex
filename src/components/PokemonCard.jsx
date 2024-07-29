/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';
import './pokemonCard.css';

const PokemonCard = ({pokemon}) => {
    const [thisPokemon, setThisPokemon] = useState({});
    console.log(thisPokemon);
    
    useEffect(() => {
        getPokemon();
    }, [])

    async function getPokemon() {
        const response = await axios.get(pokemon.url);
        setThisPokemon(response.data);
    }

    return (
            <div className='container'>
                <img src="" alt="" />
                <h4> {pokemon.name}</h4>
                <p>#{thisPokemon.id < 10 ? '00' : '0'}{thisPokemon.id}</p>
                <p>Fire</p>
            </div>
    )
}

export default PokemonCard;