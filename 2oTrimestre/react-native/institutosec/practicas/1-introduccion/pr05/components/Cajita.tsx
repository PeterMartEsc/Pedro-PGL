import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {
    color: string,
}

const Cajita = (props: Props) => {
    const [flexValue, setflexValue] = useState(1)

    return (
        <View style={ {...styles.cajita, backgroundColor: props.color, flex:flexValue} }>
            <View style={styles.boton}>
                <Button title="Flex+1" onPress={()=>setflexValue(flexValue+1)}></Button>
            </View>
            <View style={styles.boton}>
                <Button title="Flex-1" onPress={()=>setflexValue(flexValue-1)}></Button>
            </View>

            <Text style={styles.texto}> Flex: {flexValue}</Text>
        </View>
    )
}

export default Cajita

const styles = StyleSheet.create({
    cajita:{
        marginVertical:2,
        marginHorizontal:10,

        borderWidth: 3,
        borderRadius:5,
        borderColor: "black",
        backgroundColor: "white",

        padding:5,
    },

    boton:{
        marginBottom: 10,
    },

    texto:{
        textAlign: "center",
    }
})