import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { OnlineStackParamList } from '../../navigations/OnlineStack'

type Props = {}

type PropsHome = NativeStackScreenProps<OnlineStackParamList, 'HomeOnline'>

const HomeOnline = ({navigation, route}:PropsHome) => {


  return (
    <View style={{flex: 1}}>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Logout')}>
          <Text style={{textAlign: 'right', margin: 5, color: 'blue'}}>Logout</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.titulo}>
        <Text style={{textAlign: 'center'}} >Bienvenido</Text>
        <Text style={{textAlign: 'center'}}>Este es su home en Online</Text>
      </View>

      <View style={styles.partidas}>

        <View style={styles.partidaNueva}>
          <TouchableOpacity>
            <Text style={{textAlign: 'center'}}>Crear Partida</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.partidaNueva}>
          <TouchableOpacity>
            <Text style={{textAlign: 'center'}}>Buscar Partida</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default HomeOnline

const styles = StyleSheet.create({

  titulo:{
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },

  partidas:{
    flex: 2,
    //justifyContent: 'center',
    alignSelf: 'center',
    // backgroundColor: 'blue',
  },

  partidaNueva:{
    width: 200,
    marginBottom: 10,
    padding: 10,

    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#66cbff',
    backgroundColor: '#66cbff',
  },

  partidaLista:{
    borderColor: 'black',
    borderWidth: 2,

    marginBottom: 10,
  }
})