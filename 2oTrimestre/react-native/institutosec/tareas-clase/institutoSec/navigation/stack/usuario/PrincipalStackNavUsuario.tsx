import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlumnosListPrincipal from '../../../screens/alumnoScreens/AlumnosListPrincipal';

type Props = {}

type PrincipalStackParamList = {
}

const Stack = createNativeStackNavigator();

const PrincipalStackNavUsuario = (props: Props) => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        //headerStyle: {backgroundColor: '#0374ba'},
        //headerTitleAlign: 'center',
        //title: 'Pokemon Wiki'
        headerShown: false,
      }}>
      <Stack.Screen name="Alumnos List Principal" component={AlumnosListPrincipal}/>
    </Stack.Navigator>
  )
}

export default PrincipalStackNavUsuario

const styles = StyleSheet.create({})