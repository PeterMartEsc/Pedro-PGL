import { PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions'
import Geolocation from 'react-native-geolocation-service'  
import { Button, Linking, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}


const ViajesScreen = (props: Props) => {
    const [mensaje, setmensaje] = useState("")
    
    async function verPosicion() {
        let ps: PermissionStatus;

        ps = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION); //precisión de gps if(ps != 'granted'){
        console.log(ps);
        //let psnew = ps+'';
        //console.log(ps.toString);

        if (ps != 'granted') {
            setmensaje(mensaje+"No hay permisos, vamos a solicitar");
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
            setmensaje(mensaje+"Se han solicitado y garantizado permisos");
            Geolocation.getCurrentPosition(info => console.log(info));

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