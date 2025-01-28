import 'react-native-gesture-handler';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Pantalla1Screen from './screens/Pantalla1Screen';
import Pantalla2Screen from './screens/Pantalla2Screen';
import StackNavigation from './screens/StackNavigation';

type Props = {}

const Drawer = createDrawerNavigator();

const PrincilaScreenNavigator = (props: Props) => {

    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            id={undefined}
            screenOptions={{
                drawerStyle: {
                    //backgorundColor: '',
                    // width: 140,
                },
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
            }}
            //drawerContent={(props) => drawerPersonalizadoPr25(props)}
        >
            <Drawer.Screen name="Pantalla 1" options={{title: "Hola Mundo"}} component={Pantalla1Screen}/>
            <Drawer.Screen name="Pantalla 2" options={{title: "Segunda Pantalla"}} component={Pantalla2Screen}/>
            <Drawer.Screen name="Stack Navigation" options={{title: "Home"}} component={StackNavigation}/>
    
        </Drawer.Navigator>
    )
}

export default PrincilaScreenNavigator

function drawerPersonalizadoPr25 (props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView>
            <View>{/* en este view ponemos libremente*/}
                <Text>Mascotas</Text>
            </View>
            <DrawerItem
            // icon = {<Icon name='miIcono'>}
            label="Pantalla 1"
            onPress={()=> props.navigation.navigate('Pantalla 1')}
            />
            <DrawerItem
            // icon = {<Icon name='miIcono'>}
            label="Help"
            onPress={()=> props.navigation.navigate('Pantalla 2')}
            />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({})