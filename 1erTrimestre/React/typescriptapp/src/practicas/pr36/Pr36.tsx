import React, { useState } from 'react'
import Persona from './Persona'
import './style.css'

type Props = {}

const Padre = (props: Props) => {

    const [arrayPersonas, setArrayPersonas] = useState<Persona[]>([]);

    function calcularIMC(dato: string){

    }

  return (
    <div className='contenedorPrincipal'>
        {
          arrayPersonas.map((persona, index) => (
            <div className=''>
              <Tarjeta key={index} />
            </div>
          ))
        }
    </div>
  )
}

interface Iprops{
  calcularIMC: (dato:string)=>void;
}

const Tarjeta = (props: Props) => {

  function procesarForm(){
    
  }

  return(
    <div className='tarjeta'>
      <form onSubmit={procesarForm}></form>
    </div>
  )
}

export default Padre