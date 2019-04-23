import React, { Component } from 'react';
import './App.css';

import Post from './Components/Post'
import Postform from './Components/Postform.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Postform />
        <hr></hr>
        <Post />
       
      </div>
    );
  }
}

export default App;
