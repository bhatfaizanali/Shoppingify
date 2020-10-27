import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">Hello User!</div>
      </Router>)
  }
}

export default App;
