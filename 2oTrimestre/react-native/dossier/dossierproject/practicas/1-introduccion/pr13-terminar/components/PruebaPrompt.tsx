import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import prompt from 'react-native-prompt-android'

type Props = {}

const PruebaPrompt = (props: Props) => {
    return (
        <View>
            <Button title="cambiar color" onPress={() =>
                prompt(
                    'Aquí titulo',
                    'Descripción',
                    [
                        {text: 'Cancel', onPress: ()=> console.log('se ha cancela')},
                        {text: 'Ok'}
                    ]
                )
            }/>
        </View>
    )
}

export default PruebaPrompt

const styles = StyleSheet.create({})