import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}

type Content = "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
type Align = "stretch" | "center" | "flex-start" | "flex-end" | undefined;

const InicioScreenPr09 = (props: Props) => {

    const [input, setinput] = useState(" ");
    const [align, setalign] = useState<Align>(undefined);

    function saveInput(currentTarget: any){
        
    }

    /*function changealignContent(){
        if(align === "stretch"){
            setalign("center");
        } else if(align === "center"){
            setalign("flex-start");
        } else if(align === "flex-start"){
            setalign("flex-end");
        } else if(align === "stretch"){
            setalign("stretch");
        }
    }*/

    return (
        <View style={styles.screen}>

            <View style={{flex:1, height: 200}}>
                <TextInput placeholder='space-arround' style={styles.input} onChangeText={(text) => saveInput(text)} />

                <View style={{flexDirection: 'row', flexWrap: "wrap", justifyContent: "center"}}>
                    <TouchableOpacity onPress={()=> setalign("stretch")}>
                        <View style={styles.boton}>
                            <Text style={styles.texto}> Stretch </Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={()=> setalign("center")}>
                        <View style={styles.boton}>
                            <Text style={styles.texto}> Center </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> setalign("flex-start")}>
                        <View style={styles.boton}>
                            <Text style={styles.texto}> Flex-Start </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> setalign("flex-end")}>
                        <View style={styles.boton}>
                            <Text style={styles.texto}> Flex-End </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{...styles.iconos, alignItems: align}}>
        
                <Image source={require('../images/1.jpg')} style={styles.imagen}/>
                <Image source={require('../images/2.jpg')} style={styles.imagen}/>
                <Image source={require('../images/3.jpg')} style={styles.imagen}/>
        
            </View>

        </View>
    )
}

export default InicioScreenPr09

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"grey",
    },
    
    texto:{
        textAlign: "center",
    },

    boton : {
        backgroundColor: "#36f0f9",
        marginHorizontal: 10,
        width: 75,
        height: 30,
        borderRadius: 5,
        justifyContent: "space-around", //Centra el texto
    },

    input:{
        backgroundColor: "white",
        borderWidth: 2,
        margin: 10,
    },

    iconos: {
        flex:7, 
        backgroundColor: "#c9c9c9",
        margin: 20,
        justifyContent: "space-around",
    },

    imagen: {
        width: 100,
        height: 100,
        //resizeMode: "contain"  //Para que la imagen se adapte al tamaño del contenido
    }
})