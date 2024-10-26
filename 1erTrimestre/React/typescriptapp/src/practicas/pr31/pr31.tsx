import React, { useRef, useState } from 'react'
import './style.css'
import Boton from './Boton'

type Props = {}

const Pr31 = (props: Props) => {
    //Variables contador inicial
    const refTimer = useRef<ReturnType<typeof setInterval>>();
    const refNumero = useRef<number>(3);
    const [contador, setcontador] = useState(3);

    const [countEnd, setcountEnd] = useState<boolean>(false);

    //Utilidades principales
    const [arrayNumeros, setarrayNumeros] = useState<Boton []>
        ([new Boton(1), new Boton(2), new Boton(3), new Boton(4),
        new Boton(5), new Boton(6), new Boton(7), new Boton(8)]);
    
    const [aux, setaux] = useState(1);

    const [resultado, setresultado] = useState("");


    //Variable mostrar numeros o no
    const [botonActualRefresh, setbotonActualRefresh] = useState<number | null>(null);
    


    //Variable contar fallos
    const [fallos, setfallos] = useState(0);


    function iniciar(){

        //Mezcla el array
        setarrayNumeros([...arrayNumeros].sort(() => Math.random() - 0.5));

        //Reinicia el contador y el timer, contador de fallos, y booleano
        if(refNumero.current === 0){
            reiniciarPartida();
        }

        //Repite la cuenta atrás
        refTimer.current = setInterval(actualizarHora, 1000);
    }

    function reiniciarPartida(){
    
        setcontador(3);
        refNumero.current = 3;
        setfallos(0);
        setcountEnd(false);
        setaux(1);
        setresultado("");

        for(let i = 0; i < 8; i++){
            arrayNumeros[i].mostrando = false;
        }

    }

    function actualizarHora(){

        if(refNumero.current === 0){
            clearInterval(refTimer.current);
            setcountEnd(true);
            return;
        }

        refNumero.current = refNumero.current - 1;
        setcontador(refNumero.current);
    }

    function comprobar(boton : Boton){
        
        if(boton.id !== aux){
            setfallos(fallos+1);
            boton.mostrando = false;
        } else {
            setaux(aux+1);
        }

        if(aux === 8){
            setresultado("¡Ha ganado con "+fallos+" fallos!");
        }

        //Sentencia que ayuda a mostrar el numero o no
        setbotonActualRefresh(null);
    }

    function mostrarNumero(boton : Boton){

        //Evitar el click previo
        if(contador > 0){
            alert("Espere a que acabe de contar");
        }

        //Evitar el doble click
        if(boton.mostrando){
            alert("Numero acertado");
        }
        //Sentencia que ayuda a mostrar el numero o no
        setbotonActualRefresh(boton.id);
        boton.mostrando = true;
    }

    return (
        <>
            <h2>Memory: {fallos}</h2><button onClick={iniciar}>Iniciar</button>
            <p>Tiempo de visualización: {contador}</p>
            <div className="grid">
                {
                    arrayNumeros.map((num, index) => (
                        <button className="numeros" key={index} onMouseDown={()=>mostrarNumero(num)} onMouseUp={()=>comprobar(num)}>
                            {countEnd ? (num.mostrando ? num.id :'.') : num.id}
                        </button>
                    ))
                }
            </div>
            <br />
            <p>{resultado}</p>
        </>
    )
}

export default Pr31