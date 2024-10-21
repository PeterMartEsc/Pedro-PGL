import React, { useRef, useState } from 'react'

type Props = {
    input : number | string
}

const Pr26 = (props: Props) => {

    const [option, setOption] = useState<boolean>(false)
    const [valor, setValor] = useState<string>('')

    const inputref = useRef<HTMLInputElement>({} as HTMLInputElement);

    function opcionElegida(){

        const valorInput = inputref.current.value;
        setValor(valorInput);

        //Comprueba que el input sea un número haciendole un parse int (si devuelve el error Not a Number, es un string)
        if(isNaN(parseInt(valor))){
            setOption(false);
        } else {
            setOption(true);
        }

    }

    return (
    
        <>
            <input type="text" ref={inputref} placeholder="Inserte dato"/>
            <button onClick={opcionElegida}>Submit</button>
            {
                //option ? <Multiplicar input={parseInt(valor)} /> : <Letras input={parseInt(valor)}/>
            }
        </>
    )
}

export default Pr26