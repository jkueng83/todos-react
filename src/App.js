import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TasksAdder from "./components/TasksAdder";
import Todo from "./components/Todo";
import Todolist from "./components/Todolist";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          "id": 1,
          "name": "einkaufen",
          "done": true,
        },
        {
          "id": 2,
          "name": "essen",
          "done": false,
        },
        {
          "id": 3,
          "name": "trinken",
          "done": false,
        },
        {
          "id": 4,
          "name": "schalfen",
          "done": false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TasksAdder />

        <Todolist todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
