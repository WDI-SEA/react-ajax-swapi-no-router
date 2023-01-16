import React, { Component } from 'react';


export default class Starships extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //handle change of the input field
    handleChange(e) {
        this.setState({ input: e.target.value });
    }

    //fetch starships from the api
    async componentDidMount() {
        const url = 'https://swapi.dev/api/starships/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ stars: data.results });
    }
    //create a handleSumit function
    async handleSubmit(e) {
        e.preventDefault();
        const input = document.getElementById('starsInput').value;
        const url = `https://swapi.dev/api/starships/?search=${input}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ stars: data.results });
    }
      
    render() {
       // console.log(this.state.stars);
        
        return (
            <div className="starships">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="starsInput">Enter Name </label>
                    <input type="text" id="starsInput" />
                    <button className="btn" type="submit">See Ship Details</button>
                </form>
                {this.state.stars.map((star) => (
            <div className="starship" key={star.name}>
                
                

                <h3>Name:{star.name}</h3>
                <p>Model: {star.model}</p>
                
                
            </div>
            
        ))}
                
                
                
            
                
            </div>
        );
    }

        //function to display the name in the console


        //console.log(this.state.stars[0].name);
        //only display one star 
        //return <h1>{this.state.stars[0].name}</h1>
        //map throgh stars array and display the name of each starship in that array

        
    }

    //create a handleSumit function            
    
    
    
    

        
