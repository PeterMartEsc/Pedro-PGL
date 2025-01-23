import { StyleSheet, Text, View } from 'react-native'
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'
import { Producto } from '../src/entity/Producto';

type Props = {}

export interface AppContextType {
    listaProductos: Producto[];
    setListaProductos : Dispatch<SetStateAction<Producto[]>>
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = (props: any) => {
    
    const [listaProductos, setListaProductos] = useState<Producto[]>([]);
    
    const contextValues: AppContextType = {
        listaProductos,
        setListaProductos
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