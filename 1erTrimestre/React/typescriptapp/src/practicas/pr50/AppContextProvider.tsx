import React, { createContext, useState } from 'react'

type Props = {}

export interface AppContextType {
    pokemon: PokemonCardData;
    setPokemon : Dispatch<SetStateAction<PokemonCardData>>
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = (props: any) => {
    
    const [pokemon, setPokemon] = useState<PokemonCardData>({} as PokemonCardData);
    
    const contextValues: AppContextType = {
        pokemon: pokemon,
        setPokemon: setPokemon
    };

    return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
    );
};