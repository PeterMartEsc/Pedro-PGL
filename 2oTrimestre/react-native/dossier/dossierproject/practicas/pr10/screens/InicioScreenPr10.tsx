import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Teclado from '../componentes/Teclado'

type Props = {}

const InicioScreenPr10 = (props: Props) => {

    const [numeroOperar, setnumeroOperar] = useState<Array<number>>([]);
    const [operador, setOperador] = useState<string>("");
    const [numeroOperarSecund, setnumeroOperarSecund] = useState<Array<number>>([]);

    useEffect(() => {
        const arrayAux : Array<number> =[];
        setnumeroOperarSecund(numeroOperar);
        setnumeroOperar(arrayAux);
      
    }, [operador])
    
    function operar(){

        let resultado : number = 0;

        switch (operador) {
            
            case "+":
                resultado = (parseInt(numeroOperarSecund.join("")))+(parseInt(numeroOperar.join("")));
                break;

            case "-":
                resultado = (parseInt(numeroOperarSecund.join("")))-(parseInt(numeroOperar.join("")));
                break;

            case "*":
                resultado = (parseInt(numeroOperarSecund.join("")))*(parseInt(numeroOperar.join("")));
                break;

            case "/":
                resultado = (parseInt(numeroOperarSecund.join("")))/(parseInt(numeroOperar.join("")));
                break;
            
        }

        let arrayAux : Array<number> = [];
        //arrayAux.push(resultado);
        //setnumeroOperar(arrayAux);
        setnumeroOperar([...arrayAux, resultado]);
        setnumeroOperarSecund(arrayAux);
    }

    function agregarNumero(numero: number){
        //const arrayAux : Array<number> = [];
        setnumeroOperar([...numeroOperar, numero]);
    }

    function limpiar(){
        setOperador("");
        const arrayAux : Array<number> =[];
        setnumeroOperarSecund(arrayAux);
        setnumeroOperar(arrayAux);
    }

    function negar(){
        let arayAux : Array<number> = [];
        let numeroNegado = parseInt("-"+numeroOperar.join(""));
        setnumeroOperar([...arayAux, numeroNegado]);
        
    }

    function borrarUltimo(){
        numeroOperar.pop();
        setnumeroOperar([...numeroOperar]);
    }

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
        //alignContent: "flex-end",
        //flexWrap: "wrap-reverse",
        //flexDirection: "column",
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