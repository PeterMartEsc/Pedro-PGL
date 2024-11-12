import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Props = {}



interface Result{
    name : string;
    url : string;
}

function PokemonListCard({}: Props) {
    const [cardList, setcardList] = useState<Result[]>([]);
    const uri : string  = ": https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

    useEffect(() => {
        async function getPokemonCard(direccion : string){
            const response = await axios.get(direccion);
            
        }
    
        getPokemonCard(uri);
    }, [])
    
    return (
        <div className='PokemonCard'>
            
        </div>
    )
}

export default PokemonListCard