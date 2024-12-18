import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormularioPersona from '../components/FormularioPersona'

type Props = {}

const InicioScreenPr17 = (props: Props) => {
    return (
        <View style={{flex:1}}>
            <FormularioPersona/>
        </View>
    )
}

export default InicioScreenPr17

const styles = StyleSheet.create({})