import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import InicioScreen from '../screens/InicioScreen';
import { EjemploEntity } from '../data/entity/EjemploEntity';
import Login from '../screens/online/Login';
import Register from '../screens/online/Register';
import HomeOnline from '../screens/online/HomeOnline';
import { useAppContext } from '../contexts/AppContext';
import { useJwt } from 'react-jwt';
import Logout from '../screens/online/Logout';
import DrawerOnline from './DrawerOnline';


type Props = {}

export type OnlineStackParamList = {
    Login: undefined,
    Register: undefined,
    DrawerOnline: undefined,
    Logout: undefined,
};

type tokenPlayload ={
    sub: string;
    rol: string;
}

const Stack = createNativeStackNavigator<OnlineStackParamList>();

function OnlineStack() {

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
        {
            (context.token) ? 
            <>
            <Stack.Screen name="DrawerOnline" component={DrawerOnline} />
            </>
            :
            <>
            <Stack.Screen name="Login" component={Login} />
            </>
        }
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Logout" component={Logout} />
        </Stack.Navigator>
    );
}

export default OnlineStack;