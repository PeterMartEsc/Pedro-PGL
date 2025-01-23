import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Switch, TextInput } from 'react-native-gesture-handler'
import { AppContext } from '../components/AppContextProvider'
import { Producto } from '../src/entity/Producto'
import { ProductoRepository } from '../src/data/Database'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = {}

type PrincipalStackParamList = {
  CreateProducto: undefined,
  FilterProductos: undefined,
}

type PropsCreateProducto = NativeStackScreenProps<PrincipalStackParamList, 'CreateProducto'>

const CreateProducto = ({navigation, route}: PropsCreateProducto) => {

  const {listaProductos, setListaProductos} = useContext(AppContext);
  const [contadorIds, setcontadorIds] = useState(0);
  const [productoActual, setproductoActual] = useState<Producto>();

  useEffect(() => {
    async function inicialiceProduct(){
      let newId : number = contadorIds+1;
      let aux = [];

      const producto = {
          id: newId,
          nombre: "",
          precio: 0,
          stock: 0,
          descontinuado: false
      }
    
      aux.push(producto);
      await ProductoRepository.save(aux);

      const updatedProductos = await ProductoRepository.find();

      setListaProductos([...updatedProductos]);
      setcontadorIds(newId);

      //Establece el producto actual
      const newProductoActual = updatedProductos.find((element) => element.id === newId);  
      setproductoActual(newProductoActual);
    }

    inicialiceProduct();
  }, [])


  function fillFormData(value: string | number, field: keyof Producto){

    const updatedProductos = listaProductos.map( (producto) => {
      if (producto.id === productoActual.id) {
        const updatedProducto = Producto.create({ ...producto, [field]: value }); 
        // Guarda cambios en la base de datos
        updatedProducto.save();
        return updatedProducto;
      }
      return producto;
    })

    setListaProductos(updatedProductos);
  }

  function addItem(){
    navigation.navigate('FilterProductos');
  }

  return (
    <View>
      <TextInput placeholder='nombre' 
        onChangeText={(texto) => fillFormData(texto, "nombre")} 
        defaultValue={productoActual.nombre}
      />

      <TextInput placeholder='precio' 
        onChangeText={(texto) => fillFormData(texto, "precio")} 
        defaultValue={productoActual.precio.toString()} 
        keyboardType='decimal-pad'/>

      <TextInput placeholder='stock' 
        onChangeText={(texto) => fillFormData(texto, "stock")} 
        defaultValue={productoActual.stock.toString()}
        keyboardType='decimal-pad'
      />

      <Switch
          trackColor={{false: '#66d1c9', true: '#d16672'}}
          /*thumbColor={listaNotas[idNota].acabada ? '#66d1c9' : '#d16672'}
          onValueChange={alternarAcabada}*/
          value={productoActual.descontinuado}
      />

      <View style={{backgroundColor: 'blue', height: 30, width: 200, justifyContent: 'center', margin: 'auto', borderRadius: 5}}>
          <TouchableOpacity onPress={()=>{addItem()}}>
              <Text>Crear Producto</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreateProducto

const styles = StyleSheet.create({})