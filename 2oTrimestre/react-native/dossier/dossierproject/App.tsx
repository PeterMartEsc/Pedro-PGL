import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';

import Practica01 from './practicas/1-introduccion/pr01/components/Practica01';
import Practica02 from './practicas/1-introduccion/pr02/components/Practica02';
import InicioScreen from './practicas/1-introduccion/pr03/screens/InicioScreen';
import InicioScreenPr04 from './practicas/1-introduccion/pr04/screens/InicioScreenPr04';
import InicioScreenPr05 from './practicas/1-introduccion/pr05/screens/InicioScreenPr05';
import InicioScreenPr06 from './practicas/1-introduccion/pr06/screens/InicioScreenPr06';
import InicioScreenPr07 from './practicas/1-introduccion/pr07-terminar/screens/InicioScreenPr07';
import InicioScreenPr08 from './practicas/1-introduccion/pr08-terminar/screens/InicioScreenPr08';
import InicioScreenPr09 from './practicas/1-introduccion/pr09/screens/InicioScreenPr09';
import InicioScreenPr91 from './practicas/1-introduccion/pr9.1/screens/InicioScreenPr9.1';
import InicioScreenPr10 from './practicas/1-introduccion/pr10/screens/InicioScreenPr10';
import InicioScreenPr12 from './practicas/1-introduccion/pr12/screens/InicioScreenPr12';
import InicioScreenPr14 from './practicas/1-introduccion/pr14/screens/InicioScreenPr14';
import InicioScreenPr15 from './practicas/1-introduccion/pr15/screens/InicioScreenPr15';
import InicioScreenPr16 from './practicas/1-introduccion/pr16/screens/InicioScreenPr16';
import InicioScreenPr17 from './practicas/1-introduccion/pr17/screens/InicioScreenPr17';
import ScreenTresEnRalla from './tareas-clase/tresenralla/screens/ScreenTresEnRalla';
import InicioScreenPr18 from './practicas/1-introduccion/pr18/screens/InicioScreenPr18';
import InicioScreenPr19 from './practicas/1-introduccion/pr19/screens/InicioScreenPr19';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrincipalStack from './practicas/2-navigation/pr20/PrincipalStack';
import PrincipalScreenPr23 from './practicas/2-navigation/pr23/navigation/PrincipalScreenPr23';
import TabPrincipalScreenPr27 from './practicas/2-navigation/pr27-terminar/navigation/TabPrincipalScreenPr27';
import DrawerPersonalizadoPr25 from './practicas/2-navigation/pr25/DrawerPersonalizadoPr25';
import TabNavPokemon from './practicas/2-navigation/pr28-Pokemon/navigation/TabNavPokemon';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ViajesScreen from './practicas/2-navigation/pr29/ViajesScreen';
import { dataSourcePr32 } from './practicas/2-navigation/pr32/src/data/Database';
import GrabarPr32 from './practicas/2-navigation/pr32/components/GrabarPr32';
import { dataSourcePr33 } from './practicas/2-navigation/pr33/src/data/DatabasePr33';
import TabNavProductosPr34 from './practicas/2-navigation/pr34/navigation/TabNavProductosPr34';
import DrawerNavPrincipal from './tareas-clase/institutoSec/navigation/drawer/DrawerNavPrincipal';
import PrincipalStackPr21 from './practicas/2-navigation/pr21/PrincipalStack21';
import HistorialUbicacion from './practicas/2-navigation/pr30/HistorialUbicacion';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  //Pr32
  /*useEffect(() => {
    async function iniciarDDBB(){
      await dataSourcePr32.initialize();
    }
    iniciarDDBB();
  }, [])*/
  //Pr33
  /*useEffect(() => {
    async function iniciarDDB(){
      await dataSourcePr33.initialize();
    }
    iniciarDDB();
  }, [])*/

  return (
    //<Practica01/>
    //<Practica02/>
    //Pr03
    //<InicioScreen/>
    //Pr04
    //<InicioScreenPr04/>
    //Pr05
    //<InicioScreenPr05/>
    //Pr06
    //<InicioScreenPr06/>
    //Pr07
    //<InicioScreenPr07/>
    //Pr08
    //<InicioScreenPr08/>
    //Pr09
    //<InicioScreenPr09/>
    //Pr9.1
    //<InicioScreenPr91/>
    //Pr10
    //<InicioScreenPr10/>
    //Pr12
    //<InicioScreenPr12/>
    //Pr13
    //Pr14
    //<InicioScreenPr14/>
    //Pr15
    //<InicioScreenPr15/>
    //Pr16
    //<InicioScreenPr16/>
    //Pr17
    //<InicioScreenPr17/>
    //Pr18
    //<InicioScreenPr18/>
    //Pr19
    //<InicioScreenPr19/>
    //TresEnRalla
    //<ScreenTresEnRalla/>
    //Pr20
    /*<NavigationContainer>
      <PrincipalStack/>
    </NavigationContainer>*/
    //Pr21
    //<NavigationContainer>
    //  <PrincipalStackPr21/>
    //</NavigationContainer>
    //Pr23
    //<NavigationContainer>
      //<PrincipalScreenPr23/>
    //</NavigationContainer>
    //Pr24
    //Pr25
    //<NavigationContainer>
    //  <DrawerPersonalizadoPr25/>
    //</NavigationContainer>
    //Pr26
    //Pr27
    //<NavigationContainer>
    //  <TabPrincipalScreenPr27/>
    //</NavigationContainer>
    //Pr28
    //<GestureHandlerRootView>
    //  <NavigationContainer>
    //    <TabNavPokemon/>
    //  </NavigationContainer>
    //</GestureHandlerRootView>
    //Pr29
    //<NavigationContainer>
      //<ViajesScreen/>
    //</NavigationContainer>
    //Pr30
    <HistorialUbicacion/>
    //Pr32
    //<GrabarPr32/>
    //Pr33
    //<NavigationContainer>
      //<PrincipalScreenPr23/>
    //</NavigationContainer>
    //Pr34
    //<NavigationContainer>
      //<TabNavProductosPr34/>
    //</NavigationContainer>
    //Instituto Sec
    //<NavigationContainer>
    //  <DrawerNavPrincipal/>
    //</NavigationContainer>
);
}


export default App;
