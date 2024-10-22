import React, { useRef, useState } from 'react'

type Props = {}

const Pr27 = (props: Props) => {
    const [contador, setcontador] = useState(0);
    //const [partidaIniciada, setpartidaIniciada] = useState<boolean>(false)
    //const [stateFecha, setstateFecha] = useState<string>("");
    const [stateButton, setstateButton] = useState<boolean>(false);

    const refTimer = useRef<ReturnType<typeof setInterval>>();
    const inputnumero = useRef<HTMLInputElement>({} as HTMLInputElement);

    function iniciarPartida(){
        let htmlinput = inputnumero.current;
        let numero = Number(htmlinput.value);
        setcontador(numero);
        inputnumero.current.value = " ";
        //setpartidaIniciada(true);
    }
    
    function actualizarHora(){

        inputnumero.current = Number(inputnumero.current) - 1;
        setcontador(inputnumero.current);
    }

    function iniciarCronometro(){
        /*if(!stateButton){
            refTimer.current = setInterval(actualizarHora, 1000);
            setstateButton(true);
        } else {
            clearInterval(refTimer.current);
            setstateButton(false);
        }*/
    }

    return (
        <div>
            <h3>Cronometro</h3>
            <p>Introduzca el valor inicial:</p>
            <input type="text" ref={inputnumero}/>
            <button onClick={iniciarPartida}>Enviar</button>

            <br />
            <br />
            {contador}
            <button onClick={iniciarCronometro}>{stateButton ? "parar" : "inciar"}</button>
            
            {/*<p>{stateFecha}</p>*/}
        </div>
    )
}

export default Pr27