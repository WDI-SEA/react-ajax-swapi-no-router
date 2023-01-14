import React, { Component } from 'react'
import './App.css'
import Starship from './Starship'
import axios from 'axios'

export default class App extends Component {
  state = {
    starships: []
  }

//DidMount runs once when our component is 'mounted' aka loaded
//make a GET request to the api, fetch that data, and store it in a component's state (line 7-9)
async componentDidMount() {
  try{
      const response = await axios.get(`https://swapi.dev/api/starships?limit=50`)
      this.setState({
          starships: response.data.results
      })
      console.log(response.data.results)
      // console.log('didmount is running')
    } catch(error){
        console.log(error.message)
    }
  }

  //when component is rendered, map over the starships array in state and return a Starship component for each starship, passing it the starship's name, class, and other data as props
  render() {
    // console.log('rendered')
    const ships = this.state.starships.map((starship, idx)=> {
      return(
        //returned component that is being rendered
        <>
          <Starship 
            key={`starship-${idx}`}
            name={starship.name}
            class={starship.starship_class}
            mglt={starship.MGLT}
            crew={starship.crew}
            // starship={starship}          
          />
        </>
      )
    })

    return (
      <>
        <div className="starship" style={{fontSize: '30px'}}>Starships</div>
        {ships}
      </>
    )
  }

}
