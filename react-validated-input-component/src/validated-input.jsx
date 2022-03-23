import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// class ValidatedInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { password: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange() {
//     this.setState({password: `${event.target.value}`});
//   }
//   handleSubmit() {
//     console.log('State', { password: `${this.state.password}` });
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Password
//           <div>
//             <input type="password" value={this.state.password} onChange={this.handleChange} className="margin-right"></input>
//             <FontAwesomeIcon icon={this.state.password.length < 8 ? faTimes : faCheck} className={this.state.password.length < 8 ? "red" : "green"} />
//             <div>
//               <p className={this.state.password.length < 8 ? "error-message" : "hidden"} >{this.state.password.length === 0 ? 'A password is required.' : 'Your password is too short.'}</p>
//             </div>
//           </div>
//         </label>
//       </form>
//     )
//   }
// }

function ValidatedInput() {
  const [password, setPassword] = useState('')

  const onSubmitFunc = () => {
    event.preventDefault();
    console.log('State', password)
  }

  const onChangeFunc = (event) => {
    setPassword(event.target.value)
  }

  return (
    <form onSubmit={onSubmitFunc}>
      <label>
        password
        <div>
          <input type="password" value={password} onChange={onChangeFunc} className="margin-right"></input>
          <FontAwesomeIcon icon={password.length < 8 ? faTimes : faCheck} className={password.length < 8 ? "red" : "green"} />
        </div>
        <p className={password.length < 8 ? "error-message" : "hidden"}>{password.length === 0 ? 'A password is required.' : 'Your password is too short.'}</p>
      </label>
    </form>
  )
}

export default ValidatedInput
