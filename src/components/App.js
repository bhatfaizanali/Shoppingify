import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Items from "./Items";
import Nav from "./Nav";
import List from "./List.js";
import AddItem from "./AddItem.js";
import ItemDescription from "./ItemDescription.js";
import History from "./History";
import HistoryItemDetails from "./HistoryItemDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div
          style={{
            display: "flex",
          }}
          className="App"
        >
          <Nav />
          {/* <HistoryItemDetails /> */}
          {/* <History /> */}
          <Items />
          {/* <Switch>
            <Route path="/" exact component={Items} />
            <Route path="/histroy" component={History} />
          </Switch> */}
          <Switch>
            <Route path="/" exact component={List} />
            <Route path="/itemDescription/:id" component={ItemDescription} />
            <Route path="/addItem" component={AddItem} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
