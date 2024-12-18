import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContenedorCuadradosPr07 from '../components/ContenedorCuadradosPr07'

type Props = {}

const InicioScreenPr07 = (props: Props) => {
  return (
    <View style={styles.screen}>
        <View>
            <Text style={styles.titulo}>Contenedor Principal</Text>
        </View>
        
        <View style={{flex:1}}>
            <ContenedorCuadradosPr07/>
        </View>
    </View>
)
}

export default InicioScreenPr07

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