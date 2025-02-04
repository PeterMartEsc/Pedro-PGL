import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AlumnosListPrincipal from '../../../screens/alumnoScreens/AlumnosListPrincipal'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlumnosCreate from '../../../screens/alumnoScreens/AlumnosCreate';
import AdminAlumnosList from '../../../screens/alumnoScreens/AdminAlumnoList';
import { useTokenContext } from '../../../context/AppContext';
import { useJwt } from 'react-jwt';

type Props = {}

// export type StackParamList = {
//   AlumnosList: undefined,
//   AlumnosCreate : undefined,
// }

type tokenPlayload ={
  sub: string;
  role: string;
}

const Stack = createNativeStackNavigator();

const PrincipalStackNavAlumno = (props: Props) => {

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
        (decodedToken?.role == "ROLE_ADMIN") ?
        <Stack.Screen name="AdminAlumnosList" component={AdminAlumnosList}/> :
        <Stack.Screen name="AlumnosList" component={AlumnosListPrincipal}/>
      }
      <Stack.Screen name="AlumnosCreate" component={AlumnosCreate}/>
    </Stack.Navigator>
  )
}

export default PrincipalStackNavAlumno

const styles = StyleSheet.create({})