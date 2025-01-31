import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import PrincipalStackNavAlumno from '../stack/alumno/PrincipalStackNavAlumno';
import CreateStackNavAlumno from '../stack/alumno/CreateStackNavAlumno';

type Props = {}

const Tab =  createBottomTabNavigator();

const TabNavAlumno = (props: Props) => {
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
      <Tab.Screen name="Stack Create" component={CreateStackNavAlumno}
          options={{
              tabBarIcon: ({focused}) => <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>,
              tabBarLabel: 'Create',
          }}
      />
    </Tab.Navigator>
  )
}

export default TabNavAlumno

const styles = StyleSheet.create({})