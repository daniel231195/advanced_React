import {Component} from 'react'
import './Ex3_1.css'

class Ex3_3_4_5 extends Component {
    constructor() {
        super()
        this.state = {
            name: '', age: 0, city: '',
            users: [{name: "Ron", age: 20, city: "Haifa"},
                {name: "Dana", age: 30, city: "Tel Aviv"},
                {name: "Gil", age: 40, city: "Jerusalem"}]
        };

    }
    add = () =>{
        let obj =  { name : this.state.name, age : this.state.age, city : this.state.city};

        this.setState({users : [...this.state.users , obj]});
    }
    render() {
        let items = this.state.users.map((item, index) => {
            return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
            </tr>
        })
        let items2 = this.state.users.map((item, index) => {
            return <li key={index}>
                {item.name}
                <ul>
                    <li>{item.age}</li>
                    <li>{item.city}</li>
                </ul>
            </li>
        })
        return (<div>
            <table border="1">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>


                {items}

                </tbody>
            </table>
            <br/>

            <ul>

                {items2}

            </ul>

            Name : <input type="Text" onChange={e => this.setState({name: e.target.value})} /> <br/>
            Age : <input type="Number" onChange={e => this.setState({age : e.target.value})} /> <br/>
            City : <input type="Text" onChange={e => this.setState({city : e.target.value})} />
                <input type="button" value="Add" onClick={this.add} />
        </div>
    )
    }
    }


    export default Ex3_3_4_5;