import React, { useState } from 'react'

type Props = {}

const Pr17 = (props: Props) => {

  const [boton, setBoton] = useState(false);

  return (
    <>
    {(boton) ? <Numeros/> : <Saludo/>}
    <button onClick={() => setBoton(true)}>Numeros</button>
    <button onClick={() => setBoton(false)}>Saludo</button>
    </>
  )
}

const Numeros = (props: Props) =>{
  let arrayNum = [];
  for(let i  = 0; i<=9 ; i++){
    arrayNum.push(Math.floor(Math.random() * 100 + 1));
  }

  return (
    <>
      {
      /*arrayNum.map((num, index) => (
        <p key={index}>{num}</p>
      ))*/
      //{JSON.stringify(arrayNum)}
      }
    </>
  )
}

const Saludo = (props: Props) =>{
  //const dateTime = new Date();
  return (
    <>
      <p>Saludos! Hoy es 14-10-2024</p>
    </>
  )
}

export default Pr17