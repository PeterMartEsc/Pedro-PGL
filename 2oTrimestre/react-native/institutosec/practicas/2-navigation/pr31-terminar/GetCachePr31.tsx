import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {}

const GetCachePr31 = (props: Props) => {

    async function getCache(uri: string) {
        try {
            const response = await axios.get(uri);
            const data = response.data;
            AsyncStorage.setItem(uri, JSON.stringify(data))
            return data;
        } catch (error) {
            const dat = await AsyncStorage.getItem(uri);
            if (dat) {
                const data = JSON.parse(dat);
            }
        }
    }
    return (
        <View>
            <Text>GetCachePr31</Text>
        </View>
    )
}

export default GetCachePr31

const styles = StyleSheet.create({})