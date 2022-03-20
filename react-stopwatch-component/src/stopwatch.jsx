import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';

// let intervalId;

// class Stopwatch extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {isClicked: false, counter: 0}
//     this.resetCounter = this.resetCounter.bind(this);
//     this.startCounter = this.startCounter.bind(this);
//     this.endCounter = this.endCounter.bind(this);
//   }
//   resetCounter() {
//     if (this.state.isClicked === false) {
//       this.setState({ isClicked: false, counter: 0 })
//     }
//   }
//   startCounter() {
//     if (this.state.isClicked === false) {
//       intervalId = setInterval(() => {
//         this.setState({ isClicked: true, counter: this.state.counter + 1 })
//       }, 1000)
//     }
//   }
//   endCounter() {
//     this.setState({isClicked: false, counter: this.state.counter})
//     clearInterval(intervalId)
//   }
//   render() {
//     if (this.state.isClicked === false) {
//       return (
//         <div className="text-align-center">
//           <button onClick={this.resetCounter}>{this.state.counter}</button>
//           <div className="margin-top">
//             <FontAwesomeIcon onClick={this.startCounter} icon={faPlay} className="icon" />
//           </div>
//         </div>
//       )
//     }
//     return (
//       <div className="text-align-center">
//         <button onClick={this.resetCounter}>{this.state.counter}</button>
//         <div className="margin-top">
//           <FontAwesomeIcon onClick={this.endCounter} icon={faPause} className="icon" />
//         </div>
//       </div>
//     )
//   }
// }

let intervalId;

function Stopwatch() {
  const [isClicked, setIsClicked] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isClicked) {
      intervalId = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId)
  });

  return (
    <div className="text-align-center">
      <button onClick={() => !isClicked ? setSeconds(0) : setSeconds(seconds)}>{seconds}</button>
      <div className="margin-top">
        <FontAwesomeIcon onClick={() => isClicked ? setIsClicked(false) : setIsClicked(true)} icon={isClicked ? faPause : faPlay} />
      </div>
    </div>
  )
}

export default Stopwatch
