import React from 'react'
import Reloj from '../pr06/Reloj';

type Props = {}

const Pr16 = (props: Props) => {

    const array = ["london/", "madrid/"];

    return (
        <div>
            {
            array.map((nombre, key) => {
                return <Reloj zona={nombre} />
            })
            }
        </div>
    )
}

export default Pr16