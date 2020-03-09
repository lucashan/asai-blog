import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About'
import Home from './Home'
import Navbar from './NavBar'
import '../styles/App.css';

function Routes() {
  return (
      <Router>
        <div className="App">
          <Navbar/>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
  );
}

export default Routes;
