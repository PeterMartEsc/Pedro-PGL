/**
 * Crear la actividad que se acaba de describir. Notar que hay que usar un
 * useState para que muestre un texto u otro según lo que se haya pulsado
 */


import React from 'react'

type Props = {}

const pr12 = (props: Props) => {

  function saludoSinParametros(){
    alert("hola Amigo!");
  }

  function saludoConParametros(mensaje: string){
    alert(mensaje);
  }
    return (
    <>
      <h3>Realizando saludos:</h3>
      <p>Sin parámetros: <button onClick={saludoSinParametros}>amigo</button></p>
      <p>Con params: <button onClick={()=>saludoConParametros("verde")}>ana</button></p>
      <p>Con params: <button onClick={()=>saludoConParametros("azul")}>mara</button></p>
    </>
    )
}

export default pr12