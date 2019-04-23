import React, { Component } from 'react'
import axios from 'axios'
import Iframe from 'react-iframe'
import Trailer from './trailer'

class Post extends Component {


    constructor(props){
        super(props);
        this.state = {
            movies: [],
            trailer: [{}]
        }
      }
      
    componentWillMount(){
      const TMDB = `https://api.themoviedb.org/3/search/movie?api_key=615416944a44ce93ed4100b890e43b0a&language=en-US&query=hulk&page=1&include_adult=false`
      // const OMDB = `http://www.omdbapi.com/?i=tt3896198&apikey=988d81cc`

        axios.get(TMDB)
        .then( (res) => {
            var results = res.data.results
            // console.log(results)
            this.setState({movies: results})
            // console.log(this.state)
            })
        .catch((err) => {
                console.log(err)
            }) 
    }

    getTrailer() {
      const url = `https://api.themoviedb.org/3/movie/550?api_key=615416944a44ce93ed4100b890e43b0a&append_to_response=videos`;
      axios.get(url)
      .then((res) => {
        // console.log(res)
        var results = res.data.videos.results[0].id
            console.log(results)
      })
    }



  render() {
    // const src='https://image.tmdb.org/t/p/w185/' + {movie.poster_path}
    const movieItems = this.state.movies.map( movie => (
        <div key = {movie.id}>
        <h3>Title: {movie.title}</h3>
        <p>SYNOPSIS: {movie.overview}</p>
        <h3>OMDB ID: {movie.id}</h3>
        <p>Release Date: {movie.release_date}</p>
        <p>Original Language: {movie.original_language}</p>
        <iframe key= {movie.id} title={movie.title} src='https://www.youtube.com/embed/trailer/5c9294240e0a267cd516835f'></iframe>
        <br />
        <button onClick={this.getTrailer.bind(this)}>View</button>
        <Trailer />
        </div>
    ))
    return (
      <div>
       {movieItems}
      </div>

    )
  }
}

export default Post