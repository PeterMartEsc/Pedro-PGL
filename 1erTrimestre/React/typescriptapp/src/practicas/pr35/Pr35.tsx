import React, { useRef, useState } from 'react'

type Props = {

}

const EjStateByProps = (props: Props) => {

    const [respuesta, setRespuesta] = useState<string>("");

    function escribirRespuesta(dato : string) {
        setRespuesta(dato);
    }

    return (
        <div>
            <h2>EjStateByProps</h2>
            <p><b>Mensaje recibido: </b>El hijo dice:{respuesta}</p>
            <ComponenteA escribirRespuesta={escribirRespuesta}/>
            <ComponenteB escribirRespuesta={escribirRespuesta}/>
        </div>
    )
}

interface Iprops{
    escribirRespuesta: (dato:string)=>void;
}

const ComponenteA = (props: Iprops) => {

    function establecerRespuesta(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        let elForm = e.currentTarget;
        
        let respuesta = elForm.inputA.value as string;
        props.escribirRespuesta(" Desde HijoA dice: " + respuesta);
    }

    return (
        
        <div>
            <h2>Componente hijo A</h2>
            <form onSubmit={establecerRespuesta}>
            <input type="text" name="inputA"  />
            <button type='submit'>okkkk </button>
            </form>
            
        </div>
    )
}

const ComponenteB = (props: Iprops) => {
    
    const {escribirRespuesta} = props;
    
    function establecerRespuesta(){
        let respuesta = "" +Math.random()*100;
        
        props.escribirRespuesta(" Desde hijo B: "+ respuesta);
    }
    return (
        <div>
            <h2>Componente hijo B</h2>
            <button onClick={establecerRespuesta}>Avisar padre desde B</button>
        </div>
    )
}

export default EjStateByProps