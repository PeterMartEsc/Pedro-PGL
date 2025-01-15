import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = {}

interface Pokemon {
  name: string;
  //sprites: Images[];
}
/*
interface Images {
  front_default: string;
}*/

type PrincipalStackParamList = {
  PokemonList: undefined,
  PokemonSearch: undefined,
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'PokemonList'>

function PokemonList({navigation, route} : PropsHome){

  const [pokemonLista, setpokemonLista] = useState<Pokemon[]>([])

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

  return (
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
        //ListHeaderComponent={()=> <Text></Text>}
        //ItemSeparatorComponent={()=> <Text></Text>}
      />
    </View>
  )
}

export default PokemonList

const styles = StyleSheet.create({})