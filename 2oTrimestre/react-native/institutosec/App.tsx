import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppContext from './src/context/AppContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavPrincipal from './src/navigation/drawer/DrawerNavPrincipal';
import PrincipalNavigation from './src/PrincipalNavigation';


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

  return (
    //Instituto Sec
    <GestureHandlerRootView>
      <NavigationContainer>
        <AppContext>
          <PrincipalNavigation/>
          {/* <AuthCheck/> */}
        </AppContext>
      </NavigationContainer>
    </GestureHandlerRootView>
);
}


export default App;
