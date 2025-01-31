import { Alert, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../components/AppContextProvider'
import { Producto } from '../src/entity/Producto'
import { ProductoRepository, dataSourcePr34 } from '../src/data/Database'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = {}

type ProductoType = {
  nombre: string,
  precio: number,
  stock: number,
  descontinuado: boolean
}

const CreateProducto = (props: Props) => {

  const [productoActual, setproductoActual] = useState<ProductoType>({nombre: "", precio: 0, stock: 0, descontinuado: false} as Producto);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    async function iniciarDDB(){
      await dataSourcePr34.initialize();
    }
    iniciarDDB();
  }, [])

  /*useEffect(() => {
    async function inicialiceProduct(){    

      //await ProductoRepository.save(productoActual);
      //const newProductoActual = await ProductoRepository.find();
      //setproductoActual(newProductoActual);
    }

    inicialiceProduct();
  }, [clear])*/


  function fillFormData(value: string | number | boolean, field: keyof Producto){
    setproductoActual({...productoActual, [field]: value});
  }

  async function addItem(){

    try {
      await ProductoRepository.save(productoActual as Producto);
      setproductoActual({
        nombre: "",
        precio: 0,
        stock: 0,
        descontinuado: false
      })
    } catch (error) {
      console.error(error); 
    }

    // Alert.alert('Producto creado', 'My Alert Msg', [
    //   {
    //     text: 'Ok',
    //     onPress: ()=>setClear(!clear),
    //     //style: 'cancel',
    //   },
    //   //{text: 'OK', onPress: () => console.log('OK Pressed')},
    // ]);

  }

  return (
    <View>
      <TextInput placeholder='nombre' 
        onChangeText={(texto) => fillFormData(texto, "nombre")} 
        defaultValue={productoActual.nombre}
      />

      <TextInput placeholder='precio' 
        onChangeText={(texto) => fillFormData(parseFloat(texto), "precio")} 
        defaultValue={productoActual.precio.toString()} 
        keyboardType='decimal-pad'/>

      <TextInput placeholder='stock' 
        onChangeText={(texto) => fillFormData(parseInt(texto), "stock")} 
        defaultValue={productoActual.stock.toString()}
        keyboardType='decimal-pad'
      />

      <Switch
          trackColor={{false: '#66d1c9', true: '#d16672'}}
          /*thumbColor={listaNotas[idNota].acabada ? '#66d1c9' : '#d16672'}*/
          onValueChange={()=> fillFormData(!productoActual.descontinuado, "descontinuado")}
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