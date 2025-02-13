import { FlatList, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LocalStackParamList } from '../../navigations/Local';
import Partida from '../../data/entity/Partida';
import { PartidaRepository } from '../../data/Database';

type Props = {}

type PropsInicio = NativeStackScreenProps<LocalStackParamList, 'Home'>;

const HomeLocal = ({navigation,route}:PropsInicio) => {

  const [listaPartidas, setListaPartidas] = useState<Partida[]>();
  // const [partidaCreada, setPartidaCreada] = useState<boolean>(false);

  useEffect(() => {
    async function grabarYcargar(){

      try {
        const partidas : Partida[] = await PartidaRepository.find();
        setListaPartidas(partidas);
        console.log("cargadas partidas : " + JSON.stringify(partidas));

      } catch (e) {
        console.log(e.message);
      }
    }

    grabarYcargar();
  }, [])
  
  function partidaNueva(){
    crearGuardarPartida();
    navigation.navigate('Juego');
  }

  async function crearGuardarPartida(){
    let partidaNueva = new Partida();
    partidaNueva.nombre = new Date().toDateString();
    partidaNueva.contenido = "";
    PartidaRepository.save(partidaNueva);
    console.log('Partida: '+partidaNueva.nombre+ ' creada');
  }

  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={{textAlign: 'center'}} >Bienvenido</Text>
        <Text style={{textAlign: 'center'}}>Está jugando en Local</Text>
      </View>

      <View style={styles.partidas}>

        <View style={styles.partidaNueva}>
          <TouchableOpacity onPress={partidaNueva}>
            <Text style={{textAlign: 'center'}}>Partida Nueva</Text>
          </TouchableOpacity>
        </View>

        <FlatList 
          data={listaPartidas}
          renderItem={({ item, index }) => {
              return (
                <View style={styles.partidaLista} >
                    <Text>
                        {item.nombre}
                    </Text>
                </View>
              )
          }}
          keyExtractor={(item, index) => 'partida ' + index}
        />
      </View>
    </View>
  )
}

export default HomeLocal

const styles = StyleSheet.create({
  container:{
    flex: 1,

  },

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

  }
})