import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import axios from 'axios'

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    back_default: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;

    front_default: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;

    other: {
      "official-artwork": {
        front_default: string;
      }
    }
  }
  types:{
    0:{
      type:{
        name: string;
      }
    }
  }
}

type PrincipalStackParamList = {
  PokemonShow: {idPokemon: number},
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'PokemonShow'>

function PokemonShow({navigation, route} : PropsHome){

  const {idPokemon} = route.params;
  const [pokemon, setpokemon] = useState<Pokemon>()
  const [spritesCargados, setspritesCargados] = useState<string[]>([])
  const uri : string  = "https://pokeapi.co/api/v2/pokemon/"+idPokemon;

  useEffect(() => {
    async function getPokemonCard(direccion : string){
      const response = await axios.get(direccion);
      let pokemon = response.data as Pokemon
      let spritesCargar = Object.values(pokemon.sprites).filter( (sprite) => typeof sprite === 'string');
      setpokemon(pokemon);
      setspritesCargados(spritesCargar);
    }

  getPokemonCard(uri);
  }, [])
  

  return (
    <View style={{flex: 1}}>
      <View style={styles.principalImage}>
        <Image 
          source={{uri: pokemon?.sprites.other["official-artwork"].front_default}}
          style={{width: 200, height: 200}}
        />
      </View>

      <View style={styles.info}>
        <Text>Name: {pokemon?.name}</Text>

        <Text>Type: {pokemon?.types[0].type.name}</Text>
      </View>

      <FlatList
        style={styles.sprites}
        data={spritesCargados}
        renderItem={({item, index}) => {
          return(
              <View>
                <Image source={{uri: item}} style={{width: 100, height: 100}}/> 
              </View>
          )
        }}
        keyExtractor={(item, index) => `sprite-${index}`}
        horizontal={true}
      />
    </View>
  )
}

export default PokemonShow

const styles = StyleSheet.create({
  principalImage:{
    borderColor: '#2fbd89',
    borderWidth: 3,
    borderRadius: 200,

    alignSelf: 'center',
    padding: 5,
    marginTop: 10,
  },
  
  info:{
    alignSelf: 'center',

    marginTop: 10,

    //flexDirection: 'row'
  },

  sprites:{
    
  }
})