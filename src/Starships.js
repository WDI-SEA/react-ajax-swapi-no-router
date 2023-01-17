import React,  {Component} from 'react'
import Ship from './Ship'
import axios from 'axios'
export default class Starships extends Component{
    state={
        shipResults:[]
      }
      async componentDidMount(){
        this.handleApiPing()
      }
      handleApiPing = async ()=>{
        const response = await axios.get('https://swapi.dev/api/starships/')
        console.log(response.data.results)
        this.setState({
          shipResults: response.data.results
        })
        console.log(this.state.shipResults, "here")
      }
  render(){
    const ships = this.state.shipResults.map((ship,idx)=>{
        return(
            <Ship
                key={`ship${idx}`}
                name={ship.name}
                class={ship.starship_class}
                manufacturer={ship.manufacturer}
            />
        )
    })
    return(
      <>
      {ships}
      </>
    )
  }
}