import { FlatList, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../components/AppContextProvider'
import { Nota } from '../src/entity/Nota'
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
    const nota = listaNotas.find((element) => element.id === idNota);

    useEffect(() => {

        if (nota) {
            navigation.setOptions({ title: 'Tarea ' + idNota });
        } else {
            navigation.setOptions({ title: 'Nota no encontrada' });
        }

    }, [])
    

    function fillFormData(value: string, field: keyof Nota){

        const updatedNotas = listaNotas.map( (nota) => {
            
            //Si la nota.id es la misma que el idNota, se actualizan los valores introducidos. Si no, se deja como está
            if (nota.id === idNota) {
                // Crear una nueva instancia basada en los datos existentes
                const updatedNota = Nota.create({ ...nota, [field]: value }); 
                // Guarda cambios en la base de datos
                updatedNota.save(); 
                return updatedNota;
            }
            // Si no coincide el id, se devuelve la nota original
            return nota;

        });

        setListaNotas(updatedNotas);
    }

    async function alternarAcabada(){

        //Si la nota.id es la misma que el idNota, se actualizan el valor 'acabada'. Si no, se deja como está
        const updatedNotas = listaNotas.map((nota) => {
            if(nota.id === idNota){
                const updatedNota = Nota.create({ ...nota,  acabada: !nota.acabada }); 
                updatedNota.save(); // Guardar la nueva nota en la base de datos
                return updatedNota; //Devuelve la nueva si ha cambiado su valor
            }
            return nota; //Si no, devuelve la que estaba
        });
        setListaNotas(updatedNotas);
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