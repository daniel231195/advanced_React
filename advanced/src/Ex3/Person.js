// Person.js
import React, {Component} from 'react';
import Task from './Task';

class Person extends Component {
    constructor() {
        super()
    }

    render() {
        const {name, tasks} = this.props;
        return (
            <div>
                <h2>{name} </h2>
                <h2>Tasks:</h2>
                {tasks.map((task, index) => (

                    <Task key={index} title={task.Title} completed={task.Completed}/>

                ))}

            </div>
        );
    }
}

export default Person;
