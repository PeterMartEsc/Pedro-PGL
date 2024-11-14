import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Cuentaatras from '../ejemplos/cuentaatras/cuentaatras';
import RelojesMundiales from '../pr06/Pr06';
import About from './About';

type Props = {}

function App41() {
    return (
        <div className="App">
            <BrowserRouter>

                <h3>Mi primer router</h3>
                <Navbar />

                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/relojesmundiales" element={<RelojesMundiales />} />
                    <Route path="/cronometro" element={<Cuentaatras />} />
                </Routes>

            </BrowserRouter>
        </div>
    );
}

function Navbar(){
    return(
    <nav className="Minavbar">
        <Link to="/"> Inicio </Link>
        <Link to="/cuentatras"> Cronómetro </Link>
        <Link to="/relojesmundiales"> Relojes mundiales </Link>
    </nav>
    )
}

export default App41