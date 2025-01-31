import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsignaturasCreate from '../../../screens/asignaturaScreens/AsignaturasCreate';

type Props = {}

type PrincipalStackParamList = {
}

const Stack = createNativeStackNavigator();

const CreateStackNavAsignaturas = (props: Props) => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        //headerStyle: {backgroundColor: '#0374ba'},
        //headerTitleAlign: 'center',
        //title: 'Pokemon Wiki'
        headerShown: false,
      }}>
      <Stack.Screen name="Asignaturas Create" component={AsignaturasCreate}/>
    </Stack.Navigator>
  )
}

export default CreateStackNavAsignaturas

const styles = StyleSheet.create({})