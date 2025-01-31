import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}

const DiarioPr19 = (props: Props) => {

    const [textoActual, settextoActual] = useState<string>("");

    function addIcon(name : string){

        let aux = '';

        if(name == "happy"){

            aux = textoActual.concat(':)');

        } else if(name == "sad"){
            aux = textoActual.concat(':(');
        }

        settextoActual(aux);
    }

    return (
        <View style={{flex:1}}>
            <View >
                <TextInput onChangeText={(text)=>settextoActual(text)} placeholder='escriba su entrada' defaultValue={textoActual}/>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.boton}>
                    <TouchableOpacity onPress={()=>addIcon('happy')}>
                        <Icon name='happy-outline' size={50}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.boton}>
                    <TouchableOpacity onPress={()=>addIcon('sad')}>
                        <Icon name='sad-outline' size={50}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DiarioPr19

const styles = StyleSheet.create({
    boton: {    
        width: 60,
        borderBlockColor: 'black',
        borderWidth: 1,
        
    }
})