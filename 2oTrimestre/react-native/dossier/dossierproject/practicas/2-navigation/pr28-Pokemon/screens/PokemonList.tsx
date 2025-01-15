import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pokemon from '../models/Pokemon'

type Props = {}

/*
interface Pokemon {
  name: string;
  sprites: Images[];
}

interface Images {
  front_default: string;
}
*/
const PokemonList = (props: Props) => {

  const [pokemonLista, setpokemonLista] = useState<Pokemon[]>([])

  const uri : string  = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    async function getPokemonCard(direccion : string){
        let aux = pokemonLista;

        for(let i = 1; i< 131; i++){
          const response = await axios.get(direccion+i);
          let nombre = response.data.name as string;
          let image = response.data.sprites[i].front_default as string;
          const pokemon = {
            id: i,
            nombre: nombre,
            image: image,
          }

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
            <View>
                {/*<Image source={require(item.sprites[index].front_default)}/>*/}
                <Text>
                    {item.name}
                </Text>
            </View>
          )
        }}
        keyExtractor={(item, index) => item.name + index}
        ListHeaderComponent={()=> <Text></Text>}
        ItemSeparatorComponent={()=> <Text></Text>}
      />
    </View>
  )
}

export default PokemonList

const styles = StyleSheet.create({})