import React, { useState } from 'react'

type Props = {}

const pr15 = (props: Props) => {

    const [color, setcolor] = useState(); 

    function aplicarClase(color :string){
        //setcolor(color);
    }

    return (
        <>
        <h4 style={{color}}>Este area muestra los resultados de los botones </h4>
        <button type="button" id="verde" onClick={() => aplicarClase("verde")}>Verde</button>
        <button type="button" id="rojo"  onClick={() => aplicarClase("rojo")}>Rojo</button>
        <button type="button" id="azul"  onClick={() => aplicarClase("azul")}>Azul</button>
        <button type="button" id="rosa"  onClick={() => aplicarClase("rosa")}>Rosa</button>
        </>
    )
} 

export default pr15