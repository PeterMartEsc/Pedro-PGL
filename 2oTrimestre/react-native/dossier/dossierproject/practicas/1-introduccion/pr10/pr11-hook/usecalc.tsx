import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

type Props = {}

const usecalc = () => {

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
        setnumeroOperar([...arrayAux, resultado]);
        setnumeroOperarSecund(arrayAux);
    }

    function agregarNumero(numero: number){
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

    return {
        operar,
        agregarNumero,
        limpiar,
        negar,
        borrarUltimo,
        numeroOperar,
        operador,
        numeroOperarSecund,
        setOperador,
        setnumeroOperar,
        setnumeroOperarSecund,
    }
}

export default usecalc

const styles = StyleSheet.create({})