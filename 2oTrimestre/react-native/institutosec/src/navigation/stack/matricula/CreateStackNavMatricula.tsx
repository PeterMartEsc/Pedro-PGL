import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatriculasCreate from '../../../screens/matriculaScreens/MatriculasCreate';

type Props = {}

type PrincipalStackParamList = {
}

const Stack = createNativeStackNavigator();

const CreateStackNavMatricula = (props: Props) => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        //headerStyle: {backgroundColor: '#0374ba'},
        //headerTitleAlign: 'center',
        //title: 'Pokemon Wiki'
        headerShown: false,
      }}>
      <Stack.Screen name="Matriculas Create" component={MatriculasCreate}/>
    </Stack.Navigator>
  )
}

export default CreateStackNavMatricula

const styles = StyleSheet.create({})