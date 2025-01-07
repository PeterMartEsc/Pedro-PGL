import React, {useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Pelicula from '../../models/Pelicula';
import '../../styles/styles.css';
import axios from 'axios';

type Props = {
    bgtheme: string,
    texttheme: string,
}

const EditarPelicula = (props: Props) => {
    
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const uri : string  = "http://localhost:8000/api/peliculas/";
    const { id } = useParams<{ id: string }>();
    const [peliculaCargada, setpeliculaCargada] = useState <Pelicula | null>(null);
    const navigate = useNavigate()

    useEffect(() => {
        async function getPeliculas(direccion : string){
            const response = await axios.get(direccion);
            let listaPeliculas = response.data.data as Pelicula[];
            setPeliculas(listaPeliculas);
        }

        getPeliculas(uri);
    }, [])

    useEffect(() => {
        
        const peliculaEncontrada = peliculas.find(pelicula => pelicula.id === id);    

        if (peliculaEncontrada) {
            setpeliculaCargada(peliculaEncontrada);
        }

    }, [peliculas])

    async function actualizar(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        let formulario = event.currentTarget;
        let titulo = formulario.titulo.value;
        let director = formulario.director.value;
        let actores = formulario.actores.value;
        let argumento = formulario.argumento.value;
        let imagen = formulario.cartelera.value;
        let categoria = formulario.categoria.value;
        let trailer = formulario.trailer.value;

        if(titulo == null || director == null || actores == null || argumento == null || categoria == null){
            alert("Rellene todos los campos");
            return;
        }

        /*if(imagenInternet != null && imagenExistente != null){
            alert("Rellene solo un campo para la cartelera");
            return;
        }*/

        const peliculaActualizar = {
            titulo,
            director,
            actores,
            argumento,
            imagen: '',
            categoria,
            trailer:''
        }

        if(imagen != ""){
            peliculaActualizar.imagen = imagen;
        }

        if(trailer != ""){
            peliculaActualizar.trailer = trailer;
        }

        try {
            // Realizar la solicitud POST al servidor
            await axios.patch(uri+id, peliculaActualizar);
                alert('Película actualizada exitosamente');
                //navigate('/buscar-pelicula'); // Redirigir tras la creación

        } catch (error) {
            //console.log('Error al actualizar la película:', error); imprime por consola el error para detectarlo
            alert('Hubo un error al actualizar la película');
        }
        navigate('/buscar-pelicula');
    }

    return (
        <div className={`bg-container-${props.bgtheme} contenedorEstandar p-3`}>
            <div className="formulario m-auto">
                <form onSubmit={actualizar}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="titulo">Titulo</label>
                            <input type="text" className="form-control my-2" id="titulo" placeholder="Titulo" defaultValue={peliculaCargada?.titulo}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="director">Dirección</label>
                            <input type="text" className="form-control my-2" id="director" placeholder="Dirección" defaultValue={peliculaCargada?.direccion.map(director => director.nombre).join(', ')}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="actores" className="form-label">Actores</label>
                        <textarea className="form-control mb-2"  id="actores" rows={2} placeholder='John Doe, Anonimo, Jane Doe, ...' defaultValue={peliculaCargada?.actores.map(actor => actor.nombre).join(', ')}></textarea>
                    </div>
                    <div className="">
                        <label htmlFor="argumento" className="form-label">Argumento</label>
                        <textarea className="form-control mb-2" id="argumento" rows={3} placeholder='En un lugar de la mancha...' defaultValue={peliculaCargada?.descripcion}></textarea>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                                <label htmlFor="categoria" className="form-label">Categoria</label>
                                <input type="text" className="form-control my-2" id="categoria" placeholder="Categoria" defaultValue={peliculaCargada?.categorias.map(categorias => categorias.nombre).join(', ')}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cartelera" className="form-label">Cartelera</label>
                            <select className="form-select" id="cartelera" >
                                {
                                    peliculas.map((pelicula, index) => (
                                        <option key={index} value={pelicula.caratula} selected={pelicula.id == id}>{pelicula.caratula}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="trailer">Trailer</label>
                        <input type="text" className="form-control my-2" id="trailer" placeholder="Trailer" defaultValue={peliculaCargada?.trailer}/>
                    </div>
                    <button type="submit" className="btn btn-success my-2 me-3">Actualizar</button>
                </form>
            </div>
            <div className="boton d-flex justify-content-center mt-4">
            </div>
        </div>
    )
}

export default EditarPelicula