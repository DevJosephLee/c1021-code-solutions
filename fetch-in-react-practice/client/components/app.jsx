import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('api/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({todos: data});
      })
      .catch(err => {
        console.error(err);
      })
  }

  addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * Do not mutate the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */
   fetch('api/todos', {
     method: 'POST',
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(newTodo)
  })
  .then(response => response.json())
  .then(newTodo => {
    this.setState({todos: [].concat(this.state.todos, newTodo)});
  })
  .catch(err => {
    console.error('error!', err);
  })
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    this.state.todos.map((todo, index) => {
      if (todoId === todo.todoId) {
        const stateCopy = [].concat(this.state.todos)
        const newState = {isCompleted: !stateCopy[index].isCompleted}
        // let object = {isCompleted: !stateCopy.todos[index].isCompleted}
        // const newState = ({ isCompleted: todo.isCompleted ? false : true})
        // fetch(`api/todos/${todoId}`, {
        //   method: 'PATCH',
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify(newState)
        // })
        //   .then(response => response.json())
        //   .then(() => {
        //     this.setState({ todos: stateCopy});
        //   })
        //   .catch(err => {
        //     console.error('error!', err);
        //   })
      }
    })
  // const stateCopy = Object.assign([], this.state);
  // stateCopy.todos.map((todo, index) => {
  //   if (todoId === todo.todoId) {
  //     todo.isCompleted = todo.isCompleted ? false : true
  //   }
  // })
  // fetch(`api/todos/${todoId}`, {
  //   method: 'PATCH',
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({ isCompleted: stateCopy.isCompleted })
  // })
  //   .then(response => response.json())
  //   .then(() => {
  //     this.setState({ todos: [].concat(this.state.todos) });
  //   })
  //   .catch(err => {
  //     console.error('error!', err);
  //   })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}


// const stateCopy = Object.assign([], this.state);
    // stateCopy.todos[todoId - 1] = Object.assign([], stateCopy.todos[todoId - 1]);
    // if (stateCopy.todos[todoId - 1].isCompleted === false) {
    //   stateCopy.todos[todoId - 1].isCompleted = true;
    // } else {
    //   stateCopy.todos[todoId - 1].isCompleted = false;
    // }
    // this.setState(stateCopy)
