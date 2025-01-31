import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatriculasListPrincipal from '../../../screens/matriculaScreens/MatriculasListPrincipal';

type Props = {}

type PrincipalStackParamList = {
}

const Stack = createNativeStackNavigator();

const PrincipalStackNavMatricula = (props: Props) => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        //headerStyle: {backgroundColor: '#0374ba'},
        //headerTitleAlign: 'center',
        //title: 'Pokemon Wiki'
        headerShown: false,
      }}>
      <Stack.Screen name="Matriculas List Principal" component={MatriculasListPrincipal}/>
    </Stack.Navigator>
  )
}

export default PrincipalStackNavMatricula

const styles = StyleSheet.create({})