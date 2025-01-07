import React, { useEffect, useState } from 'react'
import Pelicula from '../../models/Pelicula';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/styles.css';
import Categoria from '../../models/Categoria';

type Props = {
    bgtheme: string,
    texttheme: string,
    
}

const ListCategorias = (props: Props) => {
    
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoriaElegida, setcategoriaElegida] = useState<Categoria>();
    const [peliculasCategoria, setpeliculasCategoria] = useState<Pelicula[]>([])

    const uriPeliculas : string  = "http://localhost:8000/api/peliculas";
    const uriCategorias : string  = "http://localhost:8000/api/categorias";


    useEffect(() => {

        async function getPelicula(direccion : string){
            const response = await axios.get(direccion);
            let listaPeliculas = response.data.data as Pelicula[];
            setPeliculas(listaPeliculas);
        }

        getPelicula(uriPeliculas);
        
        async function getCategorias(direccion : string){
            const response = await axios.get(direccion);
            let listaCategorias = response.data.data as Categoria[];
            setCategorias(listaCategorias);
        }

        getCategorias(uriCategorias);
    }, [])

    /*useEffect(() => {
        let aux : string[] = [];

        if(peliculas.length>0){
            for(let i = 0 ; i < peliculas.length; i++){
                if(!aux.includes(peliculas[i].categoria)){
                    aux.push(peliculas[i].categoria);
                }
            }

            setcategorías(aux);
        }
        
    }, [peliculas])*/

    useEffect(() => {

        let aux : Pelicula[] = [];
        
        if(categoriaElegida!= undefined){
            for(let i = 0 ; i < peliculas.length; i++){
                for(let j = 0 ; j < peliculas[i].categorias.length; j++){
                    if(peliculas[i].categorias[j].id == categoriaElegida.id){
                        aux.push(peliculas[i]);
                    }
                }
            }
            setpeliculasCategoria(aux);
        }
    }, [categoriaElegida])

    
    return (
        <div className={`contenedorEstandar bg-container-${props.bgtheme}`}>
            {/*<form className="form-inline d-flex justify-content-center">
                <input onChange={(e)=>setbusqueda(e.target.value)} className={`form-control my-2 bg-${props.texttheme}`} type="search" placeholder="Search" aria-label="Search" id='search'/>
            </form>*/}
            <div className={`listarPeliculas bg-container-${props.bgtheme}`}>
                {
                    categorias.map((categoria, index) => (
                        <div key={index} className={`categoria-${props.bgtheme} mt-3`}>
                            <p className={`text-${props.texttheme}`} onClick={()=> setcategoriaElegida(categoria)}>{categoria.nombre}</p>
                        </div>
                    ))
                }
            </div>
            
            <div className={`listarPeliculas bg-container-${props.bgtheme} pt-3`}>
                {
                    peliculasCategoria.map((pelicula, index) => (
                        <div key={index} >
                            <Link to={`/peliculas/${pelicula.id}`}>
                                <img src={`http://localhost:3000/${pelicula.caratula}`} alt={pelicula.titulo} className='cartelera'/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListCategorias