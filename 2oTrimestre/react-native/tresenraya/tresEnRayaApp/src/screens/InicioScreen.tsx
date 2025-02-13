import { Alert, Button, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EjemploEntity } from '../data/entity/EjemploEntity';
import { PruebaStackParamList } from '../navigations/PrincipalStack';
import axios from 'axios';


type PropsInicio = NativeStackScreenProps<PruebaStackParamList, 'Inicio'>;
function InicioScreen({navigation,route}:PropsInicio) {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
        <View style={styles.botones}>
          <TouchableOpacity onPress={()=> navigation.navigate('Local')}>
            <Text>Jugar en Local</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.botones}>
          <TouchableOpacity onPress={()=> navigation.navigate('Online')}>
            <Text>Jugar en Linea</Text>
          </TouchableOpacity> 
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  botones:{
    marginBottom: 25,
    padding: 10,

    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#66cbff',
    backgroundColor: '#66cbff',
  }
})

export default InicioScreen;