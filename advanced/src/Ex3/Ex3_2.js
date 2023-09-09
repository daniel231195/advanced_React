import {Component} from 'react'
import './Ex3_1.css'

class Ex3_2 extends Component {
    constructor() {
        super()
        this.state = {data: '', isRed: false, isGreen: false, isBlue: false}
    }

    getText = (e) => {
        this.setState({data: e.target.value})
    }

    render() {
        debugger;
        let red;
        let green;
        let blue;

        if(this.state.isRed == true)
        {
            red = <li>Red</li>
        }
        if(this.state.isBlue == true)
        {
            blue = <li>Blue</li>
        }
        if(this.state.isGreen == true)
        {
            green = <li>Green</li>
        }
        return (<div>
            Red <input type="checkbox" onChange={() => this.setState({isRed: !this.state.isRed})}/> <br/>
            Green <input type="checkbox" onChange={() => this.setState({isGreen: !this.state.isGreen})}/> <br/>
            Blue <input type="checkbox" onChange={() => this.setState({isBlue: !this.state.isBlue})}/> <br/>

            <ul>
                {red}
                {green}
                {blue}
            </ul>
        </div>)
    }
}


export default Ex3_2;