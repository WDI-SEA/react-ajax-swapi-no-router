import React, {Component} from 'react';
import axios from 'axios';
import Pilot from './Pilot';
export default class Starship extends Component {
    state = {
        pilots:[]
    }
    async componentDidMount(){
        try{
            // MAP THE ARRAY OF URLS AND USE AXIOS
            const data = this.props.pilots.map((url=> {
                return axios.get(url)
            }))
            // console.log(data)
            // USE Promise.All to wait for all promises/data to be rendered
            const promisedData = await Promise.all(data)

            const shallowState = []
            promisedData.forEach(pilot => {
                shallowState.push({
                    name: pilot.data.name,
                    url: pilot.data.url
                })
            })
            this.setState({pilots: shallowState})
            console.log(this.state.pilots)
            // console.log(promisedData)
        }catch(err){
            console.log(err)
        }
    }
    render(){
        const pilotsArray = this.state.pilots.map((pilot,i)=> {
            return(
                <Pilot 
                name={pilot.name}
                url={pilot.url}/>
            )
        })
        return(
            <div style={{margin: '35px'}}>
                <h2 style={{color: 'red'}}>{this.props.name}</h2>
                <div style={{color:'chartreuse'}}>
                    <p>Class: {this.props.class}</p>
                    <p>Cost: ${this.props.cost} credits</p>
                    <p>Passenger Capacity: <strong>{this.props.cargoCapacity}</strong></p>
                    <p><strong>Pilots:</strong></p>
                    {pilotsArray}
                </div>
            </div>
        )
    }
}