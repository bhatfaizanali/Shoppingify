import React, { Component } from 'react';
import { Input, InputGroup, Icon, InputLeftElement, Select } from "@chakra-ui/core";
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

    updatePlaceholder = (itemName) => {
        this.setState({ placeholder: itemName });
    }

    render() {
        const searchedItems = Object.entries(this.props.items.items).filter(item => item[1].name.toLowerCase().indexOf(
            this.state.search.toLowerCase()) !== -1)
        const items = searchedItems.map(item => <option key={item[1].id} value="option1">{item[1].name}</option>)
        return (
            <>
                <InputGroup style={{ margin: "0 5rem" }}>
                    <InputLeftElement children={<Icon name="search" color="black.300" />} />

                    <Input
                        value={this.state.search}
                        onChange={e => this.handleChange("search", e.target.value)}
                        style={{ boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)", border: "0.1rem white", borderTopLeftRadius: "0.5rem", borderBottomLeftRadius: "0.5rem", borderTopRightRadius: "0", borderBottomRightRadius: "0", color: "grey" }}
                        placeholder="Search Items..." />
                    <Select icon="chevron-up" style={{ marginLeft: "0.1rem", boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)", border: "0.1rem white", borderTopRightRadius: "0.5rem", borderBottomRightRadius: "0.5rem", borderTopLeftRadius: "0", borderBottomLeftRadius: "0", color: "grey" }}>{items}</Select>
                </InputGroup>
            </>

        );
    }
}
const mapStateToProps = (state) => {
    return { items: state };
};
export default connect(mapStateToProps)(Search);