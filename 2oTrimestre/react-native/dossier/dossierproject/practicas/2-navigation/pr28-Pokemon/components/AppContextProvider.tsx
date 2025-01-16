import { StyleSheet, Text, View } from 'react-native'
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

type Props = {}

interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
        
        back_default: string;
        back_female?: string;
        back_shiny?: string;
        back_shiny_female?: string;
        other: {
            official_artwork: {
                front_default: string;
            }
        }
    }
}

export interface AppContextType {
    listaPokemon: Pokemon[];
    setListaPokemon : Dispatch<SetStateAction<Pokemon[]>>
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = (props: any) => {

    const [listaPokemon, setListaPokemon] = useState<Pokemon[]>([]);
    
    const contextValues: AppContextType = {
        listaPokemon,
        setListaPokemon
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

const styles = StyleSheet.create({})