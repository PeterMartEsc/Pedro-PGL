import { FlatList, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../components/AppContextProvider'
import Nota from '../models/Nota'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = {}

type PrincipalStackParamList = {
    Home: {title: string},
    EditNote: {idNota: number},
}

type PropsEditNote = NativeStackScreenProps<PrincipalStackParamList, 'EditNote'>
function EditNote ({navigation, route}: PropsEditNote) {

    const {listaNotas, setListaNotas} = useContext(AppContext);

    const {idNota} = route.params;

    useEffect(() => {
        navigation.setOptions({ title: 'Tarea' + idNota });
    }, [])
    

    function fillFormData(value : string, field: keyof Nota){

        let id = idNota;

        switch(field){
            case 'nombre':
                listaNotas[id].nombre = value;
                break;
            case 'contenido':
                listaNotas[id].contenido = value;
                break;
        }

        setListaNotas([...listaNotas]);
    }

    function alternarAcabada(){
        let id = idNota;
        listaNotas[id].acabada =! listaNotas[id].acabada;
        setListaNotas([...listaNotas]);
    }

    return (
        <View>
            <TextInput placeholder='nombre' onChangeText={(texto) => fillFormData(texto, "nombre")} defaultValue={listaNotas[idNota].nombre}/>
            <TextInput placeholder='contenido' onChangeText={(texto) => fillFormData(texto, "contenido")} defaultValue={listaNotas[idNota].contenido}/>
            <Switch
                trackColor={{false: '#66d1c9', true: '#d16672'}}
                thumbColor={listaNotas[idNota].acabada ? '#66d1c9' : '#d16672'}
                onValueChange={alternarAcabada}
                value={listaNotas[idNota].acabada}
            />
        </View>
    )
}

export default EditNote

const styles = StyleSheet.create({
    /*pares: {
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
    }*/
})