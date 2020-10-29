import React, { Component } from "react";

import List from "./List.js";
import AddItem from "./AddItem.js";
import ItemDescription from "./ItemDescription.js";

class App extends Component {
  render() {
    return (
      <>
        <AddItem
          isOpen={this.props.rightComponent === "addItem" ? true : false}
        />
        <List isOpen={this.props.rightComponent === "list" ? true : false} />
        <ItemDescription
          isOpen={this.props.rightComponent === "description" ? true : false}
        />
      </>
    );
  }
}

export default App;
