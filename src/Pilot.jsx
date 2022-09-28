import React, {Component} from 'react';

export default class Pilot extends Component{
    render(){
        
        return(
            <ul>
                <li>{this.props.name}</li>
                {/* <li>{this.props.url}</li> */}
            </ul>
        )
    }
}