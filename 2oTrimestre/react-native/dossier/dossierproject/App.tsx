
import React from 'react';
import type {PropsWithChildren} from 'react';

import Practica01 from './practicas/pr01/components/Practica01';
import Practica02 from './practicas/pr02/components/Practica02';
import InicioScreen from './practicas/pr03/screens/InicioScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {

  return (
    //<Practica01/>
    //<Practica02/>

    //Pr03
    <InicioScreen/>

    //
  );
}


export default App;
