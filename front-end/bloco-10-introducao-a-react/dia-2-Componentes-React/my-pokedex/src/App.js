import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

function App() {
  return (
  <div>
    <h1>P O K E D E X</h1> 
    {/* é a prop criada em Pokedex e o valor pokemons é a variavel em data.js */}
   <Pokedex pokemons={pokemons} /> pokemons{} 
  </div>
  );
}

export default App;
