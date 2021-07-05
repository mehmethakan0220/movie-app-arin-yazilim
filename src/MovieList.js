import React, { Component } from 'react'

export default class MovieList extends Component {
    render() {
        return (
            <div className="row">
                {this.props.movies.map(movie => {
                    return <div className="col-lg-4" key={movie.id}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageURL} className="card-img-top" alt="bi resim" />
                            <div className="card-body">
                                <h5 className="card-title"> {movie.name} </h5>
                                <p className="card-text" style={{ height: "150pt" }} > {movie.overview.substr(0, 250)}...</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button onClick={() => this.props.deleteMovie(movie.id)} type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                    <h2><span style={{ color: "orange", display: "inline" }} className="badge badge-pill badge-info">{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div >
        )
    }
}
