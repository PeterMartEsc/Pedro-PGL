import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PokemonCard from './PokemonCardPr45';
import About from '../pr41/About';
import PokemonListPr45 from './PokemonListPr45';
import PokemonCardPr45 from './PokemonCardPr45';

type Props = {}

export default function App45() {
    
    return (
    <BrowserRouter>
        <h1>Mi aplicación de enrutado</h1>
        <Navbar />

        <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/pokemon" element={<PokemonListPr45 />}/>
            <Route path="/pokemon/:id" element={<PokemonCardPr45 />}/>
        </Routes>
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