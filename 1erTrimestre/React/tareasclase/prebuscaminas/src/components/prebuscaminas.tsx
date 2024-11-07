import React, { useEffect, useState } from 'react'
import CasillaCard from '../models/CasillaCard';

type Props = {}

const Prebuscaminas = (props: Props) => {

  const [arrayCasillas, setarrayCasillas] = useState<Array<CasillaCard []>>([]);
  const [reiniciar, setreiniciar] = useState(false);

  function reiniciarJuego(){

    setreiniciar(true);
    //setarrayCasillas();

    const cantidadCasillas = 79;
    const longitudBucle = 9;

    let aux = 0;

    for(let  i = 0; i< longitudBucle; i++) {
      //let arrayAux = arrayCasillas;
      
      for(let j = 0; j < longitudBucle; j++) {

        let fila = [];
        let casilla = new CasillaCard(aux,i,j);
        fila[j] = casilla;

        if(fila.length == longitudBucle || aux == cantidadCasillas){
          setarrayCasillas([...arrayCasillas, fila]);
          
        }

        if(aux == cantidadCasillas){
          break;
        }
        aux++
      }
    }

    
    setreiniciar(false);
  }
  

  
  return (
    <>
      <h2>Pre buscaminas</h2>
      {
        arrayCasillas.map((fila, index) => (
          <div key={index} className='fila'>
            {
              fila.map((casilla, indexFila)=>(
                <div key={indexFila} className='casilla'>
                  <CasillaHijo casillaParaHijo={casilla}/>
                </div>
              ))
            }
          </div>
        ))
      }
      <button onClick={reiniciarJuego}>Reiniciar</button>
    </>
  )
}

type Iprops = {
  casillaParaHijo : CasillaCard;
}

const CasillaHijo = (props: Iprops) => {


  return(
    <>
      {props.casillaParaHijo.id}
    </>
  )
}

export default Prebuscaminas