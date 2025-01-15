import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokemonList from '../screens/PokemonList';
import PokemonSearch from '../screens/PokemonSearch';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}

const Tab =  createBottomTabNavigator();

const TabNavPokemon = (props: Props) => {
    
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="PokemonList" component={PokemonList}
                options={{tabBarIcon: ({focused}) => <Icon name={(focused) ? 'apps' : 'apps-outline'} size={30}/>}}
            />
            <Tab.Screen name="Favoritos" component={PokemonSearch}
                options={{tabBarIcon: ({focused}) => <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>}}
            />
        </Tab.Navigator>
    )
}

export default TabNavPokemon

const styles = StyleSheet.create({})