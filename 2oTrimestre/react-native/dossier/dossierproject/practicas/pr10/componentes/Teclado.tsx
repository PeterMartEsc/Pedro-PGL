import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

type Props = {
    agregarNumero: (numero: number) => void,
    limpiar: () => void,
    setOperador: (operador: string) => void,
    operar: () => void,
    negar: () => void,
}

const Teclado = (props: Props) => {

    const {agregarNumero} = props;
    const {limpiar} = props;
    const {setOperador} = props;
    const {operar} = props;
    const {negar} = props;

    return (
        <View style={styles.teclado}>
            <TouchableOpacity style={styles.botonArriba} onPress={limpiar}>
                    <Text style={styles.textoBoton}>AC</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonArriba} onPress={negar}>
                    <Text style={styles.textoBoton}>+-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonArriba}>
                    <Text style={styles.textoBoton}>%</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonDerecha} onPress={()=>setOperador("/")}>
                    <Text style={styles.textoBoton}>/</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=> agregarNumero(7)}>
                    <Text style={styles.textoBoton}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=> agregarNumero(8)}>
                    <Text style={styles.textoBoton}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=> agregarNumero(9)}>
                    <Text style={styles.textoBoton}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonDerecha} onPress={()=>setOperador("*")}>
                    <Text style={styles.textoBoton}>x</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=> agregarNumero(4)}>
                    <Text style={styles.textoBoton}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=> agregarNumero(5)}>
                    <Text style={styles.textoBoton}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=> agregarNumero(6)}>
                    <Text style={styles.textoBoton}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonDerecha} onPress={()=>setOperador("-")}>
                    <Text style={styles.textoBoton}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=> agregarNumero(1)}>
                    <Text style={styles.textoBoton}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=> agregarNumero(2)}>
                    <Text style={styles.textoBoton}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=> agregarNumero(3)}>
                    <Text style={styles.textoBoton}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonDerecha} onPress={()=>setOperador("+")}>
                    <Text style={styles.textoBoton}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton0} onPress={()=> agregarNumero(7)}>
                    <Text style={styles.textoBoton}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton}>
                    <Text style={styles.textoBoton}>.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonDerecha} onPress={operar}>
                    <Text style={styles.textoBoton}>=</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Teclado

const styles = StyleSheet.create({
    teclado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-around",
        paddingVertical: 10,
        paddingHorizontal: 10,
        //justifyContent: "center",
        backgroundColor: "black"
    },

    boton: {
        width: 65,
        height: 65,

        borderRadius: 40,
        margin: 5,
        marginVertical: 4,

        backgroundColor: "#3A3A3A",
    },

    boton0: {
        width: 155,
        height: 65,

        margin: 5,
        marginVertical: 4,

        borderRadius: 40,

        backgroundColor: "#3A3A3A",
    },

    botonDerecha: {
        width: 65,
        height: 65,

        borderRadius: 40,
        margin: 5,
        marginVertical: 4,

        backgroundColor: "orange",
    },

    botonArriba: {
        width: 65,
        height: 65,

        borderRadius: 40,
        margin: 5,
        marginVertical: 4,

        backgroundColor: "#d1d1d1",
    },

    textoBoton: {
        textAlign: "center",
        marginVertical: "auto",
        color: "white",
        fontSize: 30,
    }
})