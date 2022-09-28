import React, {Component} from 'react';
import axios from 'axios';
import Starship from './Starship';
export default class Starships extends Component {
    // State
    state = {
        starShipsArray:[]
    }
    // Lifestyles

    async componentDidMount(){
        try {
            const response = await axios.get('https://swapi.dev/api/starships/')
            this.setState({starShipsArray: response.data.results})
            console.log(this.state.starShipsArray)
        }catch(err){
            console.warn(err)
        }
    }
    // Methods

  render(){
    // Constants?
    const starShips = this.state.starShipsArray.map((starship,i)=> {
        return(
            <div>
                <Starship 
                    name={starship.name}
                    class={starship.starship_class}
                    cargoCapacity={starship.cargo_capacity}
                    
                    key={`starshipKey${i}`}/>
            </div>
        )
        
    })
    return(
            <ul>
                {starShips}
            </ul>
    )
  }
}