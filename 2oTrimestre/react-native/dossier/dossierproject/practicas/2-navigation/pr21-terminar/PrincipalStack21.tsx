import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}

type PrincipalStackParamList = {
    Home: undefined,
    Profile: {userName : string},
    Settings : undefined,
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const PrincipalStackPr21 = (props: Props) => {
    return (
        <Stack.Navigator screenOptions={{/*headerShown:false*/}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
        </Stack.Navigator>
    )
}

export default PrincipalStackPr21

type PropsProfile = NativeStackScreenProps<PrincipalStackParamList, 'Profile'>

function ProfileScreen({navigation, route}:PropsProfile){

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Profile Screen</Text>
            <Text>{route.params.userName}</Text>
            <Icon name='person-circle-outline' size={50} color={'blue'}/>
        </View>
    )
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'Home'>

function HomeScreen({navigation, route}:PropsHome){
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Home Screen</Text>
            <Button title='Ir a Profile' onPress={()=>navigation.navigate('Profile', {userName:"Pedro"})}/>
            <Button title='Settings' onPress={()=>navigation.navigate('Settings')}/>
            <Icon name='car-outline' size={50} color={'blue'}/>
        </View>
    )
}

type PropsSettings = NativeStackScreenProps<PrincipalStackParamList, 'Settings'>

function SettingsScreen({navigation, route}:PropsSettings){
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Settings</Text>
            <Icon name='settings-outline' size={50} color={'blue'}/>
        </View>
    )
}

const styles = StyleSheet.create({})