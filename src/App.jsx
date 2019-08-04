import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Body from './pages/Body';
import DocsRedux from './pages/DocsRedux';
import NavBar from './components/Nav2';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Body}/>
            <Route path="/docsredux" component={DocsRedux}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
