import './pokemonCard.css';
import { useEffect } from "react";
import axios from "axios";

const PokemonCard = () => {

    useEffect(()=>{

        const getPokemon = async () => {

            const ditto = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
            console.log(ditto.data.name);
        }

        getPokemon();

    }, [])

    return (
            <div className='container'>
                <img src="" alt="" />
                <h3>Charmander</h3>
                <p>#004</p>
                <p>Fire</p>
            </div>
    )
}

export default PokemonCard;