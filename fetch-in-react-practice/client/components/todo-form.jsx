import React, {useState, useEffect} from 'react';

// class TodoForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       task: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       task: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const newTodo = {
//       task: this.state.task,
//       isCompleted: false
//     };
//     this.props.onSubmit(newTodo);
//     this.setState({ task: '' });
//   }

//   render() {
//     const value = this.state.task;
    // return (
    //   <form className="input-group mb-4 shadow-sm" onSubmit={this.handleSubmit}>
    //     <input
    //       required
    //       autoFocus
    //       type="text"
    //       value={value}
    //       className="form-control"
    //       placeholder="What to do?"
    //       onChange={this.handleChange}/>
    //     <div className="input-group-append">
    //       <button type="submit" className="btn btn-primary">Add Todo</button>
    //     </div>
    //   </form>
    // );
//   }
// }

function TodoForm(props) {
  const [task, setTask] = useState('')

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      task: task,
      isCompleted: false
    };
    props.onSubmit(newTodo);
    setTask('')
  }

  return (
    <form className="input-group mb-4 shadow-sm" onSubmit={handleSubmit}>
      <input
        required
        autoFocus
        type="text"
        value={task}
        className="form-control"
        placeholder="What to do?"
        onChange={handleChange} />
      <div className="input-group-append">
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </div>
    </form>
  );
}

export default TodoForm;
