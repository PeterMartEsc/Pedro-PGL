import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pelicula from '../models/Pelicula';


type Props = {}

/*interface Peliculas {
    results : Pelicula[];
}*/

const ListPeliculas = (props: Props) => {
    
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const uri : string  = "http://localhost:3000/peliculas";

    useEffect(() => {
        async function getPelicula(direccion : string){
            const response = await axios.get(direccion);
            let listaPeliculas = response.data as Pelicula[];
            setPeliculas(listaPeliculas);
        }

        getPelicula(uri);
    }, [])

    //console.log(peliculas);

    return (
        <div className='contenedorPrincipal'>
            {
                peliculas.map((pelicula, index) => (
                    <div key={index} className={'pelicula'+index}>
                        <img src={`http://localhost:3000/${pelicula.imagen}`} alt="" />
                        {/*<h2>{pelicula.imagen}</h2>
                        <p>{peliculas.overview}</p>
                        <p>Año: {pelicula.release_date.slice(0, 4)}</p>*/}
                    </div>
                ))
            }
        </div>
    )
}

export default ListPeliculas