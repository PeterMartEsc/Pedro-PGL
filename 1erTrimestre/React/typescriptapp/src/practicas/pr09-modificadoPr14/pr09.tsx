import React, { useState } from 'react'

type Props = {
    num:number;
}

const MostrarTabla = (props: Props) => {
    const [numero, setnumero] = useState(1);        //use...[tabular]
    return (
        <>
            <h1>Tabla del {props.num}</h1>
            <p>{props.num}*{numero} = {2*numero}</p>
            <button onClick={() => setnumero(numero + 1)}>{props.num}*{numero+1}</button>
        </>
    );
}

export default MostrarTabla;