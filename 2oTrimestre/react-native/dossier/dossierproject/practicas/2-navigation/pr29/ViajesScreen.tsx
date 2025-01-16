import { PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions'
import Geolocation from 'react-native-geolocation-service'
import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}


const ViajesScreen = (props: Props) => {
    const [mensaje, setmensaje] = useState("")
    
    async function verPosicion() {
        let ps: PermissionStatus;

        ps = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION); //precisión de gps if(ps != 'granted'){

        if (ps != 'granted') {
            ps = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            setmensaje(mensaje+"No hay permisos, vamos a solicitar");
        }
        
        if(ps == 'granted') {
            Geolocation.getCurrentPosition(info => console.log(info));
            setmensaje(mensaje+"Se han solicitado y garantizado permisos");
        } else {
            setmensaje(mensaje+"No hay permisos");
            console.log("no hay permisos ");
        }
    }

    return (
        <View style={{flex: 1}}>
            <Text>ViajesScreen</Text>
            <Text>{mensaje}</Text>
            <Button title="permiso gps" onPress={verPosicion}></Button>
        </View>
    )
}

export default ViajesScreen

const styles = StyleSheet.create({})