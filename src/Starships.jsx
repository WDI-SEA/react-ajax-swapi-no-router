import React, {Component} from 'react';
import axios from 'axios';

export default class Starship extends Component {
    // State
    state = {
        starShipsArray:''
    }
    // Lifestyles

    async componentDidMount(){
        try {
            const response = await axios.get('https://swapi.dev/api/starships/')
            this.setState({starShipsArray: response.data})
            console.log(this.state.starShipsArray)
        }catch(err){
            console.warn(err)
        }
    }
    // Methods

  render(){
    // Constants?
    return(
      <div>
        Starships
      </div>
    )
  }
}