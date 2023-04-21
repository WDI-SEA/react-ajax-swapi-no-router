import React, { Component } from "react";
import axios from "axios"

export default class Pilot extends Component {
    state = {
        pilots: []
    }
    componentDidMount() {
        const pilotList = [];
        if (this.props.starship.pilots.length) {
        this.props.starship.pilots.map((pilot, i) => {
                const pilotInfo = axios.get(pilot).then(response =>{
                    console.log(response.data.name)
                       pilotList.push(response.data.name)
                          this.setState({
                           pilots: pilotList
                          })
                })
        })} else {
            return (
                this.setState({
                    pilots: "No Pilots"
                   })
            )
        }
    }
    render(){
        if (this.props.starship.pilots.length > 0) {
            
        }
        return(
            <>
            <h5>
                Pilots: {this.state.pilots}
                </h5>
            </>
        )
    }
}