import React, {Component} from 'react';
import './App.css';

class App extends Component{
  state = {
    attractions: {}
  }

  componentDidMount(){
    this.getAllAttractions()
  }

  getAllAttractions = () => {
    fetch(`http://localhost:3000/api/v1/attractions`)
    .then(res => res.json())
    .then(data => this.setState({attractions: data}))
  }

  render () {
    console.log(this.state.attractions);
    return (
      <div>
      HAUNTED ATTRACTIONS
      </div>
    );

  }
}

export default App;
