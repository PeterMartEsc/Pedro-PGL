import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CreateProducto from '../screens/CreateProducto';
import FilterProductos from '../screens/FilterProductos';
import { AppContextProvider } from '../components/AppContextProvider';

type Props = {}

type PrincipalStackParamList = {
    CreateProducto: undefined,
    FilterProductos: undefined,
    id: undefined,
}

const Tab =  createBottomTabNavigator<PrincipalStackParamList>();
const TabNavProductosPr34 = (props: Props) => {

    return (
        <AppContextProvider>
            <Tab.Navigator screenOptions={{
                        headerShown: false,
                    }}>
                <Tab.Screen name="CreateProducto" component={CreateProducto}
                    options={{
                        tabBarIcon: ({focused}) => <Icon name={(focused) ? 'fast-food' : 'fast-food-outline'} size={30}/>,
                        tabBarLabel: 'Crear Producto'

                    }}
                />
                <Tab.Screen name="FilterProductos" component={FilterProductos}
                    options={{
                        tabBarIcon: ({focused}) => <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>,
                        tabBarLabel: 'Buscar Producto',
                    }}
                />
            </Tab.Navigator>
        </AppContextProvider>
    )
}

export default TabNavProductosPr34

const styles = StyleSheet.create({})