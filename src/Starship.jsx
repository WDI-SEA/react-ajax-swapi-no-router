import React, { Component } from 'react';
// define component called 'Starship'
//export default class Starship extends Component {
    // create a function that returns a div with the starship's (props) name, class


export default function Starship({name, shipClass}) {
    return (
        

        // return a div with the starship's name, class, and otherData
      <div>
        
        <h2>{name}</h2>
        <p>Class: {shipClass}</p>
        
      </div>
    );
  }
//
// this is a functional component because it doesn't have state, and it doesn't need to use lifecycle methods and it is defined as a function instead of a class

// on line 7, we destructure the props object and pass the name, shipClass properties as arguments to the Starship function instead of using props.name, props.shipClass,  or this.props.name, this.props.shipClass, 
