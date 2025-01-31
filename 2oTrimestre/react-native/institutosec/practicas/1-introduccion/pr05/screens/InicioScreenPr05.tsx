import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContenedorCuadrados from '../components/ContenedorCuadrados'

type Props = {}

const InicioScreenPr05 = (props: Props) => {
    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.titulo}>Contenedor Principal</Text>
            </View>
            
            <View style={{flex:1}}>
                <ContenedorCuadrados/>
            </View>
        </View>
    )
}

export default InicioScreenPr05

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"grey",
    },
    
    titulo:{
        fontSize:24,
        textAlign: "center",
        marginTop:10,
        color:"yellow",
    }
})