import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LocalStackParamList } from '../../navigations/Local';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PartidaRepository } from '../../data/Database';
import { useAppContext } from '../../contexts/AppContext';
import Partida from '../../data/entity/Partida';
import Celda from '../../data/entity/Celda';

type Props = {}

type PropsLocal = NativeStackScreenProps<LocalStackParamList, 'Juego'>;

const Juego = ({navigation,route}:PropsLocal) => {
  
  const {idPartidaActual} =  useAppContext();

  const [partidaActual, setPartidaActual] = useState<Partida>();
  const [partidaCargada, setPartidaCargada] = useState<boolean>(false);
  const [arrayCeldas, setArrayCeldas] = useState<Celda[][]>([]);

  //Permitir jugadas
  const [jugadorActual, setjugadorActual] = useState("X");
  const [celdaActual, setceldaActual] = useState<Celda>();
  const [ganador, setganador] = useState<string>("");


  useEffect(() => {
    const id = idPartidaActual;
    console.log(" idPartida actual: "+idPartidaActual);

    //Fuerza a esperar a que se setee el idPartidaActual
    if (id === null) {
      console.log("ID de la partida no disponible");
      return;
    }

    async function cargarPartidaPorId(){
      const partidaById = await PartidaRepository.findOne({where: {id}});
      //Guarda el objeto partida buscado
      setPartidaActual(partidaById);
      //Genera el array de casillas a partir del contenido de objeto partida
      generarPartida(partidaById);
      //Marca la partida como cargada
      setPartidaCargada(true);
      console.log("cargada partida : " + JSON.stringify(partidaById));
    }

    cargarPartidaPorId();
  }, [])

  function generarPartida(partida : Partida){
    //console.log("está aqui "+JSON.stringify(partida.contenido));
    let idSetear = 1;
    let celdas : Celda[][] = [];

    try{
      celdas = JSON.parse(partida.contenido);
      for(let fila = 0; fila<3; fila++){
        for(let celda = 0; celda<3; celda++){
          //console.log(" heeey "+celdas[fila][celda].id)
          let celdaNueva = new Celda();
          celdaNueva.id = idSetear;
          celdaNueva.valor = " ";
          idSetear++;
          celdas[fila][celda] = celdaNueva;
          console.log("heeey "+JSON.stringify(celdas[fila][celda].id)+ fila,celda);
        }
      }
    } catch(err){
      console.log("ha habido un error" + err);
    }

    console.log(partida.terminada);
    setArrayCeldas(celdas);
  }

  //Cuando el jugador pulsa la casilla, se ejcuta la funcion.
  function handleCell(fila : number, columna: number){

    let celda = arrayCeldas[fila][columna];
    setceldaActual(celda);

    if(celda.valor != " " || partidaActual.terminada){
      return;
    }

    celda.valor = "X";

    //Se reestructura el array para que se actualice su valor
    arrayCeldas[fila][columna] = celda;
    setArrayCeldas([...arrayCeldas]);
    comprobar(arrayCeldas);
    setjugadorActual(jugadorActual === "X" ? "0" : "X");
  }

  //Al cambiar de jugador, si es el turno de la máquina, juega
  useEffect(() => {
    if(jugadorActual == "0" && !partidaActual.terminada){

      let terminado = false;

      const celdasVacías = arrayCeldas.flat().filter(celda => celda.valor === " ");
      if (celdasVacías.length === 0) {
          return; // No hay celdas vacías, no puede jugar
      }

      while(!terminado){
        let randomX = Math.floor(Math.random()*3);
        let randomY = Math.floor(Math.random()*3);
        let celdaMaquina = arrayCeldas[randomX][randomY];
        console.log(" intenta en " +randomX + ", " +randomY);
        if(celdaMaquina.valor == " "){
          celdaMaquina.valor = "O";
          arrayCeldas[randomX][randomY] = celdaMaquina;
          setArrayCeldas([...arrayCeldas]);
          comprobar(arrayCeldas);
          terminado = true;
        }
      }
    }
    setjugadorActual("X");
  }, [jugadorActual])


  function comprobar(arrayComprobar: Celda[][]){
    if(partidaCargada && arrayCeldas.length > 0){

      if(!partidaActual.terminada && hayGanador(arrayComprobar)){
        setganador(jugadorActual === "X" ? "Has ganado" : "Ha ganado la máquina");
        partidaActual.terminada = true;
        setPartidaActual(partidaActual);
        console.log("gana: " + jugadorActual);
      }

      console.log("no hay ganador. Turno de " );
    }

  }
  

  function hayGanador(arrayComprobar: Celda[][]) : boolean{

         // Revisa las filas y columnas
    for (let i = 0; i < 3; i++) {
      if (arrayComprobar[i][0].valor !== " " && arrayComprobar[i][0].valor === arrayComprobar[i][1].valor && arrayComprobar[i][1].valor === arrayComprobar[i][2].valor) {
          return true;
      }
      if (arrayComprobar[0][i].valor !== " " && arrayComprobar[0][i].valor === arrayComprobar[1][i].valor && arrayComprobar[1][i].valor === arrayComprobar[2][i].valor) {
          return true;
      }
    }

    // Revisa las diagonales
    if (arrayComprobar[0][0].valor !== " " && arrayComprobar[0][0].valor === arrayComprobar[1][1].valor && arrayComprobar[1][1].valor === arrayComprobar[2][2].valor) {
        return true;
    }
    if (arrayComprobar[0][2].valor !== " " && arrayComprobar[0][2].valor === arrayComprobar[1][1].valor && arrayComprobar[1][1].valor === arrayComprobar[2][0].valor) {
        return true;
    }

    return false;
  }


  /*function comprobarLineas() : boolean{

        let contadorX = 0;
        let contadorY = 0;

        for(let x = 0; x< 3; x++){
            for(let j = 0 ; j<3; j++){
                if(arrayCeldas[x][j].valor == jugadorActual || arrayCeldas[x][j].valor == jugadorActual ){
                    contadorX++;
                } else if (arrayCeldas[j][x].valor == jugadorActual || arrayCeldas[j][x].valor == jugadorActual){
                    contadorY++;
                }
            }
            if(contadorX == 3|| contadorY == 3){
                return true;
            }

            contadorX = 0;
            contadorY = 0;
        }
        return false;

  }


  function comprobarDiagonales() : boolean{
    let diagonalIzq = 0;
    let diagonalDer = 0;

    for(let x = 0; x< 3; x++){
        if(arrayCeldas[x][x].valor == jugadorActual){
            diagonalIzq++;
        }
        if(arrayCeldas[x][2-x].valor == jugadorActual){
            diagonalDer++;
        }

    }
    if(diagonalIzq == 3|| diagonalDer == 3){
        return true;
    }

    return false;
  }*/

  async function guardarPartida(){
    partidaActual.contenido = JSON.stringify(arrayCeldas); // Guardar el tablero actualizado
    await PartidaRepository.save(partidaActual); // Guardar la partida en la base de datos
    navigation.navigate('Home');
  }

  return (
    <>
      {
        partidaCargada ? 
        (
          <View style={{flex: 1}}>
            <View style={styles.zonaPartida}>
              <View style={styles.title}>
                <Text style={{textAlign: 'center', marginBottom: 10}}>Juego</Text>
              </View>

              <View style={styles.tablero}>
                {
                  arrayCeldas.map((fila, indexI) => {
                    return (
                      <View key={indexI} style={styles.fila}>
                        {
                          fila.map((celda, indexJ) => {
                            return (
                              <TouchableOpacity key={indexJ} style={styles.celda} /*onPress={()=> console.log(celda.id)}*/ onPress={()=> handleCell(indexI, indexJ)}>
                                <Text style={{textAlign: 'center'}}>{celda.valor.toString()}</Text>
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
                <Text>{ganador}</Text>
              </View>
            </View>

            <View style={styles.zonaRegresar}>
              <View style={styles.botonRegresar}>
                  <TouchableOpacity onPress={guardarPartida}>
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

  zonaPartida:{    
    flex: 2,
    alignItems: 'center',
    //backgroundColor: 'red'
  },

  title:{
    marginTop: 5,
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