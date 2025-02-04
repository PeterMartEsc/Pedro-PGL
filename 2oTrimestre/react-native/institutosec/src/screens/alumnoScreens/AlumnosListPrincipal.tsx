import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ipRoute from '../../globals/Globals'
import { useTokenContext } from '../../context/AppContext'
import { useJwt } from 'react-jwt'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = {}

type tokenPlayload ={
  sub: string;
  role: string;
}

export type StackParamList = {
  AlumnosList: undefined,
  AlumnosCreate : undefined,
}

type PropsHome = NativeStackScreenProps<StackParamList, 'AlumnosList'>
const AlumnosListPrincipal = ({navigation, route}:PropsHome) => {

  const [listaAlumnos, setlistaAlumnos] = useState([])
  //const [version, setVersion] = useState<string>("");

  const context = useTokenContext();
  const { decodedToken } = useJwt<tokenPlayload>(context.token);

  useEffect(() => {

    //console.log("pepe");
    async function getAlumnos(){
      const response = await axios.get(`${ipRoute}/api/v2/alumnos`,
      {
        headers: {
          Authorization: `Bearer ${context.token}`,
        },
      }
      );
      //console.log("Data: "+response.data);
      setlistaAlumnos(response.data);
    }

    getAlumnos();
    //console.log("papa" + version)

  }, [])
  

  return (
    <View>
      <FlatList
        data={listaAlumnos}
        renderItem={({item, index}) => {
          return(
            <TouchableOpacity onPress={()=> navigation.navigate('AlumnosCreate'/*, {idPokemon: item.id}*/)}>
              <View /*style={styles.nameList}*/>
                <Text>
                    {item.nombre}
                    {item.apellido}
                </Text>
              </View>
              {/* 
              <Image 
                    source={{uri: item.sprites.front_default}}
                    style={{width: 100, height: 100}}
                  />
              */}
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item, index) => 'alumno '+index}
      />
    </View>
  )
}

export default AlumnosListPrincipal

const styles = StyleSheet.create({})