import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import axios from 'axios';
import { FlatList, TextInput } from 'react-native-gesture-handler';

type Props = {}

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
    
    back_default: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    other: {
      official_artwork: {
        front_default: string;
      }
    }
  }
}

type PrincipalStackParamList = {
  PokemonSearch: undefined,
  PokemonShow: {idPokemon: number},
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'PokemonSearch'>

function PokemonSearch({navigation, route} : PropsHome){
  const [pokemonLista, setpokemonLista] = useState<Pokemon[]>([])
  const [busqueda, setbusqueda] = useState<Pokemon[]>([])

  const uri : string  = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    async function getPokemonCard(direccion : string){
        let aux = [];

        for(let i = 387; i< 494; i++){
          const response = await axios.get(direccion+i);
          let pokemon = response.data as Pokemon
          aux.push(pokemon);
        }
        console.log(aux.length);

        setpokemonLista([...aux]);
    }

    getPokemonCard(uri);
  }, [])

  function buscarPokemon(texto : string){
    let aux = [];

    for(let i = 0; i < pokemonLista.length; i++) {
        if((pokemonLista[i].name.toLowerCase()).includes(texto.toLowerCase())){
            aux.push(pokemonLista[i]);
        }
    }

    setbusqueda([...aux]);
  }

  return (
    <View style={{flex: 1, padding: 10}}>
      <View>
        <TextInput placeholder='Buscar pokemon' onChangeText={(texto)=>buscarPokemon(texto)}/>
      </View>
      <View>
        <FlatList
          data={busqueda.length == 0 ? [] : busqueda}
          renderItem={({item, index}) => {
            return(
              <TouchableOpacity onPress={()=> navigation.navigate('PokemonShow', {idPokemon: item.id})}>
                <View style={styles.elementList}>
                  <View>
                    <Image 
                      source={{uri: item.sprites.front_default}} 
                      style={{width: 100, height: 100}}
                    />
                  </View>

                  <View>
                    <Text>
                        {item.name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => item.name+index}
        />
      </View>
    </View>
  )
}

export default PokemonSearch

const styles = StyleSheet.create({
  elementList:{
    borderColor: '#a8adaa',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#a8adaa',

    alignSelf: 'center',
    alignItems: 'center',

    width: 250,
    height: 120,

    marginBottom: 10,
  },
  nameList:{

  },
  imageList:{

  }
})