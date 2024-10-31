import React, { useState } from 'react'
import Persona from './Persona'
import './style.css'

type Props = {}

const Padre = (props: Props) => {

    const [arrayPersonas, setArrayPersonas] = useState<Array<Persona>>([]);
    

    function aniadirPersona(persona: Persona){
      let personaAux = arrayPersonas;
      personaAux[persona.id-1] = persona;
      setArrayPersonas([...personaAux]);
    }

    function aniadirContenedor(id : number){
      let persona = new Persona(id);
      setArrayPersonas([...arrayPersonas, persona]);
    }

  return (
    <div className='contenedorPrincipal'>
        {
          arrayPersonas.map((persona, index) => (
            <div className='persona'>
              <Tarjeta aniadirPersona={aniadirPersona} persona={persona} />
            </div>
          ))
        }
        <button className='aniadir' onClick={()=> aniadirContenedor(arrayPersonas.length+1)}>+</button>
    </div>
  )
}

interface Iprops{
  aniadirPersona: (persona: Persona)=>void,
  persona : Persona;
}

const Tarjeta = (props: Iprops) => {

  const [imc, setimc] = useState(0)

  function calcularIMC(e: React.FormEvent<HTMLFormElement>){

    e.preventDefault();
    let formulario = e.currentTarget;

    let nombre = formulario.nombre.value?? "";
    let apellido = formulario.apellido.value?? "";
    let altura = Number(formulario.altura.value?? 0);
    let edad = Number(formulario.edad.value?? 0);
    let peso = Number(formulario.peso.value?? 0);
  
    setimc(peso / (altura * altura));

    let newPersona = props.persona;
    newPersona.nombre = nombre;
    newPersona.apellido = apellido;
    newPersona.altura = altura;
    newPersona.edad = edad;
    newPersona.peso = peso;
    newPersona.imc = imc;

    props.aniadirPersona(newPersona);
  }


  return(
    <div className='tarjeta'>
      <form onSubmit={calcularIMC}>
        <input type="text" name="nombre" id="nombre" />
        <input type="text" name="apellido" id="apellido" />
        <input type="text" name="altura" id="altura" />
        <input type="text" name="edad" id="edad" />
        <input type="text" name="peso" id="peso" />
        <button type='submit'>Calcular</button>
      </form>
      <h5>IMC: {imc}</h5>
    </div>
  )
}

export default Padre