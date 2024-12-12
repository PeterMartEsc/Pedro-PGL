import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CrearPelicula from './CrearPelicula'
import EditarPelicula from './EditarPelicula'
import ListPeliculas from './ListPeliculas'
import ListCategorias from './ListCategorias'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles.css';
import Inicio from './Inicio'

type Props = {}

const App = (props: Props) => {

    const [bgtheme, setbgtheme] = useState<string>("dark");
    const [texttheme, settexttheme] = useState<string>("light");


    function changeTheme(){
        setbgtheme((bgtheme) => (bgtheme === "dark" ? "light" : "dark"));
        settexttheme((texttheme) => (texttheme === "light" ? "dark" : "light"))
    }

    return (
        <BrowserRouter>

            <Navbar bgtheme={bgtheme} texttheme={texttheme} changeTheme={changeTheme}/>

            <Routes>
                <Route path="/" element={<Inicio bgtheme={bgtheme} texttheme={texttheme}/>}/>
                <Route path="/crear-pelicula" element={<CrearPelicula bgtheme={bgtheme} texttheme={texttheme}/>}/>
                <Route path="/buscar-pelicula" element={<ListPeliculas bgtheme={bgtheme} texttheme={texttheme}/>}/>
                <Route path="/peliculas/:id" element={<EditarPelicula bgtheme={bgtheme} texttheme={texttheme}/>}/>
                <Route path="/categorias" element={<ListCategorias bgtheme={bgtheme} texttheme={texttheme}/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default App

type IProps = {
    bgtheme: string,
    texttheme: string,
    changeTheme: () => void,
}

const Navbar = (props: IProps) => {

    //const {changeTheme} = props.changeTheme;
    const bgtheme = props.bgtheme;
    const texttheme = props.texttheme;

    return (
        <nav className={`navbar text-${texttheme} bg-navbar-${bgtheme}`}>  

            <div className="container-fluid">
                <div className="d-flex justify-content-between w-100 mx-3">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/crear-pelicula">Crear Pelicula</Link>
                    <Link className="nav-link" to="/buscar-pelicula">Buscar Pelicula</Link>
                    <Link className="nav-link" to="/categorias">Categorias</Link>
                    <div className='d-flex'>
                        <span className='mx-2 '>
                            {bgtheme=="dark" ? <i className="bi bi-brightness-high"></i> : <i className="bi bi-moon"/>}
                        </span>
                        <button className="btn btn-outline-light changeTheme" onClick={props.changeTheme}></button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
