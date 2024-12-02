import { Alert, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

type Props = {
    //color: string,
    estilo : any;
    nombre : string;
}

const CajitaPr07 = (props: Props) => {
    const [flexValue, setflexValue] = useState(1)

    return (
        <View style={props.estilo}>
            <TouchableHighlight onPress={()=>setflexValue(flexValue+1)}>
                <View style={styles.boton}>
                    <Text>Flex +1</Text>
                </View>
            </TouchableHighlight>

            <TouchableOpacity onPress={()=>setflexValue(flexValue-1)}>
                <View style={styles.boton}>
                    <Text>Flex -1</Text>
                </View> 
            </TouchableOpacity>

            <Text style={styles.texto}> Flex: {flexValue}</Text>
        </View>
    )
}

export default CajitaPr07

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