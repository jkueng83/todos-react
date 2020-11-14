import React, { Component } from "react";

export class TasksAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  addTask = () => {
    this.props.onTaskAdded(this.state.inputValue);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.addTask}>Add Task</button>
      </div>
    );
  }
}

export default TasksAdder;
