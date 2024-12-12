import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Casilla from '../models/Castilla';

type Props = {}

const TresEnRalla = (props: Props) => {

    const [tablero, settablero] = useState<Casilla[]>([
        new Casilla(0, false, ""),
        new Casilla(1, false, ""),
        new Casilla(2, false, ""),
        new Casilla(3, false, ""),
        new Casilla(4, false, ""),
        new Casilla(5, false, ""),
        new Casilla(6, false, ""),
        new Casilla(7, false, ""),
        new Casilla(8, false, "")
    ]);
    const [turno, setturno] = useState<string>("J");
    const [reiniciar, setreiniciar] = useState<boolean>(false);
    const max = 9;

    useEffect(() => {
        if(turno=="M" && quedanCasillas()){
            let aleatorio = Math.trunc(Math.random()*8);

            while(tablero[aleatorio].clickada){
                aleatorio = Math.trunc(Math.random()*8);
            }

            revelar(tablero[aleatorio]);
        }

        if(!quedanCasillas()){
            terminar();
        }
    }, [turno])

    useEffect(() => {
        if(reiniciar){
            setreiniciar(false);
            setturno("J");
            for(let i =0 ; i<tablero.length; i++){
                tablero[i].clickada = false;
                tablero[i].value = "";
            }
        }
    }, [reiniciar])

    function revelar(casilla : Casilla){

        if(turno == "J"){
            casilla.clickada = true;
            casilla.value = "X"
            setturno("M");
            //prepararMaquina();
        }

        if(turno == "M"){
            casilla.clickada = true;
            casilla.value = "0"
            setturno("J");
        }
    }

    function quedanCasillas() : boolean{
        let aux = 0 ;
        for(let i = 0; i<tablero.length ; i++){
            if(!tablero[i].clickada){
                aux++;
            }
        }

        if(aux>=2){
            return true;
        }

        return false;
    }

    function terminar(){

    }

    return (
        <View style={{flex:1}}>
            <View>
                <View style={styles.fila}>
                    <TouchableOpacity onPress={() => revelar(tablero[0])}>
                        <View style={styles.casilla}>
                            <Text>{tablero[0].clickada ? tablero[0].value : "Nada"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => revelar(tablero[1])}>
                        <View style={styles.casilla}>
                            <Text>{tablero[1].clickada ? tablero[1].value : "Nada"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => revelar(tablero[2])}>
                        <View style={styles.casilla}>
                            <Text>{tablero[2].clickada ? tablero[2].value : "Nada"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.fila}>
                    <TouchableOpacity onPress={() => revelar(tablero[3])}>
                        <View style={styles.casilla}>
                            <Text>{tablero[3].clickada ? tablero[3].value : "Nada"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => revelar(tablero[4])}>
                        <View style={styles.casilla}>
                            <Text>{tablero[4].clickada ? tablero[4].value : "Nada"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => revelar(tablero[5])}>
                        <View style={styles.casilla}>
                            <Text>{tablero[5].clickada ? tablero[5].value : "Nada"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.fila}>
                    <TouchableOpacity onPress={() => revelar(tablero[6])}>
                        <View style={styles.casilla}>
                            <Text>{tablero[6].clickada ? tablero[6].value : "Nada"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => revelar(tablero[7])}>
                        <View style={styles.casilla}>
                            <Text>{tablero[7].clickada ? tablero[7].value : "Nada"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => revelar(tablero[8])}>
                        <View style={styles.casilla}>
                            <Text>{tablero[8].clickada ? tablero[8].value : "Nada"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => setreiniciar(true)}>
                        <View style={styles.reiniciar}>
                            <Text>Jugar de Nuevo</Text>
                        </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TresEnRalla

const styles = StyleSheet.create({

    fila: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-around",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

    casilla: {
        width: 40,
        height: 40,

        borderColor: "black",
        borderWidth: 2,
    },

    reiniciar: {

        width: 80,
        height: 40,

        borderWidth: 3,
        
        marginLeft: 20,
        marginTop: 20,
    }
})