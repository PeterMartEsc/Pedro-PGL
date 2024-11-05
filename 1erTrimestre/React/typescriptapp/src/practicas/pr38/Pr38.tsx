import React, { useState } from 'react'
import Usuario from './Usuario'

type Props = {}

const Pr38 = (props: Props) => {

    const [arrauUsuarios, setarrauUsuarios] = useState<Array<Usuario>>([new Usuario(1, "Ana"), new Usuario(2, "Aristarco")]);

    return (
        <>
            <button type='text'>Modificar Ana</button>
        </>
    )
}

export default Pr38