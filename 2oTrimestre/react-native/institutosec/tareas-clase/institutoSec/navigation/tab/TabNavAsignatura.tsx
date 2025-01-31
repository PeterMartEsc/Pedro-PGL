import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import PrincipalStackNavAsignaturas from '../stack/asignatura/PrincipalStackNavAsignaturas';
import CreateStackNavAsignaturas from '../stack/asignatura/CreateStackNavAsignaturas';


type Props = {}

const Tab =  createBottomTabNavigator();

const TabNavAsignatura = (props: Props) => {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={{
      headerShown: false,
      }}
      >
      <Tab.Screen name="Stack Get All/One/Update/Delete" component={PrincipalStackNavAsignaturas}
          options={{
              tabBarIcon: ({focused}) => <Icon name={(focused) ? 'apps' : 'apps-outline'} size={30}/>,
              tabBarLabel: 'Principal'
          }}
      />
      <Tab.Screen name="Stack Create" component={CreateStackNavAsignaturas}
          options={{
              tabBarIcon: ({focused}) => <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>,
              tabBarLabel: 'Create',
          }}
      />
    </Tab.Navigator>
  )
}

export default TabNavAsignatura

const styles = StyleSheet.create({})