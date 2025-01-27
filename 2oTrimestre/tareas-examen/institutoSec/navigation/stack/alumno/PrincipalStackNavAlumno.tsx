import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AlumnosListPrincipal from '../../../screens/alumnoScreens/AlumnosListPrincipal'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type Props = {}

const Stack = createNativeStackNavigator();

const PrincipalStackNavAlumno = (props: Props) => {
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

export default PrincipalStackNavAlumno

const styles = StyleSheet.create({})