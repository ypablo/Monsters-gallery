import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  render() {
    return (
      <div className="App">
      {
        this.state.monsters.map(monster => <h1 key={monster.id}>{ monster.name }</h1> )
      }
      </div>
    )
  }
}

