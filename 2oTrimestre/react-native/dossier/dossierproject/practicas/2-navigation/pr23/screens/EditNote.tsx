import { FlatList, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
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

    function fillFormData(value : string, field: keyof Nota){

        let id = route.params.idNota;

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
        let id = route.params.idNota;
        listaNotas[id].acabada =! listaNotas[id].acabada;
        setListaNotas([...listaNotas]);
    }

    return (
        <View>
            <TextInput placeholder='nombre' onChangeText={(texto) => fillFormData(texto, "nombre")} defaultValue={listaNotas[route.params.idNota].nombre}/>
            <TextInput placeholder='contenido' onChangeText={(texto) => fillFormData(texto, "contenido")} defaultValue={listaNotas[route.params.idNota].contenido}/>
            <Switch
                trackColor={{false: '#66d1c9', true: '#d16672'}}
                thumbColor={listaNotas[route.params.idNota].acabada ? '#66d1c9' : '#d16672'}
                onValueChange={alternarAcabada}
                value={listaNotas[route.params.idNota].acabada}
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