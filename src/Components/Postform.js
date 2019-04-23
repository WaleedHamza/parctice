import React, { Component } from 'react'
import axios from 'axios';
 class PostForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies:[],
      searchTitle: '',
      movieID: []
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const searchItem = e.target.value
    this.setState({searchTitle: searchItem})
    const TMDB = `https://api.themoviedb.org/3/search/movie?api_key=615416944a44ce93ed4100b890e43b0a&language=en-US&query=${searchItem}&page=1&include_adult=false`
      axios.get(TMDB)
      .then( (res) => {
          var results = res.data.results
          var movieID = []
          results.forEach((results)=>{
            movieID.push(results.id)
          })
          this.setState({movies: results, movieID: movieID})
          console.log(this.state)
          })
      .catch((err) => {
              console.log(err)
          }) 
  }

  render() {
    var movies= this.props.movies
    return (
      <div>
        <form>
        <input type='text' name="searchMovie" value={this.state.searchTitle} onChange={this.onChange}></input>
        </form>
       
      </div>
    )
  }
}

export default PostForm;