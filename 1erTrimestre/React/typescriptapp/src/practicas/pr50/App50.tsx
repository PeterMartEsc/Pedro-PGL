import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from '../pr41/About';
import PokemonListPr50 from './PokemonListPr50';
import PokemonCardPr50, { AppContextProvider } from './PokemonCardPr50';


type Props = {}

export default function App45() {
    
    return (
    <BrowserRouter>
        <AppContextProvider>
            <h1>Mi aplicación de enrutado</h1>
            <Navbar />

            <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/pokemon" element={<PokemonListPr50 />}/>
                <Route path="/pokemon/:id" element={<PokemonCardPr50 />}/>
            </Routes>
        </AppContextProvider>
    </BrowserRouter>
    )
}

function Navbar() {
    return (
    <nav>
        <Link to="/"> Inicio </Link> &nbsp;
        <Link to="/pokemon"> Pokemon</Link> &nbsp;
        <Link to="/paises"> Paises </Link>
    </nav>
    );
}