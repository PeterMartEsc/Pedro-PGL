import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pelicula from '../models/Pelicula';
import '../styles/styles.css'
import { Link } from 'react-router-dom';


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
        <div className='contenedorListarPeliculas bg-container'>
            {
                peliculas.map((pelicula, index) => (
                    <div key={index} className={"pelicula"+index}>
                        <Link to={`/peliculas/${pelicula.id}`} >
                            <img src={`http://localhost:3000/${pelicula.imagen}`} alt={pelicula.titulo} className='cartelera'/>
                        </Link>
                        {/*<h2>{pelicula.imagen}</h2>
                        <p>{peliculas.overview}</p>
                        <p>Año: {pelicula.release_date.slice(0, 4)}</p>
                        On CLick y a cartelera especifica
                        */}
                    </div>
                ))
            }
        </div>
    )
}

export default ListPeliculas