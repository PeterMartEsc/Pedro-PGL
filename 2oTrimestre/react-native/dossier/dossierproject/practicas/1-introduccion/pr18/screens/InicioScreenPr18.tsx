import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DiarioPr18 from '../components/DiarioPr18'

type Props = {}

const InicioScreenPr18 = (props: Props) => {
    return (
        <View style={{flex:1}}>
            <DiarioPr18/>
        </View>
    )
}

export default InicioScreenPr18

const styles = StyleSheet.create({})