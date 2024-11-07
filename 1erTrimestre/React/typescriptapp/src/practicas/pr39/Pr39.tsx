import React, { useRef, useState } from 'react'

type Props = {}

const Pr39 = (props: Props) => {
    const [datosRecibidos, setdatosRecibidos] = useState<string>(" ");

    //Seteamos los datos recibidos
    function tomarDatos(datos: string){
        setdatosRecibidos(datos);
    }

    return (
        <div>
            <p>Practica componente hijo informa a su padre</p>

            <InputToUpper onNewText={tomarDatos} />

            <p>
                Recibido {datosRecibidos}
            </p>
        </div>
    )
}

type Iprops = {
    onNewText: (text: string) => void
}

const InputToUpper = (props: Iprops) => {

    const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

    function toUpper(){
        // Verificamos que inputRef.current no sea null
        const nuevoTexto = inputRef.current.value.toUpperCase(); // Convertimos el texto a mayúsculas
        props.onNewText(nuevoTexto); // Pasamos el texto al padre
        
    }

    return (
        <input type="text" ref={inputRef} onChange={toUpper} />
    )
}

export default Pr39