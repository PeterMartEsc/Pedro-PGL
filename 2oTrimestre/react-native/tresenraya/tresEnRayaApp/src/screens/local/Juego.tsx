import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LocalStackParamList } from '../../navigations/Local';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PartidaRepository } from '../../data/Database';
import { useAppContext } from '../../contexts/AppContext';
import Partida from '../../data/entity/Partida';

type Props = {}

type PropsLocal = NativeStackScreenProps<LocalStackParamList, 'Juego'>;

const Juego = ({navigation,route}:PropsLocal) => {
  
  const {idPartidaActual} =  useAppContext();

  const [partidaActual, setPartidaActual] = useState<Partida>();
  const [partidaCargada, setPartidaCargada] = useState<boolean>(false);

  useEffect(() => {
    const id = idPartidaActual;

    async function cargarPartidaPorId(){
      const partidaById = await PartidaRepository.findOne({where: {id}}); 
      setPartidaActual(partidaById);
      setPartidaCargada(true);
      console.log("cargada partida : " + JSON.stringify(partidaById));
    }

    cargarPartidaPorId();
  }, [])

  return (
    <>
      {
        partidaCargada ? 
        (
          <View style={{flex: 1}}>
            <View style={styles.partida}>
              <Text style={{textAlign: 'center', marginBottom: 10}}>Juego</Text>
              <View style={styles.tablero}>
                
              </View>
            </View>

            <View style={styles.zonaRegresar}>
              <View style={styles.botonRegresar}>
                  <TouchableOpacity >
                    <Text style={{textAlign: 'center'}}>Gardar y salir</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cargando...</Text>
          </View>
        )
      }
    </>
  )
}

export default Juego

const styles = StyleSheet.create({

  partida:{    
    flex: 2,

    backgroundColor: 'blue'
  },

  tablero:{
    alignSelf: 'center',

    width: 300,
    height: 400,

    borderWidth: 2,
    borderRadius: 4,
  },

  zonaRegresar:{
    flex: 1,
    backgroundColor: 'red',
  },

  botonRegresar:{
    alignSelf: 'center',

    width: 200,
    marginBottom: 10,
    padding: 10,

    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#66cbff',
    backgroundColor: '#66cbff',
  }
})