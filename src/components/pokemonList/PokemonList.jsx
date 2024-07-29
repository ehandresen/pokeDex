import PokemonCard from '../PokemonCard';
import './PokemonList.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(()=>{
        getPokemons();

    }, [])

    const getPokemons = async () => {

        const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        console.log(pokemons.data.results);
        setPokemonList(pokemons.data.results)

        // const list = [];
        // for (let i = 1; i <= 151; i++) {

        //     const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        //     const name = pokemon.data.name;
        //     list.push(name);   
        // }
        // setPokemonList(list);
    }

    return (
        <ol>{pokemonList.map((pokemon, i) => (
            <PokemonCard key={i} pokemon={pokemon} />)
        )}
        </ol>
    )
}

export default PokemonList;