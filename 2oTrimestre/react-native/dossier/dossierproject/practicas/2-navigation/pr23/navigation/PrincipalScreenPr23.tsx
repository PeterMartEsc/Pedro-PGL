import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import EditNote from '../screens/EditNote';
import { AppContext, AppContextProvider } from '../components/AppContextProvider';
import Nota from '../models/Nota';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}

type PrincipalStackParamList = {
    Home: undefined,
    EditNote: {idNota: number},
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const PrincipalScreenPr23 = (props: Props) => {

    const [title, settitle] = useState("Tareas");

    return (
        <AppContextProvider>
            <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor: '#0374ba'},
                headerTitleAlign: 'center',
                title: title
                }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="EditNote" component={EditNote}/>
            </Stack.Navigator>
        </AppContextProvider>
    )
}

export default PrincipalScreenPr23

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'Home'>

function Home({navigation, route}:PropsHome){
    
    const {listaNotas, setListaNotas} = useContext(AppContext);
    const [contadorIds, setcontadorIds] = useState(0);

    function addItem(){
        let id = contadorIds;
        let aux = new Nota(id, "New Note", "", false);
        setListaNotas([...listaNotas, aux]);
        setcontadorIds(id+1);
    }

    function deleteNote(index : number){
        let aux = [];
        for ( let i = 0; i < listaNotas.length; i++ ) {
            if(i != index){
                aux.push(listaNotas[i]);
            }
        }
        setListaNotas(aux);
    }

    return (
        <View style={{flex:1}}>
            <FlatList
                data={listaNotas}
                renderItem={({item, index}) => {
                    return(
                        <View /*style={index%2 == 0 ? styles.pares : styles.impares}*/>
                            <Text style={{justifyContent: 'center'}}>
                                <Icon size={30} onPress={()=>{item.acabada=!item.acabada; setListaNotas([...listaNotas])}} name={item.acabada ? 'checkbox-outline' : 'square-outline' }/>
                                {item.nombre}
                                <Icon size={30} onPress={()=>navigation.navigate('EditNote', {idNota:item.id, title: 'Detail Page'})} name='pencil-outline'/>
                                <Icon size={30} onPress={()=>deleteNote(index)} name='trash'/>
                            </Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => item.nombre + index}
                ListHeaderComponent={()=> <Text></Text>}
                ItemSeparatorComponent={()=> <Text>**************************************</Text>}
            />
            <View style={{backgroundColor: 'blue', height: 30, width: 200, justifyContent: 'center', margin: 'auto', borderRadius: 5}}>
                <TouchableOpacity onPress={addItem}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
})