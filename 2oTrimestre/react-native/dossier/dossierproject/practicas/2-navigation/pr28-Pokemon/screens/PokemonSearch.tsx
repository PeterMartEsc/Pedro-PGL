import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import axios from 'axios';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';

type Props = {}

interface Pokemon {
  name: string;
  //sprites: Images[];
}

type PrincipalStackParamList = {
  PokemonList: undefined,
  PokemonSearch: undefined,
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'PokemonSearch'>

function PokemonSearch({navigation, route} : PropsHome){
  const [pokemonLista, setpokemonLista] = useState<Pokemon[]>([])
  const [busqueda, setbusqueda] = useState<Pokemon[]>([])

  const uri : string  = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    async function getPokemonCard(direccion : string){
        let aux = pokemonLista;

        for(let i = 1; i< 10; i++){
          const response = await axios.get(direccion+i);
          let pokemon = response.data as Pokemon
          aux.push(pokemon);
        }

        setpokemonLista([...aux]);
    }

    getPokemonCard(uri);
  }, [])

  function buscarPokemon(texto : string){
    let aux = pokemonLista.filter(pokemon => pokemon.name.toLowerCase().includes(texto.toLowerCase()))
    setbusqueda([...aux]);
  }

  return (
    <View>
      <View>
        <TextInput placeholder='Buscar pokemon' onChangeText={(texto)=>buscarPokemon(texto)}/>
      </View>
      <View>
        <FlatList
          data={pokemonLista}
          renderItem={({item, index}) => {
            return(
              <TouchableOpacity onPress={()=> navigation.navigate('PokemonSearch')}>
                <View>
                  <Image 
                    source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}}
                    style={{width: 100, height: 100}}
                  />
                  <View>
                    <Text>
                        {item.name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => item.name+'-'+index}
        />
      </View>
    </View>
  )
}

export default PokemonSearch

const styles = StyleSheet.create({})