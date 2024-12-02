import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import Circulo from './Circulo';

type Props = {}

type DatosCircle = {
    nombre : string;
    red: number,
    green: number,
    blue: number
}

const ContenedorCirculosPr08 = (props: Props) => {

    const [datosCirculos, setDatosCirculos] = useState<DatosCircle[]>([])
    const [display, setdisplay] = useState("flex")

    function addCirculo(){
        setDatosCirculos([...datosCirculos, 
            
            {
                nombre: "C" + (datosCirculos.length),
                red: Math.trunc(Math.random() * 250),
                green: Math.trunc(Math.random() *250),
                blue: Math.trunc(Math.random() * 250)
            }
            
        ]);
        
    }

    return (
        <View style={styles.contenedor}>
            <View>
                <Button title="Agregar Circulo" onPress={addCirculo}></Button>
            </View>
            <TouchableOpacity onPress={() => setdisplay("wrap")}>
                <View  style={styles.row}>
                    <Text>Wrap. Pulse para cambiar</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setdisplay("row")}>
                <View style={styles.wrap}>
                    <Text>Row. Pulse para cambiar</Text>
                </View>
            </TouchableOpacity>
            <View>
                {
                    datosCirculos.map((circulos, index) => (
                        <Circulo key={index} name={datosCirculos[index].nombre} red={datosCirculos[index].red} green={datosCirculos[index].green} blue={datosCirculos[index].blue}/>
                    ))
                }
            </View>
        </View>
    )
}

export default ContenedorCirculosPr08

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        backgroundColor: "#E5E8E8",
        margin:20,
        paddingVertical:8
        //height: "100%",
    },

    wrap: {
        backgroundColor: "orange",
        padding: 5,
        borderRadius: 5,
    },
    
    row: {
        backgroundColor: "red",
        padding: 5,
        borderRadius: 5,
    }

})