import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PruebaFlatList from '../components/PruebaFlatList'

type Props = {}

const InicioScreenPr16 = (props: Props) => {
    return (
        <View style={{flex:1}}>
            <PruebaFlatList/>
        </View>
    )
}

export default InicioScreenPr16

const styles = StyleSheet.create({})