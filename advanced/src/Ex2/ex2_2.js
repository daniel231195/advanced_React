import {Component} from 'react'

class EX2_2 extends Component {
    constructor() {
        super()
        this.state = {num: 0, total: 0}
    }

    add = () => {
        this.setState({total: this.state.num + this.state.total})
    }

    render() {
        return (<div>

            Num : <input type="text" onChange={e => this.setState({num: parseInt(e.target.value)})}/>

            <input type="button" value="Add" onClick={this.add}/> <br/>

            Total : {this.state.total};

        </div>)
    }
}


export default EX2_2;