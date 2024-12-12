import React, { useContext, useEffect, useState } from 'react'
import '../../styles/styles.css';
import Pelicula from '../../models/Pelicula';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { AppContext } from '../principal/AppContextProvider';

type Props = {
    bgtheme: string,
    texttheme: string,
}

function ViewPelicula(props: Props) {

    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const [peliculaCargada, setpeliculaCargada] = useState <Pelicula | null>(null);
    const { id } = useParams<{ id: string }>();
    const uri : string  = "http://localhost:3000/peliculas/";
    const navigate = useNavigate();
    const { peliculasDestacadas } = useContext(AppContext);
    const {setPeliculasDestacadas} = useContext(AppContext);



    useEffect(() => {
        async function getPelicula(direccion : string){
            const response = await axios.get(direccion);
            let listaPeliculas = response.data as Pelicula[];
            setPeliculas(listaPeliculas);
        }

        getPelicula(uri);
    }, [])

    useEffect(() => {
        
        const peliculaEncontrada = peliculas.find(pelicula => pelicula.id === id);    

        if (peliculaEncontrada) {
            setpeliculaCargada(peliculaEncontrada);
        }
        //console.log(id);

    }, [peliculas])

    async function borrar(){
        //const peliculaEncontrada = peliculas.find(pelicula => pelicula.id === idValidado); 
        
        try {
            // Realizar la solicitud POST al servidor
            await axios.delete(uri+id);
                alert('Película borrada exitosamente');
                //navigate('/buscar-pelicula'); // Redirigir tras la creación

        } catch (error) {
            console.log('Error al borrar la película:', id);
            alert('Hubo un error al borrar la película');
        }
        navigate('/buscar-pelicula');
    }

    function destacarPelicula(){

        if (peliculaCargada) {
            // Verificar si la película ya está en la lista de destacadas
            const yaDestacada = peliculasDestacadas.some(pelicula => pelicula.id === peliculaCargada.id);
    
            if (!yaDestacada) {
                // Si no está, la agregamos
                setPeliculasDestacadas([...peliculasDestacadas, peliculaCargada]);
            } else {
                alert('Esta película ya está destacada.');
            }
        }
    }
    
    return (
        <div className={`contenedorEstandar bg-container-${props.bgtheme} p-4`}>
            <div className="peliculaView d-flex mx-auto align-items-center">
                    <img src={`http://localhost:3000/${peliculaCargada?.imagen}`} alt={peliculaCargada?.titulo} />
                    <div className="ms-3">
                        <h3><u>{peliculaCargada?.titulo}</u></h3>
                        <br />
                        <h5>{peliculaCargada?.direccion}</h5>
                        <h5>{peliculaCargada?.actores}</h5>
                        <h5>{peliculaCargada?.categoria}</h5>
                        <br />
                        <p>{peliculaCargada?.argumento}</p>
                        <div className=''>
                            <ReactPlayer
                                url={peliculaCargada?.trailer}
                                
                                controls
                                width="400px"
                                height="300px"
                            />
                        </div>
                    </div>
            </div>
            <div className="boton d-flex justify-content-center mt-2">
                <Link to={`/peliculas/edit/${peliculaCargada?.id}`} >
                    <button className="btn btn-success me-3">Editar</button>
                </Link>
                <button onClick={borrar} className="btn btn-danger me-3">Borrar</button>
                <button onClick={destacarPelicula} className="btn btn-warning">Destacar</button> 
            </div>
        </div>
    )
}

export default ViewPelicula