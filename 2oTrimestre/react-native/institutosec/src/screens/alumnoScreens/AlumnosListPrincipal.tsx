import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ipRoute from '../../globals/Globals'
import { useTokenContext } from '../../context/AppContext'
import { useJwt } from 'react-jwt'

type Props = {}

type tokenPlayload ={
  sub: string;
  role: string;
}


const AlumnosListPrincipal = (props: Props) => {

  const [listaAlumnos, setlistaAlumnos] = useState([])
  const [version, setVersion] = useState<string>("");
  
  const context = useTokenContext();
  const { decodedToken } = useJwt<tokenPlayload>(context.token);

  useEffect(() => {
    //console.log(decodedToken.role);
    setVersion(decodedToken?.role == "ROLE_ADMIN" ? "v3" : "v2")
  }, [])
  

  useEffect(() => {
    if(version != ""){
      async function getAlumnos(){

        const response = await axios.get(`${ipRoute}/api/${version}/alumnos/`);
        setlistaAlumnos(response.data);

      }
    }
  }, [version])
  

  return (
    <View>
      <View>
        <Text>Hola</Text>
      </View>
      <FlatList
        data={listaAlumnos}
        renderItem={({item, index}) => {

          return(
            <TouchableOpacity /*onPress={()=> navigation.navigate('PokemonShow', {idPokemon: item.id})}*/>
              <View /*style={styles.nameList}*/>
                <Text>
                    {item.nombre}
                    {item.password}
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
        keyExtractor={(item, index) => item.name+index}
      />
    </View>
  )
}

export default AlumnosListPrincipal

const styles = StyleSheet.create({})