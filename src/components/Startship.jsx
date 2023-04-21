import React, { Component } from "react";
import Pilot from "./Pilot";
import axios from 'axios'

export default class Starship extends Component {

  state = {
      pilots: []
  }

  componentDidMount = async () => {
    try{
       const urls = this.props.pilots.map((url) => {
            return axios.get(url)
       })
      //  console.log("URLS:", urls)
      const data = await Promise.all(urls)
      // console.log('DATA:', data)
      const Pilots = []
      data.map((pilot) => {
        console.log(pilot.data.name)
        Pilots.push({
          name: pilot.data.name,
          url: pilot.data.url
        })
      })
      this.setState({
        pilots: Pilots
      })
    }catch(err) {
      console.log(err)
    }
  }
  render() {
    const pilotsInState = this.state.pilots.map((pilot, i) => {
      return <Pilot
            key={"pilot-" + i}
            name={pilot.name}
            url={pilot.url}
      />
    })
    return(
      <>
      <h2>{this.props.name}</h2>
      <h3>{this.props.class}</h3>
      <p>${this.props.cost}</p>
      <a href={this.props.url}>documentation</a>
      {this.props.pilots.lenght ? <h4>Pilots!</h4> : <p>no Pilots!</p>}
      {pilotsInState}
      </>
    )
  }
}