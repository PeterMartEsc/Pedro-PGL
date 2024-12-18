import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const Contador = (props: Props) => {
    const [contador, setcontador] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={{marginBlockEnd:20, margin:5}}>Ejercicio Basico. Contador: {contador}</Text>
            <View style={styles.boton}>
                <Button color={"#33D1FF"} title='Incrementar' onPress={()=>setcontador(contador+1)}></Button>
            </View>
            <View  style={styles.boton}>
                <Button color={"#76D7C4"} title='Disminuir' onPress={()=>setcontador(contador-1)}></Button>
            </View>
        </View>
    )
}

export default Contador

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderWidth: 3,
        borderColor: "#2980B9",
        backgroundColor: "#D2B4DE",
        borderRadius:5,

        margin:1
    },
    boton:{ 
        marginBottom: 10,
        marginHorizontal: 5
    }
})