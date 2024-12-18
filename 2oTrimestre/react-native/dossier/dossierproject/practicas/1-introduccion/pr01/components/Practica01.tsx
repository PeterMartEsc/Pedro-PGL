import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Practica01 = (props: Props) => {

    const nombre = 'Pedro';

    return (
        <View style={styles.container} >
            <Text>Hola Mundo!!</Text>
            <Text>Soy {nombre}</Text>
        </View>
    )
}

export default Practica01

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }

})