import React, { Component } from 'react'

import './AttractionsCard.css'

class AttractionsCard extends Component {
  render(){
    return (
      <>
      <div> attraction cards </div>
      <ul><li>{this.props.name}</li></ul>
      </>
    )
  }
}

export default AttractionsCard
