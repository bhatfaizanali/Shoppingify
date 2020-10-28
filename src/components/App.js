import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Items from "./Items";
import Nav from "./Nav";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div style={{ display: "flex" }} className="App">
          <Nav />
          <Items />
        </div>
      </Router>
    );
  }
}

export default App;
