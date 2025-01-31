import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}

const DiarioPr18 = (props: Props) => {

    const [contento, setcontento] = useState<boolean | null>(null);
    const [textoActual, settextoActual] = useState<string>("");
    const [icono, seticono] = useState("")

    function comprobar(){
        seticono('');
        if(textoActual.includes(":)")){
            seticono('happy-outline');
        } else if(textoActual.includes(':(')){
            seticono('sad-outline');
        }
    }

    return (
        <View style={{flex:1}}>
            <View >
                <TextInput onChangeText={(text)=>settextoActual(text)} placeholder='escriba su entrada'/>
            </View>
            <View >
                <TouchableOpacity onPress={comprobar}>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Icon name={icono}/>
            </View>
        </View>
    )
}

export default DiarioPr18

const styles = StyleSheet.create({})