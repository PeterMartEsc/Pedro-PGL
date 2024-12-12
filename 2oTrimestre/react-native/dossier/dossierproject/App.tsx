
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
import InicioScreenPr91 from './practicas/pr9.1/screens/InicioScreenPr9.1';
import InicioScreenPr10 from './practicas/pr10/screens/InicioScreenPr10';
import InicioScreenPr12 from './practicas/pr12/screens/InicioScreenPr12';
import InicioScreenPr14 from './practicas/pr14/screens/InicioScreenPr14';
import InicioScreenPr15 from './practicas/pr15/screens/InicioScreenPr15';
import InicioScreenPr16 from './practicas/pr16/screens/InicioScreenPr16';
import InicioScreenPr17 from './practicas/pr17/screens/InicioScreenPr17';
import ScreenTresEnRalla from './tareas-clase/tresenralla/screens/ScreenTresEnRalla';

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
    //TresEnRalla
    <ScreenTresEnRalla/>
    );
}


export default App;
