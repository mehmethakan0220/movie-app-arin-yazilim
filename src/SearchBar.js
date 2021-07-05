import React, { Component } from 'react'

export default class SearchBar extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input onChange={this.props.searchMovie} type="text" className="form-control" placeholder="Search a movie" />
                    </div>
                </div>
            </form>
        )
    }
}
