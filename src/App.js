import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Time from './components/time';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form title={'My Form'}/>
          <Time/>
        </header>
      </div>
    );
  }
}

export default App;
