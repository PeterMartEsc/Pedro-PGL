import React, { useEffect, useState } from 'react'
import '../styles/index.css'
import Casilla from '../modelos/Casilla';
import Dibujarfiguras from './Dibujarfiguras';

type Props = {}

const DibujarfigurasPadre = (props: Props) => {

    const [casillas, setCasillas] = useState<Casilla[]>([]);
    const [casillasPintar, setCasillasPintar] = useState<number[]>([]);
    const [figura, setFigura] = useState<string>(" ");
    const [refresh, setrefresh] = useState<boolean>(false);


    useEffect(() => {
        let maximo = 45;
        let arrayCasillasAux = [];

        for(let i = 0; i<maximo; i++){
            let nuevaCasilla = new Casilla(i);
            arrayCasillasAux[i] = nuevaCasilla; 
        }

        setCasillas([...arrayCasillasAux]);
    }, [])

    function setCasilla(id : number){

        if(!casillasPintar.includes(id)){
            setCasillasPintar([...casillasPintar, id]);
        }
    }

    function setFigurasCasillas(){

        for(let i = 0; i<45; i++){
            if(casillasPintar.includes(casillas[i].id)){
                casillas[i].contenido = figura;
            }
        }

        if(refresh){
            setrefresh(false);
        } else {
            setrefresh(true);
        }
        
        setCasillasPintar([]);
    }

    return(
        <>
            <Dibujarfiguras setFigura={setFigura}/>
            <br/>
            <div className='tablero'>
                {
                    casillas.map((casilla, index) => (
                        <div key={index} className='casilla' onClick={() =>setCasilla(casilla.id)}>
                            <p>{casilla.contenido}</p>
                        </div>
                    ))
                }
                
            </div>
            <button onClick={setFigurasCasillas} className="dibujar">Dibujar {figura}</button>
            {casillasPintar}
        </>
    )
}

export default DibujarfigurasPadre
