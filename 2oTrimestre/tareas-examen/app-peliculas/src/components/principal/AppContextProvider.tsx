import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'
import Pelicula from '../../models/Pelicula';

type Props = {}

export interface AppContextType {
    peliculasDestacadas: Pelicula[];
    setPeliculasDestacadas : Dispatch<SetStateAction<Pelicula[]>>
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = (props: any) => {
    
    const [peliculasDestacadas, setPeliculasDestacadas] = useState<Pelicula[]>([]);
    
    const contextValues: AppContextType = {
        peliculasDestacadas,
        setPeliculasDestacadas
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