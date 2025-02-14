import { FlatList, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LocalStackParamList } from '../../navigations/Local';
import Partida from '../../data/entity/Partida';
import { PartidaRepository } from '../../data/Database';
import { useAppContext } from '../../contexts/AppContext';

type Props = {}

type PropsLocal = NativeStackScreenProps<LocalStackParamList, 'Home'>;

const HomeLocal = ({navigation,route}:PropsLocal) => {

  const [listaPartidas, setListaPartidas] = useState<Partida[]>();
  const {saveIdPartida} =  useAppContext();

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
    let tablero = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    partidaNueva.contenido = JSON.stringify(tablero);
    partidaNueva.terminada = false; 

    try{
        let partidaAlmacenada = await PartidaRepository.save(partidaNueva);
        saveIdPartida(partidaAlmacenada.id);
        console.log('Partida: '+partidaAlmacenada.id+ ' creada');
    } catch (e) {
      console.log("nuevo error "+ e);
    }
  }

  return (
    <View style={{flex: 1}}>
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
                <View style={styles.partidaLista}>
                    <Text>
                        {item.id + " " + item.nombre}
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