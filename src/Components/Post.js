import React, { Component } from 'react'
import axios from 'axios'
// import Postform from 'postform'
// import Iframe from 'react-iframe'
// import Trailer from './trailer'

class Post extends Component {


    constructor(props){
        super(props);
        this.state = {
            movies: []
          }
      }
      
    componentWillMount(){

    
    }

    getTrailer() {
      const url = `https://api.themoviedb.org/3/movie/${this.state.results.id}?api_key=615416944a44ce93ed4100b890e43b0a&append_to_response=videos`;
      console.log(this.state.results.data.id)
      axios.get(url)
      .then((res) => {
        // console.log(res)
        var results = res.data.videos.results[0].key
        this.setState({trailerKey: results})
            console.log(results)
      })
    }


  render() {
    // console.log('this.props.children')
    const movieItems = this.props.movies
    console.log(movieItems)
    // const src='https://image.tmdb.org/t/p/w185/' + {movie.poster_path}
    // const movieItems = this.props.searchTitle.map( movie => (
    //     <div key = {movie.id}>
    //     <h3>Title: {movie.title}</h3>
    //     <p>SYNOPSIS: {movie.overview}</p>
    //     <h3>OMDB ID: {movie.id}</h3>
    //     <p>Release Date: {movie.release_date}</p>
    //     <p>Original Language: {movie.original_language}</p>
    //     { <iframe key= {movie.id} title={movie.title} src={'https://www.youtube.com/embed/' + movie.key} ></iframe> }
    //     <br />
    //     { <button onClick={this.getTrailer.bind(this)}>View</button> }
    //     { <Trailer /> }
    //     </div>
    // ))
    return (
      <div>
       {/* {movieItems} */}
       {/* {this.props.movies} */}
      </div>

    )
  }
}

export default Post