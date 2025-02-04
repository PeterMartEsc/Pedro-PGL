import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import TabNavAlumno from '../tab/TabNavAlumno';
import TabNavAsignatura from '../tab/TabNavAsignatura';
import TabNavMatricula from '../tab/TabNavMatricula';
import TabNavUsuario from '../tab/TabNavUsuario';
import Login from '../../screens/Auth/Login';
import Register from '../../screens/Auth/Register';
import AppContext, { useTokenContext } from '../../context/AppContext';
import { useJwt } from 'react-jwt';
import AlumnosListPrincipal from '../../screens/alumnoScreens/AlumnosListPrincipal';
import Logout from '../../Logout';


type Props = {}

type tokenPlayload ={
    sub: string;
    role: string;
}

const Drawer = createDrawerNavigator();

const DrawerNavPrincipal = (props: Props) => {

    const context = useTokenContext();
    const { decodedToken } = useJwt<tokenPlayload>(context.token);

    const dimensions = useWindowDimensions();

    /*useEffect(() => {
        console.log("context token: "+context.token)
        if(decodedToken == null){
            console.log("decoded token es nulo")
        }
    }, [])*/

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
            <Drawer.Screen name="Alumno Operations" options={{title: "Alumnos"}} component={AlumnosListPrincipal}/>
            <Drawer.Screen name="Asignatura Operations" options={{title: "Asignaturas"}} component={TabNavAsignatura}/>
            {
                (decodedToken?.role == "ROLE_ADMIN") &&
                <>
                <Drawer.Screen name="Matricula Operations" options={{title: "Matriculas"}} component={TabNavMatricula}/>
                <Drawer.Screen name="Usuario Operations" options={{title: "Usuarios"}} component={TabNavUsuario}/>
                </>
            }
            <Drawer.Screen name="Logout" options={{title: "Logout"}} component={Logout}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavPrincipal

// function drawerPersonalizadoPr25 (props: DrawerContentComponentProps) {

//     const context  =  useTokenContext();
//     const {removeToken} = useTokenContext();


//     return (
//         <DrawerContentScrollView>
//             <View>{/* en este view ponemos libremente*/}
//                 <Text>Instituto Securizado</Text>
//             </View>
//             <View style={{ flexDirection: 'row'}}>
//                 <DrawerItem style={{flex: 1}}
//                 label="Login"
//                 onPress={()=> props.navigation.navigate('Login')}
//                 />
//                 <DrawerItem style={{flex: 1}}
//                 label="Register"
//                 onPress={()=> props.navigation.navigate('Register')}
//                 />
//             </View>
//             <DrawerItem
//             // icon = {<Icon name='miIcono'>}
//             label="Alumnos"
//             onPress={()=> props.navigation.navigate('Alumno Operations')}
//             />
//             <DrawerItem
//             label="Asignaturas"
//             onPress={()=> props.navigation.navigate('Asignatura Operations')}
//             />
//             <DrawerItem
//             label="Matriculas"
//             onPress={()=> props.navigation.navigate('Matricula Operations')}
//             />
//             <DrawerItem
//             label="Usuarios"
//             onPress={()=> props.navigation.navigate('Usuario Operations')}
//             />
//             {   
//                 context.token == "" ?
//                 <View/>:
//                 <DrawerItem
//                 label="Logout"
//                 onPress={()=> removeToken}
//                 />
//             }
//         </DrawerContentScrollView>
//     )
// }

const styles = StyleSheet.create({})