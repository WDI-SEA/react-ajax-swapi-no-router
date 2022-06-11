import { data } from "autoprefixer"
import { Card } from "flowbite-react"
import React, { Component } from "react"
import Pilot from "./Pilot"

export default class Starship extends Component {
  render() {
    const detailItem = (label, data) => {
      return (
        <li className="py-3 sm:py-4">
          <div className="flex items-center justify-between space-x-4">
            <div className="font-semibold">
              <p>{label}:</p>
            </div>
            <div className="text-right">
              <p>{data}</p>
            </div>
          </div>
        </li>
      )
    }

    const pilotComponents = this.props.data.pilots.map((pilotUrl) => (
      <Pilot url={pilotUrl} />
    ))
    return (
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
            {this.props.data.name}
          </h2>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide:gray-700">
            {detailItem("Model", this.props.data.model)}
            {detailItem("Class", this.props.data.starship_class)}
            {detailItem("Manufacturer", this.props.data.manufacturer)}
            {detailItem("Crew", this.props.data.crew)}
            {detailItem("Passengers", this.props.data.passengers)}
          </ul>

          <h3 className="text-xl font-semibold mt-3 mb-2 border-b-2">Pilots</h3>
          {this.props.data.pilots.length === 0 && <p>No Pilots</p>}
          {this.props.data.pilots.length > 0 && pilotComponents}
        </div>
      </Card>
    )
  }
}
