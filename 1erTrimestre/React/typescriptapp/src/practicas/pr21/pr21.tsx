import React, { useEffect, useState } from 'react'

type Props = {}

const Pr21 = (props: Props) => {
    const [fechaactual, setfechaactual] = useState<String>("");

    useEffect(() => {
        const timerID = setInterval(
            tick,
            1000
        );
    }, [])

    function tick() {
        const newFecha = "" + new Date().toLocaleTimeString()
        setfechaactual(newFecha);
    }
    
    return (
        <div>
            <h3>Ejemplo Reloj Dinámico</h3>
            {fechaactual}
        </div>
    )
}

export default Pr21