import React, { useState } from 'react'

type Props = {}

const Pr34 = (props: Props) => {

    const [resultado, setresultado] = useState<string>(" ")

    function calcularEdad(e: React.FormEvent<HTMLFormElement>){
        let formulario = e.currentTarget;
        let tipoPerro = String(formulario.tipoPerro.value);
    }

    return (
        <>
            <form onSubmit={calcularEdad}>
                <input type="text" name="edad" id="edad"/>
                <input type="radio" name="tipoPerro" id="tipoPerro" value="pequenio"/>
                <input type="radio" name="tipoPerro" id="tipoPerro" value="mediano"/>
                <input type="radio" name="tipoPerro" id="tipoPerro" value="grande"/>
                <button type='submit'>Calcular</button>
            </form>
        </>
    )
}

export default Pr34