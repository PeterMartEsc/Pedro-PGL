import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PokemonList from './PokemonList';
import PokemonCard from './PokemonCardPr45';

type Props = {}

export default function App() {
    
    return (
    <BrowserRouter>
        <h1>Aplicación Monedas</h1>
        <Navbar />

        <Routes>
            <Route path="/" />
            <Route path="/pokemon" element={<PokemonList />} />
            <Route path="/pokemon/:id" />
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