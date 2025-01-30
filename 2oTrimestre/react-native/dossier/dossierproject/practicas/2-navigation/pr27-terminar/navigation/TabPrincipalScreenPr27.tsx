import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import InicioScreenPr10 from '../../../1-introduccion/pr10/screens/InicioScreenPr10';
import About from '../screens/About';
import { Icon } from 'react-native-vector-icons/Icon';

type Props = {}

const Tab = createBottomTabNavigator();

const TabPrincipalScreenPr27 = (props: Props) => {
    return (
        <Tab.Navigator id={undefined} screenOptions={{headerShown: false}}>
            <Tab.Screen name="Viajes" component={InicioScreenPr10}
            options={{
                tabBarIcon: ({focused}) => <Icon name={(focused) ? 'apps' : 'apps-outline'} size={30}/>,
                tabBarLabel: 'Calculadora'
            
            }}/>
            <Tab.Screen name="Viajes" component={About}/>
        </Tab.Navigator>
    )
}

export default TabPrincipalScreenPr27

const styles = StyleSheet.create({})