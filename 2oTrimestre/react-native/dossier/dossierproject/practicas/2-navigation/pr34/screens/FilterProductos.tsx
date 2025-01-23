import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductoRepository } from '../src/data/Database'
import { Producto } from '../src/entity/Producto'

type Props = {}

const FilterProductos = (props: Props) => {

  const [listaProductos, setlistaProductos] = useState<Producto[]>([])

  useEffect(() => {
    async function loadProductos(){
      const updatedProductos = await ProductoRepository.find();
      setlistaProductos(updatedProductos);
    }
    loadProductos();
  }, [])
  

  return (
    <View style={{flex: 1, padding: 10}}>
      <FlatList
        data={listaProductos}
        renderItem={({item, index}) => {
          return(
              <View>
                  <Text>
                      {item.nombre}
                      {item.precio}
                      {item.stock}
                      {item.descontinuado}
                  </Text>
              </View>
          )
        }}
        keyExtractor={(item, index) => item.nombre+index}
      />
    </View>
  )
}

export default FilterProductos

const styles = StyleSheet.create({})