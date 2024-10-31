import React, { useState } from 'react'

type Props = {}

const Pr33 = (props: Props) => {

    const [resultado, setresultado] = useState<Number []>([]);

    function calcularPrimos(e:React.FormEvent<HTMLFormElement>){

        e.preventDefault();
        let formulario = e.currentTarget;
        let numMin = Number(formulario.numero1.value);
        let numMax = Number(formulario.numero2.value);

        for(let i = (numMin+1) ; i<numMax ; i++){
            let aux = 0;

            for(let j = 1 ;  j <= i ; j++){

                if(i%j == 0){
                    aux++;
                }

                
            }

            if(aux == 2){
                console.log(resultado);
                setresultado([...resultado, i]);
            }
        }
    }

    return (
        <>
            <form onSubmit={calcularPrimos}>
                <input type="text" name="numero1" id="numero1" />
                <input type="text" name="numero2" id="numero2" />
                <button type='submit'>Enviar</button>
            </form>
            {console.log(resultado[1])}

            {
                //imprime el array resultado
                resultado.map((num, index) => (
                    <p>{JSON.stringify(resultado)}</p>
                ))  //index es para identificar cada elemento del array para React
            }
        </>
    )
}

export default Pr33