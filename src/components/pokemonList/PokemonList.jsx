import './PokemonList.css';
import axios from 'axios';
import { useEffect } from 'react';

const PokemonList = () => {

    useEffect(()=>{

        const getPokemon = async () => {

            const ditto = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
            console.log(ditto.data.name);
        }
        getPokemon();

    }, [])

    return (
        <>pokemonlist</>
    )
}

export default PokemonList;