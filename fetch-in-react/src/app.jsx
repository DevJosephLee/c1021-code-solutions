import React, { useState, useEffect } from 'react';
import UserList from './user-list';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       isLoading: true
//     };
//   }

//   componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({users: data, isLoading: false})
    //   });
//   }

//   render() {
//     return this.state.isLoading
//       ? <p>Loading...</p>
//       : <UserList users={this.state.users} />;
//   }
// }

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });
  })

  return isLoading
    ? <p>Loading...</p>
    : <UserList users={users} />
}

export default App;
