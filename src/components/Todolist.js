import React, { Component } from "react";
import Todo from "./Todo";
import styles from "./Todolist.module.css";

export class Todolist extends Component {

    getAllTodos(){
        let widgets = [];
        this.props.todos.forEach(todo => {
            widgets.push(<Todo title={todo.title} isDone={todo.done} id={todo.id} onDelete={this.props.onDelete}/>)
            
        });
        return widgets;
    }


  render() {
    return (
      <div className={styles.center}>
        <div className={styles.container}>
          {this.getAllTodos()}
          
        </div>
      </div>
    );
  }
}

export default Todolist;
