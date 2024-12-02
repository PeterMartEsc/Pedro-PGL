import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    name: string,
    red : number,
    green : number,
    blue : number
}

const Circulo = (props: Props) => {
  return (
    <View style = {styles.circulo} >
      <Text style={{textAlign: 'center'}}>{props.name}</Text>
    </View>
  )
}

export default Circulo

const styles = StyleSheet.create({
    circulo: {
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 50,
        padding: 10,
        margin: 10,
        backgroundColor: "white",
        width: 80,
        height: 80,
    }
})