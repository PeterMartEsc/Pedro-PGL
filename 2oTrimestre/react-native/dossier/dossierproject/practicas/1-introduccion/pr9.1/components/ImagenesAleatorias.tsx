import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}

type AlmacenImg ={
    id : number;
    nombre: string;
    ubicacion: any;
}

const ImagenesAleatorias = (props: Props) => {

    const [numeroImagen, setnumeroImagen] = useState<number>(4);

    const almacenImagenes: AlmacenImg[] = [
        {
            id:1,
            nombre: "Vi",
            ubicacion: require("../images/vi-arcane.jpeg")
        },
        {
            id: 2,
            nombre: "Jayce",
            ubicacion: require("../images/jayce-arcane.jpg")
        },
        {
            id: 3,
            nombre: "Viktor",
            ubicacion: require("../images/viktor-arcane.jpg")
        },
        {
            id: 4,
            nombre: "Jinx",
            ubicacion: require("../images/jinx-arcane.jpg")
        },
        {
            id: 5,
            nombre: "Pantheon",
            ubicacion: require("../images/pantheon-lobo.png")
        },
    ];

    function randomImage(){
        let numeroRandom = Math.floor(Math.random() * almacenImagenes.length+1);
        setnumeroImagen(numeroRandom);
    }

    function getImage(posicionImagen : number){

        const obtenido = almacenImagenes.find( imagen => imagen.id == posicionImagen);
        //const obtenido = almacenImagenes[posicionImagen];

        if( obtenido){            
            return obtenido.ubicacion;
        }else{
            return "";
        }
    }

    return (
        <View>
            <View style={styles.image}>
                <Image source={getImage(numeroImagen)} style={{ height: 200, width: 200}}/>
            </View>
            <TouchableOpacity style={styles.boton} onPress={randomImage}>
                <Text style={{textAlign: 'center'}}>Imagen Aleatoria</Text>
            </TouchableOpacity>
        </View>

)
}

export default ImagenesAleatorias

const styles = StyleSheet.create({
    image: {
        margin: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    boton: {
        backgroundColor: "#aaaaff",
        width: 130,
        margin: "auto",

        borderRadius: 5,
    }
})