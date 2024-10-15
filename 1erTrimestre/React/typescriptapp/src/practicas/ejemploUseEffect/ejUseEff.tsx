import React, { useEffect, useState } from 'react'

type Props = {}

const EjemploUseEffect = (props: Props) => {
    const [uno, setuno] = useState(-2);
    const [dos, setdos] = useState(4);


    useEffect(() => {
        console.log("Yeeepaa");
    },[dos-uno>15])

    const ejecuta = () => {
        setuno(dos+2);
        setdos(uno-1);
        console.log(uno, dos);
    }

    return (
        <>
        Ejemplo Use Effect <br/><br />
        <button onClick={ejecuta}>Ejecuta</button>
        </>
    )
}

export default EjemploUseEffect