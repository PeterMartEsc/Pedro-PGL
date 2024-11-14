import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


type Props = {}

type PokemonCardData = {
    name : string;
    img : string;
    weight : number;
    height : number;
}

const PokemonCard = (props: Props) => {

    const [responseUrl, setresponseUrl] = useState<PokemonCardData>({} as PokemonCardData);
    const {id} = useParams();

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
            <p>Peso: {responseUrl.weight / 10} Kg</p>
            <p>Altura: {responseUrl.height /10} m</p>
        </div>
    )
}

export default PokemonCard