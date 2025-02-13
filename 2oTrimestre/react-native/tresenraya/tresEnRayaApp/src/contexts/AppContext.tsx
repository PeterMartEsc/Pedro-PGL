import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'

type Props = {}

type PartidaContextType = {
    idPartidaActual: number,
    saveToken: (id: number) => void,
    // removeToken: () => void
}

const PartidaContext = createContext<PartidaContextType>({} as PartidaContextType);

const AppContext = (props: any) => {

    const [idPartidaActual, setIdActual] = useState<number>();

    useEffect(() => {
        
    }, [])

    
    const saveToken = (id: number) => {
        setIdActual(id);
        console.log("id de la partida guardada");
    }


    const contextValues = {
        idPartidaActual,   //idPartidaActual
        saveToken,
    }

    return (
        <PartidaContext.Provider value={contextValues}>
            {props.children}
        </PartidaContext.Provider>
    )
}

export function useAppContext() {
    return React.useContext(PartidaContext);
}

export default AppContext

const styles = StyleSheet.create({})