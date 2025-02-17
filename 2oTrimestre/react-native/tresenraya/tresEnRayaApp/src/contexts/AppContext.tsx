import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {}

type PartidaContextType = {
    idPartidaActual: number,
    saveIdPartida: (id: number) => void,
    token : string,
    saveToken: (token: string) => void,
    removeToken: () => void
}

const PartidaContext = createContext<PartidaContextType>({} as PartidaContextType);

const AppContext = (props: any) => {

    const [idPartidaActual, setIdActual] = useState<number | null>(null);
    const [token, settoken] = useState<string>();

    useEffect(() => {
        AsyncStorage.getItem("token")
        .then((storedToken) => {
            if (storedToken) {
                settoken(storedToken);
                console.log(storedToken);
                console.log("token obtenido del storage");
            }
        })
    }, [])
    
    const saveIdPartida = (id: number) => {
        setIdActual(id);
        console.log("id de la partida guardada "+id);
    }

    const saveToken = (token: string) => {
        AsyncStorage.setItem("token", token);
        settoken(token);
        console.log("token guardado");
    }

    const removeToken = () => {
        AsyncStorage.removeItem("token");
        settoken("");
        console.log("token eliminado");
    }

    const contextValues = {
        idPartidaActual,   //idPartidaActual
        saveIdPartida,
        token,
        saveToken,
        removeToken
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