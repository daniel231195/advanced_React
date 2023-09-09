import {Component} from 'react'

class PhonesComp extends Component
{
  constructor()
  {
    super()
  }


  printData = () =>
  {
    console.log(this.props.phones)
  }

  render()
  {
    return(<div >

      <h4>Child</h4>
    
      Home : {this.props.phones.home} <br/>
      Fax : {this.props.phones.fax} <br/>
      Mobile : {this.props.phones.mobile} <br/>

      <input onClick={this.printData} style={{backgroundColor : "red"}} type="button" value="Print Phones data" />
    
    
         
    </div>)
  }
}




export default PhonesComp;
