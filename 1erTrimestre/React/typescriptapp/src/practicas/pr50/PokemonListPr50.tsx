import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCardPr50';
import { Link } from 'react-router-dom';

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


function PokemonListPr50({}: Props) {
    const [cardList, setcardList] = useState<Result[]>([]);
    const uri : string  = "https://pokeapi.co/api/v2/pokemon/";

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
            <br />
            <div className='tarjetas'>
                {
                    cardList.map((result, index) => (
                        <div key={index} className='card'>
                            <Link to={`/pokemon/${index+1}`} >{result.name}</Link> &nbsp;
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PokemonListPr50