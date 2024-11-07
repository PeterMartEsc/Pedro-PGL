import React, { useState } from 'react'
import Usuario from './Usuario'

type Props = {}

const Pr38 = (props: Props) => {

    const [arrauUsuarios, setarrauUsuarios] = useState<Array<Usuario>>([new Usuario(1, "Ana"), new Usuario(2, "Aristarco")]);

    return (
        <>
            {
                arrauUsuarios.map((usuario) => (
                    <div key={usuario.id}>
                        <button onClick={() => EditarUsuario}>Modificar{usuario.nombre}</button>
                    </div>
                ))
            }
        </>
    )
}

type Iprops = {

}

const EditarUsuario = (props : Iprops) => {

}

export default Pr38

/**
 * <button type='text'>Modificar Ana</button>
 */