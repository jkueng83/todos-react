import React, { Component } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";


import styles from './Todo.module.css';

export class Todo extends Component {

    setDone = () =>{

        this.props.onDelete(this.props.id);
    }

    render() {
        return (
            <div className={styles.container}>
                <div>{this.props.title}</div>
                <div>{this.props.isDone}</div>
                <div onClick={this.setDone}><IoIosCloseCircleOutline className={styles.icon}/></div>
            </div>
        )
    }
}

export default Todo
