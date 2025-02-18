import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppContext } from '../../../contexts/AppContext';
import { OnlineStackParamList } from '../../../navigations/OnlineStack';

type Props = {}

type PropsHome = NativeStackScreenProps<OnlineStackParamList, 'Logout'>

const Logout = ({navigation, route}:PropsHome) => {

    const context = useAppContext();
    const {removeToken} = useAppContext();

    useEffect(() => {
        removeToken();
    }, [])

    return (
        <></>
    )
}

export default Logout

const styles = StyleSheet.create({})