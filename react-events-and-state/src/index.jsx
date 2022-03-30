import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// class CustomButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = { isClicked: false };
//   }

//   handleClick() {
//     this.setState({ isClicked: true });
//   }

//   render() {
//     const isClicked = this.state.isClicked;
//     let button;
//     if (isClicked) {
//       button = <ThanksButton onClick={this.handleClick} />;
//     } else {
//       button = <ClickMeButton onClick={this.handleClick} />;
//     }
//     return (
//       <div>
//         {button}
//       </div>
//     )
//   }
// }

// function ClickMeButton(props) {
//   return <button onClick={props.onClick}>Click Me!</button>
// }

// function ThanksButton(props) {
//   return <button onClick={props.onClick}>Thanks!</button>
// }

function CustomButton() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true)
    } else {
      setIsClicked(false)
    }
  }

  const text = !isClicked
    ? "Click Me!"
    : "Thanks!"

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
)
