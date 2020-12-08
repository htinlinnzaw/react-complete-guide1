import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App'))
    );
  }
}

export default App;
