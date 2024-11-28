
import React from 'react';
import type {PropsWithChildren} from 'react';

import Practica01 from './practicas/pr01/components/Practica01';
import Practica02 from './practicas/pr02/components/Practica02';
import InicioScreen from './practicas/pr03/screens/InicioScreen';
import InicioScreenPr04 from './practicas/pr04/screens/InicioScreenPr04';
import InicioScreenPr05 from './practicas/pr05-terminar/screens/InicioScreenPr05';

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
    <InicioScreenPr05/>
    //Pr06

    );
}


export default App;
