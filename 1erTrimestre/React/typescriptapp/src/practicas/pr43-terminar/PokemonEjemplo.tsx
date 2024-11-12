import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Props = {}

class PokemonCardData {
    public name: string;
    public img : string;

    constructor(name: string, img: string){
        this.name = name;
        this.img = img;
    }
}


function PokemonEjemplo({}: Props) {
    const [cardData, setcardData] = useState<PokemonCardData>({} as PokemonCardData);
    const uri : string  = "https://pokeapi.co/api/v2/pokemon/3/";

    useEffect(() => {
        async function getPokemonCard(direccion : string){
            const response = await axios.get(direccion);
            const newCard : PokemonCardData = {
                name : response.data.name,
                img : response.data.sprites.front_default
            }
            setcardData(newCard);
        }
    
        getPokemonCard(uri);
    }, [])
    
    return (
        <div className='PokemonCard'>
            <h3>{cardData.name}</h3>
            <img src={cardData.img} alt={cardData.name} />
        </div>
    )
}

export default PokemonEjemplo