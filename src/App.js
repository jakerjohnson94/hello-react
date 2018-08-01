import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component {
  render() {
    return <h1 style={{ color: this.props.color }}> Hello, {this.props.name}</h1>;
  }
}

class App extends Component {
  render() {
    return <Text color="peachpuff" name="Jake" />;
  }
}

export default App;
