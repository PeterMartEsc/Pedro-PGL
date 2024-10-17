import React, { useRef } from 'react'

type Props = {}

const Pr24 = (props: Props) => {
    const inputnumero = useRef<HTMLInputElement>({} as HTMLInputElement);
    //const randomNum = useRef<HTMLInputElement>({} as HTMLInputElement);
    let numRand  = Math.floor(Math.random() * 9);
    const divresultado = useRef<HTMLDivElement>({} as HTMLDivElement);
    let result = " ";

    function acertarNumero(){
        let htmlinput = inputnumero.current;
        let numero = Number(htmlinput.value);

        if(numero > numRand){
            result = numero + " > numero random";
        } else if(numRand > numero){
            result = numero + " < numero random";
        } else {
            result = "Has acertado!!";
        }

        let htmldiv = divresultado.current;
        htmldiv.innerText = "" + result ;
    }

    return (
        <>
            <h2>Acertar número de 0 a 9</h2>
            <input type="text" ref={inputnumero}/>
            <button onClick={acertarNumero}>Acertar</button>
            <div ref={divresultado}></div>
        </>
    )
}

export default Pr24