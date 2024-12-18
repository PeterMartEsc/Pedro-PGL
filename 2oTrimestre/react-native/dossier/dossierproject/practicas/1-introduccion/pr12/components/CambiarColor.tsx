import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import useCambiarColor from '../hooks/useCambiarColor'

type Props = {}

const CambiarColor = (props: Props) => {

    const { colorAleatorio, colorPreferido}= useCambiarColor();

    return (
        <View style={{backgroundColor: colorPreferido}}>
            <View style={{}}>
                <Button title="Cambiar a color aleatorio" onPress={colorAleatorio}/>
            </View>
            <View style={{height: 200}}>
                <Text></Text>
            </View>
        </View>
    )
}

export default CambiarColor

const styles = StyleSheet.create({
    
})