import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TresEnRalla from '../componentes/TresEnRalla'

type Props = {}

const ScreenTresEnRalla = (props: Props) => {
    return (
        <View style={{flex:1}}>
            <TresEnRalla/>
        </View>
    )
}

export default ScreenTresEnRalla

const styles = StyleSheet.create({})