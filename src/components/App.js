import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Items from "./Items";
import Nav from "./Nav";
import RightComponent from "./RightComponent.js";

class App extends Component {
  state = {
    rightComponent: "description",
  };
  render() {
    return (
      <Router>
        <div style={{ display: "flex" }} className="App">
          <Nav />
          <Items />
          <RightComponent rightComponent={this.state.rightComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
