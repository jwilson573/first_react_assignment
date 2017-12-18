import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: 'Wilson'
  }

  changeUserHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    
    return (
      <div className="App">
        <UserInput change={this.changeUserHandler} name={this.state.username}/>
        <UserOutput username="Jonathon"/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
