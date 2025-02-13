import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { EjemploRepository } from '../data/Database';
import InicioScreen from '../screens/InicioScreen';
import OtraScreen from '../screens/OtraScreen';
import { EjemploEntity } from '../data/entity/EjemploEntity';
import LocalStack from './Local';
import OnlineStack from './Online';

type Props = {}

export type PruebaStackParamList = {
  Local: undefined,
  Online: undefined,
};

const Stack = createNativeStackNavigator<PruebaStackParamList>();

function PrincipalStack() {

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
      <Stack.Screen name="Local" component={LocalStack} />
      <Stack.Screen name="Online" component={OnlineStack} />
    </Stack.Navigator>
  );
}

export default PrincipalStack;








