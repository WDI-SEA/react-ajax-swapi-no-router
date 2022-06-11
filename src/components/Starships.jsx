import React, { Component } from 'react'
import axios from 'axios'
import Starship from './Starship'

export default class Starships extends Component {
  state = {
    starships: [],
    prevUrl: '',
    currentUrl: 'https://swapi.dev/api/starships',
    nextUrl: '',
  }

  async componentDidMount() {
    try {
      const res = await axios.get(this.state.currentUrl)
      this.setState({ starships: res.data.results, nextUrl: res.data.next })
    } catch (err) {
      console.warn(err)
    }
  }

  async componentDidUpdate(pP, prevState, SS) {
    if (prevState.currentUrl !== this.state.currentUrl) {
      console.log('updated')
      try {
        const res = await axios.get(this.state.currentUrl)
        this.setState({
          starships: res.data.results,
          nextUrl: res.data.next,
          prevUrl: res.data.previous,
        })
      } catch (err) {
        console.warn(err)
      }
    }
  }

  goToNext = () => {
    if (this.state.nextUrl !== null) {
      this.setState({
        prevUrl: this.state.currentUrl,
        currentUrl: this.state.nextUrl,
      })
    }
  }

  goToPrev = () => {
    if (this.state.prevUrl !== null) {
      this.setState({
        currentUrl: this.state.prevUrl,
        nextUrl: this.state.currentUrl,
      })
    }
  }

  render() {
    const { starships } = this.state
    const allShips = starships.map(ship => {
      return <Starship key={ship.name} ship={ship} />
    })

    return (
      <div>
        <button onClick={this.goToPrev}>Previous Page</button>
        <button onClick={this.goToNext}>Next Page</button>
        <div>{allShips}</div>
      </div>
    )
  }
}
