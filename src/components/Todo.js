import React, { Component } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";


import styles from './Todo.module.css';

export class Todo extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div>{this.props.title}</div>
                <div>{this.props.isDone}</div>
                <div><IoIosCloseCircleOutline className={styles.icon}/></div>
            </div>
        )
    }
}

export default Todo
