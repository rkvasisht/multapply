import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
            <Navbar />
            <h1>MULTAPPLY</h1>
            <p>An application for applications</p>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
