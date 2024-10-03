import React from 'react'

type Props = {
    zona:string,
}


const Reloj = (props: Props) => {
  const zonaString = props.zona ?? "Europe/Madrid";
  const hora = new Date().toLocaleString( "es-ES",{timeZone: zonaString});

    return (
      <>
        <h2>Hora en {zonaString}</h2>
        <p>
          {hora}
        </p>
      </>
    )
}

export default Reloj
