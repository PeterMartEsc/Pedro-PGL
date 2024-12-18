import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import EditNote from '../screens/EditNote';
import { AppContextProvider } from '../components/AppContextProvider';

type Props = {}

type PrincipalStackParamList = {
    Home: {title: string},
    EditNote: undefined,
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const PrincipalScreenPr23 = (props: Props) => {

    const [title, settitle] = useState("");

    return (
        <AppContextProvider>
            <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor: '#0374ba'},
                headerTitleAlign: 'center',
                title: title
                }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="EditNote" component={EditNote}/>
            </Stack.Navigator>
        </AppContextProvider>
    )
}

export default PrincipalScreenPr23

const styles = StyleSheet.create({})