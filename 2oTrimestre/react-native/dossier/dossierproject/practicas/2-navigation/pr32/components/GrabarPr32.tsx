import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Persona from '../src/entity/Persona'
import { PersonaRepository } from '../src/data/Database'

type Props = {}

const GrabarPr32 = (props: Props) => {
    const [personas, setpersonas] = useState<Persona[]>([])

    async function grabar() {
        const array = ["Ana", "Martino", "Rebeca"];
        let neopersonas = [];
        for (let i = 0; i < array.length; i++) {
            const randomPositionArray = Math.floor(array.length*Math.random());
            const nombre = array[randomPositionArray];
            const edad = Math.round(Math.random() *100) +1;
            const persona = {
                nombre: nombre,
                edad: edad
            }
            neopersonas.push(persona);
        }
        await PersonaRepository.save(neopersonas);
        const newpersonas = await PersonaRepository.find();
        setpersonas(newpersonas);
    }

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={personas}
                renderItem={
                    (p) =><Text>{p.item.id+" "+p.item.nombre}</Text>
                }
                keyExtractor={(it, index) => ""+index}
            />
            <Button title='crear personas' onPress={grabar}/>
        </View>
    )
}

export default GrabarPr32

const styles = StyleSheet.create({})