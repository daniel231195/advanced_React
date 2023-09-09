import {Component} from 'react'

class PersonComp extends Component {
    constructor() {
        super()
        this.state={name:"Daniel" , age: 27}
    }

    swap = () => {
        let temp = this.state.name
        this.setState({name : this.state.age , age : temp})
    }

    render() {
        return (<div>

            name : {this.state.name} <br/>
            age : {this.state.age }<br/>
            <input type={"button"} value={"swap"} onClick={this.swap}/>
        </div>)
    }
}


export default PersonComp;