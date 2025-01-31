import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavPrincipal from './navigation/drawer/DrawerNavPrincipal';
import Login from './screens/Auth/Login';
import Logout from './Logout';

type Props = {}

export type StackParamList = {
  Login: undefined,
  DrawerNavPrincipal : undefined,
  Logout: undefined,
}

const Stack = createNativeStackNavigator<StackParamList>();

const PrincipalNavigation = (props: Props) => {

  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        //headerStyle: {backgroundColor: '#0374ba'},
        //headerTitleAlign: 'center',
        //title: 'Pokemon Wiki'
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="DrawerNavPrincipal" component={DrawerNavPrincipal}/>
      <Stack.Screen name="Logout" component={Logout}/>
    </Stack.Navigator>
  )

}

export default PrincipalNavigation

const styles = StyleSheet.create({})