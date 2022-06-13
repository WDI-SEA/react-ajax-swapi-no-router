import React, { Component } from 'react'
import axios from 'axios'

export default class Starship extends Component {
    state = {
        pilots: []
    }
     async componentDidMount() {
         try {
             console.log(this.props.pilots)

             const responses = this.props.pilots.map(url => axios.get(url))

             const pendingPromises = await Promise.all(responses)

             let flatData =

             pensingPromises.forEach(response => flatData = [...flatData, response.data])

             console.log(flatData)
             this.setState({ pilots: flatData})

         } catch (err) {
             console.warn(err)
         }
     }
  render() {
      const pilots = this.state.pilots.map((pilot, i) => {
          return (
              <li key={`pilot${i}`}>{pilot.name}</li>
          )
      })

      const noPilot = {
          <liNo Pilots Found</li>
      }
    
      return (
      <div>
          <h2>{this.props.name}</h2>
          
          <h3>{this.props.class}</h3>
          
          <h4>{this.props.model} by {this.props.manufacturer}</h4>

          { this.props.pilots.length === 0 ? 'no pilots' : 'has pilots'}
      </div>
    )
  }
}
