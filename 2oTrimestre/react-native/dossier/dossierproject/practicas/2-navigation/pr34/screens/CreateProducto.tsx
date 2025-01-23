import { Alert, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '../components/AppContextProvider'
import { Producto } from '../src/entity/Producto'
import { ProductoRepository } from '../src/data/Database'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = {}


const CreateProducto = (props: Props) => {

  const [productoActual, setproductoActual] = useState<Producto>( { nombre: "", precio: 0, stock: 0, descontinuado: false} as Producto);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    async function inicialiceProduct(){
      //let newId : number = contadorIds+1;
      let aux = [];

      const producto = {
        nombre: "",
        precio: 0,
        stock: 0,
        descontinuado: false
      }
    
      aux.push(producto);
      await ProductoRepository.save(aux);

      const updatedProductos = await ProductoRepository.find();
      const newProductoActual = updatedProductos.find((element) => element.id === newId);  
      setproductoActual(newProductoActual);
    }

    inicialiceProduct();
  }, [clear])


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
    //console.log(listaProductos)
    setListaProductos(updatedProductos);
  }

  function addItem(){
    Alert.alert('Producto creado', 'My Alert Msg', [
      {
        text: 'Ok',
        onPress: ()=>setClear(!clear),
        //style: 'cancel',
      },
      //{text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
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