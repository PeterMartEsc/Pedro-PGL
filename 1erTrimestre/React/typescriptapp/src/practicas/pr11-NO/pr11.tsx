import React, { useState } from 'react'

type Props = {}

const ComponenteConEstatico = (props: Props) => {
    const [horaactual, sethoraactual] = useState("");
    let dato = 1;

    function actualizr(){
        ComponenteConEstatico.atributoestatico++;
        dato++;
        console.log("Estatico: " +ComponenteConEstatico.atributoestatico);
        console.log("Dato: " +dato);
        sethoraactual("" + new Date());
    }

    return (
        <div>
            <h4>Componente con estatico</h4>
            <p>Info en estático: {ComponenteConEstatico.atributoestatico}</p>
            <button onClick={actualizr}>Actualizar</button>
        </div>
    )
}

ComponenteConEstatico.atributoestatico = 2;

export default ComponenteConEstatico