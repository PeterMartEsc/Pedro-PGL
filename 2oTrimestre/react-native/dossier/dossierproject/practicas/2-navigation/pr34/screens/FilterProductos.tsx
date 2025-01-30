import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductoRepository } from '../src/data/Database'
import { Producto } from '../src/entity/Producto'

type Props = {}

const FilterProductos = (props: Props) => {
  const [mayorQue, setmayorQue] = useState<number>(0)
  const [menorQue, setmenorQue] = useState<number>(0)
  const [busqueda, setbusqueda] = useState("");
  const [listaProductos, setlistaProductos] = useState<Producto[]>([]);

  useEffect(() => {
    async function loadProductos(){
      const updatedProductos = await ProductoRepository.find();
      setlistaProductos(updatedProductos);
    }
    loadProductos();
  }, [])

  async function filtrer(){
    //const listaNombre = listaProductos.find(where{nombre: busqueda} && elemento.precio <= menorQue && elemento.precio >= mayorQue)
    
    
    //setlistaProductos([listaNombre]);
  }

  return (
    <View style={{flex: 1, padding: 10}}>
      <TextInput placeholder='Buscar producto' onChangeText={(text)=>setbusqueda(text)}/>
      <View>
        <View>
          <TextInput placeholder='Mayor que' onChangeText={(text)=>setmayorQue(parseFloat(text))}/>
        </View>
        <View>
          <TextInput placeholder='Menor que que' onChangeText={(text)=>setmenorQue(parseFloat(text))}/>
        </View>
      </View>

      <View style={{borderWidth: 2, borderRadius: 5, width: 80, margin: 'auto', alignItems: 'center', backgroundColor: 'blue'}}>
        <TouchableOpacity onPress={filtrer}>
          <Text>Filtrar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listaProductos}
        renderItem={({item, index}) => {
          return(
              <View>
                  <Text>
                    Nombre: {item.nombre}
                  </Text>
                  <Text>
                    Precio: {item.precio}
                  </Text>
                  <Text>
                    Stock: {item.stock}
                  </Text>
                  <Text>
                    Descontinuado: {item.descontinuado? 'Si' : 'No'}
                  </Text>
              </View>
          )
        }}
        keyExtractor={(item, index) => item.nombre+index}
        //ListHeaderComponent={()=> <Text>Lista Productos</Text>}
        //ItemSeparatorComponent={()=> <Text>**************************************</Text>}
      />
    </View>
  )
}

export default FilterProductos

const styles = StyleSheet.create({})