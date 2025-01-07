import React, { useEffect, useState } from 'react'
import '../../styles/styles.css';
import { useNavigate } from 'react-router-dom';
import Pelicula from '../../models/Pelicula';
import axios from 'axios';
import Categoria from '../../models/Categoria';
import Director from '../../models/Director';
import Actor from '../../models/Actor';

type Props = {
    bgtheme: string,
    texttheme: string,
}

const CrearPelicula = (props: Props) => {

    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const [actores, setActores] = useState<Actor[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [directores, setDirectores] = useState<Director[]>([]);
    const [path, setpath] = useState("");

    const uriPeliculas : string  = "http://localhost:8000/api/peliculas/";
    const uriActores : string  = "http://localhost:8000/api/actores/";
    const uriCategorias : string  = "http://localhost:8000/api/categorias/";
    const uriDirectores : string  = "http://localhost:8000/api/directores/";

    const navigate = useNavigate();

    useEffect(() => {
        async function getPeliculas(direccion : string){
            const response = await axios.get(direccion);
            let listaPeliculas = response.data.data as Pelicula[];
            setPeliculas(listaPeliculas);
        }
        
        getPeliculas(uriPeliculas);

        async function getActores(direccion : string){
            const response = await axios.get(direccion);
            let listaActores = response.data.data as Actor[];
            setActores(listaActores);
        }

        getActores(uriActores);

        async function getCategorias(direccion : string){
            const response = await axios.get(direccion);
            let listaCategorias = response.data.data as Categoria[];
            setCategorias(listaCategorias);
        }

        getCategorias(uriCategorias);

        async function getDirectores(direccion : string){
            const response = await axios.get(direccion);
            let listaDirectores = response.data.data as Director[];
            setDirectores(listaDirectores);
        }

        getDirectores(uriDirectores);
    }, [])

    async function subirfichero(event: React.ChangeEvent<HTMLInputElement>){
        let file = event.target.files?.[0]; 
        
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            try {
                let response = await axios.post('http://localhost:8000/api/upload',
                    formData, {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    }
                );

                let respuesta = "";
                if(response.data){ 
                    respuesta = JSON.stringify(response.data); 
                }
                setpath(respuesta);

            } catch (error) { 
                console.log("error dice: "+error); 
            }
        }
    }

    async function crearPelicula(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        let formulario = event.currentTarget;

        let titulo = formulario.titulo.value;
        let anio = formulario.anio.value;
        let directores = formulario.directores.value;
        let actores = formulario.actores.value;
        let descripcion = formulario.argumento.value;
        let categorias = formulario.categorias.value;
        let caratula = formulario.caratula.value;
        let trailer = formulario.trailer.value;

        /**if(titulo == null || director == null || actores == null || argumento == null || categoria == null){
            alert("Rellene todos los campos");
            return;
        }**/

        const peliculaCrear = {
            //id,
            "titulo" : titulo,
            "year": anio,
            "descripcion": descripcion,
            "caratula": caratula,
            "route" : "route",
            "trailer": trailer,
            "actores": actores,
            "categorias": categorias,
            "directores": directores,
        }

        try {
            // Realizar la solicitud POST al servidor por medio del axios
            await axios.post(uriPeliculas, peliculaCrear);
                alert('Película creada exitosamente');
                //navigate('/buscar-pelicula'); // Redirigir tras la creación
        } catch (error) {
            console.log('Error al crear la película:', error);
            alert('Hubo un error al crear la película');
        }
        navigate('/crear-pelicula');
    }

    return (
        <div className={`bg-container-${props.bgtheme} contenedorEstandar p-3`}>
            <div className="formulario m-auto">
                <form onSubmit={crearPelicula}>

                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="titulo">Titulo</label>
                            <input type="text" className="form-control my-2" id="titulo" placeholder="Titulo"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="anio">Año</label>
                            <input type="text" className="form-control my-2" id="anio" placeholder="Año"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                                <label htmlFor="categorias">Categorias</label>
                                <select multiple className="form-select mb-2" id="categorias" >
                                    {
                                        categorias.map((categoria, index) => (
                                            <option key={index} value={categoria.nombre}>{categoria.nombre}</option>
                                        ))
                                    }
                                </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="director">Dirección</label>
                            <select multiple className="form-select mb-2" id="directores" >
                                    {
                                        directores.map((director, index) => (
                                            <option key={index} value={director.nombre}>{director.nombre+" "+director.apellidos}</option>
                                        ))
                                    }
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="actores" className="form-label">Actores</label>
                        <select multiple className="form-select mb-2" id="actores" >
                            {
                                actores.map((actor, index) => (
                                    <option key={index} value={actor.nombre}>{actor.nombre+" "+actor.apellidos}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion" className="form-label">Descripcion</label>
                        <textarea className="form-control mb-2" id="descripcion" rows={3} placeholder='En un lugar de la mancha...'></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="caratula">Caratula</label>
                        <input type="file" className="form-control my-2" id="caratula" onChange={subirfichero}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="trailer">Trailer</label>
                        <input type="text" className="form-control my-2" id="trailer" placeholder="Trailer" />
                    </div>
                    <input type="hidden" id="path" value={path}/>   
                    <button type="submit" className="btn btn-success my-2">Crear</button>
                </form>
            </div>
        </div>
    )
}

export default CrearPelicula