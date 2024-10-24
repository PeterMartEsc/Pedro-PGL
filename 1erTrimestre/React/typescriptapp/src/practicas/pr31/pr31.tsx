import React, { useRef, useState } from 'react'
import './style.css'
import Boton from './Boton'

type Props = {}

const Pr31 = (props: Props) => {
    const [fallos, setfallos] = useState(0);
    const [arrayNumeros, setarrayNumeros] = useState<Boton []>([new Boton(1), new Boton(2), new Boton(3), new Boton(4), new Boton(5), new Boton(6), new Boton(7), new Boton(8)]); 
    
    const [countEnd, setcountEnd] = useState<boolean>(false);

    const [contador, setcontador] = useState(3);
    const refTimer = useRef<ReturnType<typeof setInterval>>();
    const refNumero = useRef<number>(3);

    function actualizarHora(){

        if(refNumero.current === 0){
            clearInterval(refTimer.current);
            return;
        }

        refNumero.current = refNumero.current - 1;
        setcontador(refNumero.current);
        setcountEnd(true);
    }

    function reiniciar(){
        refTimer.current = setInterval(actualizarHora, 1000);
        //console.log('hola');
        setcountEnd(false);
    }

    function comprobar(boton : Boton){
        //setbuttonPressed(false);
        setfallos(fallos+1);
    }

    function mostrarNumero(boton : Boton){
        //setbuttonPressed(true);
    }

    return (
        <>
        <h2>Memory: {fallos}</h2>
        {contador}
        <div className="grid">
            {
                arrayNumeros.map((num, index) => (
                    <button key={index} onMouseDown={()=>mostrarNumero(num)} onMouseUp={()=>comprobar(num)}>
                        {num.id}
                    </button>
                ))
            }
        </div>
        <br />
        <button onClick={reiniciar}>Iniciar</button>
        </>    
    )
}

export default Pr31