import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = {}

type PrincipalStackParamList = {
  PokemonList: undefined,
  PokemonSearch: undefined,
  PokemonShow: undefined,
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'PokemonShow'>

function PokemonShow({navigation, route} : PropsHome){
  return (
    <View>
      <Text>PokemonShow</Text>
    </View>
  )
}

export default PokemonShow

const styles = StyleSheet.create({})