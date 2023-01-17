import React, {Component} from 'react' 
import Starship from './Starship'
import axios from 'axios'

export default class Starships extends Component {
    // state to hold api response
    state = {
        starships: []
    }
    //make api call in the componentDidMount (after component has loaded)
    async componentDidMount () {
        try {
            const url = 'https://swapi.dev/api/starships'
            const response = await axios.get(url)
            this.setState({
                starships: response.data.results
            })
            console.log(response.data)
        } catch (err) {
            console.warn(err)
        }
    }
    render() {
        //map api data thats held in state to an array of starship components
        const starshipComponents = this.state.starships.map((starship, idx) => {
            return (
                <Starship
                starship={starship}
                key={`Starship${idx}`}
                />
            )
        })
        return (
            <div>
              <h1>StarShips:</h1>
              {/* loading message w a ternary */}
              {starshipComponents.length > 0 ? starshipComponents : 'Loading Starships..'}
            </div>
        )
    }
}