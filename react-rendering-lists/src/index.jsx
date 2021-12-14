import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const pokemonList = pokedex.map(() => {
  // return (
  //   <li key={pokedex.number}>{pokedex.name}</li>
  // )
  console.log(pokedex);
});

console.log(pokemonList);


ReactDOM.render(
  <ul>
    {pokemonList}
  </ul>,
  document.querySelector('#root')
);


// class PokemonList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return(
//       <ul>
//         <li>
//           pokedex.map((pokemon) => {})
//         </li>
//       </ul>
//     )
//   }
// }
// function PokemonList(props) {
//   const pokemons = props.pokedex;
//   const listItems = pokemons.map((pokemon) => {
//     <li>{pokemon.name}</li>
//   });
//   return (
//     <ul>{listItems}</ul>
//   )
// }
