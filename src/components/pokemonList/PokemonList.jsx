import PokemonCard from '../PokemonCard';
import './PokemonList.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    useEffect(()=>{
        getPokemons();

    }, [pokemonList])

    const getPokemons = async () => {

        if (!nextUrl || pokemonList.length > 150) {
            return 
        }

        console.log(nextUrl)
        if (nextUrl === 'https://pokeapi.co/api/v2/pokemon?offset=140&limit=20') {
            const lastUrl = 'https://pokeapi.co/api/v2/pokemon?offset=140&limit=11';
            const response = await axios.get(lastUrl);
            const pokemons = response.data.results;
            setPokemonList((prevList) => [...prevList, ...pokemons]);
            setNextUrl(response.data.next)
            return;
        }

        const response = await axios.get(nextUrl);
        const pokemons = response.data.results;
        setPokemonList((prevList) => [...prevList, ...pokemons]);
        setNextUrl(response.data.next)

        // const list = [];
        // for (let i = 1; i <= 151; i++) {

        //     const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        //     const name = pokemon.data.name;
        //     list.push(name);   
        // }
        // setPokemonList(list);
    }

    return (
        <div className='container'>
            {pokemonList.map((pokemon, i) => (
                <PokemonCard key={i} pokemon={pokemon} />)
            )}
        </div>
    )
}

export default PokemonList;