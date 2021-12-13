import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { numClicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ numClicked: this.state.numClicked + 1 })
  }
  render() {
    const numClicked = this.state.numClicked;
    let button;
    if (numClicked === 0) {
      button = <button onClick={(this.handleClick)}>Hot Button</button>;
    } else if (numClicked > 0 && numClicked <= 3) {
      button = <button onClick={this.handleClick} className="purple">Hot Button</button>
    } else if (numClicked >= 4 && numClicked <= 6) {
      button = <button onClick={this.handleClick} className="light-purple">Hot Button</button>
    } else if (numClicked >= 7 && numClicked <= 9) {
      button = <button onClick={this.handleClick} className="red">Hot Button</button>
    } else if (numClicked >= 10 && numClicked <= 12) {
      button = <button onClick={this.handleClick} className="orange">Hot Button</button>
    } else if (numClicked >= 13 && numClicked <= 16) {
      button = <button onClick={this.handleClick} className="yellow">Hot Button</button>
    } else {
      button = <button onClick={this.handleClick} className="white">Hot Button</button>
    }
    return (
      <div>
        {button}
      </div>
    )
    return
    <div>
      {HotButton}
    </div>
  }
}

export default HotButton;
