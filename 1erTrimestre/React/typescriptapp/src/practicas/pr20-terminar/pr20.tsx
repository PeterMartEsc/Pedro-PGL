import React, { useEffect, useState } from 'react'

type Props = {}

const Pr20 = (props: Props) => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [acertado, setacertado] = useState(false);
    const [randomNum, setrandomNum] = useState(0)
    // Math.floor((Math.random() * 9));
    //let acertado = false;
    const [result, setresult] = useState("Numero no acertado")
    //let result = ;

    useEffect(() => {
        setrandomNum(Math.floor((Math.random() * 9)));
    
    }, [])

    function apostar(number : number){
        if(number === randomNum){
            setresult( "¡Has acertado!");
            setacertado(true);      
        }

        //setacertado(false);
    }


    function restart(){
        setrandomNum(Math.floor((Math.random() * 9)));
        setacertado(false);
        setresult("Numero no acertado");
    }
    

    return (
        <>
            <h2>Acertar número</h2>
            {
            array.map((nombre, key) => {
                return <button onClick={() => apostar(nombre)}>{nombre}</button>
            })
            }
            <p>{result}</p>
            {
                acertado ? <button onClick={restart}>Reiniciar</button> : <p></p>
            }
        </>
    )
}

export default Pr20