import React, { Component } from 'react';
import Header from './components/header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Header />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
