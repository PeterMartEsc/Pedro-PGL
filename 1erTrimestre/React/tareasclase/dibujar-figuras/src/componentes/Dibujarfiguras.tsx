import React, { useEffect, useState } from 'react'
import '../styles/index.css'
import Casilla from '../modelos/Casilla';

type Iprops = {
  setFigura : (simbolo : string)=> void;
}

const Dibujarfiguras = (props: Iprops) => {

  let simbolos = [ " ", "╚", "╔", "╩", "╦", "╠", "═", "╬", "╣", "║", "╗", "╝" ];
  const [simbolo, setSimbolo] = useState<string>(simbolos[0]);
  const [posicion, setPosicion] = useState<number>(0);

  function simboloUp(){
    if(!(posicion == 11)){
      setPosicion(posicion+1);
    } else {
      setPosicion(0);
    }

    setSimboloActual();
  }

  function simboloDown(){
    if(!(posicion == 0)){
      setPosicion(posicion-1);
    } else {
      setPosicion(11);
    }

    setSimboloActual();
  }

  function setSimboloActual(){
    setSimbolo(simbolos[posicion]);
    props.setFigura(simbolos[posicion]);
  }

    return (
      <>
        <div className="simbolos">
            {simbolo}
            <button onClick={simboloUp}>up</button><br/>
            <button onClick={simboloDown}>down</button>
        </div>
      </>
    )
}

export default Dibujarfiguras
