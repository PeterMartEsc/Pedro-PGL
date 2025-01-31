import { PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions'
import Geolocation, { GeoPosition } from 'react-native-geolocation-service'  
import { Button, Linking, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {}

interface Coords {
    latitude: number;
    longitude: number;
    altitude: number;
    accuracy: number;
    heading: number;
    speed: number;
}

interface LocationData {
    coords: Coords;
    timestamp: number;
}

const HistorialUbicacion = (props: Props) => {
    const [mensaje, setmensaje] = useState("")
    
    async function verPosicion() {
        let ps: PermissionStatus;

        ps = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION); //precisión de gps if(ps != 'granted'){
        console.log(ps);
        //let psnew = ps+'';
        //console.log(ps.toString);

        if (ps != 'granted') {
            //setmensaje(mensaje+"No hay permisos, vamos a solicitar");
            ps = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            console.log(ps);
        }

        /*if (ps === 'blocked') {
            // Si el permiso está bloqueado, redirigimos a la configuración
            console.log("Permiso bloqueado, redirigiendo a configuración...");
            Linking.openSettings();
            setmensaje("El permiso está bloqueado. Ve a la configuración para habilitarlo.");
            return;
        }*/
        
        if(ps == 'granted') {
            //setmensaje(mensaje+"Se han solicitado y garantizado permisos");
            //let datosUbicacion = null;
            Geolocation.getCurrentPosition(info => guardarPosicion(info));

        } else {
            setmensaje(mensaje+"No hay permisos");
            console.log("no hay permisos ");
        }
    }

    async function guardarPosicion (datosUbicacion : GeoPosition){
        try {
            const jsonValue = JSON.stringify(datosUbicacion);
            await AsyncStorage.setItem('my-key', jsonValue);
        } catch (e) {
          // saving error
        }
    };

    return (
        <View style={{flex: 1}}>
            <Text>ViajesScreen</Text>
            
            <Text></Text>
            <Button title="permiso gps" onPress={verPosicion}></Button>
        </View>
    )
}

export default HistorialUbicacion

const styles = StyleSheet.create({})