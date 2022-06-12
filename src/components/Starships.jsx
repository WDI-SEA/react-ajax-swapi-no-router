import React, { Component } from 'react';
import axios from 'axios';
import StarshipInfo from './StarshipInfo';

class Starships extends Component {

    state = {
        starships: []

    }

    async componentDidMount() {

        try {
            const res = await axios.get('https://swapi.dev/api/starships/')

        //    console.log(res.data)
        this.setState({ starships: res.data.results })

        } catch(error) {
            console.log('error getting starship', error)
        }

    }

    render() {

        const displayStarships = this.state.starships.map((ship, index) => {
            return (
                <>
                    <StarshipInfo key={`starship${index}`} starships={ship} />
                </>
            )
        })

        return (
            <div>
                <a href="https://fontmeme.com/star-wars-font/"><img src="https://fontmeme.com/permalink/220612/9004fb979f473e35cf2e46afd96e7eb4.png" alt="star-wars-font" border="0"/></a>
                
                    {displayStarships} 
            </div>
        );
    }
}

export default Starships;