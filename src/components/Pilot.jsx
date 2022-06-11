import axios from 'axios'
import React, { Component } from 'react'

export default class Pilot extends Component {
  state = {
    name: '',
  }

  async componentDidMount() {
    try {
      const res = await axios.get(this.props.pilot)
      this.setState({ name: res.data.name })
    } catch (err) {
      console.warn(err)
    }
  }
  render() {
    // const { pilot } = this.props
    const { name } = this.state

    return <div>Pilot: {name}</div>
  }
}
