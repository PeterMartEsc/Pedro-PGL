import React, { useEffect, useState } from 'react'
import '../styles/styles.css'
import { useNavigate } from 'react-router-dom';
import Pelicula from '../models/Pelicula';
import axios from 'axios';
type Props = {}

const CrearPelicula = (props: Props) => {

    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const [ultimoId, setultimoId] = useState('');
    const uri : string  = "http://localhost:3000/peliculas/";
    const navigate = useNavigate();

    useEffect(() => {
        async function getPeliculas(direccion : string){
            const response = await axios.get(direccion);
            let listaPeliculas = response.data as Pelicula[];
            setPeliculas(listaPeliculas);
        }

        getPeliculas(uri);
    }, [])

    useEffect(() => {
        let obtenerID = peliculas[peliculas.length].id;
        //hay que actualizar todos los id para que no tengan un 0 delante, si no el numero tal cual, y así poder hacer
        // +1 al id, y ya está.
        setultimoId(obtenerID);

    }, [peliculas])

    async function actualizar(event : React.FormEvent<HTMLFormElement>){
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

        try {
            // Realizar la solicitud POST al servidor
            await axios.post(uri, peliculaActualizar);
                alert('Película creada exitosamente');
                //navigate('/buscar-pelicula'); // Redirigir tras la creación

        } catch (error) {
            console.log('Error al crear la película:', error);
            alert('Hubo un error al crear la película');
        }
        navigate('/buscar-pelicula');
    }

    return (
        <div className='bg-container contenedorEstandar p-3'>
            <div className="formulario m-auto">
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="titulo">Titulo</label>
                            <input type="text" className="form-control my-2" id="titulo" placeholder="Titulo"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="director">Dirección</label>
                            <input type="text" className="form-control my-2" id="director" placeholder="Dirección"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="actores" className="form-label">Actores</label>
                        <textarea className="form-control mb-2" id="actores" rows={2} placeholder='John Doe, Anonimo, Jane Doe, ...'></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="argumento" className="form-label">Argumento</label>
                        <textarea className="form-control mb-2" id="argumento" rows={3} placeholder='En un lugar de la mancha...'></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subir-cartel" className="form-label">Cartelera</label>
                        <input className="form-control mb-3" type="file" id="subir-cartel" />
                    </div>
                    <button type="submit" className="btn btn-primary my-2">Crear</button>
                </form>
            </div>
        </div>
    )
}

export default CrearPelicula