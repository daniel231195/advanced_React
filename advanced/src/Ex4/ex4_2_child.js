import {Component} from 'react'


class childCopm extends Component {

    constructor() {
        super();
        this.state = {  name : '' , adult : false, age : 0 };
    }

    add = () => {
        this.props.callback({...this.state})
    }

    render() {
        return (
            <div className="App">
                <h2>Child component</h2>
                Name :  <input type="text" onChange={event => this.setState({name : event.target.value})}/>    <br />
                Age :   <input type="number" onChange={event => this.setState({age : event.target.value})} />     <br />
                Is Adult : <input type="checkbox" onChange={e => this.setState({adult : e.target.checked})} />

                <input type="button" value="Add" onClick={this.add} />
            </div>
        )
    }
}


export default childCopm;