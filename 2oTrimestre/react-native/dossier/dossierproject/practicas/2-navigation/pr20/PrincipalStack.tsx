import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}

type PrincipalStackParamList = {
    Home: undefined,
    Profile: undefined,
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const PrincipalStack = (props: Props) => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
    </Stack.Navigator>
  )
}

export default PrincipalStack

type PropsProfile = NativeStackScreenProps<PrincipalStackParamList, 'Profile'>

function ProfileScreen({navigation, route}:PropsProfile){
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Profile Screen</Text>
        </View>
    )
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'Home'>

function HomeScreen({navigation, route}:PropsHome){
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Home Screen</Text>
            <Button title='Ir a Profile' onPress={()=>navigation.navigate('Profile')}></Button>
            <Icon name='car-outline' size={50} color={'blue'}/>
        </View>
    )
}

const styles = StyleSheet.create({})