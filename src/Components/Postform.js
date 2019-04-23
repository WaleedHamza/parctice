import React, { Component } from 'react'
import axios from 'axios';
 class PostForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchTitle: ''
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const searchItem = e.target.value
    this.setState({searchTitle: searchItem})
    const TMDB = `https://api.themoviedb.org/3/search/movie?api_key=615416944a44ce93ed4100b890e43b0a&language=en-US&query=${searchItem}&page=1&include_adult=false`
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

  render() {
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