import React, { useState } from 'react'

type Props = {}

const MostrarTabla = (props: Props) => {
    const [numero, setnumero] = useState(1)
    return (
        <>
            <h1>Tabla del 2</h1>
            <p>2*{numero} = {2*numero}</p>
            <button onClick={() => setnumero(numero + 1)}>2*{numero+1}</button>
        </>
    )
}

export default MostrarTabla