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
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
        {
          userId: 1,
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        },
      ],
    };
  }

  componentDidMount() {
    // Daten von einem Server

    // von hier kopiert: https://jsonplaceholder.typicode.com/

    
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          todos: json,
        });
      });
      
  }

  addTask = (value) => {
    let todo = {
      id: 0,
      title: value,
      done: false,
    };
    let todos = this.state.todos;

    todos.push(todo);

    this.setState({
      todos: todos,
    });
  };

  onDeleteTask = (id) => {
    let todos = this.state.todos;

    let index = todos.findIndex((todo) => todo.id == id);

    todos.splice(index, 1);

    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <TasksAdder onTaskAdded={this.addTask} />

        <Todolist todos={this.state.todos} onDelete={this.onDeleteTask} />
      </div>
    );
  }
}

export default App;
