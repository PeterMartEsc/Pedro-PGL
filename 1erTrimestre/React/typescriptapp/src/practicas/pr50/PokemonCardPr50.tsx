import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAppContext } from './AppContextProvider';


type Props = {}

type PokemonCardData = {
    name : string;
    img : string;
    weight : number;
    height : number;
}


const PokemonCardPr50 = (props: Props) => {

    const [responseUrl, setresponseUrl] = useState<PokemonCardData>({} as PokemonCardData);
    const {id} = useParams();
    
    const {setPokemon} = useAppContext();


    useEffect(() => {
        async function getPokemonCard(id: string){
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
            const newCard : PokemonCardData = {
                name : response.data.name,
                img : response.data.sprites.front_default,
                weight : response.data.weight,
                height : response.data.height
            }
            setresponseUrl(newCard);
        }
        
        getPokemonCard(id ? id : "");

    }, [id])

    return (
        <div className='card'>
            <h1>{responseUrl.name}</h1>
            <img src={responseUrl.img} />
            <p>Peso: {responseUrl.weight / 10} kg</p>
            <p>Altura: {responseUrl.height /10} m</p>
            <button onClick={()=>setPokemon(responseUrl)}>Añadir a favoritos</button>
        </div>
    )
}

export default PokemonCardPr50
