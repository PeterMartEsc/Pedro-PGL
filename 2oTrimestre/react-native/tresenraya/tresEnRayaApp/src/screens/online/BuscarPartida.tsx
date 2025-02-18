import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ip from '../../utilities/Globals'
import { useAppContext } from '../../contexts/AppContext'
import { useJwt } from 'react-jwt'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
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
    jugador1: JugadorOnline | null;
    jugador2: JugadorOnline | null;
    contenido: string;
    turno: JugadorOnline | null;
    ganador: JugadorOnline | null;
}

type PropsOnline = NativeStackScreenProps<OnlineStackParamList, 'BuscarPartida'>;

const BuscarPartida = ({navigation,route}: PropsOnline) => {

    const context = useAppContext();
    const {idPartidaActual} =  useAppContext();
    const { decodedToken } = useJwt<tokenPlayload>(context.token);

    const [partidasCargadas, setpartidasCargadas] = useState<PartidaOnline[]>([]);

    useEffect(() => {
        async function cargarPartidas(){
            
            
            let response = await axios.get(`${ip}/api/v2/partidas`,
                {
                    headers: {
                        'Authorization': `Bearer ${context.token}`, // Token JWT
                        'Content-Type': 'application/json', // Tipo de contenido
                    }
                }
            );
            //console.log("EEEEY");
            const partidas : PartidaOnline[] = response.data;
    
            const partidasFiltradas = partidas.filter(partida =>
                //Si el ganador no es nulo (no se ha acabado) y el jugador 2 está libre
                (partida.ganador == null && partida.jugador2 == null) ||
                //Además comprueba si el usuario creador es el creador, por si se ha salido o algo 
                (partida.ganador == null && partida.jugador1?.nombre === decodedToken?.sub)
            );

            setpartidasCargadas(partidasFiltradas);
            
        }

        cargarPartidas();
    }, [])
    
    function cargarPartidaExistente(id : number){
        context.saveIdPartida(id);
        navigation.navigate('PartidaOnline');
    }

    return (
        <View style={{flex: 1}}>

            <View style={styles.partidas}>
    
                <View style={{margin: 20, marginBottom: 50}}>
                    <Text>Partidas disponibles:</Text>
                </View>
        
                <FlatList 
                    data={partidasCargadas}
                    renderItem={({ item, index }) => {
                        return (
                        <View style={styles.partidaLista}>
                            <TouchableOpacity onPress={()=> cargarPartidaExistente(item.id)}>
                                <Text>
                                    {item.id + " Creada por " + item.jugador1.nombre}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        )
                    }}
                    keyExtractor={(item, index) => 'partida ' + index}
                />
            </View>
        </View>
    )
}

export default BuscarPartida

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
        borderRadius: 5,
        padding: 10,
        
        marginBottom: 10,
    }
})