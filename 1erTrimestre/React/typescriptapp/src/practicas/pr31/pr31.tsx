import React, { useState } from 'react'
import './style.css'

type Props = {}

const Pr31 = (props: Props) => {
    const [contador, setcontador] = useState(1)
    const [arrayNumeros, setarrayNumeros] = useState<number []>([1, 2, 3, 4, 5, 6, 7, 8, 9])


    function comprobar(){

    }

    return (
        <>
        <h2>Memory: {contador}</h2>
        <div className="grid">
            {
                arrayNumeros.map((num, index) => (
                    <button key={index} className={`btn${num} ${num > contador? 'inactive' : 'active'}`} onClick={comprobar}>
                        {num}
                    </button>
                ))
            }
        </div>
        </>    
    )
}

export default Pr31