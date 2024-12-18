import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CajitaPr06 from './CajitaPr06'

type Props = {}

const ContenedorCuadradosPr06 = (props: Props) => {
    const colores = ["red", "green", "blue"]

    return (
        <View style={styles.contenedor}>
            {
                colores.map((color, index) => (
                    <CajitaPr06 key={index} color={colores[index]} />
                ))
            }
        </View>
    )
}

export default ContenedorCuadradosPr06

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        backgroundColor: "#E5E8E8",
        margin:20,
        paddingVertical:8
        //height: "100%",
    }
})