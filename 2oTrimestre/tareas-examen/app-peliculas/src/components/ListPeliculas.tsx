import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pelicula from '../models/Pelicula';


type Props = {}

interface Peliculas {
    results : Pelicula[];
}

const ListPeliculas = (props: Props) => {
    
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const uri : string  = "http://localhost:3000/";

    useEffect(() => {
        async function getPelicula(direccion : string){
            const response = await axios.get(direccion);
            let listaPeliculas = response.data as Peliculas;
            setPeliculas(listaPeliculas.results);
        }

        getPelicula(uri);
    }, [])

    return (
        <div></div>
    )
}

export default ListPeliculas