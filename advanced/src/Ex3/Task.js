// Task.js
import React, { Component } from 'react';

class Task extends Component {
    render() {
        const { title, completed } = this.props;
        return (
            <div>
                <p>Title: {title}</p>
                <p>Completed: {completed ? "True" : "False"}</p>
            </div>
        );
    }
}

export default Task;
