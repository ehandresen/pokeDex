import './PokemonList.css';
import axios from 'axios';
import { useEffect } from 'react';

const PokemonList = () => {

    // useEffect(()=>{
    //     getPokemons();

    // }, [])

    const getPokemons = async () => {

        const list = [];


        for (let i = 1; i < 150; i++) {

            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            console.log(pokemon.data.name);           
            list.push(pokemon);
            
        }
        console.log('list' + list);
    }


    getPokemons();

    return (
        <>pokemonlist</>
    )
}

export default PokemonList;