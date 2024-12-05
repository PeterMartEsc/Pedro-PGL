
import React from 'react';
import type {PropsWithChildren} from 'react';

import Practica01 from './practicas/pr01/components/Practica01';
import Practica02 from './practicas/pr02/components/Practica02';
import InicioScreen from './practicas/pr03/screens/InicioScreen';
import InicioScreenPr04 from './practicas/pr04/screens/InicioScreenPr04';
import InicioScreenPr05 from './practicas/pr05/screens/InicioScreenPr05';
import InicioScreenPr06 from './practicas/pr06/screens/InicioScreenPr06';
import InicioScreenPr07 from './practicas/pr07-terminar/screens/InicioScreenPr07';
import InicioScreenPr08 from './practicas/pr08-terminar/screens/InicioScreenPr08';
import InicioScreenPr09 from './practicas/pr09/screens/InicioScreenPr09';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {

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
    <InicioScreenPr09/>
    );
}


export default App;
