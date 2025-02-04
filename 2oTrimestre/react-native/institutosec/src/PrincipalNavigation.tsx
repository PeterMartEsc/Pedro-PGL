import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavPrincipal from './navigation/drawer/DrawerNavPrincipal';
import Login from './screens/Auth/Login';
import Logout from './Logout';
import { useTokenContext } from './context/AppContext';
import { useJwt } from 'react-jwt';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {}

export type StackParamList = {
  Login: undefined,
  DrawerNavPrincipal : undefined,
  Logout: undefined,
}

type tokenPlayload ={
  sub: string;
  role: string;
}

const Stack = createNativeStackNavigator<StackParamList>();

const PrincipalNavigation = (props: Props) => {

  const context = useTokenContext();
  const { decodedToken } = useJwt<tokenPlayload>(context.token);

  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        //headerStyle: {backgroundColor: '#0374ba'},
        //headerTitleAlign: 'center',
        //title: 'Pokemon Wiki'
        headerShown: false,
      }}>
      {
        (AsyncStorage.getItem("token") == undefined) ? 
        <>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="DrawerNavPrincipal" component={DrawerNavPrincipal}/>
        </> :
        <>
        <Stack.Screen name="DrawerNavPrincipal" component={DrawerNavPrincipal}/>
        <Stack.Screen name="Logout" component={Logout}/>
        <Stack.Screen name="Login" component={Login}/>
        </>
      }
    </Stack.Navigator>
  )

}

export default PrincipalNavigation

const styles = StyleSheet.create({})