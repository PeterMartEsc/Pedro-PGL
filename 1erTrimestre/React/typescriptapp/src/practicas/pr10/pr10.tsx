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

import React, { useState } from 'react';

type Props = {}

const GenerarAleatorios = (props: Props) => {

    //Sirve para que la info se guarde al recargar la página. Recarga el reenderizado al actualizar el state
    const [arrayNumeros, setNumeros] = useState<Array<Number>>([]);

    function elMetodo(){
        let dato = Math.floor(Math.random()*100)
        //arrayNumeros.push(dato);
        //console.log(arrayNumeros);
        //setNumeros(arrayNumeros);  //agregar el número al arrayNumeros([arr]);  //agregar el número al array.
        setNumeros([...arrayNumeros, dato]);  //agregar el número al array.
    }

    return (
        <>
            <p>{JSON.stringify(arrayNumeros)}</p>
            <br/>
            <button onClick={elMetodo}>Añadir aleatorio</button>
        </>
    )
}

export default GenerarAleatorios;

//onClick en mayuscula para diferenciarlo del de html
//en el onClick puedes poner ()=> le das un patron, una función que no recibe nada ni devuelve nada
//no se pone ()=> elMetodo por que "elMetodo" ya es una función vacía que no devuelve nada