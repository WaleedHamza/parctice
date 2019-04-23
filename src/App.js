import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Post from './Components/Post'
import Postform from './Components/Postform.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <Postform />
        <Post />
       
      </div>
    );
  }
}

export default App;
