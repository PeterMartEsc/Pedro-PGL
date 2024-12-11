import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pelicula from '../models/Pelicula';
import '../styles/styles.css'
import { Link } from 'react-router-dom';


type Props = {
    bgtheme: string,
    texttheme: string,
}

/*interface Peliculas {
    results : Pelicula[];
}*/

const ListPeliculas = (props: Props) => {
    
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const [arrayMostrar, setArrayMostrar] = useState<Pelicula[]>([]);
    const [busqueda, setbusqueda] = useState("");

    const uri : string  = "http://localhost:3000/peliculas";

    useEffect(() => {

        async function getPelicula(direccion : string){
            const response = await axios.get(direccion);
            let listaPeliculas = response.data as Pelicula[];
            setPeliculas(listaPeliculas);
            setArrayMostrar(listaPeliculas);
        }

        getPelicula(uri);
        
    }, [])

    //console.log(peliculas);

    useEffect(() => {
        let aux = [];

        //Si lo escrito en el input es mayor que 0, hay busqueda -> se busca
        if(busqueda.length>0){            

            //Bucle para comprobar el titulo
            for(let i = 0; i < peliculas.length; i++) {
                //Si el titulo en lower case incluye la busqueda en lower case, se hace push al array aux
                if((peliculas[i].titulo.toLowerCase()).includes(busqueda.toLowerCase())){
                    aux.push(peliculas[i]);
                }
            }

            //El array que se muestra es el de la busqueda
            setArrayMostrar([...aux]);
        } else {

            //Si no hay busqueda, se muestra el array original de peliculas en pantalla
            setArrayMostrar([...peliculas]);
        }
        

    }, [busqueda])

    return (

        <div className={`contenedorEstandar bg-container-${props.bgtheme}`}>
            <form className="form-inline d-flex justify-content-center">
                <input onChange={(e)=>setbusqueda(e.target.value)} className={`form-control my-2 bg-${props.texttheme}`} type="search" placeholder="Search" aria-label="Search" id='search'/>
            </form> 
            <div className={`listarPeliculas bg-container-${props.bgtheme}`}>
                {
                    arrayMostrar.map((pelicula, index) => (
                        <div key={index} className={"pelicula"+index}>
                            <Link to={`/peliculas/${pelicula.id}`} >
                                <img src={`http://localhost:3000/${pelicula.imagen}`} alt={pelicula.titulo} className='cartelera'/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListPeliculas