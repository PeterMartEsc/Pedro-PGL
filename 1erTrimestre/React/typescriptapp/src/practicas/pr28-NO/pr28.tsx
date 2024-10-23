import React, { useRef, useState } from 'react'

type Props = {}

const MostrarInput = (props: Props) => {
    const refInput = useRef<HTMLInputElement>({} as HTMLInputElement);
    const [texto, setTexto] = useState<string>(" ");

    function almacenarInput(){
        let textoInput = refInput.current.value;
        setTexto(textoInput);
    }

    return (
        <>
        <label htmlFor="nombre">Nombre
            <input type="text" name="nombre" ref={refInput}/>
        </label>

        <button onClick={almacenarInput}>Enviar</button>
        <h5>{texto}</h5>
        </>
    )
}

export default MostrarInput