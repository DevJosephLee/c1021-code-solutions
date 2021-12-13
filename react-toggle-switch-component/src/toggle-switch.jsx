import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }
  render() {
    const isClicked = this.state.isClicked;
    if (isClicked) {
      return (
        <div className="row">
          <div className="on">
            <button onClick={this.handleClick} className="button-on"></button>
          </div>
          <h3>ON</h3>
        </div>
      )
    }
    return (
      <div className="row">
        <div className="off">
          <button onClick={this.handleClick} className="button-off"></button>
        </div>
        <h3>OFF</h3>
      </div>
    )
  }
}

export default ToggleSwitch
