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

    console.log(peliculas);

    return (
        <div>{JSON.stringify(peliculas)}</div>
    )
}

export default ListPeliculas