import { Button, Spinner } from "flowbite-react"
import React, { Component } from "react"
import Starship from "./Starship"

export default class Starships extends Component {
  state = {
    starships: [],
    next: null,
    prev: null,
    isLoading: false,
  }

  componentDidMount() {
    this.getStarships()
  }

  getStarships = async (url = "https://swapi.dev/api/starships") => {
    this.setState({ isLoading: true })

    const response = await fetch(url)
    const data = await response.json()

    this.setState({
      isLoading: false,
      starships: data.results,
      next: data.next,
      prev: data.previous,
    })
  }

  prevPage = () => {
    if (this.state.prev) {
      this.getStarships(this.state.prev)
    }
  }

  nextPage = () => {
    if (this.state.next) {
      this.getStarships(this.state.next)
    }
  }

  render() {
    const starshipComponents = this.state.starships.map((ship) => {
      return <Starship data={ship} key={ship.name} />
    })
    return (
      <>
        {this.state.isLoading && (
          <div className="flex justify-center items-center w-full">
            <Spinner aria-label="Loading starships" size="xl" />
          </div>
        )}

        <div className="flex flex-col space-y-8 justify-center items-center md:p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-sm md:max-w-fit">
            {starshipComponents}
          </div>
          <div className="flex space-x-5">
            <Button onClick={this.prevPage} disabled={!this.state.prev}>
              Prev
            </Button>
            <Button onClick={this.nextPage} disabled={!this.state.next}>
              Next
            </Button>
          </div>
        </div>
      </>
    )
  }
}
