import React, { Component } from "react";

class PaginationButtons extends Component {
    render() {
        return (
            <div className="mt-2 flex justify-center gap-1">
                <button 
                    className={`px-3 py-1 text-zinc-600 border rounded ${this.props.page <= 1 ? "" : "bg-white"}`} 
                    disabled={this.props.page <= 1 ? true : false}
                    onClick={() => this.props.handlePaginationClick("prev")}>
                    Prev
                </button>
                <button 
                    className={`px-3 py-1 text-zinc-600 border rounded ${this.props.page >= 4 ? "" : "bg-white"}`}
                    disabled={this.props.page >= 4 ? true : false}
                    onClick={() => this.props.handlePaginationClick("next")}>
                    Next
                </button>
            </div>
        );
    }
}

export default PaginationButtons;
