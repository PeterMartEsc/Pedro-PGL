import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cajita from './Cajita'

type Props = {}

const ContenedorCuadrados = (props: Props) => {
    const colores = ["red", "green", "blue"]

    return (
        <View style={styles.contenedor}>
            {
                colores.map((color, index) => (
                    <Cajita key={index} color={colores[index]} />
                ))
            }
        </View>
    )
}

export default ContenedorCuadrados

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        backgroundColor: "#E5E8E8",
        margin:20,
        paddingVertical:8
        //height: "100%",
    }
})