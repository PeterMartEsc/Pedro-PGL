import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PrincipalStackNavUsuario from '../stack/usuario/PrincipalStackNavUsuario';
import CreateStackNavUsuario from '../stack/usuario/CreateStackNavUsuario';

type Props = {}

const Tab =  createBottomTabNavigator();

const TabNavUsuario = (props: Props) => {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={{
      headerShown: false,
      }}
      >
      <Tab.Screen name="Stack Get All/One/Update/Delete" component={PrincipalStackNavUsuario}
          options={{
              tabBarIcon: ({focused}) => <Icon name={(focused) ? 'apps' : 'apps-outline'} size={30}/>,
              tabBarLabel: 'Principal'
          }}
      />
      <Tab.Screen name="Stack Create" component={CreateStackNavUsuario}
          options={{
              tabBarIcon: ({focused}) => <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>,
              tabBarLabel: 'Create',
          }}
      />
    </Tab.Navigator>
  )
}

export default TabNavUsuario

const styles = StyleSheet.create({})