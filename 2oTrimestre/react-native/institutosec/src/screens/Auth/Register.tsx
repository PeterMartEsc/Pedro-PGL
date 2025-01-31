import { StyleSheet, Switch, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { Alert } from 'react-native'

type Props = {}

type RegisterData = {
    nombre: string,
    correo: string,
    password: string,
}

const Register = (props: Props) => {

    const [formdata, setformdata] = useState<RegisterData>({} as RegisterData);

    function fillFormData(value: string, field: keyof RegisterData) {
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

    async function register() {
        try {
            const response = await axios.post(`http://10.108.255.4:8080/api/v1/register/`, {
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
            <TouchableHighlight onPress={register}>
                <Text>Register</Text>
            </TouchableHighlight>
            <Text>
                {JSON.stringify(formdata)}
            </Text>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})