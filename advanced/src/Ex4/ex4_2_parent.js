import {Component} from 'react'
import ChildComp from './ex4_2_child'

class parentComp extends Component {

    constructor() {
        super();
        this.state = {users:[]}
    }

    render() {

        let items = this.state.users.map((item,index)=>{
            return <li key= {index} >
                My name is {item.name} , i'm {item.age}  years old ,
                and i'm {item.adult? ' an adult ' : ' not an adult'}
            </li>
        })



        return (
            <div className="App">
                <h1>Parent Component</h1>

                <ul>
                    {items}
                </ul>
                <ChildComp callback = { data => this.setState({users : [...this.state.users, data]})} />
            </div>
        )
    }
}


export default parentComp;

