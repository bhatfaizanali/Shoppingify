import React, { Component } from 'react';
import { Input, InputGroup, Icon, InputLeftElement } from "@chakra-ui/core";

class Search extends Component {
    state = {}
    render() {
        return (
            <InputGroup>
                <InputLeftElement children={<Icon name="search" color="black.300" />} />
                <Input
                    style={{ boxShadow: "0.01rem 0.01rem 0.1rem 0.1rem #5555", border: "0.1rem white", borderRadius: "0.5rem", color: "grey" }}
                    placeholder="Search Items..." />
            </InputGroup>

        );
    }
}

export default Search;