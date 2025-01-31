import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsuariosCreate from '../../../screens/usuarioScreens/UsuariosCreate';

type Props = {}

type PrincipalStackParamList = {
}

const Stack = createNativeStackNavigator();

const CreateStackNavUsuario = (props: Props) => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        //headerStyle: {backgroundColor: '#0374ba'},
        //headerTitleAlign: 'center',
        //title: 'Pokemon Wiki'
        headerShown: false,
      }}>
      <Stack.Screen name="Usuario Create" component={UsuariosCreate}/>
    </Stack.Navigator>
  )
}

export default CreateStackNavUsuario

const styles = StyleSheet.create({})