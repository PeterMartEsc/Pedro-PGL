import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsignaturasListPrincipal from '../../../screens/asignaturaScreens/AsignaturasListPrincipal';

type Props = {}

type PrincipalStackParamList = {
}

const Stack = createNativeStackNavigator();

const PrincipalStackNavAsignaturas = (props: Props) => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        //headerStyle: {backgroundColor: '#0374ba'},
        //headerTitleAlign: 'center',
        //title: 'Pokemon Wiki'
        headerShown: false,
      }}>
      <Stack.Screen name="Asignaturas List Principal" component={AsignaturasListPrincipal}/>
    </Stack.Navigator>
  )
}

export default PrincipalStackNavAsignaturas

const styles = StyleSheet.create({})