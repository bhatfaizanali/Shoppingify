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
  state = {
    renderComponent: "items",
  };
  setComponent = (name) => {
    this.setState({ renderComponent: name });
  };
  render() {
    const component = () => {
      if (this.state.renderComponent === "items") {
        return <Items />;
      } else if (this.state.renderComponent === "history") {
        return <History setComponent={this.setComponent} />;
      } else {
        return <HistoryItemDetails setComponent={this.setComponent} />;
      }
    };
    return (
      <Router>
        <div
          style={{
            display: "flex",
          }}
          className="App"
        >
          <Nav setComponent={this.setComponent} />
          {component()}
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
