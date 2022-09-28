import React, {Component} from 'react';

export default class Starship extends Component {
    state = {
        filmsArray:[],
        film:''
    }
    render(){
    //     console.log(this.setState.filmsArray)
    //     if(this.props.films == '') {
    //         this.setState({
    //             film: ''
    //         })
    //     } else {
    //     const films = this.props.films.map((film, i)=> {
    //         this.setState({
    //             film: film
    //         })
    //         this.setState(prevState=> {
    //             return {
    //                 filmsArray: [...prevState.filmsArray,prevState.film],
    //                 film: ''
    //             }
    //         })
    //     })
    // }
        return(
            <div style={{margin: '35px'}}>
                <h2 style={{color: 'red'}}>{this.props.name}</h2>
                <div style={{color:'chartreuse'}}>
                <p>Class: {this.props.class}</p>
                <p>Passenger Capacity: <strong>{this.props.cargoCapacity}</strong></p>
                </div>
            </div>
        )
    }
}