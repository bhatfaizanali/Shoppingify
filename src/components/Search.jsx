import React, { Component } from 'react';
import { Input, InputGroup, Icon, InputLeftElement } from "@chakra-ui/core";

class Search extends Component {
    state = {}
    render() {
        return (
            <InputGroup style={{ margin: "0 5rem" }}>
                <InputLeftElement children={<Icon name="search" color="black.300" />} />
                <Input
                    style={{ boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)", border: "0.1rem white", borderRadius: "0.5rem", color: "grey" }}
                    placeholder="Search Items..." />
            </InputGroup>

        );
    }
}

export default Search;