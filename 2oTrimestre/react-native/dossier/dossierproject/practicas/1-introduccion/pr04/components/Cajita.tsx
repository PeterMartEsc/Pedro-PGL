import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    color: string,
}

const Cajita = (props: Props) => {

    return (
        <View style={ {...styles.cajita, backgroundColor: props.color} }>
        </View>
    )
}

export default Cajita

const styles = StyleSheet.create({
    cajita:{
        height: 100,
        width:100,

        marginVertical:2,
        marginHorizontal:10,

        borderWidth: 3,
        borderRadius:5,
        borderColor: "black",
        backgroundColor: "white",
    }
})