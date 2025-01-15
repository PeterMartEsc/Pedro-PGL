import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonSearch from '../screens/PokemonSearch';
import PokemonShow from '../screens/PokemonShow';

type Props = {}

type PrincipalStackParamList = {
    PokemonSearch: undefined,
    PokemonShow: undefined,
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

type PropsHome = NativeStackScreenProps<PrincipalStackParamList>

function StackNavPokemonSearch(props : Props){
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: '#0374ba'},
            headerTitleAlign: 'center',
            //title: title
        }}>
            <Stack.Screen name="PokemonSearch" component={PokemonSearch}/>
            <Stack.Screen name="PokemonShow" component={PokemonShow}/>
        </Stack.Navigator>
    )
}

export default StackNavPokemonSearch

const styles = StyleSheet.create({})