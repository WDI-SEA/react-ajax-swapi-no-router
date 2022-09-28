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
                >{this.props.starships.name}</ul>
                <ul
                    style = {{
                        width: "30vw"  
                    }}
                >{this.props.starships.model}</ul>
            </div>

        )

    }
}

export default StarshipInfo