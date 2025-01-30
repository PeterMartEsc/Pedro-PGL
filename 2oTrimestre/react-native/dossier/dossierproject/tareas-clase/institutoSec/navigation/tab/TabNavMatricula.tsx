import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PrincipalStackNavMatricula from '../stack/matricula/PrincipalStackNavMatricula';
import CreateStackNavMatricula from '../stack/matricula/CreateStackNavMatricula';


type Props = {}

const Tab =  createBottomTabNavigator();

const TabNavMatricula = (props: Props) => {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={{
      headerShown: false,
      }}
      >
      <Tab.Screen name="Stack Get All/One/Update/Delete" component={PrincipalStackNavMatricula}
          options={{
              tabBarIcon: ({focused}) => <Icon name={(focused) ? 'apps' : 'apps-outline'} size={30}/>,
              tabBarLabel: 'Principal'
          }}
      />
      <Tab.Screen name="Stack Create" component={CreateStackNavMatricula}
          options={{
              tabBarIcon: ({focused}) => <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>,
              tabBarLabel: 'Create',
          }}
      />
    </Tab.Navigator>
  )
}

export default TabNavMatricula

const styles = StyleSheet.create({})