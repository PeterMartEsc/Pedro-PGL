import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

type Props = {}

const Tab = createBottomTabNavigator();

const TabPrincipalScreenPr27 = (props: Props) => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Viajes" component={}/>
            <Tab.Screen name="Viajes" component={}/>
        </Tab.Navigator>
    )
}

export default TabPrincipalScreenPr27

const styles = StyleSheet.create({})