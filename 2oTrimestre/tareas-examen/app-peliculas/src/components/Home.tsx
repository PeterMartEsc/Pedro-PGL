import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CrearPelicula from './CrearPelicula'
import EditarPelicula from './EditarPelicula'
import ListPeliculas from './ListPeliculas'
import ListCategorias from './ListCategorias'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

type Props = {}

const Home = (props: Props) => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/"/>
                <Route path="/crear-pelicula" element={<CrearPelicula/>}/>
                <Route path="/buscar-pelicula" element={<ListPeliculas/>}/>
                <Route path="/pelicula/:id" element={<EditarPelicula/>}/>
                <Route path="/categorias" element={<ListCategorias/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default Home

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">

            <div className="container-fluid">
                <div className="d-flex justify-content-between w-100 mx-3">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/crear-pelicula">Crear Pelicula</Link>
                    <Link className="nav-link" to="/buscar-pelicula">Buscar Pelicula</Link>
                    <Link className="nav-link" to="/categorias">Categorias</Link>
                </div>
            </div>
    </nav>
    );
}
