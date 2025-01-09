import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Drawer = createDrawerNavigator();
const PrincipalNavigationPr24 = (props: Props) => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Pantalla1" component={} />
            <Drawer.Screen name="Pantalla2" component={} />
        </Drawer.Navigator>
        )
}

export default PrincipalNavigationPr24

const styles = StyleSheet.create({})