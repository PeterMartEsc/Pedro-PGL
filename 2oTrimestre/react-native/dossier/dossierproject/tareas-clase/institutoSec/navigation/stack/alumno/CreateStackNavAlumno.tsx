import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlumnosListPrincipal from '../../../screens/alumnoScreens/AlumnosListPrincipal';
import AlumnosCreate from '../../../screens/alumnoScreens/AlumnosCreate';

type Props = {}

type PrincipalStackParamList = {
}

const Stack = createNativeStackNavigator();

const CreateStackNavAlumno = (props: Props) => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        //headerStyle: {backgroundColor: '#0374ba'},
        //headerTitleAlign: 'center',
        //title: 'Pokemon Wiki'
        headerShown: false,
      }}>
      <Stack.Screen name="Alumnos Create" component={AlumnosCreate}/>
    </Stack.Navigator>
  )
}

export default CreateStackNavAlumno

const styles = StyleSheet.create({})