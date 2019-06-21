import React, { Component } from 'react';

import './App.css';
import Card from './components/Card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        This is GitHUb Card
        <Card />
      </div>
    );
  }
}

export default App;
