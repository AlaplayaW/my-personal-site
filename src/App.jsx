import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav'
import About from './About';
import Shop from './Shop';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/shop" component={Shop}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
