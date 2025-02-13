import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { EjemploEntity } from '../data/entity/EjemploEntity';
import LocalStack from './Local';
import OnlineStack from './Online';
import InicioScreen from '../screens/InicioScreen';

type Props = {}

export type PruebaStackParamList = {
  Inicio: undefined,
  Local: undefined,
  Online: undefined,
};

const Stack = createNativeStackNavigator<PruebaStackParamList>();

function PrincipalStack() {

  return (

    <Stack.Navigator id={undefined}
      screenOptions={{
        headerShown: true, // Oculta la cabecera para todas las pantallas
      }}
    >
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="Local" component={LocalStack} />
      <Stack.Screen name="Online" component={OnlineStack} />
    </Stack.Navigator>
  );
}

export default PrincipalStack;








