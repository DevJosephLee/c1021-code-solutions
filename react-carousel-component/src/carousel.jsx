import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentImageIndex: 0}
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.currentImageIndex === this.props.pokemons.length - 1) {
        this.setState({ currentImageIndex: -1 })
      }
      this.setState({ currentImageIndex: this.state.currentImageIndex + 1 });
    }, 2000)
  }
  handleLeftClick() {
    this.setState({currentImageIndex: this.state.currentImageIndex - 1});
    if (this.state.currentImageIndex === 0) {
      this.setState({ currentImageIndex: this.props.pokemons.length - 1});
    }
  }
  handleRightClick() {
    this.setState({currentImageIndex: this.state.currentImageIndex + 1});
    if (this.state.currentImageIndex === this.props.pokemons.length - 1) {
      this.setState({ currentImageIndex: 0});
    }
  }
  handleButtonClick(event) {
    this.setState({ currentImageIndex: Number(event.target.className[0])})
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="center">
            <i className="fas fa-chevron-left" onClick={this.handleLeftClick}></i>
            {this.props.pokemons.map((pokemon, index) => {
              return (
                <img className={this.state.currentImageIndex === index ? 'show' : 'hidden'} key={pokemon.name} src={pokemon.url} />
              )
            })}
            <i className="fas fa-chevron-right" onClick={this.handleRightClick}></i>
          </div>
          <div>
            {this.props.pokemons.map((pokemon, index) => {
              return (
                <button onClick={this.handleButtonClick} className={`${index} ${this.state.currentImageIndex === index ? 'black' : 'white'}`} key={pokemon.name} ></button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel
