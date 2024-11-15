import React, { useEffect, useRef, useState } from 'react'
import Game from '../modelos/Game'

type Props = {}

const Ahorcado = (props: Props) => {
    //UseStates de Game
    const [game, setgame] = useState<Game>(new Game());
    const [palabra, setPalabra] = useState("secreto");
    const [resultado, setResultado] = useState<string []>([]);

    const [errores, seterrores] = useState(0);
    const [letrasUsadas, setletrasUsadas] = useState<string []>([]);

    //UseStates del Ahorcado
    const [apuesta, setApuesta] = useState("");
    const [perdido, setperdido] = useState(false);
    const [terminado, setterminado] = useState(false);
    const [reiniciar, setreiniciar] = useState(false);

    //const refPartida = useRef(new Game())

    useEffect(() => {
        //Creamos nuevo game
        let newGame = new Game();
        //newGame.generarPalabraAleatoria();
        //Guardamos el game
        setgame(newGame);
        console.log(game.palabra);
        //Actualizamos el resto de cosas
        actualizar();
        reiniciarJuego();
        setreiniciar(false);
    }, [reiniciar])
    

    function actualizar(){
        setResultado([...game.resultado]);
        setletrasUsadas([...game.letrasUsadas]);
        seterrores(game.countErrores);
    }

    function reiniciarJuego(){
        setperdido(false);
        setterminado(false);
    }

    function comprobarApuesta(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(apuesta.length === 1){
            game.comprobarLetra(apuesta);
            actualizar();
        }

        setApuesta("");
        
        if(game.comprobarFinal() == true){
            setPalabra(game.palabra);
            setterminado(true);
        } 

        if(game.countErrores === 6){
            setperdido(true);
            setPalabra(game.palabra);
            setterminado(true);
        }  

    }

    return (
        <>
            <p>Palabra acertar: {resultado.join(" ")}</p>
            <form onSubmit={comprobarApuesta}>
                <input type="text" name="letra" onChange={(e)=> setApuesta(e.target.value)} value={apuesta}/>
                <button type='submit'>Enviar</button>
            </form>

            <p>Resultado: {palabra}</p>
            <p>
                {
                    perdido ? "ha perdido" : "" 
                }
            </p>
                {
                    terminado && <button onClick={() => setreiniciar(true)}>Reiniciar</button>
                }
        </>
    )
}

export default Ahorcado