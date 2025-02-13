import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import InicioScreen from '../screens/InicioScreen';
import { EjemploEntity } from '../data/entity/EjemploEntity';
import HomeLocal from '../screens/local/HomeLocal';
import Juego from '../screens/local/Juego';

type Props = {}

export type LocalStackParamList = {
    Home: undefined,
    Juego: undefined,
    // Online: undefined,
};

const Stack = createNativeStackNavigator<LocalStackParamList>();

function LocalStack() {

    return (

        <Stack.Navigator id={undefined}
            screenOptions={{
                headerShown: false, // Oculta la cabecera para todas las pantallas
            }}
        >
            <Stack.Screen name="Home" component={HomeLocal} />
            <Stack.Screen name="Juego" component={Juego} />
            {/* <Stack.Screen name="" component={ } /> */}
        </Stack.Navigator>
    );
}

export default LocalStack;