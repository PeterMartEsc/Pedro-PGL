import React from 'react'

type Props = {
    num1?:number, 
    num2?:number;
}

const Pr05 = (props: Props) => {
    return (
        <div>
            <h2>Suma de {props.num1} y {props.num2}:</h2>
            <p>{props.num1}+ {props.num2}</p>
        </div>
    )
}

export default Pr05

////pr05<pr05 num1={2} num2={3}/>