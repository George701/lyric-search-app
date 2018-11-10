// lib
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';

// stylesheet
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar/>
          <div className="countainer">
            <Switch>
              <Route exact path="/" component={Index}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;