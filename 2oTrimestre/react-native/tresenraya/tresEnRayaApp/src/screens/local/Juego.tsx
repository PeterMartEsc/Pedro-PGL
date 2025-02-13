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
          <View>
            <View style={styles.partida}>
              <Text style={{textAlign: 'center'}}>Juego</Text>
              <View style={styles.tablero}>
                
              </View>
            </View>

            <View style={styles.regresar}>
                <TouchableOpacity >
                  <Text style={{textAlign: 'center'}}>Gardar y salir</Text>
                </TouchableOpacity>
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

  },

  tablero:{
    width: 400,
    height: 400,

    borderWidth: 2,
    borderRadius: 4,
  },

  regresar:{
    width: 200,
    marginBottom: 10,
    padding: 10,

    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#66cbff',
    backgroundColor: '#66cbff',
  }
})