import React, { Component } from "react"
import { Spinner } from "flowbite-react"

export default class Pilot extends Component {
  state = {
    isLoading: false,
    data: {},
  }

  componentDidMount() {
    const url = this.props.url
    if (url !== "") this.getPilotData(url)
  }

  getPilotData = async (url) => {
    try {
      this.setState({ isLoading: true })

      const response = await fetch(url)
      const data = await response.json()

      this.setState({
        isLoading: false,
        data: data,
      })
    } catch (error) {
      console.error("Error fetching pilot data:", error)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const pilotDetails = (
      <>
        <p>{this.state.data.name}</p>
      </>
    )
    return (
      <div>
        {this.state.isLoading && (
          <div className="flex justify-center items-center w-full">
            <Spinner aria-label="Loading starships" size="xl" />
          </div>
        )}
        {!this.state.isLoading && pilotDetails}
      </div>
    )
  }
}
