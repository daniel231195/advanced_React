import {useState} from 'react'



function Ex5_2_child(props){
    const [users, setUsers] = useState([]);
    const [user,setUser] = useState({ name: ' ', age: 0, city: ''});

    const addUser = () =>{
        setUsers([...users,user])
        props.callback(users)
    }
    return (
      <div style={{backgroundColor:'grey'}}>
          <h2>Child Component</h2>
          Name : <input type="string" onChange={e => setUser({...user, name : e.target.value})}/>
          <br/>
          Age : <input type="number" onChange={e => setUser({...user, age : e.target.value}) }/>
          <br/>
          City : <input type="string" onChange={e => setUser({...user, city : e.target.value}) }/>
          <input type="button" value="Add" onClick={addUser}  />
          {props.dataToChild}
      </div>
    );
}

export default Ex5_2_child;