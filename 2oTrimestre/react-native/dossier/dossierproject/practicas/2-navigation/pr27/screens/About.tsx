import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <View>
        <Text>Nombre: Pedro</Text>
        <Text>Curso: 2º DAM</Text>
        <Text>Aficiones: Leer, videojuegos, música, etc</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})