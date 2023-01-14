import React, {Component} from 'react';


export default class App extends Component {

   

  render() {
 
    // console.log("shipname", this.props.shipName)
    return (
     
      <div>
        <ul>
            <li>ship: {this.props.shipName}</li>
            <li>class: {this.props.shipClass}</li>
        </ul>
 
      </div>
     )
  }
}