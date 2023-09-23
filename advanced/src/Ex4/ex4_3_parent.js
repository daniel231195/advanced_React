import {Component} from "react";
import Ex4_3_child1 from "./ex4_3_child1"

class parentComp extends Component {

    constructor() {
        super();
        this.state = { name : '' , age : 0}
    }
    add = ()=>{
        <Ex4_3_child1 name={this.state.name} age={this.state.name}/>
    }
    render() {

        return (
            <div >
                Name : <input type="string" onChange={event => this.setState({name : event.target.value})}/> <br/>
                Age : <input type="number" onChange={event => this.setState({age : event.target.value})}/> <br/>
                <input type="button" value="Add" onClick={this.add} />

            </div>
        )
    }

}

export default parentComp;