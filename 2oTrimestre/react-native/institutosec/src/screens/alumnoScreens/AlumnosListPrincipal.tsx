import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ipRoute from '../../globals/Globals'
import { useTokenContext } from '../../context/AppContext'
import { useJwt } from 'react-jwt'

type Props = {}

type tokenPlayload ={
  sub: string;
  rol: string;
}


const AlumnosListPrincipal = (props: Props) => {

  const [listaAlumnos, setlistaAlumnos] = useState([])
  const [uri, setUri] = useState<string>("");
  
  const context = useTokenContext();
  const { decodedToken } = useJwt<tokenPlayload>(context.token);

  useEffect(() => {
    async function getAlumnos(){

      const response = await axios.get(`${ipRoute}/api/v2/alumnos/`);

      if(response.status === 200){

        if(response.data == null){
          Alert.alert('Necesita iniciar sesion', 
            'No está logueado, inicie sesión o regístrese', 
            [
              {
                text: 'Register',
                onPress: () => console.log('register presed'),
                //navigation.navigate('Register')
                style: 'cancel',
              },
              {
                text: 'Login', 
                onPress: () => console.log('login pressed')
                //style: 'defaul',
              },
            ]);
        } else {
          setlistaAlumnos(response.data);
          setUri("v2");
        }

      }
    }
  }, [])
  

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