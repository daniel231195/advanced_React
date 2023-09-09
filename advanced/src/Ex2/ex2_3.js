import {Component} from 'react'

class Ex2_3 extends Component {
    constructor() {
        super()
        this.state = { data1 : 'AA', data2 : 'BB'}
    }
    getData1 = (e) => {
        this.setState({data1 : e.target.value})
        if(e.target.value.length > 4)
        {
            this.Swap();
        }
    }
    getData2 = (e) => {
        this.setState({data2 : e.target.value})
        if(e.target.value.length > 4)
        {
            this.Swap();
        }
    }
    Swap = () => {
        let temp = this.state.data1
        this.setState({data1: this.state.data2, data2 : temp})
    }

    render() {
        return (<div>

            <input type="text" onChange={this.getData1}/>
            <br/>
            <input type="text" onChange={this.getData2}/>
            <br/>
            <input type="button" value="Swap" onClick={this.Swap}/> <br/>

            {this.state.data1} < br/>
            {this.state.data2} < br/>


        </div>)
    }
}


export default Ex2_3;