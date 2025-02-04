import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import PrincipalStackNavAlumno from '../stack/alumno/PrincipalStackNavAlumno';
import CreateStackNavAlumno from '../stack/alumno/CreateStackNavAlumno';
import { useTokenContext } from '../../context/AppContext';
import { useJwt } from 'react-jwt';

type Props = {}

type tokenPlayload ={
  sub: string;
  role: string;
}

const Tab =  createBottomTabNavigator();

const TabNavAlumno = (props: Props) => {

  const context = useTokenContext();
  const { decodedToken } = useJwt<tokenPlayload>(context.token);

  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={{
      headerShown: false,
      }}
      >
      <Tab.Screen name="Stack Get All/One/Update/Delete" component={PrincipalStackNavAlumno}
          options={{
              tabBarIcon: ({focused}) => <Icon name={(focused) ? 'apps' : 'apps-outline'} size={30}/>,
              tabBarLabel: 'Principal'
          }}
      />
      {
        (decodedToken?.role == 'ROLE_ADMIN') &&
        <>
        <Tab.Screen name="Stack Create" component={CreateStackNavAlumno}
          options={{
              tabBarIcon: ({focused}) => <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>,
              tabBarLabel: 'Create',
          }}
        />
        </>
      }
    </Tab.Navigator>
  )
}

export default TabNavAlumno

const styles = StyleSheet.create({})