import {Component} from 'react'
import PhonesComp from './Ex1_Child'

class PersonComp extends Component
{
  constructor()
  {
    super()
  }

  render()
  {
    return(<div >

      <h3>Parent</h3>
    

      <PhonesComp phones={ {home : "03-333" , fax : "02-222" , mobile : "052-2222"}  }  />
    
         
    </div>)
  }
}




export default PersonComp;
