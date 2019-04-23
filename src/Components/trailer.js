import React, { Component } from 'react'
import Iframe from 'react-iframe'

export default class Trailer extends Component {
  render() {
    return (
      <div>
         <Iframe url="http://www.youtube.com/embed/NWWzve8Z90s"
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
