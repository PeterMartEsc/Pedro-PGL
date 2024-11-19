import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAppContext } from './AppContextProvider';
import { usePokemonCard } from './hooks/usePokemonCard';


type Props = {}

type PokemonCardData = {
    name : string;
    img : string;
    weight : number;
    height : number;
}


const PokemonCardPr50 = (props: Props) => {

    const {responseUrl} =usePokemonCard();
    const {setPokemon} = useAppContext();

    return (
        <div className='card'>
            <h1>{responseUrl.name}</h1>
            <img src={responseUrl.img} />
            <p>Peso: {responseUrl.weight / 10} kg</p>
            <p>Altura: {responseUrl.height /10} m</p>
            <button onClick={() => setPokemon(responseUrl)}>Añadir a favoritos</button>
        </div>
    )
}

export default PokemonCardPr50
