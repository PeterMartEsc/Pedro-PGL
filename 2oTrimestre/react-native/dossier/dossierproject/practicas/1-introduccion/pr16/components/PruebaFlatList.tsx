import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const PruebaFlatList = (props: Props) => {

    type Productos = {nombre: string, precio: string, stock: string}

    const array : Productos[] = [
        {nombre: "papas", precio: "3.09", stock: "30"},
        {nombre: "manzanas", precio: "2.77", stock: "50"},
        {nombre: "platanos", precio: "2.77", stock: "40"},
        {nombre: "pan", precio: "1.97", stock: "60"},
        {nombre: "pescado", precio: "10.99", stock: "30"}
    ]

    return (
        <View style={{flex:1}}>
            <FlatList
                data={array}
                renderItem={({item, index}) => {
                    return(
                        <View style={index%2 == 0 ? styles.pares : styles.impares}>
                            <Text>Producto: {item.nombre}</Text>
                            <Text>Precio: {item.precio}</Text>
                            <Text>Stock: {item.stock}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => item.nombre + index}
                ListHeaderComponent={()=> <Text>Lista Productos</Text>}
                ItemSeparatorComponent={()=> <Text>**************************************</Text>}
            />
        </View>
    )
}

export default PruebaFlatList

const styles = StyleSheet.create({
    pares: {
        borderWidth: 2, 
        margin: 2, 
        borderRadius: 10,
        backgroundColor: "red",
    },

    impares: {
        borderWidth: 2, 
        margin: 2, 
        borderRadius: 10,
        backgroundColor: "green",
    }
})