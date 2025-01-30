import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

type Props = {}

const AlumnosListPrincipal = (props: Props) => {

  const [listaAlumnos, setlistaAlumnos] = useState([])
  const [uri, setUri] = useState<string>("");
  

  useEffect(() => {
    async function getAlumnos(){

    }
  }, [])
  

  return (
    <View>
      <Text>AlumnosListPrincipal</Text>
    </View>
  )
}

export default AlumnosListPrincipal

const styles = StyleSheet.create({})