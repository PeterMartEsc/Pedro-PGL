import React, { useState } from 'react'
import '../styles/style.css'
import Persona from '../modelos/Persona'
import { stringify } from 'querystring'
type Props = {}

const Calculoimc = (props: Props) => {

    const [arraypersonas, setArraypersonas] = useState<Array<Persona>>([]);

    function setDatos(persona : Persona) {
        let arrayAux = arraypersonas;
        arrayAux[persona.id] = persona;
        setArraypersonas([...arrayAux]);
    }

    function aniadirPersona(id : number){
        let persona = new Persona(id+1);
        setArraypersonas([...arraypersonas, persona]);
    }

    return (
        <>
            <div className="contenedorPrincipal">
                <button className='aniadir' onClick={()=>aniadirPersona(arraypersonas.length)}>+</button>

                {
                    arraypersonas.map((persona, index) => (
                        <li className='persona' onClick={()=>setDatos(persona)}>
                            {index+1}, {persona.nombre}, {persona.imc}
                        </li>
                    ))
                }

                <div className="datos">
                    <PersonaCard personas={arraypersonas} setDatos={setDatos}/>
                </div>
            </div>
        </>
    )
}

type Iprops = {
    setDatos : (persona: Persona)=>void,
    personas : Array<Persona>;
}

const PersonaCard = (props: Iprops) => {

    function calcularIMC(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        let formulario = e.currentTarget;
        let nombre = formulario.nombre.value;
        let apellido = formulario.apellido.value;
        let altura = formulario.altura.value;
        let edad = formulario.edad.value;
        let peso = formulario.peso.value;

        let persona = new Persona(props.personas.length+1);
        persona.nombre = nombre;
        persona.apellido = apellido;
        persona.altura = altura;
        persona.edad = edad;
        persona.peso = peso;
        persona.imc = persona.calculoImc();

        props.setDatos(persona);
    }

    return (
        <>
            <div className="formulario">
                <form onSubmit={calcularIMC} >

                    <label htmlFor="nombre">Nombre</label> 
                    <input type="text" name="nombre" id="nombre" /><br />

                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido" id="apellido" /><br />

                    <label htmlFor="altura">Altura</label>
                    <input type="text" name="altura" id="altura" /><br />

                    <label htmlFor="edad">Edad</label>
                    <input type="text" name="edad" id="edad" /><br />

                    <label htmlFor="peso">Peso</label>
                    <input type="text" name="peso" id="peso" /><br /><br />

                    <button type='submit'>Calcular</button>
            
                </form>
            </div>
        </>
    )
}


export default Calculoimc