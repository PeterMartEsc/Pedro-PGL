import React, { useEffect, useState } from 'react'
import axios from 'axios';


type Props = {
    name : string;
    url : string;
}

type PokemonCardData = {
    name : string;
    img : string;
    weight : number;
    height : number;
}

const PokemonCard = (props: Props) => {

    const [responseUrl, setresponseUrl] = useState<PokemonCardData>({} as PokemonCardData);
    const url = props.url;
    const name = props.name;

    useEffect(() => {
        async function getPokemonCard(url : string){
            const response = await axios.get(url);
            const newCard : PokemonCardData = {
                name : response.data.name,
                img : response.data.sprites.front_default,
                weight : response.data.weight,
                height : response.data.height
            }
            setresponseUrl(newCard);
        }
        
        getPokemonCard(url);

    }, [])
    

    return (
        <div className='card'>
            <h1>{responseUrl.name}</h1>
            <img src={responseUrl.img} alt={name} />
            <p>Peso: {responseUrl.weight} Kg</p>
            <p>Altura: {responseUrl.height} m</p>
        </div>
    )
}

export default PokemonCard