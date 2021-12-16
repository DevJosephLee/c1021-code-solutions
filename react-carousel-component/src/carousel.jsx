import React from 'react';

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
      <div className="container">
        <div className="row justify-center align-center">
          <i class="fas fa-chevron-left"></i>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    )
  }
}

export default Carousel
