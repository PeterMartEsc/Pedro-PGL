import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import ipRoute from '../../globals/Globals';
import AppContext, { useTokenContext } from '../../context/AppContext';
import { useJwt } from 'react-jwt';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = {}

export type StackParamList = {
    Login: undefined,
    DrawerNavPrincipal : undefined,
}

type LoginData = {
    nombre: string,
    password: string,
}

type tokenPlayload ={
    sub: string;
    rol: string;
}

type PropsHome = NativeStackScreenProps<StackParamList, 'Login'>

const Login = ({navigation, route}:PropsHome) => {

    const {saveToken} = useTokenContext();

    const [nombre, setnombre] = useState("")
    const [password, setpassword] = useState("")


    async function login() {
        
        try {
            const response = await axios.post(`${ipRoute}/api/v1/login/`, {
                nombre, password
            });

            if (response.status === 200) {
                saveToken(response.data);
                Alert.alert('Bienvenido ', '' ,[
                {text: 'OK', onPress: () => navigation.navigate('DrawerNavPrincipal')},
                ])
            } else {
                throw new Error("An error has occurred "+response.status);
            }
        } catch (error) {
            console.log("An error has occurred" +error.message);

        }
    }

    return (
        <View>
            <TextInput placeholder='nombre' onChangeText={(texto) => setnombre(texto)} />
            <TextInput placeholder='password' secureTextEntry={true} onChangeText={(texto) => setpassword(texto)} />
            <View style={{borderWidth: 2, borderColor: 'blue' , margin: 10, padding: 2, alignItems: 'center'}}>
                <TouchableHighlight onPress={login}>
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
            {/* <Text>
                {JSON.stringify(context.token)}
            </Text> */}
            {/* <View>
                <TouchableHighlight onPress={()=> context.removeToken()}>
                    <Text>Logout</Text>
                </TouchableHighlight>
            </View> */}
        </View>
    )
}


export default Login

const styles = StyleSheet.create({})