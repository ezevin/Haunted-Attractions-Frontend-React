import React, { Component } from 'react'

import AttractionsCard from '../attractionscard/AttractionsCard.js'

import './Attractions.css'

class Attractions extends Component {
  render(){
    console.log(this.props);
    return (
      <div>
      Attractions List

      {
        this.props.attractions.map(attraction => (
          <AttractionsCard
           name={attraction.name}
          />
        ))
      }

      </div>
    )
  }
}

export default Attractions
