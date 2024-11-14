import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCardPr45';

type Props = {}

interface PokemonList {
    count: number;
    next: string;
    previous: string;
    results: Result[];
}

interface Result {
    name: string;
    url: string;
}


function PokemonListCardPr45({}: Props) {
    const [cardList, setcardList] = useState<Result[]>([]);
    const uri : string  = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

    useEffect(() => {
        async function getPokemonCard(direccion : string){
            const response = await axios.get(direccion);
            let lista = response.data as PokemonList;
            setcardList(lista.results);
        }
    
        getPokemonCard(uri);
    }, [])
    
    return (
        <div className='principal'>
            <div className='tarjetas'>
                {
                    cardList.map((result, index) => (
                        <div key={index} className='card'>
                            <PokemonCard url={result.url} name={result.name}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PokemonListCardPr45