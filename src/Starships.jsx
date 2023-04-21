import React, {Component} from "react"
import axios from "axios"


export default class Starships extends Component {

    state = {
        starships : []
    }

    
    componentDidMount() {
        axios.get('https://swapi.dev/api/starships/')
            .then(response => {
                // console.log(response.data.results)
                this.setState({
                    starships: response.data.results
                })
                
            })
            .catch(console.log)
        console.log("Insert APi Response here")
    }


    componentDidUpdate() {
        //here a console.log of state will always be accurate
        // console.log(this.state)
        // console.log("the component Updated")
    }

  render() {

    const ships = this.state.starships.map((ship, i) =>{
        // console.log(ship.name)
        console.log(ship.starship_class)
        return(
            
        <div 
        key={"ship" + i}
        name={ship.name}
        shipClass={ship.starship_class}
        className 
        >
        <h2>Starship name is: {ship.name}</h2>
        <p>Starship class is: {ship.starship_class}</p>
        </div>
        )
    })


    return (
      <>
      {ships}
      </>
    )
  }
}