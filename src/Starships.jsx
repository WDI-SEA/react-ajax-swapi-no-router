import React, { Component } from 'react';
import  Starship  from './Starship.jsx'
// create component called 'Starships
export default class Starships extends Component {
    state = {
        ships: []
    }
    // make get request to api, fetch the data, and store it in component's state(above)
    componentDidMount() {
        fetch("https://swapi.dev/api/starships/")
          .then(response => response.json())
          .then(data => this.setState({ ships: data.results }));
      }
      // when component is rendered, map over the starships array in state and return a Starship component for each starship, passing it the starship's name, class, and otherData as props
      render() {
        return (
            // returned component is a div with a Starship component for each starship in the starships array
          <div>
            {this.state.ships.map((starship, i) => (
              <Starship
              
                key={'starship-' +i}
                name={starship.name}
                shipClass={starship.starship_class}
                
              />
            ))}
          </div>
        );
      }
    }