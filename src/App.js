import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import axios from 'axios'



export default class App extends Component {
    state = {
        movies: [],
        query: ""
    }


    // async componentDidMount() {
    //     let response = await fetch("http://localhost:3001/movies")
    //     console.log(response)
    //     let data = await response.json();
    //     console.log(data)
    //     this.setState({ movies: data })
    // }

    componentDidMount() {
        axios.get("http://localhost:3001/movies")
            .then(res => this.setState({ movies: res.data }))
            .catch(err => console.log(err))
    }

    // deleteMovie = async (id) => {
    //     await fetch(`http://localhost:3001/movies/${id}`, { method: "DELETE" })
    //     const newMovieList = this.state.movies.filter(
    //         movie => movie.id !== id
    //     );
    //     this.setState(state => ({ movies: newMovieList }))
    // }

    deleteMovie = (id) => {
        axios.delete(`http://localhost:3001/movies/${id}`)
        const newMovieList = this.state.movies.filter(
            movie => movie.id !== id
        );
        this.setState(state => ({ movies: newMovieList }))
    }


    searchMovie = (event) => {
        this.setState({ query: event.target.value })
    }
    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().search(this.state.query.toLowerCase()) !== -1
            }
        )
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovie={this.searchMovie} />
                    </div>
                </div>
                <div className="row">
                    <MovieList movies={filteredMovies} deleteMovie={this.deleteMovie} />
                </div>
            </div>
        )
    }
}

