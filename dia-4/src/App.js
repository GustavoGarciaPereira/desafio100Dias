import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';


class App extends Component {
  render() {
    return (
      <div>
        <Counter nome = {"Gustavo"} initialCounter = {10} color = "red"/>
        <Counter nome = {"Garcia"} initialCounter = {20} color = "blue"/>
        <Counter nome = {"Pereira"} initialCounter = {30} color = "green"/>
      </div>
    );
  }
}

export default App;
