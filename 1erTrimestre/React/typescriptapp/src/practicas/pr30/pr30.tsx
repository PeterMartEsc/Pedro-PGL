import React, { ChangeEvent, useState } from 'react'

type Props = {}

const Pr30 = (props: Props) => {
    const [numero, setnumero] = useState<number>(Math.floor(Math.random() * 10)+1);
    const [numeroIntentado, setnumeroIntentado] = useState<number>(0);
    const [resultado, setResultado] = useState<string>(" ");


    function almacenarNumeroAcertar(event : ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        setnumeroIntentado(parseInt(event.currentTarget.value));
    }

    function apostarNumero(){
        if(numeroIntentado>numero){
            setResultado(numeroIntentado+" > numero secreto");
        } else if(numeroIntentado<numero){
            setResultado(numeroIntentado+" < numero secreto");
        } else {
            setResultado(numeroIntentado+" es el numero secrteto. Felicidades!!");

        }
    }

    return (
        <>

            <label htmlFor="numeroAcertar">Introduzca su numero
                <input type="text" name="numeroAcertar" id="numeroAcertar" onChange={almacenarNumeroAcertar}/>
                <button onClick={apostarNumero}>Enviar</button>
            </label>
            <p>{resultado}</p>
        </>
    )
}

export default Pr30