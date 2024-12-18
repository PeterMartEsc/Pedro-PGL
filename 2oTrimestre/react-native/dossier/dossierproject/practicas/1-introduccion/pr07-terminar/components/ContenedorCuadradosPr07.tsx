import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CajitaPr07 from './CajitaPr07'

type Props = {}

interface DatosCajas {
    nombre : string;
    estilos : any;
}

const ContenedorCuadradosPr07 = (props: Props) => {

    const nombres = ["CajaA", "CajaB", "CajaC"];
    
    const arrayCajas : DatosCajas[] = [
        {
            nombre: nombres[0],
            estilos: {
                backgroundColor: "red", 
                flex:1, 
                padding:10
            }
        },

        {
            nombre: nombres[1],
            estilos: {
                backgroundColor: "blue", 
                flex:1, 
                padding:10,
                borderRadius: 10,
            }
        },

        {
            nombre: nombres[2],
            estilos: {
                backgroundColor: "green", 
                flex:1, 
                padding:10
            }
        }

    ];



    return (
        <View style={styles.contenedor}>
            {
                nombres.map((arrayCajas, index) => (
                    <CajitaPr07 key={index} estilo={arrayCajas[index]} nombre={arrayCajas}/>
                ))
            }
        </View>
    )
}

export default ContenedorCuadradosPr07

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        backgroundColor: "#E5E8E8",
        margin:20,
        paddingVertical:8
        //height: "100%",
    },

    A:{

    }
})