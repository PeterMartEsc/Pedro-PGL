import React, { useEffect } from 'react'

type Props = {}

const Pr20 = (props: Props) => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let randomNum = Math.floor((Math.random() * 9));
    let acertado = false;
    let result = "Numero no acertado";

    function apostar(number : number){
        if(number == randomNum){
            acertado = true;
        }
    }

    useEffect(() => {
        result = "¡Has acertado!" 
    
    }, [acertado])
    

    return (
        <>
            <h2>Acertar número</h2>
            {
            array.map((nombre, key) => {
                return <button onClick={() => apostar(nombre)}>{nombre}</button>
            })
            }
            <p>{result}</p>
        </>
    )
}

export default Pr20