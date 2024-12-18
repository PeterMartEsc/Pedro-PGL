import { StyleSheet, Text, View } from 'react-native'
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'
import Nota from '../models/Nota';

type Props = {}

export interface AppContextType {
    listaNotas: Nota[];
    setListaNotas : Dispatch<SetStateAction<Nota[]>>
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = (props: any) => {
    
    const [listaNotas, setListaNotas] = useState<Nota[]>([]);
    
    const contextValues: AppContextType = {
        listaNotas,
        setListaNotas
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