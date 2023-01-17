import React,  {Component} from 'react'
export default class Ship extends Component{
  render(){
    return(
      <><ul class='box'>
      <h2>Class:</h2>
      <p>{this.props.class}</p>
      <h2>Name</h2>
      <p>{this.props.name}</p>
      <h2>manufacturer:</h2>
      <p>{this.props.manufacturer}</p>
      </ul>
      </>
    )
  }
}