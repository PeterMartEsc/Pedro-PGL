import React, { useState } from 'react';
import Reloj from './Reloj';

type Props ={
}
const RelojesMundiales = (props: Props) => {
    //const [count, setCount] = useState(0);
    //setCount(count + 1);
    
    return (
        <>
            
            <h1>Actividad react: Relojes mundiales</h1>
            <Reloj zona="Europe/Madrid"/>
            <Reloj zona="America/New_York" />
            <Reloj zona="Europe/London"/>
        </>
    )
}

export default RelojesMundiales;