import React, {Component} from 'react'
import Starships from './Starships'

export default class App extends Component {

    state = {
      starships: [],
    }


    componentDidMount() {
      console.log('componentDidMount')
      fetch("https://swapi.dev/api/starships/")
          .then(res => res.json())
          .then(data => {
              // console.log(data.name)
              console.log(data.results)
              const allStarships = data.results
              this.setState({
                  starships: data
              })
          })
  }

  render () {

    return (
      <>
       <h1>🪐👽 KEWL STARSHIPS OF THE WAR OF STARS 🌏🛸</h1>
      <Starships starships={allStarships}/>
      </>
    )

  }

}
