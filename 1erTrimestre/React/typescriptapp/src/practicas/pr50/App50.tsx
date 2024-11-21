import React, { useContext } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from '../pr41/About';
import PokemonListPr50 from './PokemonListPr50';
import { AppContext, AppContextProvider } from './AppContextProvider';
import PokemonCardPr50 from './PokemonCardPr50';


type Props = {}

export default function App45() {
    
    return (
    <BrowserRouter>
        <AppContextProvider>
            <h1>Mi aplicación de enrutado</h1>
            <Navbar />
            <PokemonFavorito/>
            <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/pokemon" element={<PokemonListPr50 />}/>
                <Route path="/pokemon/:id" element={<PokemonCardPr50 />}/>
            </Routes>
        </AppContextProvider>
    </BrowserRouter>
    )
}

function PokemonFavorito(){
    const context = useContext(AppContext);

    return (
        <>
            <h2>Pokémon favorito: </h2>
            <h4>{context.pokemon.name}</h4>
            <img src={context.pokemon.img} />
            <p>Peso: {context.pokemon.weight / 10} kg</p>
            <p>Altura: {context.pokemon.height /10} m</p>
            
        </>
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