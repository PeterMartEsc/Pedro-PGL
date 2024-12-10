import React, {useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Pelicula from '../models/Pelicula';
import axios from 'axios';

type Props = {
    bgtheme: string,
    texttheme: string,
}

const EditarPelicula = (props: Props) => {
    
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const uri : string  = "http://localhost:3000/peliculas/";
    const { id } = useParams<{ id: string }>();
    const [peliculaCargada, setpeliculaCargada] = useState <Pelicula | null>(null);
    const navigate = useNavigate()

    useEffect(() => {
        async function getPeliculas(direccion : string){
            const response = await axios.get(direccion);
            let listaPeliculas = response.data as Pelicula[];
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

    function actualizar(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        let formulario = event.currentTarget;
        let titulo = formulario.titulo.value;
        let director = formulario.director.value;
        let actores = formulario.actores.value;
        let argumento = formulario.argumento.value;

        if(titulo == null || director == null || actores == null || argumento == null){
            alert("Rellene todos los campos");
            return;
        }

        const peliculaActualizar = {
            titulo,
            director,
            actores,
            argumento
        }

        fetch(uri+`${id}`, {
            method: 'PATCH', // O 'PUT' si quieres reemplazar todo el recurso
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(peliculaActualizar),
        })
        //.then(response => response.json())
        .then(response => {
            if (response.ok) {
                alert('Pelicula editada correctamente');
            } else {
                alert('No se pudo editar la pelicula');
                console.log(response);
            }
        })
        .catch(error => {
            alert('Error al actualizar la pelicula');
            console.error(error);
        });
        navigate('/buscar-pelicula');
    }

    function borrar(){
        //const peliculaEncontrada = peliculas.find(pelicula => pelicula.id === idValidado); 
        
        fetch(uri+`${id}`, {
            method: 'DELETE', // Método DELETE para eliminar el usuario
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Pelicula eliminada correctamente');
            } else {
                alert('No se pudo eliminar la pelicula');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al borrar la pelicula');
        });
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
                            <input type="text" className="form-control my-2" id="director" placeholder="Dirección" defaultValue={peliculaCargada?.direccion}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="actores" className="form-label">Actores</label>
                        <textarea className="form-control mb-2"  id="actores" rows={2} placeholder='John Doe, Anonimo, Jane Doe, ...' defaultValue={peliculaCargada?.actores}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="argumento" className="form-label">Argumento</label>
                        <textarea className="form-control mb-2" id="argumento" rows={3} placeholder='En un lugar de la mancha...' defaultValue={peliculaCargada?.argumento}></textarea>
                    </div>
                    {/*<div className="form-group">
                        <label htmlFor="subir-cartel" className="form-label">Cartelera</label>
                        <input className="form-control mb-3" type="file" id="subir-cartel"/>
                    </div>*/}
                    <button type="submit" className="btn btn-primary my-2 me-3">Actualizar</button>
                </form>
            </div>
            <div className="boton d-flex justify-content-center mt-4">
                <button onClick={borrar} className="btn btn-primary me-3">Borrar</button>
                <button className="btn btn-primary">Destacar</button> 
            </div>
        </div>
    )
}

export default EditarPelicula