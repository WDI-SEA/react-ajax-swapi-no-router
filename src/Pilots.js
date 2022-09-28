import axios from 'axios'
import React, {Component} from 'react'
import Pilot from './Pilot'

export default class Pilots extends Component {


    render() {
        const sendPilots = this.props.pilotUrl.map((url, i) => {
            return (
                <Pilot 
                    key={`pilotKey${i}`} 
                    url={url}
                />
            )
        })
        return (

            <div>
                {sendPilots}
            </div>
        )
    }
}