import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const PruebaSwitch = (props: Props) => {

    const [activo, setActivo] = useState(false)

    return (
        <View style={{borderWidth:0, borderBlockColor:"red"}}>
            <Text>Ejemplo Switch</Text>
            <Switch
                trackColor={{false: "brown", true: "orange"}}
                //thumbColor={ activo ? "pink" : "green"}
                onValueChange={() => setActivo(!activo)}
                value={activo}
            />
        </View>
    )
}

export default PruebaSwitch

const styles = StyleSheet.create({})