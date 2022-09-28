import React, { Component } from "react"

class StarshipInfo extends Component {
    render() {
      
        return (
            <div 
                style = {{
                    display: "flex"
                    
                }}
            >
                
                <ul
                    style = {{
                        width: "30vw"
                        
                    }}
                >Name: {this.props.starships.name}</ul>
                <ul
                    style = {{
                        width: "30vw"  
                    }}
                >Class: {this.props.starships.starship_class}</ul>
            </div>

        )

    }
}

export default StarshipInfo