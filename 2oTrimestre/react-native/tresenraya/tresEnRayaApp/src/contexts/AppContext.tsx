import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'

type Props = {}

type PartidaContextType = {
    idPartidaActual: number,
    saveIdPartida: (id: number) => void,
    // removeToken: () => void
}

const PartidaContext = createContext<PartidaContextType>({} as PartidaContextType);

const AppContext = (props: any) => {

    const [idPartidaActual, setIdActual] = useState<number | null>(null);

    
    const saveIdPartida = (id: number) => {
        setIdActual(id);
        console.log("id de la partida guardada "+id);
    }


    const contextValues = {
        idPartidaActual,   //idPartidaActual
        saveIdPartida,
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