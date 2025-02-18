import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAppContext } from '../../contexts/AppContext'
import { useJwt } from 'react-jwt'
import axios from 'axios'
import ip from '../../utilities/Globals'
import { OnlineStackParamList } from '../../navigations/StackHomeOnline'

type Props = {}

type tokenPlayload ={
  sub: string;
  rol: string;
}

interface JugadorOnline{
  id: number;
  nombre: string;
}

interface PartidaOnline {
  id: number;
  jugador1: JugadorOnline;
  jugador2: JugadorOnline;
  contenido: string;
  turno: JugadorOnline;
  ganador: JugadorOnline;
}

type PropsHome = NativeStackScreenProps<OnlineStackParamList, 'HomeOnline'>

const HomeOnline = ({navigation, route}:PropsHome) => {

  const context = useAppContext();
  const { decodedToken } = useJwt<tokenPlayload>(context.token);

  

  async function crearPartidaOnline(){

    let nombreUser = decodedToken?.sub;
    let partidaCreada;
    console.log(nombreUser + " " +partidaCreada);

    try{
        partidaCreada = await axios.post(`${ip}/api/v2/partidas/crear`, 
          {nombreCreador: nombreUser},
          {
            headers: {
              'Authorization': `Bearer ${context.token}`, // Token JWT
              'Content-Type': 'application/json', // Tipo de contenido
            }
          }
        );

    } catch(e){
      console.log(e);
    }

    let partidaData : PartidaOnline = partidaCreada.data;

    //console.log(JSON.stringify(partidaData));

    context.saveIdPartida(partidaData.id);
    navigation.navigate('PartidaOnline');
  }

  return (
    <View style={{flex: 1}}>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Logout')}>
          <Text style={{textAlign: 'right', margin: 5, color: 'blue'}}>Logout</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.titulo}>
        <Text style={{textAlign: 'center'}} >Bienvenido {decodedToken?.sub}</Text>
        <Text style={{textAlign: 'center'}}>Este es su home en Online</Text>
      </View>

      <View style={styles.partidas}>

        <View style={styles.partidaNueva}>
          <TouchableOpacity onPress={crearPartidaOnline}>
            <Text style={{textAlign: 'center'}}>Crear Partida</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.partidaNueva}>
          <TouchableOpacity onPress={()=> navigation.navigate('BuscarPartida')}>
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