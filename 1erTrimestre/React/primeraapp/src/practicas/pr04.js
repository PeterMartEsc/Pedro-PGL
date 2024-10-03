/*
Reproducir el ejemplo anterior, pero cambiando que los atributos que reciba
sean: num1 y num2 y lo que muestre es:
La suma de num1 y num2 es: num1 + num2
(donde num1 y num2 serían los datos que recibiera el componente )
*/

import React from "react";
import PropTypes from 'prop-types'


const ComponenteApp = (props) => {


    return (
        <>
            <h3>Sumar números:</h3>
            <p>{props.num1} + {props.num2} = {props.num1+props.num2}</p>
        </>
    );
}

ComponenteApp.propTypes = {
    info: PropTypes.string.isRequired
}

export default ComponenteApp;