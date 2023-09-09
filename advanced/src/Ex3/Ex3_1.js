import {Component} from 'react'
import  './Ex3_1.css'

class Ex3_1 extends Component {
    constructor() {
        super()
        this.state = {data : ''}
    }

    getText = (e) => {
        this.setState({data: e.target.value})

    }

    render() {
        let styleName = this.state.data.length > 5 ? "redStyle" : "blueStyle"

        return (<div>
            <input type="text" className={styleName} onChange={this.getText}  />
        </div>)
    }
}


export default Ex3_1;