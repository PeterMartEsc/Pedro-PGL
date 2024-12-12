import React, { useEffect, useState } from 'react'
import Pelicula from '../../models/Pelicula';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/styles.css';

type Props = {
    bgtheme: string,
    texttheme: string,
    
}

const ListCategorias = (props: Props) => {
    
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const [categorías, setcategorías] = useState<string[]>([]);
    const [categoriaElegida, setcategoriaElegida] = useState("");
    const [peliculasCategoria, setpeliculasCategoria] = useState<Pelicula[]>([])
    const uri : string  = "http://localhost:3000/peliculas";


    useEffect(() => {

        async function getPelicula(direccion : string){
            const response = await axios.get(direccion);
            let listaPeliculas = response.data as Pelicula[];
            setPeliculas(listaPeliculas);
        }

        getPelicula(uri);
        
    }, [])

    useEffect(() => {
        let aux : string[] = [];

        if(peliculas.length>0){
            for(let i = 0 ; i < peliculas.length; i++){
                if(!aux.includes(peliculas[i].categoria)){
                    aux.push(peliculas[i].categoria);
                }
            }

            setcategorías(aux);
        }
        
    }, [peliculas])

    useEffect(() => {

        let aux : Pelicula[] = [];
        
        if(categoriaElegida!= ""){
            for(let i = 0 ; i < peliculas.length; i++){
                if(peliculas[i].categoria == categoriaElegida){
                    aux.push(peliculas[i]);
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
                    categorías.map((categoria, index) => (
                        <div key={index} className={`categoria-${props.bgtheme} mt-3`}>
                            <p className={`text-${props.texttheme}`} onClick={()=> setcategoriaElegida(categoria)}>{categoria}</p>
                        </div>
                    ))
                }
            </div>
            
            <div className={`listarPeliculas bg-container-${props.bgtheme} pt-3`}>
                {
                    peliculasCategoria.map((pelicula, index) => (
                        <div key={index} >
                            <Link to={`/peliculas/${pelicula.id}`}>
                                <img src={`http://localhost:3000/${pelicula.imagen}`} alt={pelicula.titulo} className='cartelera'/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListCategorias