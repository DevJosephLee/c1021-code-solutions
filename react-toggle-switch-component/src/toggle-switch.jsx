// import React from 'react';
import React, {useState} from 'react';


// class ToggleSwitch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isClicked: false };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     if (this.state.isClicked === false) {
//       this.setState({ isClicked: true });
//     } else {
//       this.setState({ isClicked: false });
//     }
//   }
//   render() {
//     const isClicked = this.state.isClicked;
//     if (isClicked) {
//       return (
//         <div className="row">
//           <div className="on">
//             <button onClick={this.handleClick} className="button-on"></button>
//           </div>
//           <h3>ON</h3>
//         </div>
//       )
//     }
//     return (
//       <div className="row">
//         <div className="off">
//           <button onClick={this.handleClick} className="button-off"></button>
//         </div>
//         <h3>OFF</h3>
//       </div>
//     )
//   }
// }
function ToggleSwitch() {
  const [clicked, setClicked] = useState(false);
  let clickedClass;
  let buttonClass;
  let textClass;

  if (clicked) {
    clickedClass = "on"
    buttonClass = "button-on"
    textClass = "ON"
  } else {
    clickedClass = "off"
    buttonClass = "button-off"
    textClass = "OFF"
  }

  return (
    <div className="row">
      <div className={clickedClass}>
        <button onClick={() => clicked ? setClicked(false) : setClicked(true)} className={buttonClass}></button>
      </div>
      <h3>{textClass}</h3>
    </div>
  )
}

export default ToggleSwitch
