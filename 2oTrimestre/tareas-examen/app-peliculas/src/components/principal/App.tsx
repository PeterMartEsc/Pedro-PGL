import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CrearPelicula from '../navegacion/CrearPelicula'
import EditarPelicula from '../navegacion-nonav/EditarPelicula'
import ListPeliculas from '../navegacion/ListPeliculas'
import ListCategorias from '../navegacion/ListCategorias'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/styles.css';
import Inicio from '../navegacion/Inicio'
import ViewPelicula from '../navegacion-nonav/ViewPelicula'
import { AppContextProvider } from './AppContextProvider'
import Favoritos from '../navegacion/Favoritos'

type Props = {}

const App = (props: Props) => {

    const [bgcookie, setbgcookie] = useState<string>(localStorage.getItem("bg-theme") || "dark");
    const [textcookie, settextcookie] = useState(localStorage.getItem("text-theme")|| "light");
    const [bgtheme, setbgtheme] = useState<string>(bgcookie);
    const [texttheme, settexttheme] = useState<string>(textcookie);

    function changeTheme(){
        setbgtheme((bgtheme) => (bgtheme === "dark" ? "light" : "dark"));
        settexttheme((texttheme) => (texttheme === "light" ? "dark" : "light"))
    }

    useEffect(() => {
        localStorage.setItem("bg-theme", bgtheme);
        localStorage.setItem("text-theme", texttheme);
    }, [bgtheme, texttheme])

    return (
        <BrowserRouter>
            <AppContextProvider>
                <Navbar bgtheme={bgtheme} texttheme={texttheme} changeTheme={changeTheme}/>

                <Routes>
                    <Route path="/" element={<Inicio bgtheme={bgtheme} texttheme={texttheme}/>}/>
                    <Route path="/crear-pelicula" element={<CrearPelicula bgtheme={bgtheme} texttheme={texttheme}/>}/>
                    <Route path="/buscar-pelicula" element={<ListPeliculas bgtheme={bgtheme} texttheme={texttheme}/>}/>
                    <Route path="/peliculas/:id" element={<ViewPelicula bgtheme={bgtheme} texttheme={texttheme}/>}/>
                    <Route path="/peliculas/edit/:id" element={<EditarPelicula bgtheme={bgtheme} texttheme={texttheme}/>}/>
                    <Route path="/categorias" element={<ListCategorias bgtheme={bgtheme} texttheme={texttheme}/>}/>
                    <Route path="/favoritos" element={<Favoritos bgtheme={bgtheme} texttheme={texttheme}/>}/>
                </Routes>
            </AppContextProvider>
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
                    <Link className="nav-link" to="/favoritos">Favoritos</Link>
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
