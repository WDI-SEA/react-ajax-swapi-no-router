import React, { Component } from 'react'
import axios from 'axios'
import Pilot from './Pilot'

export default class Starship extends Component {
    state = {
        pilots: []
    }

    componentDidMount= async () => {
        try {
            const urls = this.props.pilots.map((url)=> axios.get(url)
            )
            //console.log("urls!!!", urls)
            const data = await Promise.all(urls)
            const pilots=[]
            data.forEach((pilot) => {
                console.log(pilot.data.name)
                pilots.push({
                    name: pilot.data.name,
                    url: pilot.data.url})
            })
            this.setState({
                pilots: pilots
            })
        }catch(err){
            console.warn(err)
        }
    }

    render() {
        const pilotsInState = this.state.pilots.map((pilot, i) => {
            return <Pilot 
            key={"pilot- " + i}
            name={pilot.name}
            url= {pilot.url}
            />
        })
        return(
            <>
            <h2> {this.props.name} </h2>
            <h3> {this.props.class} </h3>
            <h4> $ {this.props.cost} </h4>
            <a href={this.props.url}>Documentation</a>
            {this.props.pilots.length ? <h4>Pilots!</h4> : "no pilots"}
            {pilotsInState}

            </>
        )
}
}