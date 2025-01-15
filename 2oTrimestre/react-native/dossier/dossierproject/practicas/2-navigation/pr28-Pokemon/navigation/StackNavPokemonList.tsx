import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonList from '../screens/PokemonList';
import PokemonShow from '../screens/PokemonShow';

type Props = {}

type PrincipalStackParamList = {
    PokemonList: undefined,
    PokemonShow: undefined,
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

type PropsHome = NativeStackScreenProps<PrincipalStackParamList>

function StackNavPokemonList(props : Props){
    <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#0374ba'},
        headerTitleAlign: 'center',
        //title: title
    }}>
        <Stack.Screen name="PokemonList" component={PokemonList}/>
        <Stack.Screen name="PokemonShow" component={PokemonShow}/>
    </Stack.Navigator>
}

export default StackNavPokemonList

const styles = StyleSheet.create({})