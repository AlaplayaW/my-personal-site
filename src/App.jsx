// import React from 'react';
// import './App.css';

// import Nav from './Nav';
// import About from './About';
// import Shop from './Shop';

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <About />
//       <Shop />
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './Nav'
import About from './About';
import Shop from './Shop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
