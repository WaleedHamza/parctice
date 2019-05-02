import React, { Component } from 'react'
import axios from 'axios';
import Card from'../Card/Card'
import './search.scss'
 class Search extends Component {

  constructor(){
    super();
    this.state = {
      movies:[],
      titleInput: ''
    }

    this.onChange = this.onChange.bind(this)
  }
   
 
  onChange(e) {
  e.stopPropagation();
  // e.nativeEvent.stopImmediatePropagation();
    const input = e.target.value
    this.setState({titleInput: input})
    const TMDB = `https://api.themoviedb.org/3/search/movie?api_key=615416944a44ce93ed4100b890e43b0a&language=en-US&query=${input}&page=1&include_adult=false`
      axios.get(TMDB)
      .then( (res) => {
       var movieItems=[]
        var results = res.data.results
        results.forEach((movie) => {
          movie.poster='https://image.tmdb.org/t/p/original' + movie.poster_path
          movie.backdrop='https://image.tmdb.org/t/p/original' + movie.backdrop_path
          const film= <Card movie= {movie} key={movie.id}/>
            movieItems.push(film)
          })

          this.setState({movies: movieItems})
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
        <input className='searchInput' type='text' name="searchMovie" value={this.state.titleInput} onChange={this.onChange} onClick={(e)=>{e.preventDefault()}} placeholder=" Search..."></input>
        </form>
       {this.state.movies}

      </div>
      
    );
   
  }
}


export default Search;