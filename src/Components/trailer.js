import React, { Component } from 'react'
import Iframe from 'react-iframe'

export default class Trailer extends Component {
  render() {
    return (
      <div>
         <Iframe url="http://www.youtube.com/embed/5c9294240e0a267cd516835f"
        width="720px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
      </div>
    )
  }
}
