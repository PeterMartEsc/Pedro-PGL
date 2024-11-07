import React, { useEffect, useState } from 'react'
import Usuario from './Usuario'

type Props = {}

const Pr38 = (props: Props) => {

    const [arrayUsuarios, setarrayUsuarios] = useState<Array<Usuario>>([new Usuario(1, "Ana"), new Usuario(2, "Aristarco")]);
    const [currentUser, setcurrentUser] = useState(0);

    /*useEffect(() => {
        
    }, [])*/
    
    function changeCurrentUser(usuario : Usuario){
        setcurrentUser(usuario.id);
    }

    function modifyUsuario(usuario : Usuario){
        let auxArray = arrayUsuarios;
        auxArray[usuario.id-1] = usuario;
        setarrayUsuarios([...auxArray]);
    }

    return (
        <>
            {
                arrayUsuarios.map((usuario, index) => (
                    <div key={index}>
                        <button onClick={() => modifyUsuario(usuario)}>Modificar{usuario.nombre}</button>
                    </div>
                ))
            }
            {
                (currentUser != 0) ?
                <Hijo usuario={arrayUsuarios[currentUser-1]} modificarUserPadre={modifyUsuario}/>
                :
                <p>No ha seleccionado un usuario</p>
            }
        </>
    )
}

type Iprops = {
    usuario : Usuario;
    modificarUserPadre : (usuario : Usuario) => void;
}

const Hijo = (props : Iprops) => {

    const [newName, setnewName] = useState("");

    useEffect(() => {
        setnewName(props.usuario.nombre);
    }, [props.usuario])
    
    function handleModify(){

    }

    return(
        <>
            <input type="text" />
        </>
    )
}

export default Pr38

/**
 * <button type='text'>Modificar Ana</button>
 */