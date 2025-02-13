import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { EjemploRepository } from '../data/Database';
import InicioScreen from '../screens/InicioScreen';
import OtraScreen from '../screens/OtraScreen';
import { EjemploEntity } from '../data/entity/EjemploEntity';
import Login from '../screens/online/Login';
import Register from '../screens/online/Register';
import HomeOnline from '../screens/online/HomeOnline';

type Props = {}

export type PruebaStackParamList = {
    Login: undefined,
    Register: undefined,
    HomeOnline: undefined,
};

const Stack = createNativeStackNavigator<PruebaStackParamList>();

function OnlineStack() {

    useEffect(() => {
        const grabarYcargar = async () => {
            //aquí un ejemplo de que tengamos datos ya en la ddbb previamente:
            let e = new EjemploEntity();
            e.nick = "yepa" + Math.random();
            await EjemploRepository.save(e);
            //aquí podemos hacer ya la carga de los datos que queramos poner en el contexto
            console.log("vamos a cargar ejemplos");
            try {
                const ejemplos = await EjemploRepository.find();
                console.log("cargados ejemplos : " + JSON.stringify(ejemplos));
            } catch (e) {
                console.log(e.message);
            }
        }

        grabarYcargar();
    }, []);

    return (

        <Stack.Navigator id={undefined}
            screenOptions={{
                headerShown: false, // Oculta la cabecera para todas las pantallas
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="HomeOnline" component={HomeOnline} />
        </Stack.Navigator>
    );
}

export default OnlineStack;