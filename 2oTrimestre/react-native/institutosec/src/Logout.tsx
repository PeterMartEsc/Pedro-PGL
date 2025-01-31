import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useTokenContext } from './context/AppContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = {}

export type StackParamList = {
    Login: undefined,
    Logout: undefined,
}

type PropsHome = NativeStackScreenProps<StackParamList, 'Logout'>

const Logout = ({navigation, route}:PropsHome) => {

    const context = useTokenContext();
    const {removeToken} = useTokenContext();

    useEffect(() => {
        removeToken();
        navigation.navigate('Login');
    }, [])
    

    return (
        <View>
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({})