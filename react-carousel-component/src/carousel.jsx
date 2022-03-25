import React, {useState, useEffect} from 'react';

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {currentImageIndex: 0}
//     this.handleLeftClick = this.handleLeftClick.bind(this);
//     this.handleRightClick = this.handleRightClick.bind(this);
//     this.handleButtonClick = this.handleButtonClick.bind(this);
//   }
//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       if (this.state.currentImageIndex === this.props.pokemons.length - 1) {
//         this.setState({ currentImageIndex: -1 })
//       }
//       this.setState({ currentImageIndex: this.state.currentImageIndex + 1 });
//     }, 2000)
//   }
//   handleLeftClick() {
//     this.setState({currentImageIndex: this.state.currentImageIndex - 1});
//     if (this.state.currentImageIndex === 0) {
//       this.setState({ currentImageIndex: this.props.pokemons.length - 1});
//     }
//   }
//   handleRightClick() {
//     this.setState({currentImageIndex: this.state.currentImageIndex + 1});
//     if (this.state.currentImageIndex === this.props.pokemons.length - 1) {
//       this.setState({ currentImageIndex: 0});
//     }
//   }
//   handleButtonClick(event) {
//     this.setState({ currentImageIndex: Number(event.target.className[0])})
//   }
//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className="center">
//             <i className="fas fa-chevron-left" onClick={this.handleLeftClick}></i>
//             {this.props.pokemons.map((pokemon, index) => {
//               return (
//                 <img className={this.state.currentImageIndex === index ? 'show' : 'hidden'} key={pokemon.name} src={pokemon.url} />
//               )
//             })}
//             <i className="fas fa-chevron-right" onClick={this.handleRightClick}></i>
//           </div>
//           <div>
//             {this.props.pokemons.map((pokemon, index) => {
//               return (
//                 <button onClick={this.handleButtonClick} className={`${index} ${this.state.currentImageIndex === index ? 'black' : 'white'}`} key={pokemon.name} ></button>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// let intervalId;

function Carousel(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(props.pokemons.length - 1)
    } else {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const handleRightClick = () => {
    console.log('right button clicked!')
    if (currentImageIndex === props.pokemons.length -1) {
      setCurrentImageIndex(0)
    } else {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const handleButtonClick = (event) => {
    setCurrentImageIndex(Number(event.target.className[0]))
  }

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (currentImageIndex === props.pokemons.length - 1) {
        setCurrentImageIndex(0)
      } else {
        setCurrentImageIndex(currentImageIndex + 1)
      }
    }, 2000)
    return () => clearInterval(intervalId)
  })

  return (
    <div className="container">
      <div className="center">
        <i className="fas fa-chevron-left" onClick={handleLeftClick}></i>
        {
          props.pokemons.map((pokemon, index) => {
            return (
              <img className={currentImageIndex === index ? "show" : "hidden"} key={pokemon.name} src={pokemon.url} />
            )
          })
        }
        <i className="fas fa-chevron-right" onClick={handleRightClick}></i>
      </div>
      <div>
        {
          props.pokemons.map((pokemon, index) => {
            return (
              <button className={`${index} ${currentImageIndex === index ? 'black' : 'white'}`} onClick={handleButtonClick} key={pokemon.name}></button>
            )
          })
        }
      </div>
    </div>
  )


}

export default Carousel


// let intervalId;

// function Stopwatch() {
//   const [isClicked, setIsClicked] = useState(false);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     if (isClicked) {
//       intervalId = setInterval(() => {
//         setSeconds(seconds + 1);
//       }, 1000);
//     }
//     return () => clearInterval(intervalId)
//   });

//   return (
//     <div className="text-align-center">
//       <button onClick={() => !isClicked ? setSeconds(0) : setSeconds(seconds)}>{seconds}</button>
//       <div className="margin-top">
//         <FontAwesomeIcon onClick={() => isClicked ? setIsClicked(false) : setIsClicked(true)} icon={isClicked ? faPause : faPlay} />
//       </div>
//     </div>
//   )
// }

// export default Stopwatch
