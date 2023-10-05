import {React, useState} from 'react'
import Person from './Person'


function Persons() {
    const [persons, setPersons] = useState([{
        name: "Avi",
        tasks: [{title: "TaskA", completed: true}, {title: "TaskB", completed: false}]
    },
        {name: "Dana", tasks: [{title: "TaskC", completed: true}, {title: "TaskD", completed: false}]}])
    return (
        <div style={{border: '4px solid green'}}>
            <h1>Persons List :</h1>
            {
                persons.map((item,index) =>{
                   return <Person key={index} person={item}/>
                })
            }

        </div>
    )
}


export default Persons;