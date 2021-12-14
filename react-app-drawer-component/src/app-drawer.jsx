import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {drawerOpened: false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  close() {
    if (this.state.drawerOpened) {
      this.setState({ drawerOpened: false });
    }
  }
  open() {
    if (!this.state.draweOpened) {
      this.setState({drawerOpened: true});
    }
  }
  render() {
    const drawerClass = this.state.drawerOpened
      ? 'show'
      : 'hidden'
    return(
      <div>
        <i className="fas fa-bars" onClick={this.state.drawerOpened === false ? this.open : this.close}></i>
        <div className={`height-1000 ${drawerClass}`}>
          <div onClick={this.close} className="overlay">
            <div className="modal">
              <h1>Menu</h1>
              <a onClick={this.close} className={drawerClass}>About</a>
              <a onClick={this.close} className={drawerClass}>Get Started</a>
              <a onClick={this.close} className={drawerClass}>Sign In</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AppDrawer
