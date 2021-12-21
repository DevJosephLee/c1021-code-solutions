import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pokemons = [
  { name: 'Rayquaza', url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png'},
  { name: 'Charizard', url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'},
  { name: 'Zapdos', url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png'},
  { name: 'Entei', url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png'},
  { name: 'Mew', url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png'}
]

ReactDOM.render(
  <Carousel pokemons={pokemons} />,
  document.querySelector('#root')
)
