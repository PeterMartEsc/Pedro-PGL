import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Teclado from '../componentes/Teclado'
import usecalc from '../pr11-hook/usecalc'

type Props = {}

const InicioScreenPr10 = (props: Props) => {

    const {numeroOperar, numeroOperarSecund, agregarNumero, limpiar, setOperador, operar, negar, borrarUltimo} = usecalc();

    return (
        <View style={{flex:1}}>
            <View style={styles.operaciones}>
                <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.resultadoSecundario}>{numeroOperarSecund.some(Number) ? numeroOperarSecund: ""}</Text>
                <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.resultado}>{numeroOperar.some(Number) ? numeroOperar : 0}</Text>
            </View>
            <View style={{flex: 1}}>
                <Teclado agregarNumero={agregarNumero} limpiar={limpiar} setOperador={setOperador} operar={operar} negar={negar} borrarUltimo={borrarUltimo}/>
            </View>
        </View>
    )
}

export default InicioScreenPr10

const styles = StyleSheet.create({
    operaciones: {
        flex:1,
        backgroundColor: "black",
        justifyContent: "flex-end",
    },

    resultado: {
        color: "white",
        fontSize: 100,
        marginHorizontal: 20,
        marginRight: 30,
        textAlign: "right",
    },

    resultadoSecundario: {
        color: "#898787",
        fontSize: 50,
        marginHorizontal: 25,
        marginRight: 45,
        textAlign: "right",
        //textAlign: "right",
    }
})