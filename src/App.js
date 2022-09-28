import React, {Component} from 'react'
import './App.css';
import Starship from './Starship'
import axios from 'axios'

class App extends Component {
  state = {
    starships: []
  }

  async componentDidMount() {
    try {
    const response = await axios.get('https://swapi.dev/api/starships')
    this.setState({ starships: response.data.results})
    }catch (err) {
        this.setState({starships: 'there was an error'})
        console.warn(err)
    }
  }
  render() {
    return (
      <div>
        <Starship 
        starships={this.state.starships}/>
      </div>
    )
  }
}

export default App;
