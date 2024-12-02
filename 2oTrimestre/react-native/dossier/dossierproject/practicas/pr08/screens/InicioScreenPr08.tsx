import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContenedorCirculosPr08 from '../components/ContenedorCirculosPr08'

type Props = {}

const InicioScreenPr08 = (props: Props) => {
    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.titulo}>Contenedor Principal</Text>
            </View>
            
            <View style={{flex:1}}>
                <ContenedorCirculosPr08/>
            </View>
        </View>
    )
    }
    
    export default InicioScreenPr08
    
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