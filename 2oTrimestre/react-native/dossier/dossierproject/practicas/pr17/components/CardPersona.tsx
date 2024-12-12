import { FlatList, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Persona from '../../pr16/models/Persona'

type Props = {
    personas : Persona[]
}

const CardPersona = (props: Props) => {
    
    const [formdata, setformdata] = useState<Persona[]>([]);
    const {personas} = props;

    function fillFormData(value : number | string, field: keyof Persona){
        setformdata(
            {
                ...formdata,
                [field] : value
            }
        );
    }

    return (
        <View>
            <FlatList
                data={personas}
                renderItem={({item, index}) => {
                    return(
                        <View style={index%2 == 0 ? styles.pares : styles.impares}>
                            <TextInput placeholder='nombre' onChangeText={(texto) => fillFormData(texto, "nombre")}/>
                            <TextInput placeholder='altura' onChangeText={(texto) => fillFormData(parseFloat(texto), "altura")}/>
                            <TextInput placeholder='peso' onChangeText={(texto) => fillFormData(parseFloat(texto), "peso")}/>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => item.nombre + index}
                ListHeaderComponent={()=> <Text>Lista Personas</Text>}
                ItemSeparatorComponent={()=> <Text>**************************************</Text>}
            />
        </View>
    )
}

export default CardPersona

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