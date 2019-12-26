import React, {Component} from 'react';

import Top from './components/top/Top.js'
import Logo from './components/logo/Logo.js'
import Filter from './components/filter/Filter.js'
import Attractions from './components/attractions/Attractions.js'

import './App.css';

class App extends Component{
  state = {
    attractions: {},
    trips: {},
    users: {}
  }

  componentDidMount(){
    this.getAllAttractions();
    this.getAllTrips();
    this.getAllUsers();
  }

  getAllAttractions = () => {
    fetch(`http://localhost:3000/api/v1/attractions`)
    .then(res => res.json())
    .then(data => this.setState({attractions: data}))
  }

  getAllTrips = () => {
    fetch(`http://localhost:3000/api/v1/trips`)
    .then(res => res.json())
    .then(data => this.setState({trips: data}))
  }

  getAllUsers = () => {
    fetch(`http://localhost:3000/api/v1/users`)
    .then(res => res.json())
    .then(data => this.setState({users: data}))
  }

  render () {
    console.log(this.state.attractions);
    console.log(this.state.trips);
    console.log(this.state.users);
    return (
      <div>
      <Top />
      <Logo />
      <Filter />
      <Attractions />
      </div>
    );

  }
}

export default App;
