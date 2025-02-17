import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useAppContext } from '../contexts/AppContext';
import { useJwt } from 'react-jwt';
import HomeOnline from '../screens/online/HomeOnline';
import Logout from '../screens/online/Logout';


type Props = {}

type tokenPlayload ={
    sub: string;
    role: string;
}

const Drawer = createDrawerNavigator();

const DrawerNavPrincipal = (props: Props) => {

    const context = useAppContext();
    const { decodedToken } = useJwt<tokenPlayload>(context.token);

    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            id={undefined}
            screenOptions={{
                drawerStyle: {
                    //backgorundColor: '',
                    // width: 140,
                },
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
            }}
            // drawerContent={(props) => drawerPersonalizadoPr25(props)}
        >
            <Drawer.Screen name="Home" options={{title: "Home"}} component={HomeOnline}/>
            {/* <Drawer.Screen name="Asignatura Operations" options={{title: "Asignaturas"}} component={TabNavAsignatura}/> */}
            {/* {
                (decodedToken?.role == "ROLE_ADMIN") &&
                <>
                <Drawer.Screen name="Matricula Operations" options={{title: "Matriculas"}} component={TabNavMatricula}/>
                <Drawer.Screen name="Usuario Operations" options={{title: "Usuarios"}} component={TabNavUsuario}/>
                </>
            } */}
        </Drawer.Navigator>
    )
}

export default DrawerNavPrincipal


const styles = StyleSheet.create({})