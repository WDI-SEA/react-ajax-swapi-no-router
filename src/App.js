import React, {Component} from "react";
import Starships from "./Starships";

export default class App extends Component {
  state = {
    starships: []
  }

  componentDidMount() {
    // const options = {
    //   headers: {
    //     Accept: 'application/json'
    //   }
    // }
    const url = 'https://swapi.dev/api/starships/'
    fetch(url)
      .then(response => response.json())
      .then(starship=> {
        this.setState({
            starships: starship.results
        })
        console.log(starship.results)
        })
        .catch(err => {
            console.log(err)
        })

  }
  render() {
    let starship = this.state.starships.map ((starship, idx) => {
      return <Starships starship={starship} key={idx} />
    })
    return (
      <>
      <h1>Star Wars Starships</h1>
      {starship}
      </>
    )
  }


}