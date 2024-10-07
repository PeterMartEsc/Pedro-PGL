/**
 * Crear un functional component react ( usa el snippet: tsrafc ) que tenga un 
 * botón. Este botón al pulsarlo va agregando un nuevo número aleatorio de 0 a 100 de tal 
 * forma que podemos ver gracias al state toda la lista de aleatorios generados ( Nota: 
 * podemos usar: JSON.stringfy( nombredelarray ) para ver el array u otro objeto ) 
 * Nota: hay una forma sencilla de crear un nuevo array con un nuevo elemento conservando 
 * los datos del anterior. Imaginemos que queremos agregar el número 5:
 * const arrayanterior: Array<any> = [4, 2, 7 ]; 
 * [ ...arrayanterior, 5 ]
 */

import React, { useState } from 'react'

type Props = {}

const GenerarAleatorios = (props: Props) => {

    const [numeros, setNumeros] = React.useState([]);
    function elMetodo(){
        let dato = Math.floor(Math.random()*100)
        setNumeros([...numeros, dato])  //agregar el número al array.
    }
    return (
        <>
            <p>{JSON.stringify(numeros)}</p>
            <button onClick={()=> elMetodo}>Añadir aleatorio</button>
        </>
    )
}

export default GenerarAleatorios;