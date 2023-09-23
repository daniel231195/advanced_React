import {Component} from 'react'
import Ex4_1_ChildComp from './ex4_1_child'


class Ex4_1_ParentComp extends Component
{
    constructor()
    {
        super()
        this.state = { movies : [{id : 1 , name : "Under the Dome", pic : "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"},
                {id : 2 , name : "Person of Interest", pic : "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg"},
                {id : 3 , name : "Bitten", pic : "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg"}] ,

            selectedMovie : {}

        }
    }

    selectMovie = (e) =>
    {
        let movieid = e.target.value;

        let movie = this.state.movies.find(x => x.id == movieid);

        this.setState({ selectedMovie : movie})

    }

    render()
    {
        return (
            <div className="App">
                <h3>Parent Comp</h3>

                <select onChange={this.selectMovie}>
                    {
                        this.state.movies.map(item =>
                        {
                            return <option value={item.id} key={item.id}>{item.name}</option>
                        })
                    }
                </select>  <br/>



                <Ex4_1_ChildComp  movie={this.state.selectedMovie}   />

                <h3>Parent Footer</h3>
            </div>)
    }
}


export default Ex4_1_ParentComp;
