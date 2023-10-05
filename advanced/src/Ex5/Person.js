import {React,useState} from 'react'
import Task from './Task'


function Person(props) {
    return (
        <div style={{border: '4px solid red'}}>
            <h2>{props.person.name}</h2>
            <h3>Task : </h3>
            {
                props.person.tasks.map((item,index)=>{
                    return (
                        <div>
                            <Task key={index} task={item}/>
                            <br/>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Person