import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange() {
    this.setState({password: `${event.target.value}`});
  }
  handleSubmit() {
    console.log('State', { password: `${this.state.password}` });
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Password
          <div>
            <input type="password" value={this.state.password} onChange={this.handleChange} className="margin-right"></input>
            <FontAwesomeIcon icon={this.state.password.length < 8 ? faTimes : faCheck} className={this.state.password.length < 8 ? "red" : "green"} />
            <div>
              <p className={this.state.password.length < 8 ? "error-message" : "hidden"} >{this.state.password.length === 0 ? 'A password is required.' : 'Your password is too short.'}</p>
            </div>
          </div>
        </label>
      </form>
    )
  }
}

export default ValidatedInput
