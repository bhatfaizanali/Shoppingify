import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Items from "./Items";
import Nav from "./Nav";
import List from "./List.js";
import AddItem from "./AddItem.js";
import ItemDescription from "./ItemDescription.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ display: "flex" }} className="App">
          <Nav />
          <Items />
          <Route path="/" exact component={List} />
          <Route path="/itemDescription/:id" component={ItemDescription} />
          <Route path="/addItem" component={AddItem} />
        </div>
      </Router>
    );
  }
}

export default App;
