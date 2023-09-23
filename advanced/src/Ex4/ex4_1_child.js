import {Component} from 'react'


class Ex4_1_ChildComp extends Component
{
    constructor()
    {
        super()
    }
    render()
    {
        debugger;
        return (
            <div className="App">
                <h5>Child Comp</h5>

                Movie Name : {this.props.movie.name} < br/>

                <img src={this.props.movie.pic} />

                <h5>Child Footer</h5>
            </div>)
    }
}


export default Ex4_1_ChildComp;
