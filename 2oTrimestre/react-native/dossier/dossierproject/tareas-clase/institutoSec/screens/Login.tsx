import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

type Props = {}

type LoginData = {
    nombre: string,
    //correo: string,
    password: string,
}

const Login = (props: Props) => {
    const [formdata, setformdata] = useState<LoginData>({} as LoginData);

    function fillFormData(value: string, field: keyof LoginData) {
        // const regex = /[\w]{}/;
        // if(field === 'correo' && ){

        // }
        setformdata(
            {
                ...formdata,
                [field]: value
            }
        );
    }

    async function login() {
        try {
            const response = await axios.post(`http://10.108.255.4:8080/api/v1/login/`, {
                formdata
            });

            if (response.status === 200) {
                console.log("se ha creado")
                
            } else {
                throw new Error("An error has occurred");
            }
        } catch (error) {
            console.log("An error has occurred");

        }
    }

    return (
        <View>
            <TextInput placeholder='nombre' onChangeText={(texto) => fillFormData(texto, "nombre")} />
            {/* <TextInput placeholder='correo' keyboardType="email-address" onChangeText={(texto) => fillFormData(texto, "correo")} /> */}
            <TextInput placeholder='password' secureTextEntry={true} onChangeText={(texto) => fillFormData(texto, "password")} />
            <TouchableHighlight onPress={login}>
                <Text>Login</Text>
            </TouchableHighlight>
            <Text>
                {JSON.stringify(formdata)}
            </Text>
        </View>
    )
}


export default Login

const styles = StyleSheet.create({})