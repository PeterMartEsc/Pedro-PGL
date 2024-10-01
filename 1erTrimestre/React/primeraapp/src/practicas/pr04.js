/*
Reproducir el ejemplo anterior, pero cambiando que los atributos que reciba
sean: num1 y num2 y lo que muestre es:
La suma de num1 y num2 es: num1 + num2
(donde num1 y num2 serían los datos que recibiera el componente )
*/

import React from "react";
import PropTypes from 'prop-types'


const ComponenteApp = (props) => {

    const primos = [2, 3, 5, 7];

    return (
        <>
            <h1>Primeros números primos:</h1>
            <h4>{JSON.stringify(primos)}</h4>
            <p>Datos recibido en el componente: { props.info}</p>
        </>
    );
}

ComponenteApp.propTypes = {
    info: PropTypes.string.isRequired
}

export default ComponenteApp;