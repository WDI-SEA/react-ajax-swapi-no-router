import React, { Component } from 'react';
import axios from 'axios';

export default class Pilot extends Component {
    state = {
        // set state for pilot equal to an empty array
        pilots: []
    }
    componentDidMount() {
        // create storage array to keep track of pilot data
        const storage = [];
        // check if pilots did not exist
        if (this.props.starship.pilots.length > 0) {
            // map over the pilots in each starship and get each individ pilot
        this.props.starship.pilots.map((pilot) => {
            // send a get request to retrieve pilot data
                const pilotData = axios.get(pilot).then(res =>{
                    // run console log to make sure pilot data/response is correctly being retrieved
                    console.log('name of pilot:', res.data.name);
                    const pilotName =res.data.name;
                    // if so, push the name data into the storage array
                       storage.push(pilotName);
                       // set state to equal storage array with accurate data
                          this.setState({
                           pilots: storage
                          })
                })
                // else set state to equal something generic if no pilots were retrieved
        })} else {
            return (
                this.setState({
                    pilots: '0 Pilots Aboard!'
                   })
            )
        }
    }
    render(){
        return(
            <>
                <h3>
                Pilots: {this.state.pilots}
                </h3>
            </>
        )
    }
}