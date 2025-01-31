import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppContext } from '../components/AppContextProvider';

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
  PokemonList: undefined,
  PokemonShow: {idPokemon : number},
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'PokemonList'>

function PokemonList({navigation, route} : PropsHome){

  //const [pokemonLista, setpokemonLista] = useState<Pokemon[]>([])
  const {listaPokemon, setListaPokemon} = useContext(AppContext);

  const uri : string  = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    async function getPokemonCard(direccion : string){
        let aux = [];

        for(let i = 387; i< 494; i++){
          const response = await axios.get(direccion+i);
          let pokemon = response.data as Pokemon
          aux.push(pokemon);
        }

        setListaPokemon([...aux]);
    }

    getPokemonCard(uri);
  }, [])

  return (
    <View style={{flex: 1, padding: 10}}>
      <FlatList
        data={listaPokemon}
        renderItem={({item, index}) => {

          return(
            <TouchableOpacity onPress={()=> navigation.navigate('PokemonShow', {idPokemon: item.id})}>

              <View style={styles.elementList}>
                <View style={styles.nameList}>
                  <Text>
                      {item.name}
                  </Text>
                </View>

                <View>
                  <Image 
                    source={{uri: item.sprites.front_default}}
                    style={{width: 100, height: 100}}
                  />
                </View>
              </View>

            </TouchableOpacity>
          )
        }}
        keyExtractor={(item, index) => item.name+index}
        
      />
    </View>
  )
}

export default PokemonList

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