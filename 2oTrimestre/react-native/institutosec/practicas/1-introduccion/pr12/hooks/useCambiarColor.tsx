
import React, { useState } from 'react'
import { Alert } from 'react-native'

type Props = {}

const useCambiarColor = () => {

    const [colorPreferido, setColorPreferido] = useState("green")
    const [colores, setcolores] = useState(["red", "green", "blue", "yellow"])

    function colorAleatorio(){
        let aleatorio = Math.floor(Math.random() *4);
        mostrarAlerta(colores[aleatorio]);
    }

    function mostrarAlerta(color : string){
        Alert.alert('Cambio de color', `Si acepta cambiará el color a ${color}`, [
        //El array representa cada boton
        {
            text: 'Cancel', //Texto mostrado
            onPress: () => console.log('No se cambiara el color'),
            //style: 'Cancel',
        },
        {
            text: 'Ok', onPress: () => setColorPreferido(color)
        },
        ]);

        
    }


    return {
        colorAleatorio, colorPreferido        
    }

}

export default useCambiarColor