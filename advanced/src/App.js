import {Component} from 'react'
import ParentComp from './Ex4/ex4_3_parent';


class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (<div className="App">
            <ParentComp />
        </div>)
    }
}


export default App;
