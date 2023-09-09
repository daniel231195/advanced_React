import {Component} from 'react'
import Person from './Person'

class Persons extends Component {
    constructor() {
        super()
        this.state = {persons: [
                {name: "Avi" , tasks: [{Title : "Task 1", Completed: true},{Title : "Task 2", Completed: false}]},
                {name: "Dana" , tasks: [{Title : "Task 3", Completed: false},{Title : "Task 4", Completed: true}]}
            ]}
    }


    render() {
        return (<div>
            <div>
                <h1>Persons</h1>
                {this.state.persons.map((person, index) => (
                    <Person key={index} name={person.name} tasks={person.tasks} />
                ))}
            </div>
        </div>)
    }
}


export default Persons;