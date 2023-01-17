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
              this.setState({
                  starships: data.results
              })
          })
  }
  
  render () {

  const starshipsArray = this.state.starships.map((ship, i) => {
    return (
        <>
        <Starships
          index={i}
          name={ship.name}
          model={ship.model}
          manufacturer={ship.manufacturer}
          cost={ship.cost_in_credits}
          class={ship.starship_class}
          key={`ship ${i}`}
          />
          </>
    )
})


    return (
      <>
       <h1>🪐👽 KEWL STARSHIPS OF THE WAR OF STARS 🌏🛸</h1>
      {starshipsArray}
      </>
    )

  }

}
