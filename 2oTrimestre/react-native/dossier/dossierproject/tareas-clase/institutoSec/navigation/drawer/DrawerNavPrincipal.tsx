import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import TabNavAlumno from '../tab/TabNavAlumno';
import TabNavAsignatura from '../tab/TabNavAsignatura';
import TabNavMatricula from '../tab/TabNavMatricula';
import TabNavUsuario from '../tab/TabNavUsuario';
import Login from '../../screens/Login';
import Register from '../../screens/Register';


type Props = {}

const Drawer = createDrawerNavigator();

const PrincilaScreenNavigator = (props: Props) => {

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
            drawerContent={(props) => drawerPersonalizadoPr25(props)}
        >
            <Drawer.Screen name="Alumno Operations" options={{title: "Alumnos"}} component={TabNavAlumno}/>
            <Drawer.Screen name="Asignatura Operations" options={{title: "Asignaturas"}} component={TabNavAsignatura}/>
            <Drawer.Screen name="Matricula Operations" options={{title: "Matriculas"}} component={TabNavMatricula}/>
            <Drawer.Screen name="Usuario Operations" options={{title: "Usuarios"}} component={TabNavUsuario}/>
            <Drawer.Screen name="Login" options={{title: "Login"}} component={Login}/>
            <Drawer.Screen name="Register" options={{title: "Register"}} component={Register}/>
        </Drawer.Navigator>
    )
}

export default PrincilaScreenNavigator

function drawerPersonalizadoPr25 (props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView>
            <View>{/* en este view ponemos libremente*/}
                <Text>Instituto Securizado</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <DrawerItem style={{flex: 1}}
                // icon = {<Icon name='miIcono'>}
                label="Login"
                onPress={()=> props.navigation.navigate('Login')}
                />
                <DrawerItem style={{flex: 1}}
                // icon = {<Icon name='miIcono'>}
                label="Register"
                onPress={()=> props.navigation.navigate('Register')}
                />
            </View>
            <DrawerItem
            // icon = {<Icon name='miIcono'>}
            label="Alumnos"
            onPress={()=> props.navigation.navigate('Alumno Operations')}
            />
            <DrawerItem
            // icon = {<Icon name='miIcono'>}
            label="Asignaturas"
            onPress={()=> props.navigation.navigate('Asignatura Operations')}
            />
            <DrawerItem
            // icon = {<Icon name='miIcono'>}
            label="Matriculas"
            onPress={()=> props.navigation.navigate('Matricula Operations')}
            />
            <DrawerItem
            // icon = {<Icon name='miIcono'>}
            label="Usuarios"
            onPress={()=> props.navigation.navigate('Usuario Operations')}
            />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({})