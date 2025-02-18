import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LocalStackParamList } from '../../navigations/LocalStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PartidaRepository } from '../../data/Database';
import { useAppContext } from '../../contexts/AppContext';
import Partida from '../../data/entity/Partida';
import Celda from '../../data/entity/Celda';
import axios from 'axios';
import ip from '../../utilities/Globals';
import { useJwt } from 'react-jwt';
import path from 'path';
import { OnlineStackParamList } from '../../navigations/StackHomeOnline';

type Props = {}

interface JugadorOnline{
  id: number;
  nombre: string;
}

interface PartidaOnline {
  id: number;
  jugador1: JugadorOnline | null;
  jugador2: JugadorOnline | null;
  contenido: string;
  turno: JugadorOnline | null;
  ganador: JugadorOnline | null;
}

type tokenPlayload ={
  sub: string;
  rol: string;
}

type PropsOnline = NativeStackScreenProps<OnlineStackParamList, 'PartidaOnline'>;

const PartidaOnline = ({navigation,route}:PropsOnline) => {
  
  const context = useAppContext();
  const {idPartidaActual} =  useAppContext();
  const { decodedToken } = useJwt<tokenPlayload>(context.token);

  const [partidaActual, setPartidaActual] = useState<PartidaOnline>();
  const [partidaCargada, setPartidaCargada] = useState<boolean>(false);
  const [arrayCeldas, setArrayCeldas] = useState<string[][]>([]);


  //Permitir jugadas
  //const [jugadorActual, setjugadorActual] = useState("X");
  //const [ganador, setganador] = useState<string>("");

  useEffect(() => {
    async function cargarPartida(){
      console.log(`${ip}/api/v2/partidas/${idPartidaActual}`);

      let partida = await axios.get(`${ip}/api/v2/partidas/${idPartidaActual}`,
        {
          headers: {
            'Authorization': `Bearer ${context.token}`, // Token JWT
            'Content-Type': 'application/json', // Tipo de contenido
          }
        }
      );

      //console.log(partida.data);
      generarPartida(partida.data);
      setPartidaActual(partida.data);
      setPartidaCargada(true);
    }

    cargarPartida();
  }, [])

  useEffect(() => {

    if(partidaCargada && partidaActual.ganador !== null){
      return;
    }

    if(partidaCargada){
      //console.log( partidaActual.ganador.nombre);
      const intervalo = setInterval(async () => {

        console.log('Recargando partida...');
        // Hacer la solicitud para obtener la partida actualizada
        try {
          const partida = await axios.get(`${ip}/api/v2/partidas/${idPartidaActual}`, {
            headers: {
              'Authorization': `Bearer ${context.token}`, // Token JWT
              'Content-Type': 'application/json',
            }
          });

          let partidaData : PartidaOnline = partida.data;
          // Si necesitas generar la partida (esto es opcional según tu lógica)
          generarPartida(partidaData);
          console.log(partidaData);
          // Actualizar el estado con los nuevos datos
          setPartidaActual(partidaData);

        } catch (error) {
          console.error("Error al recargar la partida:", error);
        }
      }, 1000);

      return () => clearInterval(intervalo);
    }
  }, [partidaCargada, partidaActual?.ganador])
  
  useEffect(() => {
    if(partidaCargada && partidaActual.ganador != null){
      //setganador(partidaActual.ganador.nombre);
    }
  }, [partidaCargada])
  

  function generarPartida(partida : PartidaOnline){

    let idSetear = 1;
    let celdas : string[][] = [];
  
      try{
        celdas = JSON.parse(partida.contenido);
        //console.log(partida.contenido);
      if(!celdas.some(fila => fila.some(celda => celda == "X" || celda == "0"))){
        //console.log("Esta entrando");
        for(let fila = 0; fila<3; fila++){
          for(let celda = 0; celda<3; celda++){
            //console.log(celdas[fila][celda]);
              let celdaNueva = " ";
              // celdaNueva.id = idSetear;
              // celdaNueva.valor = " ";
              // idSetear++;
              celdas[fila][celda] = celdaNueva;
            
          }
        }
      }

      } catch(err){
        console.log("ha habido un error" + err);
      }
      setArrayCeldas(celdas);
  }

  async function handleCell(fila : number, columna: number){

    if(partidaActual.jugador2 == null || partidaActual.turno.nombre != decodedToken.sub || arrayCeldas[fila][columna] != " "){
      console.log("Esta entrando acá");
      return;
    }
    //console.log("No entra no " +idPartidaActual+ ", " +fila+","+columna)

    const idJugada = partidaActual.id;
    let jugada = {
      idPartida: idJugada,
      x: fila,
      y: columna
    }

    console.log(JSON.stringify(jugada));

    let verificarJugada = await axios.post(`${ip}/api/v2/partidas/jugada`,
      jugada,
      {
        headers: {
          'Authorization': `Bearer ${context.token}`, // Token JWT
          'Content-Type': 'application/json', // Tipo de contenido
        }
    });

    console.log("Esto es que ta gucci " +verificarJugada);
  }
  

  return (
    <>
      {
        partidaCargada ? 
        (
          <View style={{flex: 1}}>

            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10}}>Juego de Tic Tac Toe</Text>
            </View>

            <View style={styles.title}>
              <Text style={{textAlign: 'left', margin: 15}}>Jugador 1: {partidaActual.jugador1.nombre}</Text>
              <Text style={{textAlign: 'right', margin: 15}}>Jugador 2: {partidaActual.jugador2 !== null ? partidaActual.jugador2.nombre : "Esperando... "}</Text>
            </View>

            <View style={styles.zonaPartida}>
              

              <View style={styles.tablero}>
                {
                  arrayCeldas.map((fila, indexI) => {
                    return (
                      <View key={indexI} style={styles.fila}>
                        {
                          fila.map((celda, indexJ) => {
                            return (
                              <TouchableOpacity key={indexJ} style={styles.celda} onPress={()=> handleCell(indexI, indexJ)}>
                                <Text style={{textAlign: 'center'}}>{celda}</Text>
                              </TouchableOpacity>
                            )
                          })
                        }
                      </View>
                    )
                  })
                }
              </View>

              <View>
                <Text>{partidaActual?.ganador != null ? "Y el ganador es: "+partidaActual.ganador.nombre: " "}</Text>
              </View>
            </View>

            <View style={styles.zonaRegresar}>
              {
                (partidaActual.ganador !== null) &&
                <View style={styles.botonRegresar}>
                  <TouchableOpacity onPress={()=> navigation.navigate('HomeOnline')}>
                    <Text style={{textAlign: 'center'}}>Salir</Text>
                  </TouchableOpacity>
                </View>
              }
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

export default PartidaOnline

const styles = StyleSheet.create({

  zonaPartida:{    
    flex: 2,
    alignItems: 'center',
    //backgroundColor: 'red'
  },

  title:{
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  tablero:{
    justifyContent: 'center',
    alignItems: 'center',

    width: 300,
    height: 300,

    borderWidth: 2,
    borderRadius: 4,
  },

  fila:{
    flexDirection: 'row',
  },

  celda:{
    //backgroundColor: 'blue',
    width: 90,
    height: 90,
    margin: 2,
    borderColor: 'black',
    borderWidth: 2,
  },

  zonaRegresar:{
    flex: 1,
    //backgroundColor: 'red',
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