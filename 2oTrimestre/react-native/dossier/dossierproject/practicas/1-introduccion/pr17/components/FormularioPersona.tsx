import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import CardPersona from './CardPersona'
import Persona from '../../pr16/models/Persona'

type Props = {}

const FormularioPersona = (props: Props) => {

    const [personas, setpersonas] = useState<Persona[]>([])

    function aniadirPersona(){
        let persona : Persona = {id: personas.length, nombre:"" , altura: "", peso: ""};
        personas.push(persona);
        setpersonas([...personas]);
    }


    return (
        <View style={{flex: 1}}>

            <CardPersona personas={personas}/>
        
            <TouchableHighlight onPress={aniadirPersona}>
                <View>
                    <Text>Aniadir</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default FormularioPersona

const styles = StyleSheet.create({
    pares: {
        borderWidth: 2, 
        margin: 2, 
        borderRadius: 10,
        backgroundColor: "red",
    },

    impares: {
        borderWidth: 2, 
        margin: 2, 
        borderRadius: 10,
        backgroundColor: "green",
    }
})