import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import InicioScreen from '../screens/InicioScreen';
import { EjemploEntity } from '../data/entity/EjemploEntity';
import Login from '../screens/online/auth/Login';
import Register from '../screens/online/auth/Register';
import HomeOnline from '../screens/online/HomeOnline';
import { useAppContext } from '../contexts/AppContext';
import { useJwt } from 'react-jwt';
import Logout from '../screens/online/auth/Logout';
import PartidaOnline from '../screens/online/PartidaOnline';
import BuscarPartida from '../screens/online/BuscarPartida';


type Props = {}

export type OnlineStackParamList = {
    HomeOnline: undefined,
    Logout: undefined,
    PartidaOnline: undefined,
    BuscarPartida: undefined,
};

type tokenPlayload ={
    sub: string;
    rol: string;
}

const Stack = createNativeStackNavigator<OnlineStackParamList>();

function StackHomeOnline() {

    const context = useAppContext();
    const { decodedToken } = useJwt<tokenPlayload>(context.token);

    useEffect(() => {

    }, []);

    return (

        <Stack.Navigator id={undefined}
            screenOptions={{
                headerShown: false, // Oculta la cabecera para todas las pantallas
            }}
        >
        <Stack.Screen name="HomeOnline" component={HomeOnline} />
        <Stack.Screen name="PartidaOnline" component={PartidaOnline} />
        <Stack.Screen name="BuscarPartida" component={BuscarPartida} />
        <Stack.Screen name="Logout" component={Logout} />
        </Stack.Navigator>
    );
}

export default StackHomeOnline;