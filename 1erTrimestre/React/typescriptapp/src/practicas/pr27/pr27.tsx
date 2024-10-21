import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const Pr27 = (props: Props) => {
    const [contador, setcontador] = useState(20);
    const [stateFecha, setstateFecha] = useState<string>("");
    const [stateButton, setstateButton] = useState<boolean>(false);
    const refTimer = useRef<ReturnType<typeof setInterval>>();
    const refNumero = useRef<number>(20);


    
    function actualizarHora(){
        //setstateFecha("" + new Date());

        refNumero.current = refNumero.current - 1;
        setcontador(refNumero.current);
    }

    function iniciarParada(){
        if(!stateButton){
            refTimer.current = setInterval(actualizarHora, 1000);
            setstateButton(true);
        } else {
            clearInterval(refTimer.current);
            setstateButton(false);
        }
    }

    return (
        <div>
            <h3>Prueba Timer</h3>
            {contador}
            <button onClick={iniciarParada}>{stateButton ? "parar" : "inciar"}</button>
            <p>{stateFecha}</p>
        </div>
    )
}

export default Pr27