import React, { Component } from "react";

export default class Buttons extends Component {
    render() {
        return (
            <div className="bDiv">
                <button 
                    className='pButton' 
                    disabled={this.props.page <= 1 ? true : false}
                    onClick={() => this.props.handlePageClick("prev")}>
                    Prev
                </button>
                <button 
                    className='nButton'
                    disabled={this.props.page >= 4 ? true : false}
                    onClick={() => this.props.handlePageClick("next")}>
                    Next
                </button>
            </div>
        )
    }
}

