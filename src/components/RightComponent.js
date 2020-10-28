import React, { Component } from "react";
import { Flex } from "@chakra-ui/core";

import List from './List.js'
import AddItem from './AddItem.js'

class App extends Component {
    state = {
        display: 'addItem'
    };
    render() {
        return (
            <>
                <AddItem isOpen={this.state.display === 'addItem' ? true : false} />
                <List isOpen={this.state.display === 'list' ? true : false} />
            </>
        )
    }
}

export default App;