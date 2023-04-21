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

    handleFetch = async () => {
        let i = 2
        try {
            const response = await axios.get(`https://swapi.dev/api/starships/?page=${i}`)
            this.setState({
                starships: response.data.results
            })
            return i++
        }catch(err){
            console.log('err')
        }
        
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
        speed={ship.max_atmosphering_speed}
        drive={ship.hyperdrive_rating}
        className="container"
        >
        <h2>{ship.name}</h2>
        <li>Class: {ship.starship_class}</li>
        <li>Speed: {ship.max_atmosphering_speed}</li>
        <li>Hyperdrive: {ship.hyperdrive_rating}</li>
        </div>
        )
    })

    

    return (
      <>
      <button onClick={this.handleFetch} className='more'>More Ships</button>
      {ships}
      </>
    )
  }
}