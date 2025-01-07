import React, { useEffect, useState } from 'react'
import '../../styles/styles.css';
import Pelicula from '../../models/Pelicula';
import axios from 'axios';

type Props = {
    bgtheme: string,
    texttheme: string,
}

const Inicio = (props: Props) => {

    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const [seleccionada, setseleccionada] = useState<Pelicula | null>(null);
    const uri : string  = "http://localhost:8000/api/peliculas/";

    useEffect(() => {
        async function getPelicula(direccion : string){
            const response = await axios.get(direccion);
            let listaPeliculas = response.data.data as Pelicula[];
            setPeliculas(listaPeliculas);
        }

        getPelicula(uri);
    }, [])

    useEffect(()=>{
        let random = Math.trunc(Math.random()*peliculas.length);
        /*if(random === 0){
            random = 1;
        }*/
        setseleccionada(peliculas[random]);
    }, [peliculas]);

    return (
        <div className={`contenedorEstandar bg-container-${props.bgtheme} p-4`}>
            <div className="peliculaMostrar d-flex mx-auto align-items-center">
                    <img src={`${seleccionada?.caratula}`} alt={seleccionada?.titulo} />
                    <div className="texto ms-3">
                        <h2><u>{seleccionada?.titulo}</u></h2>
                        <br />
                        <h4>
                            {
                                seleccionada?.direccion.map((direccion, index) => (
                                    <p key={index}>{direccion.nombre +" " + direccion.apellidos}{index < seleccionada.direccion.length - 1 ? ', ' : ''}</p>
                                ))
                            }

                        </h4>
                        <h5>
                            {
                                seleccionada?.actores.map((actores, index) => (
                                    <p key={index}>{actores.nombre +" " + actores.apellidos}{index < seleccionada.actores.length - 1 ? ', ' : ''}</p>
                                ))
                            }

                        </h5>
                        <h5>
                            {
                                seleccionada?.categorias.map((categorias, index) => (
                                    <p key={index}>{categorias.nombre}{index < seleccionada.actores.length - 1 ? ', ' : ''}</p>
                                ))
                            }
                            </h5>
                        <br />
                        <p>{seleccionada?.descripcion}</p>
                    </div>
            </div>
            <div className="boton d-flex justify-content-center mt-5">
                <button className='btn bg-secondary' onClick={()=>setPeliculas([...peliculas])}>Pelicula Random</button>
            </div>
        </div>
    )
}

export default Inicio