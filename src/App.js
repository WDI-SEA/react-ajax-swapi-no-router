import React, { Component } from 'react'
import Starships from './Starships'
import axios from 'axios'

export default class App extends Component {
  state = {
    shipInfo: [],
    pageNum: 1
  }

  handleForwardClick = () => {
    if (this.state.pageNum < 4) {
      this.setState(prevState => {
        return (
          { pageNum: 1 + prevState.pageNum }
        )
      })
    }
   
    console.log(this.state.pageNum)
  }

  handlePreviousClick = () => {
    if (this.state.pageNum > 1) {
      this.setState(prevState => {
        return (
          { pageNum: prevState.pageNum - 1 }
        )
      })
    }
   
    console.log(this.state.pageNum)
  }


  async componentDidMount() {
    try {
      const response = await axios.get(`https://swapi.dev/api/starships/?page=1`)
      this.setState({
        shipInfo: response.data.results
      })
    } catch (err) {
      this.setState({ shipInfo: "Uh oh" })
      console.warn(err)
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.state.pageNum !== prevProps.pageNum) {
      const response = await axios.get(`https://swapi.dev/api/starships/?page=${this.state.pageNum}`)
      this.setState({
        shipInfo: response.data.results
      })
    }
  }


  render() {

    return (
      <div>
        <div>
          <Starships
            shipInfo={this.state.shipInfo}
          />
        </div>
        <button onClick={this.handlePreviousClick}>
          Previous Page
        </button>
        <button onClick={this.handleForwardClick}>
          Next Page
        </button>
      </div>
    )
  }
}
