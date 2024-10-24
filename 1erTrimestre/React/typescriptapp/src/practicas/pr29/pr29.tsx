import React, { useState } from 'react'

type Props = {}

const OperarBotones = (props: Props) => {

    const [valorActual, setvalorActual] = useState(400);

    function operarValor(opcion : boolean){
        setvalorActual(opcion ? valorActual*2 : valorActual/2);
    }

    return (
        <>
        <h5>Valor actual:{valorActual}</h5>
        <button onClick={()=>operarValor(true)}>{valorActual}*2</button>
        <button onClick={()=>operarValor(false)}>{valorActual}/2</button>

        </>
    )
}

export default OperarBotones

/*
Realizar un componente llamado:
OperarBotones que al pulsar el botón de la izquierda
divida al valor actual entre 2 y si se pulsa el de la derecha
multiplique. Se debe hacer mediante un único método que responda a onClick ( el mismo
método para los dos botones )
 */