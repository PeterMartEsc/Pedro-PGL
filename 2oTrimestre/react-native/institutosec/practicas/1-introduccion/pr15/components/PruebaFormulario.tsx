import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}

type FormData = {
    jubilado : boolean,
    casado : boolean,
    edad : number,
    nombre : string
}

const PruebaFormulario = (props: Props) => {

    const [formdata, setformdata] = useState<FormData>({} as FormData);

    function fillFormData(value : boolean | number | string, field: keyof FormData){
        setformdata(
            {
                ...formdata,
                [field] : value
            }
        );
    }

    return (
        <View>
            <Switch
                onValueChange={()=> fillFormData(!formdata.jubilado, "jubilado")}
                value={formdata.jubilado}
            />
            <Switch
                onValueChange={()=> fillFormData(!formdata.casado, "casado")}
                value={formdata.casado}
            />
            <TextInput placeholder='nombre' onChangeText={(texto) => fillFormData(texto, "nombre")}/>
            <TextInput placeholder='edad' onChangeText={(texto) => fillFormData(parseInt(texto), "edad")}/>
            <Text>
                {JSON.stringify(formdata)}
            </Text>
        </View>
    )
}

export default PruebaFormulario

const styles = StyleSheet.create({})