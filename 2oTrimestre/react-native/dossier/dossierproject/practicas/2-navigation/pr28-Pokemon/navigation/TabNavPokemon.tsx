import { StyleSheet, Text, View, useWindowDimensions, } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import StackNavPokemonList from './StackNavPokemonList';
import StackNavPokemonSearch from './StackNavPokemonSearch';

type Props = {}

const Tab =  createBottomTabNavigator();

const TabNavPokemon = (props: Props) => {
    
    return(
        <Tab.Navigator>
            <Tab.Screen name="StackNavPokemonList" component={StackNavPokemonList}
                options={{tabBarIcon: ({focused}) => <Icon name={(focused) ? 'apps' : 'apps-outline'} size={30}/>}}
            />
            <Tab.Screen name="StackNavPokemonSearch" component={StackNavPokemonSearch}
                options={{tabBarIcon: ({focused}) => <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>}}
            />
        </Tab.Navigator>
    )
}

export default TabNavPokemon

const styles = StyleSheet.create({})