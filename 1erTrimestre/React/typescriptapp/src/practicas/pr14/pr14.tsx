import React, { useState } from 'react'
import Pr09 from '../pr09-modificadoPr14/pr09';

type Props = {

}

const pr14 = (props: Props) => {
    let arr = [2, 3, 4, 5, 6 , 7, 8, 9, 10];
    
    return(
        <div className="grid">
            {
                    arr.map( (elemento/*,index*/)=>{
                        return <Pr09  num={elemento}/>;
                    })
            }
        </div>
    );
    


}

export default pr14