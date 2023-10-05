import {React,useState} from 'react'



function Task(props) {
    return (
        <div style={{border: '4px solid blue'}}>
            Title : {props.task.title}
            <br/>
            Completed : {props.task.completed.toString()}
        </div>
    )
}


export default Task