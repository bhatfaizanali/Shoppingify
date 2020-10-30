import React, { Component } from 'react';
import { Input, InputGroup, Icon, InputLeftElement, Popover, PopoverBody, PopoverTrigger, PopoverContent, ListItem, List } from "@chakra-ui/core";
import { connect } from "react-redux";

class Search extends Component {
    state = {
        search: "",
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        });
    };

    render() {
        const searchedItems = Object.entries(this.props.items.items).filter(item => item[1].name.toLowerCase().indexOf(
            this.state.search.toLowerCase()) !== -1)
        const items = searchedItems.map(item => {
            return (
                <ListItem style={{ color: "black", cursor: "pointer", fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }} key={item[1].id}>{item[1].name}</ListItem>
            )
        })
        return (
            <>
                <InputGroup style={{ margin: "0 5rem" }}>

                    <InputLeftElement children={<Icon name="search" color="black.300" />} />
                    <Popover>
                        <PopoverTrigger>
                            <Input
                                value={this.state.search}
                                onChange={e => this.handleChange("search", e.target.value)}
                                style={{ paddingLeft: "2rem", boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)", border: "0.1rem white", borderTopLeftRadius: "0.5rem", borderBottomLeftRadius: "0.5rem", borderTopRightRadius: "0", borderBottomRightRadius: "0", color: "grey" }}
                                placeholder="Search Items..." />
                        </PopoverTrigger>
                        <PopoverContent zIndex={4}>
                            <PopoverBody>
                                <List spacing={3}>
                                    {items}
                                </List>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </InputGroup>

            </>

        );
    }
}
const mapStateToProps = (state) => {
    return { items: state };
};
export default connect(mapStateToProps)(Search);