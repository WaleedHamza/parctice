import React, { Component } from 'react'
import axios from 'axios'
import './card.scss'

export default class Card extends Component {

  constructor(){
    super();
    this.state ={

    }
  }


visitHomePage(){
        console.log(this.props.movie.homepage)
        const url = 'https://www.themoviedb.org/movie/' + this.props.movie.id
        window.location.href= url
    }

getTrailer() {
      const url = `https://api.themoviedb.org/3/movie/${this.props.movie.id}?api_key=615416944a44ce93ed4100b890e43b0a&append_to_response=videos`;
      axios.get(url)
      .then((res) => {
        var results = res.data.videos.results
      results.forEach((item)=>{
          console.log(item.key)
          var url ='https://www.youtube.com/watch?v='+item.key

       
        })        
      })
    }



  render() {
    return (
        <div className='container' key={this.props.movie.id}>
        <div className='card' >
        <img className='backdrop' src={this.props.movie.backdrop} alt='movie_backdrop' onError= {(e)=>{e.target.onerror = null ; e.target.src="https://www.wthr.com/sites/default/files/images/2016/11/19/movie%20theater%20generic"}}></img>
             <div className='row'>
             <div className='movieData'>
                <img className='poster' src={this.props.movie.poster} alt='movie_poster' onError= {(e)=>{e.target.onerror = null ; e.target.src="https://www.classicposters.com/images/nopicture.gif"}}></img>
                <div className='movie_details' key={this.props.movie.id}>
                <div className='movie-title'>
                <h1>{this.props.movie.title}</h1>
                <p> ({this.props.movie.release_date})</p>
                </div>
                <p>{this.props.movie.overview}</p>
                <button onClick={this.visitHomePage.bind(this)}>View</button>
                <button onClick={this.getTrailer.bind(this)}>Watch Trailer</button>
                </div>
                <div className='trailer-container'>
                <iframe
                  src=''
                  width="100%"
                  height="700"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
              />               
              </div>
            </div> 
          </div>
      </div>
      </div>
    )
  }
}
