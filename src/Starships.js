import { formToJSON } from 'axios'
import { Component } from 'react'


export default class App extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>Class: {this.props.class}</p>
                <p>Manufacturer: {this.props.manufacturer}</p>
            </div>
    )
  }
}
