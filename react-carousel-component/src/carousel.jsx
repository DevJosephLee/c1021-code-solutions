import React from 'react';

const pokemons =[
  {name: 'Eevee', url: 'https://archives.bulbagarden.net/media/upload/e/e2/133Eevee.png'},
  {name: 'Abomasnow', url: 'https://archives.bulbagarden.net/media/upload/3/3b/460Abomasnow.png'}
]

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {

  }
  render() {
    return(
      pokemons.map((pokemon) => {
        return(
          <div className="container">
            <div className="row justify-center padding-auto">
              <i class="fas fa-chevron-left"></i>
              <img key={pokemon.name} src={pokemon.url} / >
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        )
      })
    )
  }
}

export default Carousel
