import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Flex } from "@chakra-ui/core";

import RightComponent from './RightComponent.js'

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Flex className='App'>
          <RightComponent />
        </Flex>
      </Router>)
  }
}

export default App;
