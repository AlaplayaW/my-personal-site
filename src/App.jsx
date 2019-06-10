import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OnePage from './pages/OnePage';
import About from './pages/About';
import DocsRedux from './pages/DocsRedux';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={OnePage}/>
            {/* <Route path="/about" component={About}/> */}
            <Route path="/docsredux" component={DocsRedux}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
