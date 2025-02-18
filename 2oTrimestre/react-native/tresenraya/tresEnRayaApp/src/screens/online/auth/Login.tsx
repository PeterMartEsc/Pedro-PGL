import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { useAppContext } from '../../../contexts/AppContext'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ip from '../../../utilities/Globals'
import { OnlineStackParamList } from '../../../navigations/OnlineStack'

type Props = {}

type LoginData = {
    nombre: string,
    password: string,
}

type tokenPlayload ={
    sub: string;
    rol: string;
}

type PropsHome = NativeStackScreenProps<OnlineStackParamList, 'Login'>

const Login = ({navigation, route}:PropsHome) => {

    const {saveToken} = useAppContext();

    const [nombre, setnombre] = useState("")
    const [password, setpassword] = useState("")


    async function login() {
        
        try {
            const response = await axios.post(`${ip}/api/v1/auth/login`, {
                nombre, password
            });
            
            if (response.status === 200) {
                saveToken(response.data);
            }
        } catch (error) {
            console.log("An error has occurred aqui" +error.message);

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

            <View>
                <TouchableHighlight onPress={()=> navigation.navigate('Register')}>
                    <Text style={{color: 'blue', textAlign: 'center', margin: 20}}>No tengo cuenta</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}


export default Login

const styles = StyleSheet.create({})