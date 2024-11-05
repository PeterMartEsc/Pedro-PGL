import React, { useEffect, useState } from 'react'

type Props = {}

const Pr37 = (props: Props) => {

    const [numAleatorio, setnumAleatorio] = useState<number>(0)
    
    function generar(){
        setnumAleatorio((Math.floor(Math.random() * 99))+1);
    }
    
    return (
        <>
            <div className="izq">
                <h2>Componente Padre crea numero para enviar a componente hijo</h2>
                <p>Al pulsar el boton se crea el numero que se envia al componente que lo descompone</p>
                <button onClick={generar}>Crear numero y enviar al componente</button>
            </div>

            <div className="der">
                <ComponenteHijo numeroAleatorio={numAleatorio}/>
            </div>
        </>
    )
}

type Iprops = {
    numeroAleatorio : number;
}

const ComponenteHijo = (props: Iprops) => {

    const [descomposicion, setdescomposicion] = useState(" ");

    function descomponer(numero : number){
        let descomposicionVar = "";
        //let resultado = 0;

        for(let i = 2 ; i < props.numeroAleatorio;){
            if(numero % i == 0){
                numero /= i;
                descomposicionVar += i+" * "+numero+" , ";
            } else {
                i++;
            }
        }

        setdescomposicion(descomposicionVar);
    }

    useEffect(() => {

        descomponer(props.numeroAleatorio);

    }, [props.numeroAleatorio])
    
    return (
        <>
            <h5>Componente hijo</h5>
            <input type="text" name="numAleatorio" id="numAleatorio" value={JSON.stringify(props.numeroAleatorio)}/>
            <br />
            <textarea name="descomposicion" id="descomposicion" value={descomposicion}></textarea>
        </>
    )
}

export default Pr37

/*
if(props.numeroAleatorio % 2 == 0){
            
        } else if(props.numeroAleatorio % 3 == 0){
            setdescomposicion(" 3 * " + (props.numeroAleatorio/3));
        } else if(props.numeroAleatorio % 5 == 0){
            setdescomposicion(" 5 * " + (props.numeroAleatorio/5));
        }
 */