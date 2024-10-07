/**
 * Crear el código anterior de componente Contador en un fichero nuevo y cargar
 * en index.tsx en la parte de renderizado: ReactDOM.render() ese componente
 * Probarlo en el navegador y comprobar que efectivamente cambia el contador con los click
 */

import React, { Component } from 'react'

class Contador extends Component {

    state = { count: 0 } // inicializamos el state a 0
    
    render () {
        const { count } = this.state // extraemos el count del state

        return (
            <div>
                <p>Has hecho click {count} veces</p>
                { /* Actualizamos el state usando el método setState */ }
                <button onClick={() => this.setState({ count: count + 1 })}>
                    Haz click!
                </button>
            </div>
        )
    }
}
export default Contador;

//Si se muestra correctamente