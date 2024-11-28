import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Contador from '../components/Contador'

type Props = {}

const InicioScreen = (props: Props) => {
    return (
        <View style={styles.inicioscreen}>
            <Text>Practica 3 - Inicio Screen</Text>
            {/* Como el contador está dentro del View, 
            el flex 1 hace que ocupe 1 todo */}

            {/* Si pusiésemos el contador en otro view y le estableciéramos 
            flex 1 también, ocuparía cada uno la mitas */}
            <Contador/>
        </View>
    )
}

export default InicioScreen

const styles = StyleSheet.create({
    inicioscreen:{
        flex:1
    }
})