import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {}

type TokenContextType = {
    token: string
    saveToken: (token: string) => void,
    removeToken: () => void
}

const TokenContext = createContext<TokenContextType>({} as TokenContextType);

const AppContext = (props: any) => {

    const [token, setToken] = useState("");
    
    /**
     * Coge el token del storage cuando arranca la aplicación
     */

    useEffect(() => {
        AsyncStorage.getItem("token")
        .then((storedToken) => {
            if (storedToken) {
                setToken(storedToken);
                console.log("token obtenido del storage");
            }
        })
    }, [])

    /**
     * Guarda el token al hacer login
     * @param token jwt
     */
    const saveToken = (tokenEspecf: string) => {
        AsyncStorage.setItem("token", token);
        setToken(tokenEspecf);
        console.log("token guardado");
    }

    /**
     * Usado para logout
     */
    const removeToken = () => {
        AsyncStorage.removeItem("token");
        setToken("");
        console.log("token eliminado");
    }

    const contextValues = {
        token,
        saveToken,
        removeToken
    }

    return (
        <TokenContext.Provider value={contextValues}>
            {props.children}
        </TokenContext.Provider>
    )
}

export function useTokenContext() {
    return React.useContext(TokenContext);
}

export default AppContext

const styles = StyleSheet.create({})