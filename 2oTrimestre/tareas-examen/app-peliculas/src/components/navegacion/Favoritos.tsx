import React, { useContext } from 'react'
import { AppContext } from '../principal/AppContextProvider';
import { Link } from 'react-router-dom';

type Props = {
    bgtheme: string,
    texttheme: string
}

const Favoritos = (props: Props) => {
    //const context = useContext(AppContext);
    const {peliculasDestacadas} = useContext(AppContext);

    return (
        <div className={`contenedorEstandar bg-container-${props.bgtheme}`}>
            
            <div className={`listarPeliculas bg-container-${props.bgtheme}`}>
                {
                    peliculasDestacadas.map((pelicula, index) => (
                        <div key={index} >
                            <Link to={`/peliculas/${pelicula.id}`} >
                                <img src={`${pelicula.caratula}`} alt={pelicula.titulo} className='cartelera'/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>    )
}

export default Favoritos