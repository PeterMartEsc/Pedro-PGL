import React, { useEffect, useState } from 'react'
import '../../styles/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import Pelicula from '../../models/Pelicula';
import axios from 'axios';
import Categoria from '../../models/Categoria';
import Director from '../../models/Director';
import Actor from '../../models/Actor';

type Props = {
    bgtheme: string,
    texttheme: string,
}

const Register = (props: Props) => {

    const uriRegister : string  = "http://localhost:8000/api/register/";
    const navigate = useNavigate();

    async function registrarse(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        let formulario = event.currentTarget;

        let nombre = formulario.nombre.value;
        let email = formulario.email.value;
        let password = formulario.password.value;

        const usuarioRegistrar = {
            "nombre": nombre,
            "email": email,
            "password": password
        }

        try {
            // Realizar la solicitud POST al servidor por medio del axios
            let response = await axios.post(uriRegister, usuarioRegistrar);
                console.log(response.data);
                localStorage.setItem('jwt_token', response.data);
                alert('Register exitoso');
        } catch (error) {
            console.log('Error al crear la película:', error);
            alert('Hubo un error al crear la película');
        }
        //navigate('/crear-pelicula');
        navigate('/inicio'); // Redirigir tras login
    }

    return (
        <div className={`bg-container-${props.bgtheme} contenedorEstandar p-3`}>
            <div className="formulario m-auto">
                <form onSubmit={registrarse}>
                    <h2>Register</h2>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control my-2" id="nombre" placeholder="Nombre"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control my-2" id="password" placeholder="Contraseña"/>
                    </div>
                    <button type="submit" className="btn btn-primary my-2">Login</button>
                </form>
                <p>
                    <Link to={`/login`} >
                        <u>Tengo cuenta</u>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register