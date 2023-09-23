import {Component} from "react";



class Ex4_3_child1 extends Component{

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default Ex4_3_child1;