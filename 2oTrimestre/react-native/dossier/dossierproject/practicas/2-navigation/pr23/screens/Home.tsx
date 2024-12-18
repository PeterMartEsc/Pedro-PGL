import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../components/AppContextProvider';
import Nota from '../models/Nota';

type Props = {}

const Home = (props: Props) => {
    
    const {listaNotas, setListaNotas} = useContext(AppContext);

    function addItem(){
        let id = listaNotas.length+1;
        let aux = new Nota(id, "New Note", "", false);
        setListaNotas([...listaNotas, aux]);
    }

    return (
        <View style={{flex:1}}>
            <FlatList
                data={listaNotas}
                renderItem={({item, index}) => {
                    return(
                        <View /*style={index%2 == 0 ? styles.pares : styles.impares}*/>
                            <Text>Elemento: {item.nombre}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => item.nombre + index}
                ListHeaderComponent={()=> <Text>Tareas</Text>}
                ItemSeparatorComponent={()=> <Text>**************************************</Text>}
            />
            <View style={{backgroundColor: 'blue', height: 30, width: 200, justifyContent: 'center', margin: 'auto'}}>
                <TouchableOpacity onPress={addItem}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})