import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'
import PokemonCardPr50 from './PokemonCardPr50';

type Props = {}

export interface AppContextType {
    pokemon: PokemonCardData;
    setPokemon : Dispatch<SetStateAction<PokemonCardData>>
}

interface PokemonCardData{
    name : string;
    img : string;
    weight : number;
    height : number;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = (props: any) => {
    
    const [pokemon, setPokemon] = useState<PokemonCardData>({} as PokemonCardData);
    
    const contextValues: AppContextType = {
        pokemon,
        setPokemon
    };

    return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
    );
};

export const useAppContext = () =>{
    return useContext(AppContext); 
}